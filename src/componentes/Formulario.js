import React, { Component } from 'react';

class Formulario extends Component {

    ciudadRef = React.createRef();
    paisRef = React.createRef();

    buscarClima = (e) => {
        e.preventDefault();
        const respuesta = {
            ciudad : this.ciudadRef.current.value,
            pais : this.paisRef.current.value
        }
        //console.log(respuesta);
        this.props.datosConsulta(respuesta);

    }
    
    render() {
        return (
            <div>
                
                <form onSubmit={this.buscarClima} className="text-center border border-light p-5">
                    
                    <select ref={this.ciudadRef} className="browser-default custom-select mb-4">
                        <option value="" defaultValue>Elige una ciudad</option>
                        <option value="CORDOBA" >Córdoba</option>
                        <option value="ROSARIO">Santa Fe</option>
                        <option value="MENDOZA">Mendoza</option>
                        <option value="JUJUY">Jujuy</option>
                    </select>
                    <select ref={this.paisRef} className="browser-default custom-select mb-4">
                        <option value="" defaultValue>Elige un país</option>
                        <option value="AR">Argentina</option>
                        <option value="BR">Brasil</option>
                        <option value="CO">Colombia</option>
                        <option value="CH">Chile</option>
                    </select>

                    <button className="btn btn-info btn-block" type="submit">Consultar</button>

                </form>
                
            </div>
        );
    }
}

export default Formulario;