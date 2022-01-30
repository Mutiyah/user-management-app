import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProfilePage from './ProfilePage';
import { db } from "../firebase/firebase";
import { Table } from "reactstrap";
import Avatar from '@mui/material/Avatar';
import classes from './styles/Nav.module.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import { addUserFunc } from "../redux/createUsers/userAction";
import {connect} from 'react-redux';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  export const usersArr = [];

function UserTablePage(props) {
  const [getUsers, setgetUsers] = useState([]);
  const [openModal, setopenModal] = useState(false);
  const [open, setOpen] = useState(false);


  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      setgetUsers(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
 

  const dataID = getUsers.map(userId => userId);
      for (const key in dataID) {
          const users = {
              key,
              ...dataID[key]
          }
          usersArr.push(users)
      }

      // const dat = usersArr.map(data => data.data);

      // console.log(usersArr && dat)

  const handleClose = () => setOpen(false);

      const handleOpen = (e) => {
        setOpen(true);
        props.fetchFunc()
        console.log(props.user)
      };

  


  return (
      <>
    <Table responsive hover>
      <thead>
          <tr>
            <th>Id</th>
            <th>Avatar</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Role</th>
            <th>Actions</th>
            
            </tr>
      </thead>
      <tbody>
        
            {usersArr.map(dat => (
                <tr key={dat.id} onClick={handleOpen}>
                <td>{(+dat.key + 1) }</td>
                <td><Avatar alt={dat.data.firstName} src={dat.data.actualImageUrl} /></td>
                <td>{dat.data.firstName}</td>
                <td>{dat.data.lastName}</td>
                <td>{dat.data.email}</td>
                <td>{dat.data.phoneNumber}</td>
                <td>{dat.data.role}</td>
                <td ><Link to={`/my-profile/${+dat.key + 1}`}><EditIcon className={classes.tdAction}  /></Link></td> 
                </tr>
            ))}
          
          
       
      </tbody>
    </Table>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ProfilePage user={getUsers} />
        </Box>
    </Modal>

    {/* {true && <ProfilePage dataID={usersArr}  />} */}

    </>
  );
}

const mapStateToProps = (state) => {
    return {
        loading : state.isLoading,
        user: state.user,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchFunc : () => dispatch(addUserFunc())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserTablePage);
