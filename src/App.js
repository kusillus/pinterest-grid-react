import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';


class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      baseUrl: 'https://rickandmortyapi.com/api/',
      data: [],
      columns: 0
    }
    this.renderList = this.renderList.bind(this)
    this.screenWith = this.screenWith.bind(this)
  }
  componentDidMount() {
    window.addEventListener("resize", this.screenWith);
    axios.get(this.state.baseUrl + 'character')
    .then(res => {
      this.screenWith();
      this.setState({data: res.data.results})
    })
  }
  componentWillUnmount() {
    window.removeEventListener('resize',this.screenWith);
  }
  screenWith() {
    let width = window.innerWidth
    if(width >= 1100) {
      this.setState({columns: 5})
    } else if (width < 1100 && width >= 600){
      this.setState({columns: 4})
    } else if(width < 600 && width >= 350){
      this.setState({columns: 3})
    } else {
      this.setState({columns: 1})
    }
    console.log(this.state.columns)
  }
  renderList(){
    if(this.state.data.length === 0) {
      return(
        <div>aun no hay data</div>
      )
    } else {
      return (
        <Content columns={this.state.columns} data={this.state.data}/>
      )
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="body__container" style={{'gridTemplateColumns': 'repeat('+this.state.columns+',1fr)'}}>
          {this.renderList()}
        </div>
      </div>
    );
  }
}

export default App;
