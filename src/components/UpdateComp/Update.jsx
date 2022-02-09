import React, { useState, useEffect } from 'react';
import './Update.css';
import axios from 'axios';
import { useHistory } from 'react-router';

//Material UI imports start
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
//Material UI imports end

const Update = () => {

  //UseState Variables
  const [id, setID] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);

  let history = useHistory();
  

  //Get the Data from localstorage
  useEffect(() => {
    setID(localStorage.getItem('ID'))
    setFirstName(localStorage.getItem('First Name'));
    setLastName(localStorage.getItem('Last Name'));
    setContact(localStorage.getItem('Contact Number'));
    setEmail(localStorage.getItem('Email Id'))
  }, []);

  //UPDATE request for user data
  const updateAPIData = (e) => {
    e.preventDefault();
    axios.put(`https://62020718b8735d00174cb6bf.mockapi.io/userData/${id}`, {
      firstName,
      lastName,
      contact,
      email
    });
    handleOpen();
  }

  //open and close modal functions
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    history.push('/');
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid transparent',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className='update-section'>
      <Container>
        <div className="form-card">
          <div className="main-heading">
            <h1>Edit User</h1>
          </div>
          <div className="form-area">
            <form>
              <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
                <PersonIcon sx={{ color: 'action.active', mr: 1 }} />
                <TextField
                  fullWidth
                  label='First Name'
                  variant='outlined'
                  placeholder='Enter first name'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                ></TextField>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
                <PersonOutlineIcon sx={{ color: 'action.active', mr: 1 }} />
                <TextField
                  fullWidth
                  label='Last Name'
                  variant='outlined'
                  placeholder='Enter last name'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                ></TextField>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
                <CallIcon sx={{ color: 'action.active', mr: 1 }} />
                <TextField
                  fullWidth
                  label='Contact Number'
                  variant='outlined'
                  placeholder='Enter contact number'
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                ></TextField>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
                <EmailIcon sx={{ color: 'action.active', mr: 1 }} />
                <TextField
                  fullWidth
                  label='Email Id'
                  variant='outlined'
                  placeholder='Enter email id'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></TextField>
              </Box>
              <div className="form-btn-section">
                <Modal
                  open={open}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description">
                  <Box sx={style} className='modal-box'>
                    <Typography variant="h6" component="h2" className='modal-title'>
                      <strong>Success</strong>
                    </Typography>
                    <Typography sx={{ mt: 2 }} className='modal-desc'>
                      User Updated Successfully !!!
                    </Typography>
                    <Button onClick={handleClose} variant='contained' sx={{ mt: 2 }}>Done</Button>
                  </Box>
                </Modal>
                <Button onClick={updateAPIData} className='submit-btn' type='submit' variant='contained'>Edit</Button>
              </div>
            </form>
          </div>
        </div>


      </Container>
    </div>
  );
};

export default Update;

