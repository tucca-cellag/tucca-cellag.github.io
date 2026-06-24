---
name: tucca-pr-wrapup
description: Use when a finished, reviewed, locally-green feature branch on the TUCCA hub site (tucca-cellag.github.io) is ready to ship — push it, open a PR to main, merge (after confirming), watch the GitHub Pages deploy to green, verify the live site, and clean up the worktree/branch. Invoke whenever the user says to ship / wrap up / finish / "open a PR and merge" / "merge and deploy" a branch, asks to watch the deploy, or asks to clean up a worktree after merge — even if they don't name the skill. The TUCCA-site realization of the "Finish & Ship" stage.
---

# TUCCA site PR wrap-up

## Overview

This is the **Ship stage** for the TUCCA hub site: it takes a feature branch whose work is done,
committed, and locally green, and lands it on `main` and the live site — push → PR → (optional)
cross-model review → merge → GitHub Pages deploy → verify → clean up. The site deploys only on
push to `main` (via `.github/workflows/deploy.yml`), so "shipped" means *merged **and** the deploy
is green*, not just merged.

This repo is deliberately simple, and this skill is the trimmed sibling of CAAIL's `caail-pr-wrapup`
(see `caail/.claude/skills/`). The differences that matter:

- **No `pull_request` checks at all.** `deploy.yml` is the only workflow, and it runs on push to
  `main` + `workflow_dispatch`. A PR therefore legitimately has **zero checks**.
- **No Lighthouse gate.** The deploy is just build + upload + Deploy to Pages.
- **No test suite.** The local gate is the production build, `pnpm --dir site build`.
- **The site is the org Pages root** (`https://tucca-cellag.github.io/`, no `/caail/` subpath).
- **`deploy.yml` has a `paths-ignore` guard**, so a `.claude/**`-, `.github/**`-, or root-`*.md`-only
  push does **not** deploy.

