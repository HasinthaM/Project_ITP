import React, { useState } from 'react'
import { useFormik } from 'formik'
import "./ModelPopup.css";
import { axiosPut } from "../../../axiosServices";
import { toast } from "react-hot-toast";


// Function to handle editing employee details
const EditDetailsModal = ({ empById, setEditModal }) => {
    const { firstname, lastname, email, phone, job, dateofjoining, image, dateofbirth } = empById
    //const date = new Date(dateofjoining)
    const [loading, setLoading] = useState(false)
    const handleEdit = async (values) => {
        setLoading(true)
        try {
            const res = await axiosPut(`/employee/${empById._id}`, values)
            setLoading(false)
            setEditModal(false)
            console.log(res)
            toast.success("Update Employee details Successfully!", {
                duration: 4000,
                position:'top-right'
              });

        }
        catch (err) {
            console.log(err)
            toast.error("Error : Cann't Update Employee Details.please try again!", {
                duration: 4000,
                position:'top-right'
              });
        }
    }
    // Formik form setup
    const formik = useFormik({
        initialValues: {
            firstname,
            lastname,
            email,
            phone,
            job,
            dateofjoining,
            image,
            dateofbirth,
        },
        onSubmit: values => {
            handleEdit(values)

        }
    })
    console.log(formik.initialValues)


    return (
        <div className="modalContainer">
            <form action="" onSubmit={formik.handleSubmit}>
                <div className="modalBox">
                    <div className="modalHeader">
                        <h2>New Employee Details</h2>
                    </div>
                    <div className="modalInner"

                    >
                        <div className="input-container">
                            <div className="input-box">
                                <label htmlFor="">First Name</label>
                                <input 
                                    type="text"  
                                    name="firstname"
                                    required
                                    defaultValue={firstname}
                                    onChange={formik.handleChange}
                                    values={formik.values.firstname}
                                    onKeyDown={(e) => {
                                        const key = e.key;
                                        // Allow only alphabetic characters (A-Z, a-z) and space (32)
                                        if (
                                          (key < 'A' || key > 'Z') &&
                                          (key < 'a' || key > 'z') &&
                                          key !== ' '
                                        ) {
                                          e.preventDefault(); // Prevent input of numbers and special characters
                                        }
                                      }}
                                />
                            </div>
                            <div className="input-box">
                                <label htmlFor="">Last Name</label>
                                <input type="text" name="lastname"
                                    required
                                    defaultValue={lastname}
                                    onChange={formik.handleChange}
                                    values={formik.values.lastname}
                                    onKeyDown={(e) => {
                                        const key = e.key;
                                        // Allow only alphabetic characters (A-Z, a-z) and space (32)
                                        if (
                                          (key < 'A' || key > 'Z') &&
                                          (key < 'a' || key > 'z') &&
                                          key !== ' '
                                        ) {
                                          e.preventDefault(); // Prevent input of numbers and special characters
                                        }
                                      }}
                                />
                            </div>
                        </div>
                        <div className="input-box">
                                <label htmlFor="">Image</label>
                                <input type="text" name="lastname"
                                    required
                                    defaultValue={image}
                                    onChange={formik.handleChange}
                                    values={formik.values.image}
                                />
                            </div>

                        <div className="input-container">
                            <div className="input-box">
                                <label htmlFor="">Email Address</label>
                                <input type="email" name="email"
                                    required
                                    defaultValue={email}
                                    onChange={formik.handleChange}
                                    values={formik.values.email}
                                />
                            </div>
                            <div className="input-box">
                                <label htmlFor="">Phone</label>
                                <input type="text" name="phone"
                                    required
                                    defaultValue={phone}
                                    onChange={formik.handleChange}
                                    values={formik.values.phone}
                                />
                            </div>
                        </div>
                        <div className="input-box">
                            <label htmlFor="">Job-position</label>
                            <input type="text" name="job"
                                required
                                defaultValue={job}
                                onChange={formik.handleChange}
                                values={formik.values.job}
                            />
                        </div>
                        <div className="input-box">
                            <label htmlFor="">Date of Joining</label>
                            <input type="date" name="dateofjoining"
                                required
                                defaultValue={dateofjoining}
                                onChange={formik.handleChange}
                                values={formik.values.dateofjoining}
                            />
                        </div>
                    </div>
                    <div className="modalFooter">
                        <button  className="add-btn" type="submit">{loading ? 'Editing' : 'Edit and Save'}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditDetailsModal;