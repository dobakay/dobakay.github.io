import React, {useState}  from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../../css/custom.scss';
import CardContainer from '../components/cardcontainer';

const WorkingHistory = () => {
  return (
    <div>
      <div className="positionTitleContainer">
        <h1 className="hero__title">Working History</h1>
      </div>
      {<CardContainer/>}
    </div>
  );
}

const CV = () => {
    const context = useDocusaurusContext();
    const { siteConfig = { context } } = context;

    return (
        <Layout
            title={siteConfig.title}
            description={siteConfig.description}>
            <header className='hero'>
                <div className="headerContainer">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                </div>
            </header>
            <main>
              <div className="downloadButtonContainer">
            <a className="button button--outline button--primary button--lg" href="https://dobakay.github.io/Dobromir_Kralev_CV.pdf" target="_blank" download="Dobromi_Kralev_CV.pdf">Download in PDF</a>
              </div>
              <WorkingHistory />
              <div className="downloadButtonContainer">
            <a className="button button--outline button--primary button--lg" href="https://dobakay.github.io/Dobromir_Kralev_CV.pdf" target="_blank" download="Dobromi_Kralev_CV.pdf">Download in PDF</a>
              </div>
            </main>
        </Layout>
    );
}

export default CV;
