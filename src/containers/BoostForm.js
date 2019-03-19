import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDogImage } from '../thunks/fetchDogImage';
import { addSaved } from '../actions';
import PropTypes from 'prop-types';
import { postData } from '../api';
let shortid = require('shortid');

export class BoostForm extends Component {
  constructor() {
    super();
    this.state = {
      senderName: '',
      recipientNum: '',
      boostMessage: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { dogImgSrc, history, fetchDogImage } = this.props;
    const { recipientNum, boostMessage, senderName } = this.state;
    let boost = {
      senderName,
      to: `+1${recipientNum}`,
      body: `${boostMessage}  -a boost from ${senderName}`,
      mediaUrl: `https://random.dog/${dogImgSrc}`
    };
    postData(boost);
    fetchDogImage();
    this.clearInputs();
    history.replace('/');
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSave = () => {
    const { dogImgSrc, addSaved, history, fetchDogImage } = this.props;
    const { senderName, recipientNum, boostMessage } = this.state;
    let boost = {
      id: shortid.generate(),
      senderName,
      to: `+1${recipientNum}`,
      body: `${boostMessage}  --a boost from ${senderName}`,
      mediaUrl: `https://random.dog/${dogImgSrc}`
    };
    addSaved(boost);
    fetchDogImage();
    this.clearInputs();
    history.replace('/');
  };

  clearInputs = () => {
    this.setState({ senderNum: '', recipientNum: '', boostMessage: '' });
  };

  render() {
    const { dogImgSrc } = this.props;
    const { recipientNum, boostMessage, senderName } = this.state;
    const url = 'https://random.dog/' + dogImgSrc;
    return (
      <form onSubmit={e => this.handleSubmit(e)} className="BoostForm" autocomplete="off">
        <div className="div-flex">
          <div className="input-div">
            <label>
              To:
              <input
                onChange={this.handleChange}
                name="recipientNum"
                type="number"
                placeholder="855-546-1234"
                value={recipientNum}
              />
            </label>
            <label>
              Your Name:
              <input onChange={this.handleChange} name="senderName" type="text" placeholder="Name" value={senderName} />
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
