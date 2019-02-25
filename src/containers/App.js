import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { fetchDogImage } from '../thunks/fetchDogImage';
import { connect } from 'react-redux';
import { Nav } from '../components/Nav';
import BoostsSection from '../containers/BoostsSection';
import { Logo } from '../components/Logo';

class App extends Component {
  componentDidMount() {
    this.props.fetchDogImage();
  }
  render() {
    return (
      <div className="App">
        <div className="App-nav-logo-div">
          <Nav />
          <Logo />
        </div>
        <BoostsSection />
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
