import React, { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../css/custom.scss';

const twoSidesInfo = [
  {
    key: 1,
    title: "Software Engineer",
    siteLink: '',
    imageUrl: 'img/front_page_software_engineer.png',
    description: 'Continue to CV',
    linkUrl: '/cv/'
  }, {
    key: 2,
    title: "Musician",
    siteLink: '',
    imageUrl: 'img/front_page_musician.jpg',
    description: 'View my Work',
    linkUrl: '/musician/'
  }

];


function MainImageCard({ imageUrl, title, description, linkUrl }) {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      className={!hovered?
        'imageThumb':
        'imageThumb hovered'
    }>
      <img src={imgUrl} alt={title} />
      <div className="additionalInfoCard">
        <h2>{title}</h2>
        <Link
          className="button button--outline button--primary button--lg"
          to={useBaseUrl(linkUrl)}>{description}</Link>
      </div>
    </div>
  );
}

function TwoSidesOfCharacter({ info }) {
  return (
    <div>
      {(info && info.length > 0 && (
        <section>
          <div className="container">
            <div className="imageRow">
              {info.map((props, key) => (
                <MainImageCard {...props} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = { context } } = context;

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.description}>
      <header className='hero'>
        <div className="headerContainer">
          <h1 className="hero__title name">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          {/* <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div> */}
        </div>
      </header>
      <main>
        <TwoSidesOfCharacter info={twoSidesInfo}></TwoSidesOfCharacter>
        {/* {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )} */}
      </main>
    </Layout>
  );
}

export default Home;
