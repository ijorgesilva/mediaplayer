import React from 'react';
import ReactJWPlayer from 'react-jw-player';

const displayName = 'JWPlayerFullScreen';
 
class JWPlayerFullScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      videoTitle: '',
    };
 
    this.onAdPlay = this.onAdPlay.bind(this);
    this.onReady = this.onReady.bind(this);
    this.onVideoLoad = this.onVideoLoad.bind(this);
 
    this.playerId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
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
        { console.log('Test') }
                <ReactJWPlayer
                  licenseKey={this.props.video.licenseKey}
                  playlist={this.props.video}

                  isMuted={this.props.playerParams.isMuted}
                  isAutoPlay={this.props.playerParams.isAutoPlay}
                  controlbar={this.props.playerParams.controlBar}

                  onAdPlay={this.onAdPlay}
                  onReady={this.onReady}
                  onVideoLoad={this.onVideoLoad}

                  //aspectRatio={this.props.playerParams.aspectRatio}
                  

                  customProps={{
                    //skin: '',
                    stretching: 'uniform',
                    mute: true,
                  }}
                  
                  playerId={this.playerId} // bring in the randomly generated playerId
                  playerScript= {this.props.playerParams.playerScript} //'https://content.jwplatform.com/libraries/Jq6HIbgz.js' 
                />
      </div>
                  
    );
  }

}
 
//ReactJWPlayerContainer.propTypes = propTypes;
JWPlayerFullScreen.displayName = displayName;
export default JWPlayerFullScreen;