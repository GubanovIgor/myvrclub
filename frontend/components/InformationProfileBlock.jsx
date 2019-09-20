import React from 'react';

//SASS
import styles from '../stylesheets/informationProfileBlock.module.scss';

const InformationProfileBlock = (props) => {
	return (
		<div className={styles.profileInformations}>
			<img
				className={styles.cover}
				src={props.cover}
				width="360"
				height="202"
				alt="Batman: Arkham VR"
			/>
			<div className="profile-game-informations">
				<p>
					<span>{props.name}</span> - {props.description}<br/>
					<span>Жанр:</span> Приключения, Action<br/>
					<span>Платформа:</span> PS VR, HTC Vive<br/>
					<span>Язык интерфейса:</span> русский<br/>
					<span>Язык озвучки:</span> английский<br/>
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
	)
}


export default InformationProfileBlock;