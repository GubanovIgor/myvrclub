import React from 'react';

//SASS
import styles from '../stylesheets/gameProfile.module.scss';

// import components
import ImageProfileBlock from '../components/ImageProfileBlock';

const GameProfile = (props) => (
  <section className={styles.container}>
    <div className={styles.profileTitle}>
      <h2>{props.game.name}</h2>
    </div>
    <div className={styles.profileContent}>
      <ImageProfileBlock game={props.game} isGame={true} isClub={false}/>
      <div className={styles.profileInformations}>
        <img
          src={props.game.cover} width="360" height="202" alt="Batman: Arkham VR"
        />
        <div className="profile-game-informations">
          <p>
            <span>{props.game.name}</span> - {props.game.short_description}<br></br>
            <span>Жанр:</span> Приключения, Action<br></br>
            <span>Платформа:</span> PS VR, HTC Vive<br></br>
            <span>Язык интерфейса:</span> русский<br></br>
            <span>Язык озвучки:</span> английский<br></br>
            1 игрок
          </p>
          <ul className={styles.tags}>
            <li><a href="#">Action</a></li>
            <li><a href="#">Научная фантастика</a></li>
            <li><a href="#">Для одного игрока</a></li>
            <li><a href="#">Атмосфера</a></li>
            <li><a href="#">Черный юмор</a></li>
            <li><a href="#">Приключения</a></li>
            <li><a href="#">Еще</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default GameProfile;
