// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import ReactJWPlayer from 'react-jw-player';

// Local Components
import ReactJWPlayerContainer from '../Player/background.js';

const HeroFeatured = ( { data, player } ) => (

  /* Section: Watch Hero */
  <div className="l-section c-watch">

    <div className="l-container h-light">

      <div className="c-watch__content">
        <h1 className="c-watch__title">{data.title}</h1>
        <h2 className="c-watch__subtitle">{data.author}</h2>
        <p>{data.overview}</p>
        <a className="btn" href={data.playButtonURL}>
          <span className="btn__icon">A</span>
          <span className="btn__text">Watch Now</span>
        </a>
      </div>
    
      <div className="c-watch__latest">
        <div className="c-watch__series">
          <h4>Latest message</h4>
          <h5>on the serie: <a href="#">{data.seriesName}</a></h5>
        </div>
        <a href="#">
          <div className="c-watch__poster" style={{backgroundImage: 'url(' + data.seriesPoster + ')' }}></div>
        </a> 
      </div>

    </div>

    <div className="c-watch__overlay"></div>
    
    <div className="c-watch__video">
        <div id="jw-watch__hero">
            <ReactJWPlayerContainer player={player} />
        </div>
    </div>

  </div>
);

export default HeroFeatured;