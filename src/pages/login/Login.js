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
import { decodeToken } from "react-jwt";
import { postRegistroSocial } from "../../api/postRegistroSocial";
import Login_component from "../../component/Login_component";

function Login() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  let decodedTokenString;
  const [visual, setVisual] = React.useState(<Login_component/>);
  
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
        {visual}
      </Grid.Container>
    </div>
  );
}

export default Login;
