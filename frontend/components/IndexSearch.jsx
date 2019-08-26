import React, { Component } from 'react';

// SASS
import styles from '../stylesheets/indexSearch.module.scss';

class IndexSearch extends Component {
  render() {
    return (
      <section className={styles.container}>
        <form className={styles.filter}>
          <input className={styles.formSearch} type="search" placeholder="Введите название клуба или игры..."/>
        </form>
        <input className={styles.button} type="submit" value="Поиск"/>
      </section>
    );
  }
}

export default IndexSearch;
