import React, { Component } from 'react';
//import Link from 'next/link';

// SASS
import styles from '../stylesheets/footer.module.scss';

class Footer extends Component {
  render() {
    return (
      <footer className={styles.mainFooter}>
        <section className={styles.container}>
          <h2 className={styles.visuallyHidden}>Общая информация</h2>
          {/*<ul className={styles.socialList}>*/}
            {/*<li>Мы в социальных сетях:</li>*/}
            {/*<li><a><img src="/static/img/vk.png" title="Вконтакте" alt=""/></a></li>*/}
            {/*<li><a><img src="/static/img/facebook.png" title="Facebook" alt=""/></a></li>*/}
            {/*<li><a><img src="/static/img/twitter.png" title="Twitter" alt=""/></a></li>*/}
            {/*<li><a><img src="/static/img/ok.png" title="Одноклассники" alt=""/></a></li>*/}
            {/*<li><a><img src="/static/img/google.png" title="Google+" alt=""/></a></li>*/}
          {/*</ul>*/}
          {/*<hr className={styles.footerLine}/>*/}
            <div className={styles.mainFooterInfo}>
              <ul className={styles.infoList}>
                <li><a href="#">Подробнее о нас</a></li>
                <li><a href="#">Контактная информация</a></li>
                <li><a href="#">Для инвесторов</a></li>
                <li><a href="#">Карьера</a></li>
                <li><a href="#">Офисы</a></li>
              </ul>
              <ul className={styles.infoList}>
                <li><a href="#">Клубам</a></li>
                <li><a href="#">Добавить клуб</a></li>
                <li><a href="#">Блог</a></li>
              </ul>
              <ul className={styles.infoList}>
                <li><a href="#">Помощь</a></li>
                <li><a href="#">Популярные вопросы</a></li>
                <li><a href="#">СМИ о нас</a></li>
              </ul>
            </div>

            <hr className={styles.footerLine}/>
              <ul className={styles.reference}>
                <li>2018</li>
                <li>Все права защищены</li>
                <li><a href="#">Справка</a></li>
                <li><a href="#">Конфиденциальность</a></li>
                <li><a href="#">Условия пользования</a></li>
              </ul>
        </section>
      </footer>
    );
  }
}

export default Footer;
