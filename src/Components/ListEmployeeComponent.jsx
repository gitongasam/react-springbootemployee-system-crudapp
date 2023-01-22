import React, { Component } from 'react'
import { Link } from "react-router-dom";

import EmployeeService from '../Service/EmployeeService'
import setState from "react"


export default class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            employees:[]
        }
        this.addEmployee=this.addEmployee.bind(this);
        this.editEmployee=this.editEmployee.bind(this);
    }

    addEmployee(){
        this.props.history.push("/add-employee");
    }
  
    editEmployee(id){
     this.props.history.push(`/update-employee/${id}`);
    }
    


    // // calling apis
    componentDidMount(){
           EmployeeService.getEmployees().then((res)=>{
            this.setState({employees: res.data});
           });
    }
   
  render() {
    return (
        <div>
        
            <h2 className='text-center'>Employee List</h2>
            <div className='row' >
            <Link to="/add-employee" className="btn btn-primary">
            Add employee</Link>
            </div><br />
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th> First Name</th>
                            <th> last Name</th>
                            <th> email Id</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(
                                employees=>
                                <tr key={employees.id}>
                                    <td>{employees.firstName}</td>
                                    <td>{employees.lastName}</td>
                                    <td>{employees.email}</td>
                                    <td>
                                    <button onClick={()=>this.editEmployee(employees.id)} className="btn btn-info">Update employee</button>                                    </td>
                             </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
  }
}


