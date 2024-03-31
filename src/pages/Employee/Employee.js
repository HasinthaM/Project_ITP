import { Box } from "@mui/material";
import E_register from "./E_register";
import E_table from "./E_table";
import Axios from "axios";
import {useEffect, useState} from "react";



const Employee = () =>{  

  const [employee, setEmployee] = useState([]);
  const [submitted, setsubmitted] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState({});
  const[isEdit , setIsEdit] = useState(false);

  useEffect(() => {
    getEmployee();
  }, []);

  const getEmployee = () => {
    Axios.get('http://localhost:3001/api/employee')
      .then(response => {
          setEmployee(response.data?.response || []);
      })
      .catch(error => {
        console.error("Axios Error : ", error);
      })
  }

  const addEmployee = (data) => {
    setsubmitted(true);
    
    const payload = {
      id : data.id,
      name : data.name,
    }

    Axios.post('http://localhost:3001/api/createemployee', payload)
    .then(response => {
      getEmployee();
      setsubmitted(false);
      isEdit(false);
    })
    .catch(error => {
      console.error("Axios Error : ", error);
    });
  }

  const updateEmployee = (data) => {
    setsubmitted(true);

    const payload = {
      id : data.id,
      name : data.name,
    }

    Axios.post('http://localhost:3001/api/updateemployee', payload)
    .then(response => {
      getEmployee();
      setsubmitted(false);
      isEdit(false);

    })
    .catch(error => {
      console.error("Axios Error : ", error);
    });

  }

  const deleteEmployee = (data) => {
    Axios.post('http://localhost:3001/api/deleteemployee', data)
    .then(() => {
      getEmployee();

    })
    .catch(error => {
      console.error("Axios Error : ", error);
    });

  }

    return(
        <Box
          sx={{
            width: 'calc(100% - 100px)',
            margin : 'auto',
            marginTop : '100px'

          }}
        >
          <E_register 
            addEmployee={addEmployee}
            updateEmployee={updateEmployee}
            submitted={submitted}
            data = {selectedEmployee}
            isEdit={isEdit}
          />
          

          <E_table
            rows={users}
            selectedEmployee = {data => {
               selectedEmployee(data);
              setIsEdit(true);
            }}
            deleteEmployee={data => window.confirm('Are you sure?') && deleteEmployee(data)}
           /> 

        </Box>

    );
}

export default Employee;