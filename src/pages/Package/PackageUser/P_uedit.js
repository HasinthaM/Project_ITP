import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Input, Select, Checkbox, Button, Row, Col, DatePicker } from "antd";
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import '../../../styles/Package/P_uedit.css';
import PUSidebar from '../../../components/Package/PUSidebar';

const { Option } = Select;

export default function P_uedit({ id }) {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [values, setValues]= useState(null);

    const provinces = [
        'Western Province',
        'Central Province',
        'Southern Province',
        'Northern Province',
        'Eastern Province',
        'North Western Province',
        'North Central Province',
        'Uva Province',
        'Sabaragamuwa Province',
    ];

    const districts = {
        'Western Province': ['Colombo', 'Gampaha', 'Kalutara'],
        'Central Province': ['Kandy', 'Matale', 'Nuwara Eliya'],
        'Southern Province': ['Galle', 'Matara', 'Hambantota'],
        'Northern Province': ['Jaffna', 'Kilinochchi', 'Mannar', 'Mullaitivu', 'Vavuniya'],
        'Eastern Province': ['Trincomalee', 'Batticaloa', 'Ampara'],
        'North Western Province': ['Puttalam', 'Kurunegala'],
        'North Central Province': ['Polonnaruwa', 'Anuradhapura'],
        'Uva Province': ['Badulla', 'Monaragala'],
        'Sabaragamuwa Province': ['Ratnapura', 'Kegalle']
    };

    const vehicles = [
        { type: 'Car', seats: 4 },
        { type: 'Van', seats: 10 },
        { type: 'Bike', seats: 2 },
        { type: 'Bicycle', seats: 1 },
        { type: 'Luxury Bus', seats: 25 },
    ];

    const accommodations = ['3 Star Hotel', '5 Star Hotel', 'Annexe'];
    const mealOptions = ['Breakfast', 'Lunch', 'Tea', 'Dinner'];

    useEffect(() => {
        axios.get(`http://localhost:3001/api/user/${id}`)
          .then(res => {
            const packageData = res.data.package;
            setValues({
              province: packageData.province,
              district: packageData.district,
              duration: [moment(packageData.duration.start), moment(packageData.duration.end)],
              noOfPerson: packageData.noOfPerson,
              vehicle: packageData.vehicle,
              places: packageData.places,
              meals: packageData.meals,
              activities: packageData.activities,
              accommodation: packageData.accommodation,
              price: packageData.price,
            });
          })
          .catch(err => console.log(err));
      }, [id]);

    const handleVehicleChange = (value) => {
        const selectedVehicle = vehicles.find((vehicle) => vehicle.type === value);
        if (selectedVehicle) {
            form.setFieldsValue({ noOfPerson: selectedVehicle.seats });
        }
    };

    // Define a basic validateDuration function
    const validateDuration = (_, value) => {
        if (!value || value.length !== 2) {
            return Promise.reject(new Error('Please select start and end dates.'));
        }
        const [start, end] = value;
        if (!start || !end) {
            return Promise.reject(new Error('Please select start and end dates.'));
        }
        if (start.isAfter(end)) {
            return Promise.reject(new Error('Start date cannot be after end date.'));
        }
        return Promise.resolve();
    };

    const onFinish = async (values) => {
        try {
            setLoading(true);
            await axios.put(`http://localhost:3001/api/package/update/${id}`, values);
            alert('Package updated successfully!');
            navigate('/udashboard');
        } catch (error) {
            console.error('Update failed:', error);
            alert('Failed to update package. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <PUSidebar />
            <div className="cus-form2">
                <h2 className="pc-tittle">Customization</h2>
                <Form
                    form={form}
                    onFinish={onFinish}  // Corrected
                    layout="vertical"
                    initialValues={values}
                >
                    <Row gutter={[26, 26]}>
                        <Col span={8}>
                            <Form.Item
                                label="Select Province"
                                name="province"
                                rules={[{ required: true, message: "Please select Province" }]}
                            >
                                <Select placeholder="Select Province">
                                    {provinces.map((province) => (
                                        <Option key={province} value={province}>
                                            {province}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="Select District"
                                name="district"
                                rules={[{ required: true, message: "Please select District" }]}
                            >
                                <Select placeholder="Select District">
                                    {values && values.province &&
                                        districts[values.province].map((district) => (
                                            <Option key={district} value={district}>
                                                {district}
                                            </Option>
                                        ))}
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="Places"
                                name="places"
                                rules={[
                                    {required: true, message: "Please enter Places"},
                                    { pattern: /^[a-zA-Z\s]*$/, message: "Only letters and spaces are allowed" }
                                ]}
                            >
                                <Input placeholder="Places" />
                            </Form.Item>
                            <Form.Item
                                label="Duration"
                                name="duration"
                                rules={[
                                    { required: true, message: "Please select Duration" },
                                    { validator: validateDuration } // You need to define validateDuration
                                ]}
                            >
                                <DatePicker.RangePicker style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Select Vehicle"
                                name="vehicle"
                                rules={[{ required: true, message: "Please select Vehicle" }]}
                            >
                                <Select
                                    placeholder="Select Vehicle"
                                    onChange={handleVehicleChange}
                                >
                                    {vehicles.map((vehicle) => (
                                        <Option key={vehicle.type} value={vehicle.type}>
                                            {vehicle.type}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="Number of Persons"
                                name="noOfPerson"
                                rules={[
                                    { required: true, message: "Please enter Number of Persons" },
                                ]}
                            >
                                <Input type="number" min={1} readOnly />
                            </Form.Item>
                            <Form.Item
                                label="Meals"
                                name="meals"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select Meals",
                                        type: "array",
                                    },
                                ]}
                            >
                                <Checkbox.Group options={mealOptions} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Activities"
                                name="activities"
                                rules={[
                                    {required: true,message: "Please enter Activities"},
                                    { pattern: /^[a-zA-Z\s]*$/, message: "Only letters and spaces are allowed" }
                                ]}
                            >
                                <Input placeholder="Activities" />
                            </Form.Item>
                            <Form.Item
                                label="Select Accommodation"
                                name="accommodation"
                                rules={[
                                    { required: true, message: "Please select Accommodation" },
                                ]}
                            >
                                <Select placeholder="Select Accommodation">
                                    {accommodations.map((accommodation) => (
                                        <Option key={accommodation} value={accommodation}>
                                            {accommodation}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="Price"
                                name="price"
                                rules={[
                                    { required: true, message: "Please enter Price" },
                                ]}
                            >
                                <Input placeholder="Price"  />
                            </Form.Item>
                        </Col>
                    </Row>
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <Button type="primary" htmlType="submit" loading={loading}>
                            Customize Package
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}
