import React, { useState } from "react";
import { Form, Input, Select, Checkbox, Button, Row, Col } from "antd";
import axios from "axios";
import "../../styles/Package/P_create.css";
import PSidebar from "../../components/Package/PSidebar";

const { Option } = Select;

const P_create = () => {
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

  const handleVehicleChange = (value) => {
    const selectedVehicle = vehicles.find((vehicle) => vehicle.type === value);
    if (selectedVehicle) {
      form.setFieldsValue({ noOfPerson: selectedVehicle.seats });
    }
  };

  const handleKeyPress = (event, fieldName) => {
    const charCode = event.which ? event.which : event.keyCode;
    const value = event.key;
    if (
      (charCode >= 65 && charCode <= 90) || // A-Z
      (charCode >= 97 && charCode <= 122) || // a-z
      (charCode >= 48 && charCode <= 57) || // 0-9
      charCode === 8 || // Backspace
      charCode === 32 || // Space
      charCode === 9 || // Tab
      (charCode >= 37 && charCode <= 40) || // Arrow keys
      charCode === 46 || // Delete
      (value === value.toUpperCase() && value !== value.toLowerCase())
    ) {
      return true;
    } else {
      event.preventDefault();
      alert(`Please enter only alphanumeric characters for ${fieldName}`);
      return false;
    }
  };

  const handleAlphaKeyPress = (event, fieldName) => {
    const charCode = event.which ? event.which : event.keyCode;
    if (
      (charCode >= 65 && charCode <= 90) || // A-Z
      (charCode >= 97 && charCode <= 122) || // a-z
      charCode === 8 || // Backspace
      charCode === 32 || // Space
      charCode === 9 || // Tab
      (charCode >= 37 && charCode <= 40) || // Arrow keys
      charCode === 46
    ) {
      return true;
    } else {
      event.preventDefault();
      alert(`Please enter only letters for ${fieldName}`);
      return false;
    }
  };

  return (
    <div>
       <PSidebar />
    <div className="package-form1">
      <h2 className="c-tittle">Create Package</h2>
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
          <Col span={8}>
            <Form.Item
              label="Package ID"
              name="pID"
              rules={[{ required: true, message: "Please enter Package ID" }]}
            >
              <Input
                placeholder="Package ID"
                onKeyPress={(e) => handleKeyPress(e, "Package ID")}
              />
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
              rules={[
                { required: true, message: "Please enter Package Name" },
              ]}
            >
              <Input
                placeholder="Package Name"
                onKeyPress={(e) => handleKeyPress(e, "Package Name")}
              />
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
              <Input type="number" min={1} />
            </Form.Item>
            <Form.Item
              label="Places"
              name="places"
              rules={[
                {
                  required: true,
                  message: "Please enter Places",
                },
              ]}
            >
              <Input
                placeholder="Places"
                onKeyPress={(e) => handleAlphaKeyPress(e, "Places")}
              />
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
                {
                  required: true,
                  message: "Please enter Activities",
                },
              ]}
            >
              <Input
                placeholder="Activities"
                onKeyPress={(e) => handleAlphaKeyPress(e, "Activities")}
              />
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
              <Input
                placeholder="Price"
                onKeyPress={(e) => handleKeyPress(e, "Price")}
              />
            </Form.Item>
          </Col>
        </Row>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button type="primary" htmlType="submit" loading={loading}>
            Create Package
          </Button>
        </div>
        <div
          style={{ textAlign: "left", marginTop: "5px", marginLeft: "308px" }}
        >
        </div>
      </Form>
    </div>
    </div>
  );
};

export default P_create;
