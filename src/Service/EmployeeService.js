import axios from "axios";

const Employee_Api_url="http://localhost:8081/api/v1/getAllEmployees";

class EmployeeService{
    getEmployees(){
        return axios.get(Employee_Api_url);
    }

}
export default new EmployeeService()