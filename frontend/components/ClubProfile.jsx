import React, { Component } from 'react';

//SASS
import styles from '../stylesheets/clubProfile.module.scss';

// import components
import ImageProfileBlock from '../components/ImageProfileBlock';
import { API_PREFIX, IMG_URL_PREFIX } from '../services/consts/consts';
import InformationProfileBlock from '../components/InformationProfileBlock';

class ClubProfile extends Component {

  state = {
    showTel: false,
  };

  showTel = async (id) => {
    this.setState({showTel: true});
    console.log('API_PREFIX', API_PREFIX);
    const resp = await fetch(`${API_PREFIX}/club/statistics`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({clubId: id}),
    });
  };

  render() {
    const {club} = this.props;
    const clubTel = club.tel[0].replace(/ /g, '-');
    console.log(club.tel);
    return (
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
    )
  }
}

export default ClubProfile;