The brittle, repeatable machinery lives in **`ship-pr.sh`** (in this skill's directory): pushing,
opening the PR, merging with the worktree gotcha handled, finding + watching the deploy run, and
curling the live routes. This manual keeps the judgment with you: re-running the local gate,
composing the PR body, the optional cross-model pass, **pausing to confirm before the merge** (it
triggers a public deploy), and the worktree cleanup itself.

Run the helper from the repo (worktree) root: `bash .claude/skills/tucca-pr-wrapup/ship-pr.sh <sub>`.

This is a **skill, not an agent**, on purpose: it *acts* (push/merge/deploy), and the cleanup uses
`ExitWorktree`, which only works in the main session — a subagent can't switch the parent session's
directory. Run the phases below in order, in the main session, pausing where noted.

## Preconditions (stop if any fail)

- **On a feature branch, never `main`.** Ideally a worktree created by `EnterWorktree` this session.
- **Working tree clean.** Commit or stash first.
- **The local gate is green.** Re-verify it now — don't ship on faith. With Node 22
  (`source ~/.nvm/nvm.sh && nvm use 22`; the system default may be older and the dev/build commands
  hard-fail on Node < 22.12): `pnpm --dir site build`. A red build means the branch isn't ready;
  fix it before shipping.
- **`gh` is authenticated** (`gh auth status`).

## Procedure

### 0. Pre-flight
```bash
bash .claude/skills/tucca-pr-wrapup/ship-pr.sh preflight
```
Confirms branch/tree/auth, lists the changed paths, and — from the real `paths-ignore` filter —
predicts **whether `deploy.yml` will deploy on merge** plus the routes worth verifying live. Read
its output: it tells you what to expect in steps 6–7. Then re-run the local build gate (above) if
you haven't this session.

### 1. Push
```bash
bash .claude/skills/tucca-pr-wrapup/ship-pr.sh push
```

### 2. Open the PR
Compose the title and body yourself, then write the body to a temp file and open the PR:
```bash
bash .claude/skills/tucca-pr-wrapup/ship-pr.sh open-pr "<title>" /tmp/pr-body.md
```
- **Title:** Conventional Commits, Angular flavor — `<type>(<scope>): <subject>`. Common scopes
  here: `site`, `docs`, `chore`, `fix`. Reuse the lead commit's subject when it already fits.
- **Body:** what changed and *why*; the page(s)/route(s) it touches; and the verification you
  already ran (build, manual review). **No AI attribution** — commits and PRs on this repo never
  carry "Co-Authored-By: Claude" or "Generated with" lines.

### 3. Cross-model adversarial review (optional)
For a non-trivial **code** or layout change, get an independent second opinion before merging:
dispatch the user's **Cross-Model Adversarial Reviewer** agent (or the `cross-model-review` skill)
on this PR's diff (`gh pr diff <pr>` / `git diff origin/main...HEAD`). It runs a non-Claude model
read-only, verifies every finding against the source, and returns a net recommendation. Feed that
into the Step 5 merge decision: confirmed correctness issues → fix first, don't merge over them.

This is **optional and skippable** — for docs-/prose-/config-/`.claude`-only diffs it adds little;
skip it with a one-line reason. Never hard-block a ship on an unavailable optional reviewer.

### 4. Watch the checks
```bash
bash .claude/skills/tucca-pr-wrapup/ship-pr.sh watch-checks <pr>
```
This repo has no `pull_request` workflows, so the expected result is **"no checks reported —
proceeding"**. The helper still blocks on checks if any are ever added. If a check exists and
**fails**, stop — surface it and fix the branch; do not merge red.

### 5. Confirm, then merge
**Pause here.** Merging triggers the public deploy, so confirm with the user before proceeding
(unless they've already said to merge autonomously this run). If you ran Step 3, make sure it left
no unresolved confirmed issues. Then:
```bash
bash .claude/skills/tucca-pr-wrapup/ship-pr.sh merge <pr>
```
This merges with a merge commit, deletes the remote branch, tolerates the benign "main already
checked out" gotcha (see below), verifies the PR is actually `MERGED`, and prints the **merge
commit SHA** you need for step 6.

### 6. Watch the deploy
```bash
bash .claude/skills/tucca-pr-wrapup/ship-pr.sh watch-deploy <merge-sha>
```
Finds the `deploy.yml` run for that SHA and blocks until it finishes. Green = build + Deploy to
Pages passed — *that* is a successful ship. If preflight predicted no deploy (the diff touched only
`paths-ignore`'d files), the helper says so and returns cleanly. There is **no Lighthouse gate**
on this repo, so a green run is the whole story.

### 7. Verify live
```bash
bash .claude/skills/tucca-pr-wrapup/ship-pr.sh verify-live <route> [<route> ...]   # '' = homepage
```
Use the routes preflight suggested. Beyond the 200 check the helper does, add a content assertion
for what you changed — e.g. `curl -s https://tucca-cellag.github.io/<route>/ | grep` for a new
heading or the corrected text — so you confirm the *content* shipped, not just that the page exists.

### 8. Clean up
- **Fast-forward local `main`** so the primary checkout matches the deploy:
  `git fetch origin main && git merge --ff-only origin/main` (run it in the primary checkout; you
  can't fast-forward `main` while a worktree holds another branch). Note: when you merge from a
  checkout that has the feature branch checked out, `gh pr merge` may already have fast-forwarded
  local `main` for you.
- **This session's managed worktree** (made by `EnterWorktree`): call `ExitWorktree` with
  `action: "remove"` and `discard_changes: true` — safe because the commits are now on `origin/main`.
- **A plain branch** (no worktree): `git branch -d <branch>` (use `-D` if it was squashed so the SHA
  differs). gh's `--delete-branch` often removes the local branch already.
- **A stale/superseded worktree someone made by hand:** **confirm with the user first**, then
  `git worktree remove <path>` and `git branch -D <branch>`.
- **Stop any background preview server** still holding `:4321` — but check the PID first
  (`ps -o command -p <pid>`); a VS Code helper process can match that port and must not be killed.

## CI: what runs when

Derived from `.github/workflows/`. There is only one workflow:

| Workflow | Trigger | Paths |
| --- | --- | --- |
| `deploy.yml` (build + Deploy to Pages) | **push to `main`** + `workflow_dispatch` | all of `site/**` (and anything not in `paths-ignore`) |

`paths-ignore`: `.claude/**`, `.github/**`, root `*.md`, `.gitignore`, `.dcignore`. Consequence: a
PR that touches only those paths has **no PR checks** (none exist) and its merge **does not deploy**.
To force a deploy after editing the workflow itself, use **Run workflow** (`workflow_dispatch`).

## Gotchas

| Symptom / situation | What it means / do |
| --- | --- |
| `gh pr merge` errors `fatal: 'main' is already checked out at …` | **Benign.** gh's post-merge *local* branch step fails because the primary checkout holds `main`; the **remote merge already succeeded**. The helper verifies `state==MERGED` and API-deletes the remote branch. Trust `MERGED`, not gh's exit code. |
| `watch-deploy` reports "no run found" | Expected when the merge touched only `paths-ignore`'d files (docs/skill/workflow-only). Not an error. If you *did* change `site/**` and still see no run, check that the merge landed on `main`. |
| Any site command (build/dev/preview) fails on Node version | Needs **Node ≥ 22.12** (`site/.nvmrc` = 22): `source ~/.nvm/nvm.sh && nvm use 22` first; the system default may be older. |
| `:4321` looks occupied | An `astro dev`/preview may be holding it — but a **VS Code network helper** can also match that port. Check `ps -o command -p <pid>` before killing anything. |
| PR body / commit | **No AI attribution** anywhere in this repo's git history. |

## `ship-pr.sh` reference

| Subcommand | Effect | Mutates? |
| --- | --- | --- |
| `preflight` | branch/tree/auth checks + deploy prediction + route hints | no |
| `push` | `git push -u origin <branch>` | yes |
| `open-pr <title> <body-file>` | `gh pr create --base main`; prints PR url | yes |
| `watch-checks <pr>` | blocks on checks; 0 if none/clean, non-zero on failure | no |
| `merge <pr>` | merge + delete remote branch (gotcha-handled); prints merge SHA | yes |
| `watch-deploy <merge-sha>` | finds + watches the `deploy.yml` run; 0 if no deploy fires | no |
| `verify-live <route>...` | curls each live route; non-zero if any ≠ 200 | no |
