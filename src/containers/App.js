import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { fetchDogImage } from '../thunks/fetchDogImage';
import { connect } from 'react-redux';
import { Nav } from '../components/Nav';

class App extends Component {
  componentDidMount() {
    this.props.fetchDogImage();
  }

  render() {
    const { dogImgSrc, isLoading } = this.props;
    const url = 'https://random.dog/' + dogImgSrc;
    return (
      <div className="App">
        <Switch>
          <Nav />
          {/* <Logo /> */}
          {/* <BoostsSection /> */}
          {/* <video autoPlay={true} loop={true} height="300px" src={url + dog} /> */}
          {isLoading && <div>Loading</div>}
          {!isLoading && <img src={url} width="300px" />}
        </Switch>
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
