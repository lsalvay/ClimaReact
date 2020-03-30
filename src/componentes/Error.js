import React,{Component} from 'react';

export default class Error extends Component {

    render() {
        return (
            <div className="row">
                <div className="col alert alert-danger">
                    {this.props.mensaje}
                </div>  
            </div>
        );
    }
}
