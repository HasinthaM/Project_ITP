import React, { useState } from 'react';
import Spinner from '../../components/Salary/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Pets from "../../Salaryimages/5.jpg";

const CreateOrderForm = () => {
  const [customername, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [billingaddress, setBillingAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  // Regex pattern for alphabetic characters and spaces only
  const nameRegex = /^[a-zA-Z\s]*$/;

  const handleSaveOrderForm = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    const data = {
      customername,
      phone,
      email,
      billingaddress,
    };
    setLoading(true);
    axios
      .post('http://localhost:3001/api/order', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('OrderForm Created successfully', { variant: 'success' });
        navigate('/paymentdetails'); // Redirect to '/paymentdetails' page
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const handleNameChange = (e) => {
    const { value } = e.target;
    // Check if the input matches the regex pattern
    if (nameRegex.test(value) || value === '') {
      setCustomerName(value);
    }
  };

  return (
    <div className="min-h-screen mt-36 mb-10">
      <div className="flex justify-center items-center gap-2">
        <div className="hidden lg:block">
          <img className="w-[400px] h-[450px] ml-60 mt-6" src={Pets} alt="" />
        </div>

        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10">
          <div className="flex-1">
            <h1 className="text-3xl text-gray-800 font-serif ">Fill the Order Form</h1>
            {loading ? <Spinner /> : ''}
            <form className="flex flex-col gap-6" onSubmit={handleSaveOrderForm}>
              <div>
                <h3 className="font-semibold text-slate-400 ml-1">Customer name</h3>
                <input
                  className="bg-slate-100 p-3 rounded-lg w-[460px] h-11"
                  type="text"
                  placeholder="Name"
                  value={customername}
                  onChange={handleNameChange} // Use the custom handler for name input
                />
              </div>
              <div>
                <h3 className="font-semibold text-slate-400 ml-1">Phone</h3>
                <input
                  className="bg-slate-100 p-3 rounded-lg w-[460px] h-11"
                  type="text"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <h3 className="font-semibold text-slate-400 ml-1">Email</h3>
                <input
                  className="bg-slate-100 p-3 rounded-lg w-[460px] h-11"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <select className="bg-slate-100 p-3 rounded-lg w-[460px] h-11 " id="type">
                <option value="">Select Countries</option>
                <option value="england">England</option>
                <option value="america">America</option>
                <option value="australiya">Australiya</option>
              </select>
              <div>
                <h3 className="font-semibold text-slate-400 ml-1">Billing Address</h3>
                <input
                  className="bg-slate-100 p-3 rounded-lg w-[460px] h-11"
                  type="text"
                  placeholder="Billing Address"
                  value={billingaddress}
                  onChange={(e) => setBillingAddress(e.target.value)}
                />
              </div>
              <button
                className="bg-red-700 text-white p-3 rounded-lg w-[460px] h-11 hover:opacity-90"
                type="submit" // Ensure button acts as a submit button
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrderForm;
