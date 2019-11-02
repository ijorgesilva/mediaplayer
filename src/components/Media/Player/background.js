import React from 'react';
//import PropTypes from 'prop-types';
import ReactJWPlayer from 'react-jw-player';
 
const displayName = 'ReactJWPlayerContainer';
 
class ReactJWPlayerContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      videoTitle: '',
    };
 
    this.onAdPlay = this.onAdPlay.bind(this);
    this.onReady = this.onReady.bind(this);
    this.onVideoLoad = this.onVideoLoad.bind(this);
 
    this.playerId = 'player-id'; // TODO: someFunctionToRandomlyGenerateId();each instance of <ReactJWPlayer> needs a unique id.
    
  }

  onReady(event) {
    // interact with JW Player API here
    const player = window.jwplayer(this.playerId);
  }
  onAdPlay(event) {
    // track the ad play here
  }
  onVideoLoad(event) {
    this.setState({
      videoTitle: event.item.description // this only works with json feeds!
    });
  }
  render() {
    return (
      <div className=''>
                <ReactJWPlayer
                  licenseKey={this.props.player.licenseKey}
                  //playlist={this.props.playlist}

                  file={this.props.player.file}
                  image={this.props.player.image}
                  isMuted={this.props.player.isMuted}
                  isAutoPlay={this.props.player.isAutoPlay}
                  controlbar={this.props.player.controlBar}

                  onAdPlay={this.onAdPlay}
                  onReady={this.onReady}
                  onVideoLoad={this.onVideoLoad}
                  
                  playerId={this.playerId} // bring in the randomly generated playerId
                  playerScript= {this.props.player.playerScript} //'https://content.jwplatform.com/libraries/Jq6HIbgz.js' 
                />

      </div>
    );
  }
}
 
//ReactJWPlayerContainer.propTypes = propTypes;
ReactJWPlayerContainer.displayName = displayName;
export default ReactJWPlayerContainer;