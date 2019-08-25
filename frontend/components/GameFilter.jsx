import React, { Component } from 'react';

// SASS
import styles from '../gameFilter.module.scss';

class GameFilter extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div>
          <h3>Жанр</h3>
          <input type='checkbox' id='1'/><label for='1'>Экшен</label><br></br>
          <input type='checkbox' id='2'/><label for='2'>Гонки</label><br></br>
          <input type='checkbox' id='3'/><label for='3'>Симулятор</label><br></br>
          <input type='checkbox' id='4'/><label for='4'>Стратегия</label><br></br>
          <input type='checkbox' id='5'/><label for='5'>Фентези</label><br></br>
          <input type='checkbox' id='6'/><label for='6'>Файтинг</label><br></br>
          <input type='checkbox' id='7'/><label for='7'>Платформер</label><br></br>
        </div>
        <hr className={styles.breakLine}></hr>

        <div>
          <h3>Платформа</h3>
          <input type='checkbox' id='8'/><label for='8'>PS VR</label><br></br>
          <input type='checkbox' id='9'/><label for='9'>Oculus Rift</label><br></br>
          <input type='checkbox' id='10'/><label for='10'>HTC Vive</label><br></br>
          <input type='checkbox' id='11'/><label for='11'>FullBody VR</label><br></br>
        </div>
        <hr className={styles.breakLine}></hr>

        <div>
          <h3>Год выхода</h3>
          <input type='checkbox' id='12'/><label for='12'>2019</label><br></br>
          <input type='checkbox' id='13'/><label for='13'>2018</label><br></br>
          <input type='checkbox' id='14'/><label for='14'>2017</label><br></br>
          <input type='checkbox' id='15'/><label for='15'>2016</label><br></br>
          <input type='checkbox' id='16'/><label for='16'>2015</label><br></br>
          <input type='checkbox' id='17'/><label for='17'>2014</label><br></br>
          <input type='checkbox' id='18'/><label for='18'>2013</label><br></br>
        </div>
        <hr className={styles.breakLine}></hr>

        <div>
          <h3>Возраст</h3>
          <input type='checkbox' id='19'/><label for='19'>0+</label><br></br>
          <input type='checkbox' id='20'/><label for='20'>3+</label><br></br>
          <input type='checkbox' id='21'/><label for='21'>7+</label><br></br>
          <input type='checkbox' id='22'/><label for='22'>12+</label><br></br>
          <input type='checkbox' id='23'/><label for='23'>16+</label><br></br>
          <input type='checkbox' id='24'/><label for='24'>18+</label><br></br>
        </div>
        <hr className={styles.breakLine}></hr>

        <div>
          <h3>Теги</h3>
          <input type='checkbox' id='25'/><label for='25'>Зомби</label><br></br>
          <input type='checkbox' id='26'/><label for='26'>Дети</label><br></br>
          <input type='checkbox' id='27'/><label for='27'>Музыка</label><br></br>
          <input type='checkbox' id='28'/><label for='28'>Много крови</label><br></br>
          <input type='checkbox' id='29'/><label for='29'>Магия</label><br></br>
          <input type='checkbox' id='30'/><label for='30'>Для взрослых</label><br></br>
        </div>
      </div>
    );
  }
}

export default GameFilter;
