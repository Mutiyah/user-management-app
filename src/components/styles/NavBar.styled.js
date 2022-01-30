import styled from 'styled-components';

export const FormTag = styled.form`
    @media (max-width: 500px){
        display: none;
    }

    div{
        display: flex;
        align-items: center;
       padding: 5px;
       color: #fff;
       background-color: #798f6F; 
       border-radius: 5px;
    }

    div input{
        margin-left: -25px;
        background-color: transparent;
        border: none;
        outline: none;
        padding-left: 30px;
        padding: 5px 0 5pxx 30px;
        color: #fff;
    }
`
