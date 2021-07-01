import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';


class Football extends React.Component{
  shoot = (a,b) =>{
    alert(b.type);
  }
  render(){
    return (
      <button onClick={this.shoot.bind(this,"Goals")} >Take the shoot !</button>
    )
  }
}
ReactDOM.render(<Football/>, document.getElementById('root'))
class Form extends React.Component{
  constructor(pros){
    super(pros);
    this.state = { 
      username:'',
      age: null
    };
  }
  myChangeHandler = (event) =>{
      let name = event.target.name;
      let val = event.target.value;
      this.setState({[name] : val});
  }
  mySubmitHandler = (event) =>{
    event.preventDefault();
    let age = this.state.age;
    if(!Number(age)){
      alert("Your age must be a number");
    }
    alert('Hello ' + this.state.username+ ' ' + this.state.age +' age');
  }
  render(){
    let header = '';
    if(this.state.username){
      header = <h2>Hello {this.state.username} {this.state.age}</h2>
    }else{
      header = '';
    }
    return (
      <form onSubmit = {this.mySubmitHandler}>
        <h2>Test Form</h2>
        <p>Ho ten:</p>
        <input 
        id="hoten" 
        type="text" 
        placeholder="Ho ten"
        name="username"
        onChange={this.myChangeHandler}
        ></input>
        <p>Tuoi:</p>
        <input 
        id="age" 
        type="text" 
        placeholder="Age"
        name="age"
        onChange={this.myChangeHandler}
        ></input>
        <br/>
        <button type="submit">Xac nhan</button>
        {header}
      </form>
    );
  }
}
ReactDOM.render(<Form/>, document.getElementById('form'));


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
