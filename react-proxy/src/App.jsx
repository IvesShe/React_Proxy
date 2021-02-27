import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {

  getStudentData = ()=>{
    let url = 'http://localhost:3000/api1/students'
    axios.get(url).then(
      response => {console.log('成功了',response.data);},
      error => {console.log('失敗了',error);}
    )
  }

  getCarData = ()=>{
    let url = 'http://localhost:3000/api2/cars'
    axios.get(url).then(
      response => {console.log('成功了',response.data);},
      error => {console.log('失敗了',error);}
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>點我獲取學生數據</button>
        <button onClick={this.getCarData}>點我獲取汽車數據</button>
      </div>
    );
  }
}
