import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Image } from 'cloudinary-react';
import { IMG_URL_PREFIX } from '../services/consts/consts';
import {
  ImgMiniImageProfileBlock,
  PictureUnderline,
  ScreenshotsWrapper,
  SwiperCounter,
} from '../stylesheets/index';

// Import Components
import Swiper from './Swiper';

//SASS
import styles from '../stylesheets/imageProfileBlock.module.scss';

class ImageProfileBlock extends Component {

  state = {
    imageUrl: '',
    screenIndex: 0,
    swiperCounter: 1,
  };

  componentDidMount() {
    const { club, game } = this.props;
    if (!!club) this.setState({ imageUrl: IMG_URL_PREFIX + club.screenShot[0] });
    if (!!game) this.setState({ imageUrl: game.screenShot[0] });
  }

  updateUrlImage = imageUrl => {
    this.setState({ imageUrl })
  };

  screenChange = (clubPathPrefix, imgLink, index) => {
    (this.props.screenMode === 'desktop') ?
    this.setState({ imageUrl: clubPathPrefix + imgLink, screenIndex: index }) :
    this.setState({ imageUrl: clubPathPrefix + imgLink, screenIndex: index + 1 })
  }

  handleSwiperCounter = (side) => {
    const { swiperCounter } = this.state;

    (side === 'to right') ?
    this.setState({ swiperCounter: swiperCounter + 1 }) :
    this.setState({ swiperCounter: swiperCounter - 1 })
  }

  render() {
    const { club, game, screenMode } = this.props;
    const { imageUrl, screenIndex, swiperCounter } = this.state;
    let item = game, clubPathPrefix = '';

    if (!!club) {
      item = club;
      clubPathPrefix = IMG_URL_PREFIX;
    }

    const items = item.screenShot.map((imgLink, index) => {
      // if (index <= 4) {
        return <ImgMiniImageProfileBlock
          key={imgLink}
          alt={item.name}
          src={clubPathPrefix + imgLink}
          onClick={() => this.screenChange(clubPathPrefix, imgLink, index)} />
      // };
    });

    return (
      <div>
        {/*<Image cloudName="myvrclub" publicId="sample" width="300" crop="scale"/>*/}
        {(screenMode === 'desktop') &&
          <img className={styles.img}
            src={imageUrl}
            alt={item.name} />}
        <ScreenshotsWrapper className={styles.screenshotsSwitch}>
          <SwiperCounter>
            {swiperCounter}/{items.length}
          </SwiperCounter>
          <Swiper items={items}
            handleSwiperCounter={this.handleSwiperCounter}
            swiperCounter={swiperCounter}/>
          {(screenMode === 'desktop') && <PictureUnderline screenIndex={screenIndex} />}
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