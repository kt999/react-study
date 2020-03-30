import React from 'react';
import PropTypes from 'prop-types';
import App from "./App";

function Movie({id,title,summary,imgUrl,rating,runningTime}) {
    return (
        <div>
            <div>{title}</div>
            <div>{summary}</div>
            <img src={imgUrl} alt={title}/>
            <div>{rating}</div>
            <div>{runningTime}</div>
        </div>
    );
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    imgUrl : PropTypes.string.isRequired,
    rating : PropTypes.number.isRequired,
    runningTime : PropTypes.number.isRequired
}

export default Movie;