import React from 'react';
import logo from './logo.svg';
import './App.css';

// function HelloWorld(props) {

//   console.log(props)

//   return(
    
    
//   );
// }

class HelloWorld extends React.Component {

  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show })
  }

  render(){

    if( this.state.show ) {

      return(
        <div id='hello'>
              <h3>{this.props.subtitle}</h3>
              <p>This is my component: {this.props.myTexto} </p>
              <button onClick={ this.toggleShow }>Toggle Show</button>
            </div>
        );

    } else {
      return  <div>
          <h1>No hay elementos disponibles</h1>
      <button onClick={ this.toggleShow } >Toogle Show</button>
        </div>
      
    }


    
  }
}

// const App = () => {
//   return (
//     <div>Hello World <HelloWorld /><HelloWorld /></div>
//   );
// }

// class App extends React.Component {
//   render() {
//     return(
//       <div>This is my class</div>
//     )
//   }
// }

function App() {
  return (
    <div>Hello World 
      <HelloWorld myTexto="Hello Fazt" subtitle="lorem" />
      <HelloWorld myTexto="Hello Fazt 2" subtitle="lreom 2" />
      <HelloWorld myTexto="Hello Fazt 3" subtitle="lreom 3" />
    </div>
  );
}



export default App;
