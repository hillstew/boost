import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDogImage } from '../thunks/fetchDogImage';
import { fetchCatImage } from '../thunks/fetchCatImage';
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
    const { history, fetchDogImage, fetchCatImage, img } = this.props;
    const { recipientNum, boostMessage, senderName } = this.state;
    let boostImage = this.getImage(img)
    let boost = {
      senderName,
      to: `+1${recipientNum}`,
      body: `${boostMessage}  -a boost from ${senderName}`,
      mediaUrl: boostImage
    };
    postData(boost);
    fetchDogImage();
    fetchCatImage();
    this.clearInputs();
    history.replace('/');
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSave = () => {
    const { addSaved, history, fetchDogImage, fetchCatImage, img } = this.props;
    const { senderName, recipientNum, boostMessage } = this.state;
    let boostImage = this.getImage(img)
    let boost = {
      id: shortid.generate(),
      senderName,
      to: `+1${recipientNum}`,
      body: `${boostMessage}  --a boost from ${senderName}`,
      mediaUrl: boostImage
    };
    addSaved(boost);
    history.replace('/');
    fetchDogImage();
    fetchCatImage();
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({
      senderNum: '',
      recipientNum: '',
      boostMessage: ''
    });
  };

  getImage = () => {
    const { dogImgSrc, catImgSrc, img } = this.props;
    const dogUrl = 'https://random.dog/' + dogImgSrc;
    const catUrl = 'https://cdn2.thecatapi.com/images/' + catImgSrc;
    let url;
    img.length > 10 ? url = dogUrl : url = catUrl;
    return url;
  };

  render() {
    const { recipientNum, boostMessage, senderName } = this.state;
    return (
      <form onSubmit={e => this.handleSubmit(e)} className="BoostForm" autoComplete="off">
        <div className="div-flex">
          <div className="input-div">
            <label>
              To:
              <input
                onChange={this.handleChange}
                name="recipientNum"
                type="number"
                placeholder="8555461234"
                value={recipientNum}
              />
            </label>
            <label>
              Your Name:
              <input onChange={this.handleChange} name="senderName" type="text" placeholder="Name" value={senderName} />
            </label>
          </div>
          <img src={this.getImage()} alt="animal" />
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
        <button name="send" type="submit" onClick={this.handleSubmit}>
          SEND
        </button>
      </form>
    );
  }
}

export const mapStateToProps = state => ({
  dogImgSrc: state.dogImgSrc,
  catImgSrc: state.catImgSrc
});

export const mapDispatchToProps = dispatch => ({
  addSaved: boost => dispatch(addSaved(boost)),
  fetchDogImage: () => dispatch(fetchDogImage()),
  fetchCatImage: () => dispatch(fetchCatImage())
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
