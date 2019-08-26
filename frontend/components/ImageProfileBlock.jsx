import React from 'react';

//SASS
import styles from '../imageProfileBlock.module.scss';

// import components

const ImageProfileBlock = () => (
  <div>
    <img src="/static/img/unreal-place.png" width="750" height="421" alt="Batman: Arkham VR"/>
    <div className={styles.screenshotsSwitch}>
      <img src="/static/img/unreal-place1.png" width="144" height="81" alt="Batman: Arkham VR"/>
      <img src="/static/img/unreal-place2.png" width="144" height="81" alt="Batman: Arkham VR"/>
      <img src="/static/img/unreal-place3.png" width="144" height="81" alt="Batman: Arkham VR"/>
      <img src="/static/img/unreal-place4.png" width="144" height="81" alt="Batman: Arkham VR"/>
      <img src="/static/img/unreal-place4.png" width="144" height="81" alt="Batman: Arkham VR"/>
    </div>
  </div>
);

export default ImageProfileBlock;
