import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { fetchDogImage } from '../thunks/fetchDogImage';
import { connect } from 'react-redux';
import { Nav } from '../components/Nav';
import { Logo } from '../components/Logo';
import { About } from '../components/About';
import { NotFound } from '../components/NotFound';
import BoostsSection from '../containers/BoostsSection';
import BoostForm from '../containers/BoostForm';
class App extends Component {
  componentDidMount() {
    this.props.fetchDogImage();
  }

  render() {
    const { history } = this.props;
    return (
      <div className="App">
        <div className="App-nav-logo-div">
          <Nav />
          <Logo />
        </div>
        <Switch>
          <Route exact path="/" component={BoostsSection} />
          <Route exact path="/about" component={About} />
          <Route
            path="/send-boost/:imgId"
            render={({ match }) => {
              const { imgId } = match.params;
              return <BoostForm img={imgId} history={history} />;
            }}
          />
          <Route path="*" component={NotFound} />
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
