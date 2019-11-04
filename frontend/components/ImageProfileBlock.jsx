import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Image } from 'cloudinary-react';
import { IMG_URL_PREFIX } from '../services/consts/consts';
import {
  ImgMiniImageProfileBlock,
  PictureUnderline,
  ScreenshotsWrapper,
  ScreenshotsSwiper,
} from '../stylesheets/index';

//SASS
import styles from '../stylesheets/imageProfileBlock.module.scss';

class ImageProfileBlock extends Component {

  state = {
    imageUrl: '',
    screenIndex: 0,
    startPosition: 0,
    position: 0,
    startPositionCheck: 0,
    check: false,
  };

  componentDidMount() {
    const { club, game } = this.props;
    if (!!club) this.setState({ imageUrl: IMG_URL_PREFIX + club.screenShot[0] });
    if (!!game) this.setState({ imageUrl: game.screenShot[0] });
    this.setState({ screenWrapperWidth: this.screenshotsWrapper.clientWidth });
  }

  updateUrlImage = imageUrl => {
    this.setState({ imageUrl })
  };

  screenChange = (clubPathPrefix, imgLink, index) => {
    (this.props.screenMode === 'desktop') ?
    this.setState({ imageUrl: clubPathPrefix + imgLink, screenIndex: index }) :
    this.setState({ imageUrl: clubPathPrefix + imgLink, screenIndex: index + 1 })
  }

  swipe = (index) => {
    this.setState({ screenIndex: index })
  }

  handleTouchStart = (e) => {
    e.preventDefault();
    this.setState({check: true});
    console.log('START POSITION: ', e.targetTouches[0].clientX);
    this.setState({startPosition: e.targetTouches[0].clientX});
    this.setState({startPositionCheck: e.targetTouches[0].clientX});
  }

  handleTouchMove = (e) => {
    e.preventDefault();
    console.log('CURRENT POSITION: ', e.targetTouches[0].clientX);
    // this.setState({startPosition: e.targetTouches[0].clientX});
    this.setState({position: e.targetTouches[0].clientX - this.state.startPosition})
  }

  handleTouchEnd = async () => {
    console.log(this.state.position)
    // if (this.state.position - this.state.startPositionCheck < 50) {
    //   console.log(this.state.position, 'POSITION')
    //   await this.setState({position: 0})
    //   console.log(this.state.position, 'POSITION2')
    // } else if (this.state.position - this.state.startPositionCheck < 50) {
    //   this.setState({position: this.state.startPositionCheck - 300})
    // } else {
    //   this.setState({position: this.state.startPositionCheck})
    // }
    this.setState({position: 0});
    this.setState({check: false});
  }

  render() {
    const { club, game } = this.props;

    let item = game, clubPathPrefix = '';
    if (!!club) {
      item = club;
      clubPathPrefix = IMG_URL_PREFIX;
    }
    const items = item.screenShot.map((imgLink, index) => {
      if (index > 4) return;
      return <ImgMiniImageProfileBlock key={imgLink}
        alt={item.name}
        src={clubPathPrefix + imgLink}
        onClick={() => this.screenChange(clubPathPrefix, imgLink, index)} />
    });
    return (
      <div>
        {/*<Image cloudName="myvrclub" publicId="sample" width="300" crop="scale"/>*/}
        {(this.props.screenMode === 'desktop') &&
          <img className={styles.img}
            src={this.state.imageUrl}
            alt={item.name} />}
        <ScreenshotsWrapper className={styles.screenshotsSwitch}
          ref={(el) => this.screenshotsWrapper = el}>
          <ScreenshotsSwiper position={this.state.position} check={this.state.check}

          // я тут
          onTouchStart={(e) => this.handleTouchStart(e)}
          onTouchMove={(e) => this.handleTouchMove(e)}
          onTouchEnd={() => this.handleTouchEnd()}
          
          >
            {items}
          </ScreenshotsSwiper>
          {(this.props.screenMode === 'desktop') && <PictureUnderline screenIndex={this.state.screenIndex} />}
        </ScreenshotsWrapper>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    screenMode: store.screenMode,
  };
};

export default connect(mapStateToProps)(ImageProfileBlock);