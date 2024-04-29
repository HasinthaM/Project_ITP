import { Box } from "@mui/material";
import DestinationForm from "./DestinationForm";
import DestinationTable from "./DestinationTable";
import Axios from "axios";
import {useEffect, useState} from "react";

const Destination = () => {

    const [destination, setDestination] = useState([]);
    const [submitted, setsubmitted] = useState(false);
    const [selectedDestination, setSelectedDestination] = useState({});
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        getDestination();
    }, []);

    const getDestination = () => {
        Axios.get('http://localhost:3001/api/destination')
          .then(response => {
            setDestination(response.data?.response || []);
          })
          .catch(error => {
            console.error("Axios Error : ", error);
          })
      }

      const addDestination = (data) => {
        setsubmitted(true);
        
        const payload = {
          id : data.id,
          title : data.title,
          description : data.description
        }
    
        Axios.post('http://localhost:3001/api/createdestination', payload)
        .then(response => {
          getDestination();
          setsubmitted(false);
          isEdit(false);
        })
        .catch(error => {
          console.error("Axios Error : ", error);
        })
      }

      const updateDestination = (data) => {
        setsubmitted(true);

        const payload = {
          id : data.id,
          title : data.title,
          description : data.description
        }

        Axios.post('http://localhost:3001/api/updatedestination', payload)
          .then(response => {
            getDestination();
            setsubmitted(false);
            isEdit(false);
          })
          .catch(error => {
            console.error("Axios Error : ", error);
          })
      }

      const deleteDestination = (data) => {
        Axios.post('http://localhost:3001/api/deletedestination', data)
          .then(() => {
            getDestination();
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
                    marginTop : '100px',
                    backgroundColor: '#f0f0f0',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                }}
            >
              <h1 style={{textAlign: 'center', marginBottom: '30px'}}>Destination Manager</h1>
            <DestinationForm 
                addDestination={addDestination}
                updateDestination={updateDestination}
                submitted={submitted}
                data = {selectedDestination}
                isEdit={isEdit}
                />
            <DestinationTable
                rows={destination} 
                selectedDestination={data => {
                  setSelectedDestination(data);
                  setIsEdit(true);
                }}
                deleteDestination={data => window.confirm('Are you sure?') && deleteDestination(data)}
                />

            </Box>

         );
}

export default Destination;