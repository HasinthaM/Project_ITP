
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../../components/Ticket/BackButton';
import Spinner from '../../components/Ticket/Spinner';
import { Link } from 'react-router-dom'

const ShowTicketRecords = () => {

  const [ticket, setTicket] = useState({});
  const [loading, setLoading] = useState(false);
  const { _id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3001/api/salary/${_id}`)
      .then((response) => {
        setTicket(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);


  return (
    <div className='bg-purple-300'>

    <div className='p-4 '>
      <BackButton />
      <h1 className='text-3xl my-4 text-center'>Show Ticket</h1>
      <Link to={`/ticket/details1/${_id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Client UI
        </Link>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 mx-auto bg-purple-100'>
          <div className='my-4'>
            
            <span className='text-xl mr-4 text-gray-500'>Ticket ID</span>
            <span>{ticket.t_id}</span>
          </div>
       
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Name</span>
            <span>{ticket.name}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Email</span>
            <span>{ticket.email}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Issue Type</span>
            <span>{ticket.issueType}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Issue</span>
            <span>{ticket.issue}</span>
          </div>
          
        </div>
      )}
      </div>
    </div>
  );
};


export default ShowTicketRecords