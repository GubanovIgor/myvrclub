import React, { Component } from 'react';
import { Image } from 'cloudinary-react';
import uuidv1 from 'uuid/v1'
import { IMG_URL_PREFIX } from '../services/consts/consts';

//SASS
import styles from '../stylesheets/imageProfileBlock.module.scss';

class ImageProfileBlock extends Component {

  state = {
    imageUrl: '',
  };

  componentDidMount() {
    const { club, game } = this.props;
    if (!!club) this.setState({ imageUrl: IMG_URL_PREFIX + club.screenShot[0] });
    if (!!game) this.setState({ imageUrl: game.screenShot[0] });
  }

  updateUrlImage = imageUrl => {
    this.setState({ imageUrl })
  };

  render() {
    const { club, game } = this.props;
    let item = game, clubPathPrefix = '';
    if (!!club) {
      item = club;
      clubPathPrefix = IMG_URL_PREFIX;
    }
    const items = item.screenShot.map((imgLink, index) => {
      if (index > 4) return;
      return <img className={styles.screen}
                  key={uuidv1()}
                  width="144"
                  height="81"
                  alt={item.name}
                  src={clubPathPrefix + imgLink}
                  onMouseOver={() => this.updateUrlImage(clubPathPrefix + imgLink)}/>
    });
    return (
      <div>
        {/*<Image cloudName="myvrclub" publicId="sample" width="300" crop="scale"/>*/}
        <img className={styles.img}
             src={this.state.imageUrl} width="750"
             height="421"
             alt={item.name}/>
        <div className={styles.screenshotsSwitch}>
          {items}
        </div>
      </div>
    );
  }
}

export default ImageProfileBlock;