import React, {Component} from 'react';
import '../css/App.css';
import Header from '../componentes/Header';
import Formulario from '../componentes/Formulario';
import Error from '../componentes/Error';
import Clima from '../componentes/Clima';

class App extends Component {

  state = {
    error: '',
    consulta:{},
    resultado:{}
  }
  componentDidMount(){
    this.setState({
      error: false
    })
  }

  componentDidUpdate(prevProps, prevState) {
    
    if(prevState.consulta !== this.state.consulta){
      this.consultarApi();
    }
    
  }

  consultarApi = () => {
    const {ciudad, pais} = this.state.consulta;
    if(!ciudad || !pais) return null;
    const appID = 'a938c2848330ec7af9dd134693b6f5b2';
    let apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appID=${appID}`;
    
    fetch(apiURL)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(datos => {
        
        this.setState({
          resultado: datos
        })
      })
      .catch(error =>{
        console.log(error);
      })


  }

  datosConsulta = respuesta => {
    

    if(respuesta.ciudad === "" || respuesta.pais===""){
      this.setState({
        error: true
      })
    }else{
      this.setState({
        consulta: respuesta,
        error: false
      })
      
    }

  }
  render(){

    const error = this.state.error;
    let resultado;
    if(error){
      resultado = <Error mensaje="Ambos Campos son obligatorios" />
     
    } 
    else{
      resultado = <Clima resultado ={this.state.resultado} />
    }

    return (
      <div className="App">
        <Header 
          titulo="Clima React"
        />
        <Formulario
          datosConsulta={this.datosConsulta}
          

        />
        {resultado}
        
      </div>
    );
  }
}

export default App;
