import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./User.css"; // Import CSS file

const User = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ id: "", name: "" });
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3001/api/users");
      if (Array.isArray(response.data.response)) {
        setUsers(response.data.response);
      } else {
        console.error("Received data is not an array:", response.data.response);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreateOrUpdate = async () => {
    setLoading(true);
    try {
      if (isUpdate && updateId) {
        await axios.post("http://localhost:3001/api/updateuser", formData);
      } else {
        await axios.post("http://localhost:3001/api/createuser", formData);
      }
      getUsers();
      setFormData({ id: "", name: "" }); // Clear form data after submission
      setIsUpdate(false);
      setUpdateId(null);
      handleClose();
    } catch (error) {
      console.error("Error creating/updating user:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id, name) => {
    setFormData({ id, name });
    setIsUpdate(true);
    setUpdateId(id);
    handleOpen();
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await axios.post("http://localhost:3001/api/deleteuser", { id });
      getUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormData({ id: "", name: "" }); // Clear form data on close
    setIsUpdate(false); // Reset popup type to create on close
  };

  return (
    <div className="user-container">
      <Typography variant="h4" className="user-title">
        User List
      </Typography>
      <Button component={Link} to="/" variant="contained" color="primary">
        Back to Home
      </Button>
      {loading ? (
        <CircularProgress />
      ) : (
        <TableContainer component={Paper} className="user-table">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.length > 0 ? (
                users.map((user) => (
                  <TableRow key={user._id}>
                    <TableCell align="center">{user.name}</TableCell>
                    <TableCell align="center">{user.id}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleEdit(user.id, user.name)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    <Typography variant="body1">No users found</Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <div className="user-button-container">
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpen}
          className="user-button"
        >
          Create User
        </Button>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isUpdate ? "Edit User" : "Create User"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="id"
            name="id"
            label="ID"
            fullWidth
            value={formData.id}
            onChange={handleChange}
            disabled={isUpdate} // Disable the ID field if in update mode
            className="form-control"
          />
          <TextField
            margin="dense"
            id="name"
            name="name"
            label="Name"
            fullWidth
            value={formData.name}
            onChange={handleChange}
            className="form-control"
          />
        </DialogContent>
        <div className="form-actions">
          <Button
            onClick={handleClose}
            className="user-button"
            color="secondary"
          >
            Cancel
          </Button>
          <Button
            onClick={handleCreateOrUpdate}
            className="user-button"
            color="primary"
          >
            {isUpdate ? "Update" : "Create"}
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

export default User;
