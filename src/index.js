import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from './Spinner';
import { className } from "postcss-selector-parser";

class App extends React.Component {
  //one liner is doing the ctor job
 state = {lat: null,errorMsg:'' };

  //ComponentLifyCycle
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
        position => this.setState({ lat: position.coords.latitude }),
        err => this.setState({ errorMsg: err.message })
        
      );
  }
  componentDidUpdate(){
    console.log('Component updated!');
  }

  renderContent(){
    if(this.state.errorMsg && !this.state.lat){
      return <div>Error: {this.state.errorMsg}</div>;
  }

  if(!this.state.errorMsg && this.state.lat){
      return <SeasonDisplay lat={this.state.lat}/>
  }
  return <Spinner message="Please accept location request!"/>;
  }

  //render gets called almost all the time
  render() {
  
  return (
    <div className="border red">
      {this.renderContent()}
    </div>
  );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
