import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import './Read.css';
import axios from 'axios';
/*Material UI import starts*/
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
/*Material UI import ends*/

const Read = () => {

  //UseState Variables
  const [APIData, setAPIData] = useState([]);

  let history = useHistory();

  //Go to create page 
  const goToCreateComp = () => {
    history.push('/create');
  }

  //Go to update page 
  const goToUpdateComp = () => {
    history.push('/update');
  }

  //GET and read the data when user loads the page
  useEffect(() => {
    axios.get(`https://62020718b8735d00174cb6bf.mockapi.io/userData`)
      .then((response) => {
        setAPIData(response.data);
      })
  }, []);

  //GET the data after the deleting a user
  const getDataAfterDelete = () => {
    axios.get(`https://62020718b8735d00174cb6bf.mockapi.io/userData`)
      .then((getMyData) => {
        setAPIData(getMyData.data);
      })
  }

  //DELETE request for user data
  const onDelete = (id) => {
    axios.delete(`https://62020718b8735d00174cb6bf.mockapi.io/userData/${id}`)
      .then(() => {
        getDataAfterDelete();
      })
  }

  //Set the data into localstorage
  const setData = (data) => {
    let { id, firstName, lastName, contact, email } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('First Name', firstName);
    localStorage.setItem('Last Name', lastName);
    localStorage.setItem('Contact Number', contact);
    localStorage.setItem('Email Id', email);
    goToUpdateComp();
  }

  return (
    <div className='read-section'>
      <Container>
        <div className="section-upper">
          <h2>React CRUD APP </h2>
        </div>
        <div className="section-lower">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table" className='my-user-table'>
              <TableHead>
                <TableRow className='my-table-row'>
                  <TableCell align="center">First Name</TableCell>
                  <TableCell align="center">Last Name</TableCell>
                  <TableCell align="center">Contact</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {APIData.map((data) => (
                  <TableRow
                    key={data.id}
                    className='my-table-data'
                  >
                    <TableCell align="center">{data.firstName}</TableCell>
                    <TableCell align="center">{data.lastName}</TableCell>
                    <TableCell align="center">{data.contact}</TableCell>
                    <TableCell align="center">{data.email}</TableCell>
                    <TableCell align="center">
                      <Button variant='outlined'
                        className='my-update-btn'
                        startIcon={<NoteAltOutlinedIcon />}
                        type='submit'
                        onClick={() => setData(data)}>Update</Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button variant='outlined'
                        color='error'
                        className='my-delete-btn'
                        startIcon={<CancelOutlinedIcon />}
                        onClick={() => onDelete(data.id)}>Delete</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="add-btn-section">
            <Button variant='contained'
              onClick={goToCreateComp}
              startIcon={<PersonAddAltRoundedIcon />}
              sx={{ mt: 3 }} className='add-btn'>Add User</Button>
          </div>
        </div>
      </Container>


    </div>
  );
};

export default Read;
