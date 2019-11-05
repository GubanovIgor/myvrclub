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
  
  // e.targetTouches[0].clientX - значение этой хуйни лежит в рамках экрана

  handleTouchStart = (e) => {
    e.preventDefault();
    this.setState({
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

  handleTouchEnd = async (e) => {
    this.setState({ transition: true })
    let shift = this.state.startPositionSave - this.state.endPositionSave;

    if (shift < -100) {
      this.setState({position: this.state.position + 200})
    } else if (shift > 100) {
      this.setState({position: this.state.position - 200})
    } else {
      this.setState({position: this.state.point})
    }
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
          <ScreenshotsSwiper position={this.state.position} transition={this.state.transition}

          // я тут
          onTouchStart={(e) => this.handleTouchStart(e)}
          onTouchMove={(e) => this.handleTouchMove(e)}
          onTouchEnd={(e) => this.handleTouchEnd(e)}
          
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