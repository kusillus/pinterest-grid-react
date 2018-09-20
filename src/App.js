import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      baseUrl: 'https://rickandmortyapi.com/api/',
      data: [],
      columns: 1
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
    } else if (width < 1100 && width >= 700){
      this.setState({columns: 4}) 
    } else if(width < 700 && width >= 500){
      this.setState({columns: 3})
    } else if(width < 500 && width >= 350){
      this.setState({columns: 2})
    } else {
      this.setState({columns: 1})
    }
  }
  renderList(){
    if(this.state.data.length === 0) {
      return(
        <div className="body__empty">Cargando data</div>
      )
    } else {
      return (
        <Content className="holi" columns={this.state.columns} data={this.state.data}/>
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
        <Footer/>
      </div>
    );
  }
}

export default App;
