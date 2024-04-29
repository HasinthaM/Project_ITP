import React, { useState, useEffect } from "react";
import { Button, Grid, Input, Typography } from "@mui/material";

const DestinationForm = ({ addDestination, updateDestination, submitted, data, isEdit }) => {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState('');

  useEffect(() => {
    if (!submitted) {
      setId(0);
      setTitle('');
      setDescription('');
    }
  }, [submitted]);

  useEffect(() => {
    if (data && data.id && data.id !== 0) {
      setId(data.id);
      setTitle(data.title);
      setDescription(data.description);
    }
  }, [data]);

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
    // Validation check for string input
    if (!isValidString(value)) {
      setTitleError('Title must be a string');
    } else {
      setTitleError('');
    }
  };

  const isValidString = (str) => {
    return typeof str === 'string';
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: '#f0f0f0',
        marginBottom: '3px',
        display: 'block',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px ',
        marginLeft: '-9px'
      }}
    >
      <Grid item xs={12}>
        <Typography component={'h1'} sx={{ color: '#000000' }}></Typography>
      </Grid>

      <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
        <Typography
          component={'label'}
          htmlFor="id"
          sx={{
            color: '#000000',
            marginRight: '20px',
            fontSize: '16px',
            width: '100px',
            display: 'block'
          }}
        >ID</Typography>
        <Input
          type="number"
          id="id"
          name="id"
          sx={{ width: '400px' }}
          value={id}
          onChange={e => setId(e.target.value)}
        />
      </Grid>

      <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
        <Typography
          component={'label'}
          htmlFor="id"
          sx={{
            color: '#000000',
            marginRight: '20px',
            fontSize: '16px',
            width: '100px',
            display: 'block'
          }}
        >Title</Typography>
        <Input
          type="text"
          id="title"
          name="title"
          sx={{ width: '400px' }}
          value={title}
          onChange={handleTitleChange}
        />
        {titleError && (
          <Typography variant="caption" color="error">
            {titleError}
          </Typography>
        )}
      </Grid>

      <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
        <Typography
          component={'label'}
          htmlFor="id"
          sx={{
            color: '#000000',
            marginRight: '20px',
            fontSize: '16px',
            width: '100px',
            display: 'block'
          }}
        >Description</Typography>
        <Input
          type="text"
          id="description"
          name="description"
          sx={{ width: '400px' }}
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </Grid>

      <Button
        sx={{
          margin: 'auto',
          marginBottom: '20px',
          backgroundColor: '#00c6e6',
          color: '#000000',
          marginLeft: '15px',
          marginTop: '20px',
          '&:hover': {
            opacity: '0.7',
            backgroundColor: '00c6e6',
          }
        }}
        onClick={() => isEdit ? addDestination({ id, title, description }) : addDestination({ id, title, description })}
      >
        {isEdit ? 'Update' : 'Add'}
      </Button>
    </Grid>
  );
}

export default DestinationForm;
