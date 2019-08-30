import React, { Component } from 'react';
import { Image } from 'cloudinary-react';
import uuidv1 from 'uuid/v1'

//SASS
import styles from '../stylesheets/imageProfileBlock.module.scss';
import { IMG_URL_PREFIX } from '../services/consts/consts';

class ImageProfileBlock extends Component {

  state = {
    imageUrl: '',
  };

  componentDidMount() {
  const { club = [], game = [], isClub, isGame } = this.props;
    if (isClub) this.setState({ imageUrl: IMG_URL_PREFIX + club.screenShot[0] });
    if (isGame) this.setState({ imageUrl: game.screenShot[0] });
  }

  updateUrlImage = imageUrl => {
    //console.log('imageUrl>>>>>>>>>>>', imageUrl)
    this.setState({ imageUrl });
  };

  render(){
    const { club = [], game = [], isClub, isGame } = this.props;
    if (isClub) return (
      <div>
        {console.log('this.state.imageUrl', this.state.imageUrl)}
        {/*<Image cloudName="myvrclub" publicId="sample" width="300" crop="scale"/>*/}
        <img className={styles.img} key={uuidv1()} src={IMG_URL_PREFIX + club.screenShot[0]} width="750" height="421"
             alt={club.name}/>
        <div className={styles.screenshotsSwitch}>
          {club.screenShot.map((imgLink, index) => {
            if (index === 0) return;
            return <img className={styles.screen}
                        key={uuidv1()}
                        src={IMG_URL_PREFIX + imgLink}
                        width="144" height="81"
                        alt={club.name}
                        onClick={() => this.updateUrlImage(IMG_URL_PREFIX + imgLink)}/>
          })}
        </div>
      </div>
    );
    if (isGame) return (
      <div>
        {/*<Image cloudName="myvrclub" publicId="sample" width="300" crop="scale"/>*/}
        <img className={styles.img} key={uuidv1()} src={game.screenShot[0]} width="750" height="421"
             alt={game.name}/>
        <div className={styles.screenshotsSwitch}>
          {game.screenShot.map((imgLink, index) => {
            if (index > 4) return;
            return <img className={styles.screen} key={uuidv1()} src={imgLink} width="144" height="81"
                        alt={game.name}/>
          })}
        </div>
      </div>
    )
  }
}

// const ImageProfileBlock = (props) => {
//   const { club = [], game = [], isClub, isGame } = props;
//   if (isClub) return (
//       <div>
//         {/*<Image cloudName="myvrclub" publicId="sample" width="300" crop="scale"/>*/}
//         <img className={styles.img} key={uuidv1()} src={IMG_URL_PREFIX + club.screenShot[0]} width="750" height="421"
//              alt={props.club.name}/>
//         <div className={styles.screenshotsSwitch}>
//           {club.screenShot.map((imgLink, index) => {
//             if (index === 0) return;
//             return <img className={styles.screen} key={uuidv1()} src={IMG_URL_PREFIX + imgLink} width="144" height="81"
//                         alt={props.club.name}/>
//           })}
//         </div>
//       </div>
//     );
//
//   if (isGame) return (
//     <div>
//       {/*<Image cloudName="myvrclub" publicId="sample" width="300" crop="scale"/>*/}
//       <img className={styles.img} key={uuidv1()} src={game.screenShot[0]} width="750" height="421"
//            alt={props.game.name}/>
//       <div className={styles.screenshotsSwitch}>
//         {game.screenShot.map((imgLink, index) => {
//           if (index === 0 || index > 5) return;
//           return <img className={styles.screen} key={uuidv1()} src={imgLink} width="144" height="81"
//                       alt={props.game.name}/>
//         })}
//       </div>
//     </div>
//   )
// }


export default ImageProfileBlock;