import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'cloudinary-react';
import uuidv1 from 'uuid/v1'
import { IMG_URL_PREFIX } from '../services/consts/consts';
import {
  ImgMiniImageProfileBlock,
  PictureUnderline,
  ScreensotsWrapper,
} from '../stylesheets/index';

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
  }

  updateUrlImage = imageUrl => {
    this.setState({ imageUrl })
  };

  screenChange = (clubPathPrefix, imgLink, index) => {
    this.setState( { imageUrl: clubPathPrefix + imgLink, screenIndex: index } )
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
      return <ImgMiniImageProfileBlock key={uuidv1()}
                  alt={item.name}
                  src={clubPathPrefix + imgLink}
                  onClick={() => this.screenChange(clubPathPrefix, imgLink, index)}/>
    });
    return (
      <div>
        {/*<Image cloudName="myvrclub" publicId="sample" width="300" crop="scale"/>*/}
        <img className={styles.img}
          src={this.state.imageUrl}
          alt={item.name} />
        {(this.props.screenMode === 'desktop') && <ScreensotsWrapper className={styles.screenshotsSwitch}>
          {items}
          <PictureUnderline screenIndex={this.state.screenIndex}/>
        </ScreensotsWrapper>}
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