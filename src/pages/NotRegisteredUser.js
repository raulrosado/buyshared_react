import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  Grid,
  Image,
  Loading,
  Text
} from "@nextui-org/react";
import "./login/Login.css";
import { Link, Navigate } from "react-router-dom";
import { useNavigate  } from "react-router-dom";

function NotRegisteredUser() {
    const navigate = useNavigate();
    const login = () =>{
        navigate('/login')
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
              <Grid.Container gap={2} justify="center" >
                <Text id="modal-title" size={18}>
                  Bienvenidos a 
                  <Text b size={18} style={{ marginLeft: '5px' }}>
                     BUYSHARE
                  </Text>
                </Text>
                <Grid xs={12}>
                <Text
                    h1
                    size={60}
                    css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                    }}
                    weight="bold"
                >
                    No debes estar aqui!
                </Text>
                </Grid>
                
                <Grid xs={6}>
                    <Link to="/registro">No tengo cuenta!</Link>
                </Grid>
                <Grid xs={6} justify="flex-end">
                    <Button auto onPress={login}>
                        Login
                    </Button>
                </Grid>
              </Grid.Container>
            </Grid.Container>
        </Grid>
      </Grid.Container>
    </div>
  )
}

export default NotRegisteredUser;