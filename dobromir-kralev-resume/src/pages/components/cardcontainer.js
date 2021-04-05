import React from 'react';
import Card from './card';


const CardContainer = () => {
    const cardObjects = [{
        position: 'Senior Software Engineer',
        company: 'Epam Systems',
        timespan: 'Jan 2020- Jan 2021',
        responsibilities: [
            'Develops Front- End Architectural Prototypes',
            'Integrates Front-End Architectural Prototypes into existing Logistics products',
            'Creates Documentation Static sites to existing products'
        ],
        technologies: 'Angular 6+, React'
    }, {
        position: 'Fullstack Software Engineer',
        company: 'iBoris',
        timespan: 'Aug 2018 - Dec 2019',
        responsibilities: [
            'Participated in Tailored Product development on both fronts - Back-End and Front-End',
            'Gives UI / UX expretise for enhancing the over- all user experience in the developed Product',
        ],
        technologies: '.NET Framework, Microsoft SQL, KendoUI'
    }, {
        position: 'Front-End Engineer',
        company: 'TitanGate',
        timespan: 'May 2018- July 2018',
        responsibilities: [
            'User Interface development'
        ],
        technologies: 'JavaScript, HTML, CSS'
    }, {
        position: 'Front-End Engineer',
        company: 'Xoomworks',
        timespan: 'Sep 2015 - Feb 2016',
        responsibilities: [
            'Works on an existing legacy system',
            'Works up close with a small team for giving an overhaul(improvements both on Back-End and Front-End architecture) of the legacy system'
        ],
        technologies: 'JAVA, PrimeFaces'
    }, {
        position: 'Junior Back-End Engineer',
        company: 'Auxionize',
        timespan: 'Jan 2015 - Jun 2015',
        responsibilities: [
            'Working as a Back-End Developer with MEAN stack technologies'
        ],
        technologies: 'MongoDB, Express.js, AngularJS, NodeJS'
    }, {
        position: 'Junior Front-End Engineer',
        company: 'Up2Technologies',
        timespan: 'Sep 2013 - Jan 2015',
        responsibilities: [
            'Works on a tailored Product GIS system',
            'Develops Small-scaled sites and systems for clients',
            'Develops small prototypes of Web - technology - based phone applications'
        ],
        technologies: 'JQuery, PhoneGap, .NET Framework, NodeJS'
    }];

    return (
        <div className="cardContainer">
            {cardObjects.map((work, index) => {
                return (
                    <Card
                        position={work.position}
                        company={work.company}
                        timespan={work.timespan}
                        responsibilities={work.responsibilities}
                        technologies={work.technologies}
                        key={index}/>
                );
            })}
        </div>
    );
};

export default CardContainer;
