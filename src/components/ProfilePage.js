import React, {useState, useEffect} from "react";
import CardLayout from "./CardLayout";
import {connect} from 'react-redux';
import { useParams } from "react-router-dom";

// reactstrap imports
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

//firebase imports
import {db, storage} from '../firebase/firebase'
import { addUserFunc } from "../redux/createUsers/userAction";
import BreadCrumbPage from "./BreadCrumbPage";
import { HeaderTag } from "./styles/UserPage.styled";

function ProfilePage(props) {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [email, setemail] = useState('');
    const [role, setrole] = useState("Admin");
    const [imageVal, setimageVal] = useState(null);
    const [actualImageUrl, setactualImageUrl] = useState("");
    const [postSuccessful, setpostSuccessful] = useState(false);
    const [submitError, setsubmitError] = useState(false);
    const [getUsers, setgetUsers] = useState([]);
    const param = useParams();
    const arr = [];

    const userObj = {
      firstName,
        lastName,
        phoneNumber,
        email,
        role,
        actualImageUrl
    }


    // useEffect(() => {
    //   db.collection("users").onSnapshot((snapshot) => {
    //     setgetUsers(
    //       snapshot.docs.map((doc) => ({
    //         id: doc.id,
    //         data: doc.data(),
    //       }))
    //     );
    //   });
    // }, []);
   
  
    // const dataID = getUsers.map(userId => userId);
    //     for (const key in dataID) {
    //         const users = {
    //             key,
    //             ...dataID[key]
    //         }
    //         arr.push(users)
    //     }


  // const thisUser = arr.map(dat => dat).filter(fil => +fil.key + 1 == param.id)
  //   const user1 = thisUser.map(dat => dat.data);
  //   console.log(thisUser)
    const imageChangeFunc = (e) => {
        let image = e.target.files[0];
        
        console.log(image)
        if(imageVal === "" || imageVal === undefined){
            alert(`Not an image. the file is ${typeof inputImage}`)
            return ;
        }

        const ref = storage.ref(`/images/${image.name}`);
        const uploadTask = ref.put(image);
        uploadTask.on("state_changed", console.log, console.error, () => {
          ref
            .getDownloadURL()
            .then((url) => {
                image = null;
                setactualImageUrl(url);
            });


        });

    }

    const onsubmitFunc = (e) => {
        e.preventDefault();
        if(firstName !== "" && lastName !== "" && phoneNumber !== "" && email !== "" && actualImageUrl !== ""){
            props.fetchFunc(userObj)
            setsubmitError(false);
        }else{
            setsubmitError(true);
        }

        if(submitError === true){
            setInterval(() => {
                setpostSuccessful(true)
                setfirstName('') 
                setlastName('')
                setphoneNumber('')
                setemail('')
                setactualImageUrl('')
            }, 3000)
        }


    }

    console.log(props.user)



  return (
    <div>
      {/* <BreadCrumbPage page='profile' /> */}
      <CardLayout>
        <HeaderTag>Edit profile: {JSON.stringify(param)}</HeaderTag>
        <Form onSubmit={onsubmitFunc} inline>
          {submitError && <p style={{color: 'red'}}>Fill out all field</p>}
          <FormGroup floating>
            <Input
              id="firstName"
              name="firstName"
              placeholder="First Name"
              type="text"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
            />
            <Label for="firstName">First Name</Label>
          </FormGroup>{" "}

          <FormGroup floating>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              type="text"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
            <Label for="lastName">Last Name</Label>
          </FormGroup>{" "}

          <FormGroup floating>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone Number"
              type="text"
              value={phoneNumber}
              onChange={(e) => setphoneNumber(e.target.value)}
            />
            <Label for="phoneNumber">Phone Number</Label>
          </FormGroup>{" "}

          <FormGroup floating>
            <Input
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <Label for="email">Email</Label>
          </FormGroup>{" "}
          
          <FormGroup floating>
            <Input
              id="role"
              name="role"
              placeholder="Role"
              type="text"
              value={role}
              onChange={(e) => setrole(e.target.value)}
              disabled
            />
            <Label for="role">Role</Label>
          </FormGroup>{" "}

          <FormGroup floating>
            <Input
              id="image"
              name="image"
              placeholder="image"
              type="file"
              onChange={imageChangeFunc}
              accept="image/jpg, image/gif, image/png" 
            />
            <Label for="role">image</Label>
          </FormGroup>{" "}
          <Button>Save</Button>
        </Form>
      </CardLayout>
    </div>
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
    fetchFunc : (data) => dispatch(addUserFunc(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
