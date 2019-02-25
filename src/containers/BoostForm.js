import React, { Component } from 'react';
import { connect } from 'react-redux';
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

  handleSave = e => {
    const { dogImgSrc } = this.props;
    const { senderNum, recipientNum, boostMessage } = this.state;
    let boost = {
      id: shortid.generate(),
      senderNum,
      recipientNum,
      boostMessage,
      dogImgSrc
    };
  };

  render() {
    const { dogImgSrc } = this.props;
    const { senderNum, recipientNum, boostMessage } = this.state;
    const url = 'https://random.dog/' + dogImgSrc;
    return (
      <form onSubmit={this.handleSubmit} className="BoostForm">
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
        <button name="save" onClick={this.handleSave}>
          Save
        </button>
        <button name="send" type="submit">
          Send
        </button>
      </form>
    );
  }
}

export const mapStateToProps = state => ({
  dogImgSrc: state.dogImgSrc
});

export default connect(mapStateToProps)(BoostForm);
