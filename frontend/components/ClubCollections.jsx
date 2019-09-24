import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClubCard from '../components/ClubCard';

// SASS
import styles from '../stylesheets/clubCollections.module.scss';
import sectionStyles from '../stylesheets/section.module.scss';

export class ClubCollections extends Component {
  render() {
    return (
      <div className={sectionStyles.section}>
        <section className={styles.container}>
          <h3 className={styles.title}>Лучшие клубы</h3>
          <div className={styles.clubList}>
              <ClubCard club={this.props.clubs[5]} />
              <ClubCard club={this.props.clubs[8]} />
              <ClubCard club={this.props.clubs[4]} />
              <ClubCard club={this.props.clubs[1]} />
          </div>
          {/* <div className={styles.allTags}>
					<ul className={styles.popularTags}>
						<li><a href="#">Full Body VR</a></li>
						<li><a href="#">Клубы рядом</a></li>
						<li><a href="#">Новые</a></li>
						<li><a href="#">Пять звезд</a></li>
					</ul>
					<ul className={styles.tags}>
						<li><a href="#">Все клубы</a></li>
					</ul>
				</div> */}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  clubs: state.clubs,
});


export default connect(mapStateToProps)(ClubCollections);
