import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClubCard from '../components/ClubCard';

// SASS
import styles from '../stylesheets/clubCollections.module.scss';

export class ClubCollections extends Component {
  render() {
    return (
      <div>
        <section className={styles.container}>
          <h3 className={styles.h3}>Лучшие клубы</h3>
          <div>
            <ClubCard />
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(ClubCollections);
