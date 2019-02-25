import React, { Component, Fragment } from 'react';
import { BoostCard } from '../components/BoostCard';
import { fetchDogImage } from '../thunks/fetchDogImage';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class BoostsSection extends Component {
  render() {
    const { dogImgSrc } = this.props;
    return (
      <div className="BoostsSection">
        <h1>Choose your boost image</h1>
        <div className="BoostsSection-cards">
          <BoostCard img={dogImgSrc} />
          <BoostCard img={dogImgSrc} />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  dogImgSrc: state.dogImgSrc,
  isLoading: state.isLoading
});

export const mapDispatchToProps = dispatch => ({
  fetchDogImage: () => dispatch(fetchDogImage())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoostsSection);
