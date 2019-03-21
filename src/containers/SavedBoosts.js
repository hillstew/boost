import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeSaved } from '../actions';
import { postData } from '../api';
import PropTypes from 'prop-types';

export class SavedBoosts extends Component {
  

  renderSavedBoosts = () => {
    const { removeSaved, saved } = this.props;
    return saved.map(boost => {
      return (
        <div className="SavedBoosts-boost" key={boost.id}>
          <div className="SavedBoosts-flex">
            <div className="div">
              <p>TO: {boost.to}</p>
              <p>FROM: {boost.senderName}</p>
            </div>
            <img src={boost.mediaUrl} alt="animal" />
          </div>
          <p className="boost-msg">{boost.body}</p>
          <button name="send" onClick={() => postData(boost)} className="send-button">
            Send
          </button>
          <button name="delete" onClick={() => removeSaved(boost.id)} className="delete-button">
            Delete
          </button>
        </div>
      );
    });
  };

  render() {
    const { saved, history } = this.props;
    return (
      <div>
        {saved.length === 0 && history.replace('/')}
        <div className="SavedBoosts">{this.renderSavedBoosts()}</div>
      </div>
    );
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

SavedBoosts.propTypes = {
  saved: PropTypes.array,
  removeSaved: PropTypes.func
};
