import React from 'react';

//SASS
import styles from '../stylesheets/gameProfile.module.scss';

// import components
import ImageProfileBlock from '../components/ImageProfileBlock';
import InformationProfileBlock from '../components/InformationProfileBlock';

const GameProfile = (props) => (
  <section className={styles.container}>
    <div className={styles.profileTitle}>
      <h2>{props.game.name}</h2>
    </div>
    <div className={styles.profileContent}>
      <ImageProfileBlock game={props.game} isGame={true} isClub={false}/>
      <InformationProfileBlock cover={props.game.cover} name={props.game.name} description={props.game.short_description}/>
    </div>
  </section>
);

export default GameProfile;
