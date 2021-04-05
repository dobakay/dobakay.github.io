import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import YoutubeEmbed from '../components/youtubeCard';

const videoIdsList = [
    {
        info: 'No Diggity',
        vidId: 'pPJAvDVfcms'
    },
    {
        info: 'The Queen',
        vidId: 'ZgLBuB-R0lY'
    },
    {
        info: 'Isolation Mix',
        vidId: '-CdTBw7BFDw'
    }
];

const Musician = () => {
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
                {videoIdsList.map((vidInfo, index) => {
                    return (<YoutubeEmbed
                        embedId={vidInfo.vidId}
                        key={index}/>)
                })}
            </main>
        </Layout>
    );
}

export default Musician;
