import React, { useState } from 'react';
import BackButton from '../../components/Ticket/BackButton';
import Spinner from '../../components/Ticket/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateTicketRecords= () => {
  const [t_id, setT_id] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [issueType, setIssueType] = useState('');
  const [issue, setIssue] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveTicket = () => {

    // Ticket ID validation
    if (!/^\d+$/.test(t_id)) {
      enqueueSnackbar('Please enter a valid number for Ticket Id', { variant: 'error' });
      return;
    }
    // Name validation
    if (!/^[A-Za-z\s]+$/.test(name)) {
      enqueueSnackbar('Please enter words only for Name', { variant: 'error' });
      return;
    }

   // Email validation
if (!/\S+@\S+\.\S+/.test(email)) {
    enqueueSnackbar('Please enter a valid email address', { variant: 'error' });
    return;
  }
  
    // IssueType validation
    if (!/^[A-Za-z\s]+$/.test(issueType)) {
        enqueueSnackbar('Please enter words only for issue Type', { variant: 'error' });
        return;
      }

    // Issue validation
    if (!/^[A-Za-z\s]+$/.test(issue)) {
        enqueueSnackbar('Please enter words only for Issue', { variant: 'error' });
        return;
      }
    const data = {
      t_id,
      name,
      email,
      issueType,
      issue,

    };
    setLoading(true);
    axios
      .post('http://localhost:3001/api/ticket', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('ticket Created successfully', { variant: 'success' });
        navigate('/ticket');
      })
      .catch((error) => {
        setLoading(false);
        if (error.response && error.response.data && error.response.data.errors) {
          const tIdErrors = error.response.data.errors.t_id;
          if (tIdErrors) {
            enqueueSnackbar(tIdErrors.join(', '), { variant: 'error' });
          } else {
            enqueueSnackbar('An error occurred while creating ticket', { variant: 'error' });
          }
        } else {
          enqueueSnackbar('Ticket ID Have A Problem, Use New Ticket ID', { variant: 'error' });
        }
        console.log(error);
      });
  };



  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4 text-center'>Create Ticket</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
      <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Ticket ID</label>
          <input
            type='text'
            value={t_id}
            onChange={(e) => setT_id(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Name</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Email</label>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Issue Type</label>
          <input
            type='text'
            value={issueType}
            onChange={(e) => setIssueType(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Issue</label>
          <input
            type='text'
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        
        </div>

        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveTicket}>
          Add
        </button>
      </div>
    </div>
  );
}
export default CreateTicketRecords