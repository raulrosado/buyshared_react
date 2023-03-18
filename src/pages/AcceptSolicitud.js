import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopHeadImage from "../component/TopHeadImage";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    Button,
    Input,
    Grid,
    Spacer,
    Image,
    Loading,
    Text,
    User
  } from "@nextui-org/react";
  
import config from '../config/config';
import { Link } from "react-router-dom";
  

export default function AcceptSolicitud() {
    const params = useParams();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    let login
    let loginAvatar
    if(user === null){
        login = false
    }else{
        login = true
        loginAvatar = <User
                        src={config.URL+"images/"+user.user.avatar}
                        name={user.user.name}
                        description={user.user.apellidos}/>
        
    }

    const cancel = ()=>{
        alert()
    }
    const aceptS = ()=>{
        alert("aceptar solicitud")
    }

    return (
        <div className="centro">
            <Grid.Container gap={2} justify="center">
                <Grid xs={12} md={6} sm={6}>
                    <Image
                        className="imgLogo"
                        src="/images/list.jpg"
                        alt="Default Image"
                        objectFit="cover"
                        />
                </Grid>
                <Grid xs={12} md={6} sm={6} style={{display:'grid',alignItems:'center'}}>
                    <Grid.Container gap={2} justify="center" className="login" style={{display:'grid',alignItems:'center'}}>
                        <Grid.Container gap={2} justify="center">
                            <Text id="modal-title" size={18}>
                            Bienvenidos a 
                            <Text b size={18} style={{ marginLeft: '5px' }}>
                                BUYSHARE
                            </Text>
                            </Text>
                            <Grid xs={12} justify="center">
                                {loginAvatar}
                            </Grid>
                            <Grid xs={12} justify="center">
                                {login ? ( <div><Button auto color="error" onPress={cancel}>Cancelar</Button>
                                <Spacer x={2} />
                                <Button auto onPress={aceptS}>
                                    Aceptar solicitud
                                </Button></div>) : ( <div><Text>Para realizar dicha acción debe estar logueado</Text><Link to="/login">Ingresar en mi cuenta</Link></div> )
                                }
                                
                            </Grid>
                        </Grid.Container>
                    </Grid.Container>
                </Grid>
            </Grid.Container>
        </div>
    )
}
