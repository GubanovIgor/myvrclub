import React, { Component } from 'react';

// SASS
import styles from '../gameFilter.module.scss';

class GameFilter extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div>
          <h3>Жанр</h3>
          <input type='checkbox' />Экшен<br></br>
          <input type='checkbox' />Гонки<br></br>
          <input type='checkbox' />Симулятор<br></br>
          <input type='checkbox' />Стратегия<br></br>
          <input type='checkbox' />Фентези<br></br>
          <input type='checkbox' />Файтинг<br></br>
          <input type='checkbox' />Платформер<br></br>
        </div>
        <hr className={styles.breakLine}></hr>

        <div>
          <h3>Платформа</h3>
          <input type='checkbox' />PS VR<br></br>
          <input type='checkbox' />Oculus Rift<br></br>
          <input type='checkbox' />HTC Vive<br></br>
          <input type='checkbox' />FullBody VR<br></br>
        </div>
        <hr className={styles.breakLine}></hr>

        <div>
          <h3>Год выхода</h3>
          <input type='checkbox' />2019<br></br>
          <input type='checkbox' />2018<br></br>
          <input type='checkbox' />2017<br></br>
          <input type='checkbox' />2016<br></br>
          <input type='checkbox' />2015<br></br>
          <input type='checkbox' />2014<br></br>
          <input type='checkbox' />2013<br></br>
        </div>
        <hr className={styles.breakLine}></hr>

        <div>
          <h3>Возраст</h3>
          <input type='checkbox' />0+<br></br>
          <input type='checkbox' />3+<br></br>
          <input type='checkbox' />7+<br></br>
          <input type='checkbox' />12+<br></br>
          <input type='checkbox' />16+<br></br>
          <input type='checkbox' />18+<br></br>
        </div>
        <hr className={styles.breakLine}></hr>

        <div>
          <h3>Теги</h3>
          <input type='checkbox' />Зомби<br></br>
          <input type='checkbox' />Дети<br></br>
          <input type='checkbox' />Музыка<br></br>
          <input type='checkbox' />Много крови<br></br>
          <input type='checkbox' />Магия<br></br>
          <input type='checkbox' />Для взрослых<br></br>
        </div>
      </div>
    );
  }
}

export default GameFilter;
