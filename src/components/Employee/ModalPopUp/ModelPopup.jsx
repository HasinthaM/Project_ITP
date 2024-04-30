import React, { useState } from "react";
import "./ModelPopup.css";
import { useFormik } from 'formik'
import { axiosPost } from "../../../axiosServices";
// import ImageUpload from "./ImageUpload";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';

const notify = () => toast("Employee Added Successfully!");

const ModelPopup = ({ setShowModal }) => {
  const [loading, setLoading] = useState(false)
  //const [imageURL, setImageURL] = useState('')
  //console.log(empById)

  const createEmployee = async (values) => {
    setLoading(true)
    try{
      const res = await axiosPost('/employee', values)
      console.log(res)
      setLoading(false)
      setShowModal(false)
    }
    catch(err){
      console.log(err)
    }
  }

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      job: '',
      dateofjoining: '',
      image: ''
    },
    onSubmit: values => {
      createEmployee(values)


    },
    validationSchema: Yup.object({
      firstname: Yup.string().required('First Name is required'),
      lastname: Yup.string().required('Last Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string().required('Phone is required'),
      phone: Yup.string().matches(/^[0-9]+$/, 'Phone must contain only numbers').required('Phone is required'),
      job: Yup.string().required('Job Position is required'),
      dateofjoining: Yup.date().required('Date of Joining is required'),
      image: Yup.string().required('Image is required')
    })
  })
  return (
    <div className="modalContainer">
<form action="" onSubmit={formik.handleSubmit}>
      <div className="modalBox">
        <div className="modalHeader">
          <h2>New Employee Details</h2>
        </div>
        {/* <ImageUpload setImageURL={setImageURL}/> */}
        
          <div className="modalInner"

          >
            <div className="input-container">
              <div className="input-box">
                <label htmlFor="">First Name</label>
                <input type="text" name="firstname"
                  required
                  onChange={formik.handleChange}
                  values={formik.values.firstname}
                />
              </div>
              <div className="input-box">
                <label htmlFor="">Last Name</label>
                <input type="text" name="lastname"
                  required
                  onChange={formik.handleChange}
                  values={formik.values.lastname}
                />
              </div>
            </div>
            <div className="input-box">
                <label htmlFor="">image</label>
                <input type="text" name="image"
                  required
                  onChange={formik.handleChange}
                  values={formik.values.image}
                />
              </div>

            <div className="input-container">
              <div className="input-box">
                <label htmlFor="">Email Address</label>
                <input type="email" name="email"
                  required
                  onChange={formik.handleChange}
                  values={formik.values.email}
                />
              </div>
              <div className="input-box">
                <label htmlFor="">Phone</label>
                <input type="text" name="phone"
                  required
                  onChange={formik.handleChange}
                  values={formik.values.phone}
                />
              </div>
              
            </div>
            <div className="input-box">
              <label htmlFor="">Job-position</label>
              <input type="text" name="job"
                required
                onChange={formik.handleChange}
                values={formik.values.job}
              />
            </div>
            <div className="input-box">
              <label htmlFor="">Date of Joining</label>
              <input type="date" name="dateofjoining"
                required
                onChange={formik.handleChange}
                values={formik.values.dateofjoining}
              />
            </div>
            <div className="modalFooter">
              <button onClick={notify} className="add-btn" type="submit">{loading ? 'Saving...' : 'Save Details'}</button>
              <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                
                />
            </div>

          </div>
        

      </div>
      </form>
    </div>
  );
};

export default ModelPopup;
