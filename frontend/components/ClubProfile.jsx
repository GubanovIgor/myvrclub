import React from 'react';
import { IMG_URL_PREFIX } from '../services/consts/consts';

//SASS
import styles from '../stylesheets/clubProfile.module.scss';

// import components
import ImageProfileBlock from '../components/ImageProfileBlock';
import InformationProfileBlock from '../components/InformationProfileBlock';

const ClubProfile = (props) => (
  <section className={styles.container}>
    {console.log('props ClubProfile JSX', props)}
    <div className={styles.profileTitle}>
      <h2>{props.club.name}</h2>
    </div>
    <div className={styles.profileContent}>
      <ImageProfileBlock club={props.club} isClub={true} isGame={false}/>
      <InformationProfileBlock cover={props.club.cover} name={props.club.name} description={props.club.short_description}/>
    </div>
  </section>
);

export default ClubProfile;
