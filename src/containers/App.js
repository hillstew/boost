import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dog: null,
      cat: null
    };
  }

  componentDidMount = async () => {
    const url = 'https://random.dog/doggos';
    const res = await fetch(url);
    const dogImages = await res.json();
    this.setState({ dog: dogImages[0] });
  };

  render() {
    const { dog } = this.state;
    const url = 'https://random.dog/';
    console.log(url + dog);
    return (
      <div className="App">
        <Nav />
        <Logo />
        <BoostsSection />


        {/* <video autoPlay={true} loop={true} height="300px" src={url + dog} /> */}
        <img src={url + dog} width='300px'/> 
      </div>
    );
  }
}

export default App;
