import axios from "axios";

const Employee_Api_url="http://localhost:8080/api/v1/getAllEmployees";
const Employee_Api_POST_url="http://localhost:8080/api/v1/save";
const Employee_Api_GETBYID_url="http://localhost:8084/api/v1/findById/";


class EmployeeService{
    static getEmployees(){
        return axios.get(Employee_Api_url);
    }
    static createEmployee(employee){
        return axios.post(Employee_Api_POST_url,employee);
    }
    static getEmployeeById(employeeId){
        return axios.get(Employee_Api_GETBYID_url+''+employeeId);
    }
}
export default EmployeeService;
