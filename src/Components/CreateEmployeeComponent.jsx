import React, { Component } from 'react'
import EmployeeService from '../Service/EmployeeService';
import { Link } from "react-router-dom";


export default class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            firstName:"",
            lastName:"",
            email:""

        }
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    } 
    saveEmployee=(e)=>{
        e.preventDefault();
        let  employee={firstName:this.state.firstName,lastName:this.state.lastName, email:this.state.email};
        console.log('employees=>' + JSON.stringify(employee));
        EmployeeService.createEmployee(employee).then(res=>{
            <Link to="/employee"></Link>
        });
    }
 
    changeFirstNameHandler=(event)=>{
        this.setState({firstName: event.target.value});
    }
    changeLastNameHandler=(event)=>{
        this.setState({lastName: event.target.value});
    }
    changeEmailHandler=(event)=>{
        this.setState({email: event.target.value});
    }
   
  render() {
    return (
      <div>
       <div className='container'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h3 className='text-c-bodyenter'>Add Employee</h3>
                <div className='card'>
                    <form action="">
                        <div className='form-group'>
                            <label>First Name</label>
                            <input  placeholder='first name'  name="firstName" className='form-control' required="true"
                            value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                        </div>
                        <div className='form-group'>
                            <label>Last Name</label>
                            <input placeholder='last name' name="lastName" className='form-control' required="true"
                            value={this.state.lastName} onChange={this.changeLastNameHandler} />
                        </div>
                        <div className='form-group'>
                            <label> Email</label>
                            <input placeholder='email'   name="email" className='form-control'required="true"
                             value={this.state.email} onChange={this.changeEmailHandler} />                    

                        </div>
                        <button className='btn btn-success' onClick={this.saveEmployee}>save</button>
                        <Link to="/" className="btn btn-danger"style={{marginLeft:'10px'}}>Cancel</Link>
                    </form>
                </div>
            </div>
        </div>

       </div>
      </div>
    )
   
  }
}


