import React from 'react';
import ReactJWPlayer from 'react-jw-player';

import HeroFeatured from './HeroFeatured';
import MarqueeLiveStream from './MarqueeLiveStream';
import Slider from './Carousel'
import './style.scss';

import {
  heroContent,
  heroVideo,
  latestVideos,
  popularVideos,
} from '../../constants/media.js';

const Media = () => (

    <div>
        <MarqueeLiveStream></MarqueeLiveStream>
        <HeroFeatured data={heroContent} player={heroVideo}></HeroFeatured>
        <Slider>
          {latestVideos.map(video => (
            <Slider.Item 
              video={video} 
              key={video.id}>
              item1
            </Slider.Item>
          ))}
        </Slider>
        
        <Slider>
          {popularVideos.map(video => (
            <Slider.Item video={video} key={video.id}>item1</Slider.Item>
          ))}
        </Slider>
    </div>
);

export default Media;
