import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import './Create.css';
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

const Create = () => {

  //UseState Variables
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);

  let history = useHistory();

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

  //POST request for user data
  const postData = (e) => {
    e.preventDefault();
    axios.post(`https://62020718b8735d00174cb6bf.mockapi.io/userData`, {
      firstName,
      lastName,
      contact,
      email
    });
    handleOpen();
  }

  return (
    <div className='create-section'>
      <Container>
        <div className="form-card">
          <div className="main-heading">
            <h1>Add User</h1>
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
                      User Added Successfully !!!
                    </Typography>
                    <Button onClick={handleClose} variant='contained' sx={{ mt: 2 }}>Done</Button>
                  </Box>
                </Modal>
                <Button onClick={postData} className='submit-btn'
                type='submit' variant='contained'>Submit</Button>
              </div>
            </form>
          </div>
        </div>


      </Container>
    </div>
  );
};

export default Create;
