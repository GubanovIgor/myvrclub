import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClubCard from '../components/ClubCard';
import { ToRightButton, ToLeftButton } from '../stylesheets/carusel';

// SASS
import styles from '../stylesheets/clubCollections.module.scss';

export class ClubCollections extends Component {
  state = {
    caruselPosition: 0,
  }

  scroll = async (side) => {
    if (side === 'left') {
      await this.setState({ caruselPosition: this.state.caruselPosition + 950 })
      if (this.state.caruselPosition > 0) {
        await this.setState({ caruselPosition: 0 })
      }
    } else {
      await this.setState({ caruselPosition: this.state.caruselPosition - 950 })
      if (this.state.caruselPosition < -1635) {
        await this.setState({ caruselPosition: -1635 })
      }
    }
  }

  render() {
    return (
      <div className={styles.section}>
        <section className={styles.container}>
          <h3 className={styles.title}>Лучшие клубы</h3>
          <div className={styles.clubList} style={{ marginLeft: this.state.caruselPosition }}>
            <ClubCard club={this.props.clubs[0]} />
            <ClubCard club={this.props.clubs[1]} />
            <ClubCard club={this.props.clubs[2]} />
            <ClubCard club={this.props.clubs[3]} />
            <ClubCard club={this.props.clubs[4]} />
            <ClubCard club={this.props.clubs[5]} />
            <ClubCard club={this.props.clubs[6]} />
            <ClubCard club={this.props.clubs[7]} />
            <ClubCard club={this.props.clubs[8]} />
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
        {(this.state.caruselPosition !== 0) && <ToLeftButton onClick={() => this.scroll('left')} className={styles.toLeft} isClub={true}/>}
        {(this.state.caruselPosition !== -1635) && <ToRightButton onClick={() => this.scroll('right')} className={styles.toRight} isClub={true}/>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  clubs: state.clubs,
});


export default connect(mapStateToProps)(ClubCollections);
