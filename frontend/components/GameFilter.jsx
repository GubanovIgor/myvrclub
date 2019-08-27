import React, { Component } from 'react';

// SASS
import styles from '../stylesheets/filter.module.scss';

class GameFilter extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div>
          <h3>Жанр</h3>
          <input className={styles.filterCheckbox} type='checkbox' id='Головоломка'/>
          <label htmlFor='Головоломка'>Головоломка</label><br></br>
          <input className={styles.filterCheckbox} type='checkbox' id='Гонки'/>
          <label htmlFor='Гонки'>Гонки</label><br></br>
          <input className={styles.filterCheckbox} type='checkbox' id='Инди'/>
          <label htmlFor='Инди'>Инди</label><br></br>
          <input className={styles.filterCheckbox} type='checkbox' id='Казуальная игра'/>
          <label htmlFor='Казуальная игра'>Казуальная игра</label><br></br>
          <input className={styles.filterCheckbox} type='checkbox' id='Приключение'/>
          <label htmlFor='Приключение'>Приключение</label><br></br>
          <input className={styles.filterCheckbox} type='checkbox' id='Ролевая игра'/>
          <label htmlFor='Ролевая игра'>Ролевая игра</label><br></br>
          <input className={styles.filterCheckbox} type='checkbox' id='Симулятор'/>
          <label htmlFor='Симулятор'>Симулятор</label><br></br>
          <input className={styles.filterCheckbox} type='checkbox' id='Спортивная игра'/>
          <label htmlFor='Спортивная игра'>Спортивная игра</label><br></br>
          <input className={styles.filterCheckbox} type='checkbox' id='Стратегия'/>
          <label htmlFor='Стратегия'>Стратегия</label><br></br>
          <input className={styles.filterCheckbox} type='checkbox' id='Экшен'/>
          <label htmlFor='Экшен'>Экшен</label><br></br>
        </div>
        <hr className={styles.breakLine}></hr>

        <div>
          <h3>Платформа</h3>
          <input className={styles.filterCheckbox} type='checkbox' id='PS VR'/>
          <label htmlFor='PS VR'>PS VR</label><br></br>
          <input className={styles.filterCheckbox} type='checkbox' id='Oculus Rift'/>
          <label htmlFor='Oculus Rift'>Oculus Rift</label><br></br>
          <input className={styles.filterCheckbox} type='checkbox' id='HTC Vive'/>
          <label htmlFor='HTC Vive'>HTC Vive</label><br></br>
          <input className={styles.filterCheckbox} type='checkbox' id='Valve Index'/>
          <label htmlFor='Valve Index'>Valve Index</label><br></br>
          <input className={styles.filterCheckbox} type='checkbox' id='FullBody VR'/>
          <label htmlFor='FullBody VR'>FullBody VR</label><br></br>
        </div>
        <hr className={styles.breakLine}></hr>

        <div>
          <h3>Год выхода</h3>
          <input className={styles.filterCheckbox} type='checkbox' id='12'/>
          <label htmlFor='12'>2019</label><br></br>
          <input className={styles.filterCheckbox} type='checkbox' id='13'/>
          <label htmlFor='13'>2018</label><br></br>
          <input className={styles.filterCheckbox} type='checkbox' id='14'/>
          <label htmlFor='14'>2017</label><br></br>
          <input className={styles.filterCheckbox} type='checkbox' id='15'/>
          <label htmlFor='15'>2016</label><br></br>
          <input className={styles.filterCheckbox} type='checkbox' id='16'/>
          <label htmlFor='16'>2015</label><br></br>
          <input className={styles.filterCheckbox} type='checkbox' id='17'/>
          <label htmlFor='17'>2014</label><br></br>
          <input className={styles.filterCheckbox} type='checkbox' id='18'/>
          <label htmlFor='18'>2013</label><br></br>
        </div>
        <hr className={styles.breakLine}></hr>

        <div>
          <h3>Возраст</h3>
          <input className={styles.filterCheckbox} type='checkbox' id='19'/>
          <label htmlFor='19'>0+</label><br></br>
          <input className={styles.filterCheckbox} type='checkbox' id='20'/>
          <label htmlFor='20'>3+</label><br></br>
          <input className={styles.filterCheckbox} type='checkbox' id='21'/>
          <label htmlFor='21'>7+</label><br></br>
          <input className={styles.filterCheckbox} type='checkbox' id='22'/>
          <label htmlFor='22'>12+</label><br></br>
          <input className={styles.filterCheckbox} type='checkbox' id='23'/>
          <label htmlFor='23'>16+</label><br></br>
          <input className={styles.filterCheckbox} type='checkbox' id='24'/>
          <label htmlFor='24'>18+</label><br></br>
        </div>
        <hr className={styles.breakLine}></hr>

        <div>
          <h3>Теги</h3>
          <input className={styles.filterCheckbox} type='checkbox' id='25'/>
          <label htmlFor='25'>День рождения</label><br></br>
          <input className={styles.filterCheckbox} type='checkbox' id='26'/>
          <label htmlFor='26'>Для компании</label><br></br>
          <input className={styles.filterCheckbox} type='checkbox' id='27'/>
          <label htmlFor='27'></label><br></br>
          <input className={styles.filterCheckbox} type='checkbox' id='28'/>
          <label htmlFor='28'>Много крови</label><br></br>
          <input className={styles.filterCheckbox} type='checkbox' id='29'/>
          <label htmlFor='29'>Магия</label><br></br>
          <input className={styles.filterCheckbox} type='checkbox' id='30'/>
          <label htmlFor='30'>Для взрослых</label><br></br>
        </div>
      </div>
    );
  }
}

export default GameFilter;
