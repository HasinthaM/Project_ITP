import React, { useState } from 'react';
import BackButton from '../../components/Salary/BackButton';
import Spinner from '../../components/Salary/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateSalaryRecoard = () => {
  const [s_id, setS_id] = useState('');
  const [name, setName] = useState('');
  const [basicSalary, setBasicSalary] = useState('');
  const [attendance, setAttendance] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveSalary = () => {

    // Salary ID validation
    if (!/^\d+$/.test(s_id)) {
      enqueueSnackbar('Please enter a valid number for Salary Id', { variant: 'error' });
      return;
    }
    // Name validation
    if (!/^[A-Za-z\s]+$/.test(name)) {
      enqueueSnackbar('Please enter words only for Name', { variant: 'error' });
      return;
    }

    // Basic Salary validation
    if (!/^\d+$/.test(basicSalary)) {
      enqueueSnackbar('Please enter a valid number for Basic Salary', { variant: 'error' });
      return;
    }
    // Attendance validation
    if (!/^\d+$/.test(attendance) || parseInt(attendance) < 1 || parseInt(attendance) > 31) {
      enqueueSnackbar('Please enter a number between 1 and 31 for Attendance', { variant: 'error' });
      return;
    }
    const data = {
      s_id,
      name,
      basicSalary,
      attendance,

    };
    setLoading(true);
    axios
      .post('http://localhost:3001/api/salary', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Salary Created successfully', { variant: 'success' });
        navigate('/salarys');
      })
      .catch((error) => {
        setLoading(false);
        if (error.response && error.response.data && error.response.data.errors) {
          const sIdErrors = error.response.data.errors.s_id;
          if (sIdErrors) {
            enqueueSnackbar(sIdErrors.join(', '), { variant: 'error' });
          } else {
            enqueueSnackbar('An error occurred while creating salary', { variant: 'error' });
          }
        } else {
          enqueueSnackbar('Salary ID Have A Problem, Use New Salary ID', { variant: 'error' });
        }
        console.log(error);
      });
  };



  return (
    <div className='bg-purple-200 min-h-screen'>
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4 text-center'>Create Salary</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto bg-rose-100'>
      <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Salary ID</label>
          <input
            type='text'
            value={s_id}
            onChange={(e) => setS_id(e.target.value)}
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
          <label className='text-xl mr-4 text-gray-500'>Basic Salary</label>
          <input
            type='text'
            value={basicSalary}
            onChange={(e) => setBasicSalary(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Attendance</label>
          <input
            type='text'
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />

        </div>

        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveSalary}>
          Save
        </button>
      </div>
    </div>
    </div>
  );
}
export default CreateSalaryRecoard