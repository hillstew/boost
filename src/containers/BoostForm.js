import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { fetchDogImage } from '../thunks/fetchDogImage';
import { addSaved } from '../actions';
import PropTypes from 'prop-types';
let shortid = require('shortid');

export class BoostForm extends Component {
  constructor() {
    super();
    this.state = {
      senderNum: '',
      recipientNum: '',
      boostMessage: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSave = () => {
    const { dogImgSrc, addSaved, history, fetchDogImage } = this.props;
    const { senderNum, recipientNum, boostMessage } = this.state;
    let boost = {
      id: shortid.generate(),
      senderNum,
      recipientNum,
      boostMessage,
      dogImgSrc
    };
    addSaved(boost);
    this.clearInputs();
    fetchDogImage();
    history.replace('/');
  };

  clearInputs = () => {
    this.setState({ senderNum: '', recipientNum: '', boostMessage: '' });
  };

  render() {
    const { dogImgSrc } = this.props;
    const { senderNum, recipientNum, boostMessage } = this.state;
    const url = 'https://random.dog/' + dogImgSrc;
    return (
      <form onSubmit={e => this.handleSubmit(e)} className="BoostForm">
        <div className="div-flex">
          <div className="input-div">
            <label>
              To:
              <input
                onChange={this.handleChange}
                name="senderNum"
                type="number"
                placeholder="855-546-1234"
                value={senderNum}
              />
            </label>
            <label>
              From:
              <input
                onChange={this.handleChange}
                name="recipientNum"
                type="number"
                placeholder="765-765-2343"
                value={recipientNum}
              />
            </label>
          </div>
          <img src={url} alt="animal" />
        </div>
        <textarea
          onChange={this.handleChange}
          name="boostMessage"
          placeholder="Write your boost here"
          value={boostMessage}
        />
        <button name="save" onClick={this.handleSave} className="save-button">
          Save
        </button>
        <button name="send" type="submit" data-tip data-for="tooltip" onClick={this.handleSubmit}>
          SEND
          <ReactTooltip id="tooltip" type="light" effect="solid">
            Coming soon
          </ReactTooltip>
        </button>
      </form>
    );
  }
}

export const mapStateToProps = state => ({
  dogImgSrc: state.dogImgSrc
});

export const mapDispatchToProps = dispatch => ({
  addSaved: boost => dispatch(addSaved(boost)),
  fetchDogImage: () => dispatch(fetchDogImage())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoostForm);

BoostForm.propTypes = {
  dogImgSrc: PropTypes.string,
  addSaved: PropTypes.func,
  fetchDogImage: PropTypes.func
};
