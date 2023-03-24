import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  Grid,
  Image,
  Loading,
  Text
} from "@nextui-org/react";
import { Mail } from "../../icons/Mail";
import "./Login.css";
import { UnLockIcon } from "../../icons/UnLockIcon";
import { LockIcon } from "../../icons/LockIcon";
import { Link } from "react-router-dom";
import { useNavigate  } from "react-router-dom";
import axios from "axios";
import { setUser,logoutProfil } from "../../actions";
import { useDispatch,useSelector } from "react-redux";
import { postLogin } from "../../api/postLogin";
import LoadInfo from "../../function/LoadInfo"
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleOneTapLogin } from '@react-oauth/google';

function Login() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
      dispatch(logoutProfil(user))
  }, [])
  
  useGoogleOneTapLogin({
    onSuccess: credentialResponse => {
      console.log(credentialResponse);
    },
    onError: () => {
      console.log('Login Failed');
    },
  });

  const login = () => {
    if (!loading) {
      setLoading(true)
      const parametro = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
      };
    
      postLogin(parametro).then((response)=>{
          setLoading(false)
          dispatch(setUser(response.data))
          LoadInfo(response.data)
          navigate('/main');
      }).catch(function (error) {
        console.log(error);
        alert(error);
        setLoading(false)
      });
    }
  };

  let button;
  if (loading) {
    button = <Loading type="points" color="currentColor" size="sm" />
  } else {
    button = <Text color="white">Entrar</Text>
  }

  return (
    <div className="centro">
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} md={6} sm={6}>
            <Image
                className="imgLogo"
                src={`${process.env.PUBLIC_URL}/images/list.jpg`}
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
                    <Input
                      id="email"
                      clearable
                      bordered
                      fullWidth
                      color="primary"
                      size="lg"
                      type="email"
                      placeholder="Email"
                      contentRight={<Mail fill="currentColor" />}
                    />
                </Grid>
                <Grid xs={12}>
                    <Input.Password
                      id="password"
                      clearable
                      bordered
                      fullWidth
                      color="primary"
                      size="lg"
                      type="password"
                      placeholder="Contraseña"
                      visibleIcon={<UnLockIcon fill="currentColor" />}
                      hiddenIcon={<LockIcon fill="currentColor" />}
                    />
                </Grid>
                <Grid xs={6}>
                    <Link to="/registro">No tengo cuenta!</Link>
                </Grid>
                <Grid xs={6} justify="flex-end">
                    <Button auto onPress={login}>
                        {button}
                    </Button>
                </Grid>
                <Grid.Container gap={2} justify="center" >
                  <Grid xs={6} justify="flex-end">
                  <GoogleLogin
                    onSuccess={credentialResponse => {
                      console.log(credentialResponse);
                    }}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                  />
                  </Grid>
                </Grid.Container>

              </Grid.Container>
            </Grid.Container>
        </Grid>
      </Grid.Container>
    </div>
  );
}

export default Login;
