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
    startPositionSave: 0,
    endPositionSave: 0,
    point: 0,
    transition: true,
    width: 0,
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
  
  // e.targetTouches[0].clientX - значение этой хуйни лежит в рамках экрана

  handleTouchStart = (e) => {
    e.preventDefault();
    this.setState({
      width: e.target.parentNode.offsetWidth,
      transition: false,
      startPosition: e.targetTouches[0].clientX - this.state.position,
      startPositionSave: e.targetTouches[0].clientX,
      point: this.state.position,
    });
  }

  handleTouchMove = (e) => {
    e.preventDefault();
    this.setState({
      position: e.targetTouches[0].clientX - this.state.startPosition
    });
    this.setState({ endPositionSave: e.targetTouches[0].clientX })
  }

  handleTouchEnd = async () => {
    const { startPositionSave, endPositionSave, point, width } = this.state;
    let shift = startPositionSave - endPositionSave;

    this.setState({ transition: true })

    if (shift < -100) {
      this.setState({position: point + width + 5.5})
    } else if (shift > 100) {
      this.setState({position: point - width - 5.5})
    } else {
      this.setState({position: point})
    }
  }

  render() {
    const { club, game, screenMode } = this.props;
    const { transition, position, imageUrl, screenIndex } = this.state;

    let item = game, clubPathPrefix = '';
    if (!!club) {
      item = club;
      clubPathPrefix = IMG_URL_PREFIX;
    }
    const items = item.screenShot.map((imgLink, index) => {
      if (index > 4) return;
      return <ImgMiniImageProfileBlock
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
        <ScreenshotsWrapper className={styles.screenshotsSwitch}
          ref={(el) => this.screenshotsWrapper = el}>
          <ScreenshotsSwiper position={position} transition={transition}

          // я тут
          onTouchStart={(e) => this.handleTouchStart(e)}
          onTouchMove={(e) => this.handleTouchMove(e)}
          onTouchEnd={() => this.handleTouchEnd()}
          
          >
            {items}
          </ScreenshotsSwiper>
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