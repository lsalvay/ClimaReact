import React,{Component} from 'react';

export default class Clima extends Component {
    mostrarResultado = () => {
        
        const {name, weather, main} = this.props.resultado;
        
        if(!name || !weather || !main) return null;
        
        const kelvin = 273.15;
        const urlIcono = `http://openweathermap.org/img/w/${weather[0].icon}.png`;

        return (
            <div>
                <div className="row">
                    <div className="col">
                        El clima en {name} es:
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>
                            Actual: {(main.temp - kelvin).toFixed(2)} &deg;C 
                            <img src={urlIcono} alt="" />
                        </p>
                        <p>
                            Max: {main.temp_max - kelvin} &deg;C 
                        </p>
                        <p>
                            Min: {main.temp_min - kelvin} &deg;C 
                        </p>
                    </div>
                </div>
            </div>
            
        ); 
    }
    render() {
        return (
            <div className="container">
                {this.mostrarResultado()}
            </div>
        );
    }
}