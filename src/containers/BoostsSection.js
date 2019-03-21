import React, { Component } from 'react';
import { BoostCard } from '../components/BoostCard';
import { fetchDogImage } from '../thunks/fetchDogImage';
import { fetchCatImage } from '../thunks/fetchCatImage';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class BoostsSection extends Component {
  render() {
    const { dogImgSrc, fetchDogImage, isLoading, catImgSrc, fetchCatImage } = this.props;
    
    return (
      <div>
        {!isLoading && (
          <div className="BoostsSection">
            <h1>Pick your boost image</h1>
            <div className="BoostsSection-cards">
              <BoostCard img={dogImgSrc} fetchDogImage={fetchDogImage} />
              <BoostCard img={catImgSrc} fetchCatImage={fetchCatImage} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  dogImgSrc: state.dogImgSrc,
  isLoading: state.isLoading,
  catImgSrc: state.catImgSrc
});

export const mapDispatchToProps = dispatch => ({
  fetchDogImage: () => dispatch(fetchDogImage()),
  fetchCatImage: () => dispatch(fetchCatImage()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoostsSection);

BoostsSection.propTypes = {
  dogImgSrc: PropTypes.string,
  isLoading: PropTypes.bool,
  fetchDogImage: PropTypes.func
};
