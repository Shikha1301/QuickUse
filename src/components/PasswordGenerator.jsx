import React from 'react';
import {useState} from 'react';
import { PasswordService } from '../services/PasswordService';

let PasswordGenerator = () =>{
    let[state, setState] = useState({
        generatedPassword: '',
        passwordLength: 20, 
        symbol :false,
        number : false,
        lower :false,
        upper: false

    });

    let updateInput = (event) =>{
        setState({
            ...state,
            [event.target.name]:event.target.value
        })
    };
    let updateCheck = (event) =>{
        setState({
            ...state,
            [event.target.name] : event.target.checked
        })
    };

    let submit = (event) =>{
        event.preventDefault();
        let passwordObj = PasswordService.getPasswordObj(state);
        let thePassword = PasswordService.generatePassword(passwordObj, state.passwordLength);
        // console.log(thePassword);
        setState({...state, generatedPassword: thePassword})
    };
    return(
        <React.Fragment>
        
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card shadow-lg bg-white rounded">
                            <div className="card-header  bg-primary text-white p-3">
                                <p className="h4">Password Generator</p>
                            </div>
                            <div className="card-body bg-info ">
                                <form onSubmit = {submit}>
                                    <div className="mb-2">
                                        <div className="input-group">
                                            <span className="input-group-text">Password</span>
                                            <input 
                                            value={state.generatedPassword}
                                            onChange = {updateInput}
                                            name = "generatedPassword"
                                            type="text" className = "form-control" placeholder="Generated Password" />
                                            <span className="input-group-text"><i className="fa fa-clipboard"></i></span>

                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="input-group">
                                            <input 
                                            required ={true}
                                            value={state.passwordLength}
                                            onChange = {updateInput}
                                            name = "passwordLength"
                                            type="number" className = "form-control" placeholder = "Password Length"/>
                                            <span className="input-group-text">Password Length</span>
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="input-group">
                                            <span className="input-group-text bg-white">
                                                <input
                                                onChange = {updateCheck} 
                                                name = "symbol"
                                                type="checkbox" className = "form-check-input"/>
                                            </span>
                                            <input type="text" disabled ={true} className = "form-control" placeholder = "Symbols"/>
                                        </div>
                                    </div>

                                    <div className="mb-2">
                                        <div className="input-group">
                                            <span className="input-group-text bg-white">
                                                <input 
                                                onChange = {updateCheck} 
                                                name = "number"
                                                type="checkbox" className = "form-check-input"/>
                                            </span>
                                            <input type="text" disabled ={true} className = "form-control" placeholder = "Numbers"/>
                                        </div>
                                    </div>

                                    <div className="mb-2">
                                        <div className="input-group">
                                            <span className="input-group-text bg-white">
                                                <input 
                                                onChange = {updateCheck} 
                                                name = "lower"
                                                type="checkbox" className = "form-check-input"/>
                                            </span>
                                            <input type="text" disabled ={true} className = "form-control" placeholder = "Lowercase Letters"/>
                                        </div>
                                    </div>

                                    <div className="mb-2">
                                        <div className="input-group">
                                            <span className="input-group-text bg-white">
                                                <input
                                                onChange = {updateCheck} 
                                                name = "upper"
                                                type="checkbox" className = "form-check-input"/>
                                            </span>
                                            <input type="text" disabled ={true} className = "form-control" placeholder = "Uppercase Letters"/>
                                        </div>
                                    </div>

                                    <div className="mb-2">
                                        <input type="Submit" value="Generate" className =" btn btn-primary"/>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}; 

export default PasswordGenerator;
