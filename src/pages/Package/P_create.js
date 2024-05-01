import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Select, Checkbox, Button, Row, Col } from "antd";
import axios from "axios";

import "../../styles/Package/P_create.css";

const { Option } = Select;

const P_create = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:3001/api/package/save",
        values
      );
      if (response.data.Success) {
        alert("Package created successfully!");
        form.resetFields();
      } else {
        alert("Failed to create package.");
      }
    } catch (error) {
      console.error(error);
      alert(
        "An error occurred while creating the package. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  const provinces = [
    "Western Province",
    "Central Province",
    "Southern Province",
    "Northern Province",
    "Eastern Province",
    "North Western Province",
    "North Central Province",
    "Uva Province",
    "Sabaragamuwa Province",
  ];

  const vehicles = [
    { type: "Car", seats: 4 },
    { type: "Van", seats: 10 },
    { type: "Bike", seats: 2 },
    { type: "Bicycle", seats: 1 },
    { type: "Luxury Bus", seats: 25 },
  ];

  const mealOptions = ["Breakfast", "Lunch", "Tea", "Dinner"];

  return (
    <div className="package-form1">
      <h2>Create Package</h2>
      <Form
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
        initialValues={{
          pID: "",
          province: "",
          packageName: "",
          vehicle: "",
          meals: [],
          accommodation: "",
          noOfPerson: "",
          places: "",
          activities: "",
          price: "",
        }}
      >
        <Row gutter={[26, 26]}>
          {" "}
          {/* Adjusted gap between columns */}
          <Col span={8}>
            <Form.Item
              label="Package ID"
              name="pID"
              rules={[{ required: true, message: "Please enter Package ID" }]}
            >
              <Input placeholder="Package ID" />
            </Form.Item>
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
              label="Package Name"
              name="packageName"
              rules={[{ required: true, message: "Please enter Package Name" }]}
            >
              <Input placeholder="Package Name" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Select Vehicle"
              name="vehicle"
              rules={[{ required: true, message: "Please select Vehicle" }]}
            >
              <Select placeholder="Select Vehicle">
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
              <Input type="number" min={1} />
            </Form.Item>
            <Form.Item
              label="Places"
              name="places"
              rules={[{ required: true, message: "Please enter Places" }]}
            >
              <Input placeholder="Places" />
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
              rules={[{ required: true, message: "Please enter Activities" }]}
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
                <Option value="3 Star Hotel">3 Star Hotel</Option>
                <Option value="5 Star Hotel">5 Star Hotel</Option>
                <Option value="Annexe">Annexe</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Price"
              name="price"
              rules={[{ required: true, message: "Please enter Price" }]}
            >
              <Input placeholder="Price" />
            </Form.Item>
          </Col>
        </Row>
        <div style={{ textAlign:"center",marginTop: "20px"}}>
          <Button type="primary" htmlType="submit" loading={loading}>
            Create Package
          </Button>
        </div>
        <div
          style={{ textAlign: "left", marginTop: "5px", marginLeft: "308px" }}
        >
          <Button
            type="primary"
            onClick={() => navigate("/pdashboard")}
            style={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid black",
            }}
            className="dash-button"
          >
            All Packages
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default P_create;
