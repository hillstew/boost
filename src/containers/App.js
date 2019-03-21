import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { fetchDogImage } from '../thunks/fetchDogImage';
import { fetchCatImage } from "../thunks/fetchCatImage";
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
  async componentDidMount() {
    await this.props.fetchDogImage();
    await this.props.fetchCatImage();
  }

  render() {
    const { history, hasError, isLoading } = this.props;
    return (
      <div>
        {isLoading && <div className="loading-div">Fetching the perfect furry friends for your boost...</div>}
        {hasError !== '' && <div className="error-div">There was an error, please refresh</div>}
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
                  path="/send-boost/:id"
                  render={({ match }) => {
                    const { id } = match.params;
                    return <BoostForm img={id} history={history} />;
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
  catImgSrc: state.catImgSrc,
  isLoading: state.isLoading,
  hasError: state.hasError
});

export const mapDispatchToProps = dispatch => ({
  fetchDogImage: () => dispatch(fetchDogImage()),
  fetchCatImage: () => dispatch(fetchCatImage())
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
