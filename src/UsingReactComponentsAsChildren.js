import React from 'react';

class UsingReactComponentsAsChildren extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'this is the state text'
    }
  }
  update(e){
    this.setState({txt: e.target.value})
  }
  render(){
    return (
      <div>
        <h1>{this.state.txt}</h1>
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
      </div>
    )
  }
}

const Widget = (props) =>
  <input type="text" onChange={props.update}/>

export default UsingReactComponentsAsChildren
