import React from 'react';

//SASS
import styles from '../stylesheets/profileBlock.module.scss';

// import components
import ImageProfileBlock from '../components/ImageProfileBlock';
import InformationProfileBlock from '../components/InformationProfileBlock';

const GameProfile = (props) => {
  //const {game} = props;
  return (
    <section className={styles.container}>
      <div className={styles.profileTitle}>
        <h1>{props.game.name}</h1>
      </div>
      <div className={styles.profileContent}>
        <ImageProfileBlock game={props.game}/>
        <InformationProfileBlock game={props.game}/>
      </div>
    </section>
  );
};

export default GameProfile;
