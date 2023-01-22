import React, { Component } from 'react'
import EmployeeService from '../Service/EmployeeService';


export default class UpdateEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            firstName:"",
            lastName:"",
            email:""

        }
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    } 
    updateEmployee=(e)=>{
        e.preventDefault();
        let  employee={firstName:this.state.firstName,lastName:this.state.lastName, email:this.state.email};
        console.log('employees=>' + JSON.stringify(employee))
        EmployeeService.createEmployee(employee).then(res=>{
            this.props.history.push('/employee');
        })
    }
 
    changeFirstNameHandler(event){
        this.setState({firstName: event.target.value});
    }
    changeLastNameHandler(event){
        this.setState({lastName: event.target.value});
    }
    changeEmailHandler(event){
        this.setState({email: event.target.value});
    }
    cancel(){
        this.props.history.push('/employee');       
    }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then((res)=>{
            let employee=res.data;
            this.setState({firstName: employee.firstName,
                lastName: employee.lastName,
                email:employee.email
            });
        });
        
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
                            <input  placeholder='first name'  name="firstName" className='form-control' value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                        </div>
                        <div className='form-group'>
                            <label>Last Name</label>
                            <input placeholder='last name' name="lastName" className='form-control' value={this.state.lastName} onChange={this.changeLastNameHandler} />
                        </div>
                        <div className='form-group'>
                            <label>Last Email</label>
                            <input placeholder='email'  name="email" className='form-control' value={this.state.email} onChange={this.changeEmailNameHandler} />
                        </div>
                        <button className='btn btn-success' onClick={this.updateEmployee}>update employee</button>
                        <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:'10px'}}>cancel</button>

                    </form>
                </div>
            </div>
        </div>

       </div>
      </div>
    )
   
  }
}



