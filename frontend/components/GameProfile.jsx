import React from 'react';

//SASS
import styles from '../stylesheets/gameProfile.module.scss';

// import components
import ImageProfileBlock from '../components/ImageProfileBlock';

const GameProfile = (props) => (
  <section className={styles.container}>
    <div className={styles.profileTitle}>
      <h2>Нереальное место</h2>
    </div>
    <div className={styles.profileContent}>
      <ImageProfileBlock />
      <div className={styles.profileInformations}>
        <img
          src="/static/img/Batman-Arkham-VR.png" width="360" height="202" alt="Batman: Arkham VR"
        />
        <div className="profile-game-informations">
            <p>
              Batman Arkham VR - это VR-игра про Бэтмена, где игроку предстоит «использовать легендарные гаджеты
              Бэтмена, чтобы предотвратить заговор, угрожающий жизням его самых близких союзников».
            </p>
            <p>
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
