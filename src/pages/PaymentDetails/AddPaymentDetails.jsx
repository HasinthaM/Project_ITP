import React, { useState } from 'react';
import Spinner from '../../components/Salary/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Pets from "../../Salaryimages/3.jpg";

const AddPaymentDetails = () => {
  const [cardholdername, setCardHolderName] = useState('');
  const [cardnumber, setCardNumber] = useState('');
  const [expirydate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveAddPaymentDetails = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    const data = {
      cardholdername,
      cardnumber,
      expirydate,
      cvv,
    };
    setLoading(true);
    axios
      .post('http://localhost:3001/api/payment', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('OrderForm Created successfully', { variant: 'success' });
        navigate('/home'); // Redirect to '/salary' page
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen mt-36 mb-10">
      <div className="flex justify-center items-center gap-2">
        <div className="hidden lg:block">
          <img className="w-[600px] h-[500px] ml-10 mt-6" src={Pets} alt="" />
        </div>

        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
          <div className="flex-1">
            <h1 className="text-3xl text-gray-800 font-serif">Add Payment details</h1>
            {loading ? <Spinner /> : ''}
            <form className="flex flex-col gap-4" onSubmit={handleSaveAddPaymentDetails}>
              <div>
                <h3 className="font-semibold text-slate-400 ml-1">Cardholder name</h3>
                <input
                  className="bg-slate-100 p-3 rounded-lg w-[460px] h-11"
                  type="text"
                  placeholder="Name"
                  value={cardholdername}
                  onChange={(e) => setCardHolderName(e.target.value)}
                />
              </div>
              <div>
                <h3 className="font-semibold text-slate-400 ml-1">Card number</h3>
                <input
                  className="bg-slate-100 p-3 rounded-lg w-[460px] h-11"
                  type="text"
                  placeholder="cardnumber"
                  value={cardnumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </div>
              <div>
                <h3 className="font-semibold text-slate-400 ml-1">Expiry date</h3>
                <input
                  className="bg-slate-100 p-3 rounded-lg w-[460px] h-11"
                  type="text"
                  placeholder="expirydate"
                  value={expirydate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
              </div>
             
              <div>
                <h3 className="font-semibold text-slate-400 ml-1">CVV</h3>
                <input
                  className="bg-slate-100 p-3 rounded-lg w-[460px] h-11"
                  type="text"
                  placeholder="cvv"
                  value={cvv}
                  onChange={(e) => setCVV(e.target.value)}
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

export default AddPaymentDetails;
