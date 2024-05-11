import React, { useState } from 'react';
import Spinner from '../../components/Salary/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Pets from "../../Salaryimages/2.png";

const AddPaymentDetails = () => {
  const [cardholdername, setCardHolderName] = useState('');
  const [cardnumber, setCardNumber] = useState('');
  const [expirydate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    return `${year}-${month}`;
  };

  const handleSaveAddPaymentDetails = (e) => {
    e.preventDefault();

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
        enqueueSnackbar('Payment successful', { variant: 'success' });
        navigate('/invoice');
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const handleNameChange = (e) => {
    const { value } = e.target;
    const nameRegex = /^[a-zA-Z\s]*$/;
    if (nameRegex.test(value) || value === '') {
      setCardHolderName(value);
    }
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{4})/g, '$1 ');
    value = value.trim();
    value = value.slice(0, 19);
    setCardNumber(value);
  };

  const handleCVVChange = (e) => {
    const { value } = e.target;
    const cvvRegex = /^\d{0,3}$/;
    if (cvvRegex.test(value)) {
      setCVV(value);
    }
  };

  const handleExpiryDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const currentDate = new Date();

    if (selectedDate > currentDate && !isNaN(selectedDate)) {
      const year = selectedDate.getFullYear();
      let month = selectedDate.getMonth() + 1;
      month = month < 10 ? `0${month}` : month;
      const formattedExpiryDate = `${year}-${month}`;
      setExpiryDate(formattedExpiryDate);
    } else {
      setExpiryDate('');
    }
  };

  return (
    <div className="min-h-screen mt-36 mb-10">
      <div className="flex justify-center items-center gap-2">
        <div className="hidden lg:block">
          <img className="w-[400px] h-[450px] ml-60 mt-6" src={Pets} alt="" />
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
                  onChange={handleNameChange}
                />
              </div>
              <div>
                <h3 className="font-semibold text-slate-400 ml-1">Card number</h3>
                <input
                  className="bg-slate-100 p-3 rounded-lg w-[460px] h-11"
                  type="text"
                  placeholder="Card number"
                  value={cardnumber}
                  onChange={handleCardNumberChange}
                />
              </div>
              <div>
                <h3 className="font-semibold text-slate-400 ml-1">Expiry date</h3>
                <input
                  className="bg-slate-100 p-3 rounded-lg w-[460px] h-11"
                  type="month"
                  placeholder="expirydate"
                  value={expirydate}
                  onChange={handleExpiryDateChange}
                  min={getCurrentDate()}
                />
              </div>
              <div>
                <h3 className="font-semibold text-slate-400 ml-1">CVV</h3>
                <input
                  className="bg-slate-100 p-3 rounded-lg w-[460px] h-11"
                  type="text"
                  placeholder="CVV"
                  value={cvv}
                  onChange={handleCVVChange}
                />
              </div>
              <button
                className="bg-red-700 text-white p-3 rounded-lg w-[460px] h-11 hover:opacity-90"
                type="submit"
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
