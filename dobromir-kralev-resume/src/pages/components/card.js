import React from 'react';
import PropTypes from "prop-types";

const Card = ({ position, company, timespan, responsibilities, technologies }) => {
    return (
        <div className="card ripple">
            <h3>{position}</h3>
            <p className="occupation">
                <span className="company">{company}</span> |
        <span className="timeSpan">{timespan}</span>
            </p>
            <ul>
                {responsibilities.map((responsibility, index) => {
                   return (
                    <li key={index}>{responsibility}</li>
                    )
                })}
            </ul>
            <div className="technologies">
                <label>Technologies:</label><span>{technologies}</span>
            </div>
        </div>
    )
};

Card.propTypes = {
    position: PropTypes.string,
    company: PropTypes.string,
    timespan: PropTypes.string,
    responsibilities: PropTypes.array,
    technologies: PropTypes.string
};

Card.defaultProps = {
    responsibilities: []
}

export default Card;
