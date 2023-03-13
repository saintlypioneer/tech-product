

import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { login } from './redux/login/actions';
import { Navigate } from 'react-router-dom';
import Home from './Home';

function Login(props) {

    const [data, setData] = useState({
        email: "",
        pass: ""
    });

    const dispatch = useDispatch();

    function handleLogin(e){
        e.preventDefault();
        dispatch(login(data));
    }

    const isAuth = useSelector(state=>state.login.isAuth)
    if (isAuth){
        return(<Navigate to={"/"} replace={true} />)
    }
    return (
        <Container>
            <NavBar>
                <span>TechieListing</span>
                <Button colorScheme='twitter'>Click to Login</Button>
            </NavBar>
            <form>
                <input onChange={(e)=>{
                    setData({
                        ...data,
                        email: e.target.value
                    })
                }} value={data.email} type='email' placeholder='Email' />
                <input onChange={(e)=>{
                    setData({
                        ...data,
                        pass: e.target.value
                    })
                }} value={data.pass} type='password' placeholder='Password' />
                <button onClick={(e)=>handleLogin(e)}>Login</button>
            </form>
        </Container>
    );
}

const Container = styled.div`


form{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
    margin-top: 50px;

    input{
        border: 1px solid black;
        border-radius: 4px;
    }

    button{
        background-color: gray;
        width: fit-content;
        color: white;
        padding: 5px 15px;
        border-radius: 4px;
    }
  }

`;

const NavBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 10px 50px;
  background-color: rgba(0,0,0,0.2);

  span{
    font-size: 1.4rem;
    font-weight: 600;
  }

`;

export default Login;