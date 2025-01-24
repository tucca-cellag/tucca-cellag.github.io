// src/pages/index.tsx

import React, { useEffect } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";
import Banner from "@site/src/components/Banner";
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

const Home: React.FC = () => {
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
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          <Card
            shadow="tl"
            style={{ marginBottom: "20px", backgroundColor: "#ffffff" }}
          >
            <CardImage
              cardImageUrl="/img/Center for Cellular Agriculture_blk+bl_horiz.png"
              alt="Tufts University Center for cellular Agriculture"
              title="Tufts University Center for cellular Agriculture"
            />
          </Card>
          <h1 className="hero__title">
            Welcome to the TUCCA Bioinformatics Docs 🥩
          </h1>
          <p className="hero__subtitle">
            Advancing sustainable cellular agriculture through cutting-edge
            bioinformatics and data-driven insights.
          </p>
        </div>
      </header>

      <main>
        {/* Coming Soon Banner */}
        <section className={clsx("section", styles.comingSoon)}>
          <div className="container">
            <div className="alert alert--warning">
              <strong>🚧 Coming Soon! 🚧</strong>
              <p>
                Our website is currently under construction and will be
                launching soon. Stay tuned! In the meantime, feel free to{" "}
                <a href="mailto:benjamin.bromberg@tufts.edu">contact us</a> with
                any questions. Thank you for your patience.
              </p>
            </div>
          </div>
        </section>

        <section
          className={clsx("section section--primary", styles.cardSection)}
        >
          <div className="container text--center">
            <h1> About Us </h1>
            <Columns>
              <Column className="text--left">
                <h2> What is TUCCA? </h2>
                <p style={{ marginBottom: "20px" }}>
                  The{" "}
                  <strong>
                    Tufts University Center for Cellular Agriculture (TUCCA)
                  </strong>{" "}
                  is dedicated to advancing cellular agriculture research and
                  fostering industry growth. Collaborating with academic,
                  industry, and regulatory partners, TUCCA focuses on innovative
                  research in areas such as cell sourcing, media development,
                  scaffolding, modeling, and scale-up processes. Our goal is to
                  provide a strong scientific foundation, promote workforce
                  development, and ensure the sustainability and safety of
                  cell-based foods. Through peer-reviewed publications and
                  interdisciplinary efforts, we aim to drive technological
                  innovation and set quality standards within the field.
                </p>
                <div className="btn-group">
                  <Button
                    label="Learn More"
                    link="https://cellularagriculture.tufts.edu/"
                    variant="primary"
                  />
                </div>
              </Column>
              <Column className="text--center">
                <div data-aos="fade-right" data-aos-duration="2500">
                  <Card shadow="tl">
                    <CardHeader>
                      <h2>About Cellular Agriculture 🥩</h2>
                    </CardHeader>
                    <CardBody className="text--left">
                      Cellular Agriculture utilizes cutting-edge biotechnology
                      to cultivate agricultural products directly from cells
                      instead of relying on traditional farming methods. This
                      innovative approach focuses on growing meat, dairy, and
                      other animal-based products in a lab environment,
                      significantly reducing the environmental impact and
                      ethical concerns associated with conventional agriculture.
                      As a rapidly evolving field, cellular agriculture holds
                      the promise of revolutionizing how we produce food, paving
                      the way for a more sustainable and humane future.
                    </CardBody>
                    <CardFooter>
                      <Button
                        className="button--block"
                        label="Check Out Our Research"
                        link="https://cellularagriculture.tufts.edu/research"
                        variant="primary"
                      />
                    </CardFooter>
                  </Card>
                </div>
              </Column>
            </Columns>
          </div>
        </section>

        <section
          className={clsx("section section--primary", styles.cardSection)}
        >
          <div className="container text--center">
            <h1> Our Work </h1>
            <Columns>
              <Column className="text--center">
                <div data-aos="fade-right" data-aos-duration="2000">
                  <Card shadow="tl">
                    <CardHeader>
                      <h2>tucca-rna-seq Workflow 🛠️</h2>
                    </CardHeader>
                    <CardBody className="text--left">
                      Discover our lightning-fast, automated RNA-Seq workflow
                      tailored for cellular agriculture bioinformatics. Empower
                      your research with user-friendly tools that ensure
                      accurate, reproducible, and scalable data analysis.
                    </CardBody>
                    <CardFooter>
                      <Button
                        className="button--block"
                        label="Start Using tucca-rna-seq"
                        link="/tucca-rna-seq/introduction"
                        variant="primary"
                      />
                    </CardFooter>
                  </Card>
                </div>
              </Column>
              <Column className="text--center">
                <div data-aos="fade-right" data-aos-duration="1500">
                  <Card shadow="tl">
                    <CardHeader>
                      <h2>Learning Resources 🌱</h2>
                    </CardHeader>
                    <CardBody className="text--left">
                      Enhance your understanding with our curated tutorials and
                      workshops.
                    </CardBody>
                    <CardFooter>
                      <Button
                        className="button--block"
                        label="Find Resources"
                        link="/category/background-learning"
                        variant="primary"
                      />
                    </CardFooter>
                  </Card>
                </div>
              </Column>
              <Column className="text--center">
                <div data-aos="fade-right">
                  <Card shadow="tl">
                    <CardHeader>
                      <h2>Publications 📝</h2>
                    </CardHeader>
                    <CardBody>🚧 Coming Soon! 🚧</CardBody>
                    <CardFooter>
                      <Button
                        className="button--block"
                        label="Explore Publications"
                        link="https://cellularagriculture.tufts.edu/"
                        variant="primary"
                        disabled
                      />
                    </CardFooter>
                  </Card>
                </div>
              </Column>
            </Columns>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
