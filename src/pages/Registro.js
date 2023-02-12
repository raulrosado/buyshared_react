import React from "react";
import { Button, Input, Grid, Text, Loading, Badge } from "@nextui-org/react";
import { Mail } from "../icons/Mail";
import { Usericon } from "../icons/Usericon";
import { CheckIcon } from "../icons/CheckIcon";
import { CloseIcon } from "../icons/CloseIcon";
import { UnLockIcon } from "../icons/UnLockIcon";
import { LockIcon } from "../icons/LockIcon";
import "./login/Login.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Registro() {
  // const [user, setUser] = React.useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(null);
  const navigate = useNavigate();

  const post = () => {
    if (!loading) {
      setLoading(true);
      axios({
        method: "POST",
        url: "http://localhost:5000/v1/api/add_user",
        data: {
          firstName: document.getElementById("nombre").value,
          email: document.getElementById("email").value,
          password: document.getElementById("password").value,
        },
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000/registro",
        },
      })
        .then(function (response) {
          console.log(response);
          if (response.data.status) {
            setSuccess(true)
            navigate('/login');
          } else {
            setSuccess(false);
          }
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
          setSuccess(false);
          setLoading(false);
        });
    }
    console.log("enviar");
  };

  let button;
  if (loading) {
    button = <Loading type="points" color="currentColor" size="sm" />;
  } else {
    button = <Text color="white">Crear cuenta</Text>;
  }

  let btn_success = "";
  console.log(success);
  if (success) {
    btn_success = <Badge
      enableShadow
      disableOutline
      color="success"
      content={<CheckIcon width={24} height={24} />}
      css={{ p: "0" }}
      horizontalOffset="-22%"
      verticalOffset="45%"
    >
      <Badge
        enableShadow
        disableOutline
        color="success"
      >
        Usuario agregado
      </Badge>
    </Badge>;
  }
  if (!success) {
    btn_success = <Badge
      enableShadow
      disableOutline
      color="error"
      content={<CloseIcon width={24} height={24} fill="none" />}
      css={{ p: "0" }}
      horizontalOffset="112%"
      verticalOffset="45%"
    >
      <Badge
        enableShadow
        disableOutline
        color="error"
      >
        Error en el registro
      </Badge>
    </Badge>;
  }

  return (
    <div className="centro">
      <Grid.Container gap={2} justify="center">
        <Text h1>Sign Up</Text>
        <Grid xs={12}>
          <Grid.Container gap={2} justify="center">
            <Grid xs={12}>
              <Input
                id="nombre"
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                type="text"
                placeholder="Nombre"
                contentRight={<Usericon fill="currentColor" />}
              />
            </Grid>
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
              <Link to="/login">Ya tengo cuenta!</Link>
            </Grid>
            <Grid xs={6} justify="flex-end">
              <Button auto onPress={post}>
                {button}
              </Button>
            </Grid>
          </Grid.Container>
        </Grid>
        <Grid xs={12} justify="center" alignContent="center">
          {btn_success}
        </Grid>
      </Grid.Container>
    </div>
  );
}

export default Registro;
