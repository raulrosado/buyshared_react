import React, { Component } from "react";
import {
  Button,
  Input,
  Grid,
  Link,
  Text
} from "@nextui-org/react";
import { Mail } from "../icons/Mail";
import { Usericon } from "../icons/Usericon";
import { Password } from "../icons/Password";
import "./Login.css";
import { UnLockIcon } from "../icons/UnLockIcon";
import { LockIcon } from "../icons/LockIcon";

function Registro() {
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
          <Grid xs={12}>
            <Text h1>Sign Up</Text>
          </Grid>
          <Grid xs={12}>
            <p>Please fill in this form to create an account.</p>
          </Grid>
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
                type="text"
                placeholder="Nombre"
                contentRight={<Usericon fill="currentColor" />}
                />
            </Grid>
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
                <Link href="login">Ya tengo cuenta!</Link>
            </Grid>
            <Grid xs={6} justify="flex-end">
                <Button auto onPress={closeHandler}>
                  Crear cuenta
                </Button>
            </Grid>
            </Grid.Container>
        </Grid>
      </Grid.Container>
    </div>
  );
}

export default Registro;
