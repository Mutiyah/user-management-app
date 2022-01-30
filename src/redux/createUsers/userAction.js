import axios from 'axios';
import {db} from '../../firebase/firebase'
export const IS_LOADING = 'IS_LOADING';
export const IS_ERROR = 'IS_ERROR';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';


export const isLoading = () => {
    return {
        type: IS_LOADING
    }
}

export const sendData = (user) => {
    return {
        type: FETCH_SUCCESS,
        payload: user
    }
}

export const error = (err) => {
    return {
        type: IS_ERROR,
        payload: err
    }
}

const headers = {
    'Content-Type' : 'application/json'
    }

    // export const addUserFunc = (data) => {
    //     return (dispatch) => {
    //        dispatch(isLoading());
    //        db.collection("users").doc(data)
    //     .set({
    //         data
    //     }).then(() => {
    //       dispatch(sendData('successful!!!'))
    //     }).catch(err => dispatch(error(err)));
    
    //     }
    // }



export const addUserFunc = (data) => {
    return (dispatch) => {
       dispatch(isLoading());
       db.collection("users").add({
        data
    }).then(() => {
      dispatch(sendData('successful!!!'))
    }).catch(err => dispatch(error(err)));

    }
}



// fetch('https://user-management-app-e3489-default-rtdb.firebaseio.com/userApp.json', 
        // {
        //     type: 'POST',
        //     body: JSON.stringify(data);
            // headers : {
            // 'Content-Type' : 'application/json',
            // }
        // })