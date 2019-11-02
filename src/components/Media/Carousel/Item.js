import React from 'react';
import cx from 'classnames';
import SliderContext from './context';
import ShowDetailsButton from './ShowDetailsButton';
import Modal from '../Modal';

import JWPlayerFullScreen from '../Player/JWPlayerFullScreen.js';

import {
  playerParams,
} from '../../../constants/media.js';


const Item = ( {video} ) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === video.id;

      return (
        <div
          ref={elementRef}
          className={cx('item', {
            'item--open': isActive,
          })}
        >
          <div className="c-media__item">
            <Modal modalProps={video} modalContent={<JWPlayerFullScreen video={video} playerParams={playerParams}/>}>
            </Modal>
            <img src={video.image} alt="" />
          </div>

          <ShowDetailsButton onClick={() => onSelectSlide(video)} />
          {isActive}
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
