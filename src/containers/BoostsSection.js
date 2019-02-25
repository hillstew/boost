import React, { Component } from 'react';
import { BoostCard } from '../components/BoostCard';
import { fetchDogImage } from '../thunks/fetchDogImage';
import { connect } from 'react-redux';

export class BoostsSection extends Component {
  render() {
    const { dogImgSrc, fetchDogImage, isLoading } = this.props;
    return (
      <div>
        {!isLoading && (
          <div className="BoostsSection">
            <h1>Pick your boost image</h1>
            <div className="BoostsSection-cards">
              <BoostCard img={dogImgSrc} fetchDogImage={fetchDogImage} />
            </div>
          </div>
        )}
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
