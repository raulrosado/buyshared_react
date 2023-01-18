import React, { Component } from "react";
import {
  Button,
  Input,
  Grid,
  Image
} from "@nextui-org/react";
import { Mail } from "../icons/Mail";
import { Password } from "../icons/Password";
import "./Login.css";
import { UnLockIcon } from "../icons/UnLockIcon";
import { LockIcon } from "../icons/LockIcon";
import { Link } from "react-router-dom";

function Login() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div className="centro">
      <Grid.Container gap={2} justify="center">
        <Grid xs={12}>
            <Image
                width={320}
                height={180}  
                src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                alt="Default Image"
                objectFit="cover"
                />
        </Grid>
        <Grid xs={12}>
            <Grid.Container gap={2} justify="center">
            <Grid xs={12}>
                <Input
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
                <Button auto onPress={closeHandler}>
                Entrar
                </Button>
            </Grid>
            </Grid.Container>
        </Grid>
      </Grid.Container>
    </div>
  );
}

export default Login;
