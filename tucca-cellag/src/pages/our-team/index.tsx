// src/pages/our-team/index.tsx

import React, { useEffect } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";
import cardImageStyles from "@site/src/components/Card/CardImage/CardImage.module.css";
import Button from "@site/src/components/Button";
import Card from "@site/src/components/Card";
import CardHeader from "@site/src/components/Card/CardHeader";
import CardFooter from "@site/src/components/Card/CardFooter";
import CardBody from "@site/src/components/Card/CardBody";
import CardImage from "@site/src/components/Card/CardImage";
import Column from "@site/src/components/Column";
import Columns from "@site/src/components/Columns";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import AOS from "aos";
import "aos/dist/aos.css";

// Import MUI components and icons
import { IconButton } from "@mui/material";
import { FaEnvelope, FaOrcid, FaGithub, FaLinkedin } from "react-icons/fa";

const OurTeam: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="tucca-rna-seq Workflow documentation for Cellular Agriculture
      Bioinformatics"
    >
      <header className="box" style={{ padding: "1rem 0" }}></header>

      <div className="container" style={{ marginBottom: "30px" }}>
        <Columns>
          <Column className="text--center">
            <div data-aos="fade-right" data-aos-duration="2500">
              <Card shadow="tl">
                <CardHeader>
                  <h2>David Kaplan</h2>
                </CardHeader>
                <CardImage
                  cardImageUrl="/img/dkaplan.png"
                  alt="David Kaplan"
                  title="David Kaplan"
                  className={cardImageStyles.ourTeamCardImage}
                />
                <CardBody className="text--left">
                  David Kaplan is the Stern Family Endowed Professor of
                  Engineering at Tufts University, a Distinguished University
                  Professor, and Professor and Chair of the Department of
                  Biomedical Engineering. His research focus is on biopolymer
                  engineering, tissue engineering, regenerative medicine and
                  cellular agriculture. He has published over 1,000 peer
                  reviewed papers, he is editor-in-chief of ACS Biomaterials
                  Science and Engineering and he serves on many editorial boards
                  and programs for journals and universities. He has received
                  awards for his research and teaching and is an elected Fellow
                  of the American Institute of Medical and Biological
                  Engineering and the National Academy of Engineering.
                </CardBody>
                <CardFooter>
                  <div className="button-group">
                    <Button
                      label="More about David"
                      link="https://sites.tufts.edu/kaplanlab/about-david/"
                      variant="primary"
                    />
                    <IconButton
                      component="a"
                      href="mailto:david.kaplan@tufts.edu"
                      aria-label="Email"
                      sx={{
                        color: "var(--ifm-color-primary)",
                        "&:hover": {
                          color: "var(--ifm-color-primary-light)",
                        },
                      }}
                    >
                      <FaEnvelope />
                    </IconButton>
                    <IconButton
                      component="a"
                      href="https://orcid.org/0000-0002-9245-7774"
                      aria-label="ORCID"
                      sx={{
                        color: "var(--ifm-color-primary)",
                        "&:hover": {
                          color: "var(--ifm-color-primary-light)",
                        },
                      }}
                    >
                      <FaOrcid />
                    </IconButton>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </Column>
          <Column className="text--center">
            <div data-aos="fade-right">
              <Card shadow="tl">
                <CardHeader>
                  <h2>Benji Bromberg</h2>
                </CardHeader>
                <CardImage
                  cardImageUrl="/img/bbromberg.png"
                  alt="Benji Bromberg"
                  title="Benji Bromberg"
                  className={cardImageStyles.ourTeamCardImage}
                />
                <CardBody className="text--left">
                  Benji Bromberg is a Research Technician at TUCCA, where he has
                  been working since 2022. Alongside his TUCCA duties, he is a
                  part-time Master's student in Computer Science at Tufts
                  University. Benji's research at TUCCA is concentrated on the
                  development of new cell lines and the bioinformatics analysis
                  of cell ag cell lines. He is skilled in bioinformatics, RNA
                  sequencing, stem cell research, and cell line development.
                  Benji earned his B.A. in Biochemistry and Molecular Biology
                  from Lewis & Clark College in 2022. Originally from Brookline,
                  MA, he enjoys a range of sports, including soccer, climbing,
                  and tennis. He also likes hiking, playing board games, and
                  reading fantasy and sci-fi.
                </CardBody>
                <CardFooter>
                  <div className="button-group">
                    <IconButton
                      component="a"
                      href="mailto:benjamin.bromberg@tufts.edu"
                      aria-label="Email"
                      sx={{
                        color: "var(--ifm-color-primary)",
                        "&:hover": {
                          color: "var(--ifm-color-primary-light)",
                        },
                      }}
                    >
                      <FaEnvelope />
                    </IconButton>
                    <IconButton
                      component="a"
                      href="https://orcid.org/0009-0001-3166-6329"
                      aria-label="ORCID"
                      sx={{
                        color: "var(--ifm-color-primary)",
                        "&:hover": {
                          color: "var(--ifm-color-primary-light)",
                        },
                      }}
                    >
                      <FaOrcid />
                    </IconButton>
                    <IconButton
                      component="a"
                      href="https://github.com/benjibromberg"
                      aria-label="GitHub"
                      sx={{
                        color: "var(--ifm-color-primary)",
                        "&:hover": {
                          color: "var(--ifm-color-primary-light)",
                        },
                      }}
                    >
                      <FaGithub />
                    </IconButton>
                    <IconButton
                      component="a"
                      href="https://www.linkedin.com/in/benjamin-bromberg-a636891b1/"
                      aria-label="LinkdeIn"
                      sx={{
                        color: "var(--ifm-color-primary)",
                        "&:hover": {
                          color: "var(--ifm-color-primary-light)",
                        },
                      }}
                    >
                      <FaLinkedin />
                    </IconButton>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </Column>
        </Columns>
      </div>
    </Layout>
  );
};

export default OurTeam;
