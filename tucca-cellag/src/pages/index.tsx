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
      <header
        data-aos="fade-down"
        data-aos-duration="1000"
        className={clsx("hero", styles.heroBanner)}
      >
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
          <div className="container">
            <Columns>
              <Column className="text--center">
                <div data-aos="fade-right" data-aos-duration="2500">
                  <Card shadow="tl">
                    <CardHeader>
                      <h2>About Cellular Agriculture 🥩</h2>
                    </CardHeader>
                    <CardBody className="text--left">
                      Cellular Agriculture leverages biotechnology to produce
                      agricultural products directly from cells, offering
                      sustainable and ethical alternatives to traditional
                      farming.
                    </CardBody>
                    <CardFooter>
                      <Button
                        className="button--block"
                        label="Learn More"
                        link="https://cellularagriculture.tufts.edu/"
                        variant="primary"
                      />
                    </CardFooter>
                  </Card>
                </div>
              </Column>
              <Column className="text--center">
                <div data-aos="fade-right" data-aos-duration="2000">
                  <Card shadow="tl">
                    <CardHeader>
                      <h2>tucca-rna-seq Workflow 🛠️</h2>
                    </CardHeader>
                    <CardBody className="text--left">
                      Enhance your understanding of bioinformatics with our
                      curated lists of tutorials and workshops.
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
