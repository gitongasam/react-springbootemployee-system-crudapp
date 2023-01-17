import React, { Component } from 'react'
import EmployeeService from '../Service/EmployeeService'

export default class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            employees:[]
        }
    }
    // calling apis
    componentDidMount(){
           EmployeeService.getEmployees().then((res)=>{
            this.setState({employees:res.data});
           });
    }
  render() {
    return (
        <div>
        
            <h2 className='text-center'>Employee List</h2>
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
