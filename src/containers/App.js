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
import SavedBoosts from '../containers/SavedBoosts';
import PropTypes from 'prop-types';

export class App extends Component {
  componentDidMount() {
    this.props.fetchDogImage();
  }

  render() {
    const { history, hasError, isLoading } = this.props;
    return (
      <div>
        {isLoading && <div>I am fetching the perfect pup for your boost</div>}
        {hasError !== '' && <div>There was an error, please refresh</div>}
        {!isLoading && hasError === '' && (
          <div className="div-app">
            <div className="App">
              <div className="App-nav-logo-div">
                <Nav />
                <Logo />
              </div>
              <Switch>
                <Route exact path="/" component={BoostsSection} />
                <Route exact path="/about" component={About} />
                <Route exact path="/saved" component={SavedBoosts} />
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
          </div>
        )}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  dogImgSrc: state.dogImgSrc,
  isLoading: state.isLoading,
  hasError: state.hasError
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

App.propTypes = {
  dogImgSrc: PropTypes.string,
  isLoading: PropTypes.bool,
  hasError: PropTypes.string,
  removeSaved: PropTypes.func
};
