import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeSaved } from '../actions';

export class SavedBoosts extends Component {
  renderSavedBoosts = () => {
    const { removeSaved, saved } = this.props;
    const url = 'https://random.dog/';
    return saved.map(boost => {
      return (
        <div key={boost.id} className="SavedBoosts-boost">
          <div className="SavedBoosts-flex">
            <div className="div">
              <p>TO: {boost.senderNum}</p>
              <p>FROM: {boost.recipientNum}</p>
            </div>
            <img src={url + boost.dogImgSrc} alt="animal" />
          </div>
          <p className="boost-msg">Your boost messsage: {boost.boostMessage}</p>
          <button name="delete" onClick={() => removeSaved(boost.id)} className="remove-button">
            Delete
          </button>
        </div>
      );
    });
  };

  render() {
    return <div className="SavedBoosts">{this.renderSavedBoosts()}</div>;
  }
}

export const mapStateToProps = state => ({
  saved: state.savedBoosts
});

export const mapDispatchToProps = dispatch => ({
  removeSaved: id => dispatch(removeSaved(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedBoosts);
