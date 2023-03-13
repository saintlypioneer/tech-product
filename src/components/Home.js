import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { json, Navigate } from "react-router-dom";

import styled from "styled-components";

function Home(props){

    const isAuth = useSelector((state)=>state.login.isAuth)
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        const URL = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products`;
        fetch(URL).then(res=>{
            return(res.json())
        }).then(json=>{
            setData(_=>json.data)
        })
    }, [])
    
    if (isAuth==false){
    return(<Navigate to={'/login'} replace={true}/>);
    }
    console.log(data)

    return(
        <Container>
            {
                data.length!=0?<div>
                    {
                        data.map((item, idx)=>{
                            return(<Item>
                                    <img src={item.img} alt="" />
                                    <p>{item.details}</p>
                                </Item>)
                        })
                    }
                </div>:""
            }
        </Container>
    );
}

const Container = styled.div`
    &>div{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
`;


const Item = styled.div``;

export default Home;