import React, { Component } from 'react';

//SASS
import styles from '../stylesheets/clubProfile.module.scss';

// import components
import ImageProfileBlock from '../components/ImageProfileBlock';
import InformationProfileBlock from '../components/InformationProfileBlock';

class ClubProfile extends Component {

  render() {
    const {club} = this.props;
    return (
  <section className={styles.container}>
    <div className={styles.profileTitle}>
      <h2>{club.name}</h2>
    </div>
    <div className={styles.profileContent}>
      <ImageProfileBlock club={club} isClub={true} isGame={false}/>
      <InformationProfileBlock club={club} isClub={true} isGame={false}/>
    </div>
  </section>
    )
  }
}

export default ClubProfile;