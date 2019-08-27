import React from 'react';
import {Image} from 'cloudinary-react';
import uuidv1 from 'uuid/v1'

//SASS
import styles from '../stylesheets/imageProfileBlock.module.scss';
import { IMG_URL_PREFIX } from '../services/consts/consts';

// import components

const ImageProfileBlock = (props) => {
  return (
    <div>
      {/*<Image cloudName="myvrclub" publicId="sample" width="300" crop="scale"/>*/}
      <img key={uuidv1()} src={IMG_URL_PREFIX+props.club.screenShot[0]} width="750" height="421" alt={props.club.name}/>
      <div className={styles.screenshotsSwitch}>
        {props.club.screenShot.map((imgLink, index) => {
          //if (index === 0) return;
          return <img key={uuidv1()} src={IMG_URL_PREFIX+imgLink} width="144" height="81" alt={props.club.name} />
        })}
      </div>
    </div>
  );
}


export default ImageProfileBlock;