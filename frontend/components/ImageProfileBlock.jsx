import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Image } from 'cloudinary-react';
import { IMG_URL_PREFIX } from '../services/consts/consts';
import {
  ImgMiniImageProfileBlock,
  PictureUnderline,
  ImgMiniImageProfileBlockWrapper,
  ScreenshotsWrapper,
} from '../stylesheets/index';

// Import Components
import Swiper from './Swiper';
import Carousel from './Carousel';

//SASS
import styles from '../stylesheets/imageProfileBlock.module.scss';

class ImageProfileBlock extends Component {

  state = {
    imageUrl: '',
    screenIndex: 0,
  };

  componentDidMount() {
    const { club, game } = this.props;
    if (!!club) this.setState({ imageUrl: IMG_URL_PREFIX + club.screenShot[0] });
    if (!!game) this.setState({ imageUrl: game.screenShot[0] });
    this.forceUpdate()
  }

  componentDidUpdate = () => {
    console.log('window.innerWidth', window.innerWidth)
  }

  updateUrlImage = imageUrl => {
    this.setState({ imageUrl })
  };

  screenChange = (clubPathPrefix, imgLink, index) => {
    (this.props.screenMode === 'desktop') ?
      this.setState({ imageUrl: clubPathPrefix + imgLink, screenIndex: index }) :
      this.setState({ imageUrl: clubPathPrefix + imgLink, screenIndex: index + 1 })
  }

  render() {
    const { club, game, screenMode } = this.props;
    const { imageUrl, screenIndex } = this.state;
    let item = game, clubPathPrefix = '';

    if (!!club) {
      item = club;
      clubPathPrefix = IMG_URL_PREFIX;
    }

    const itemsForCarousel = item.screenShot.map((imgLink, index) => {
      return <ImgMiniImageProfileBlockWrapper>
        <ImgMiniImageProfileBlock
          key={imgLink}
          alt={item.name}
          src={clubPathPrefix + imgLink}
          onClick={() => this.screenChange(clubPathPrefix, imgLink, index)} />
      </ImgMiniImageProfileBlockWrapper>
    });

    const itemsForSwiper = item.screenShot.map((imgLink, index) => {
      return <ImgMiniImageProfileBlock
          key={imgLink}
          alt={item.name}
          src={clubPathPrefix + imgLink}
          onClick={() => this.screenChange(clubPathPrefix, imgLink, index)} />
    });

    return (
      <div>
        {/*<Image cloudName="myvrclub" publicId="sample" width="300" crop="scale"/>*/}
        {(screenMode === 'desktop') &&
          <img className={styles.img}
            src={imageUrl}
            alt={item.name} />}
          <ScreenshotsWrapper>
            <Carousel items={itemsForCarousel} spaceBetweenItems={7.5} buttonSize={30} />
          </ScreenshotsWrapper>
          <Swiper items={itemsForSwiper} />
        {/* {(screenMode === 'desktop') && <PictureUnderline screenIndex={screenIndex} />} */}
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