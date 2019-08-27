import React from 'react';

//SASS
import styles from '../stylesheets/imageProfileBlock.module.scss';

// import components

const ImageProfileBlock = (props) => (
  <div>
    <img src={props.club.cover} width="750" height="421" alt="Batman: Arkham VR"/>
    <div className={styles.screenshotsSwitch}>
      <img src={props.club.screenShot[0]} width="144" height="81" alt="Batman: Arkham VR"/>
      <img src="/static/img/unreal-place2.png" width="144" height="81" alt="Batman: Arkham VR"/>
      <img src="/static/img/unreal-place3.png" width="144" height="81" alt="Batman: Arkham VR"/>
      <img src="/static/img/unreal-place4.png" width="144" height="81" alt="Batman: Arkham VR"/>
      <img src="/static/img/unreal-place4.png" width="144" height="81" alt="Batman: Arkham VR"/>
    </div>
  </div>
);

export default ImageProfileBlock;
