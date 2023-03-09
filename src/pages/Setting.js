import React, { useState, useEffect } from "react";
import Head from '../component/Head.js';
import {
    Avatar,
    Grid,
    Text,
    Input,
    Card,
    Spacer,
    Loading,
    Button,
    Container,
    Row
} from "@nextui-org/react";
import { LeftArroy } from "../icons/LeftArroy";
import { Link } from 'react-router-dom';
import { Mail } from "../icons/Mail";
import { Usericon } from "../icons/Usericon";
import { CheckIcon } from "../icons/CheckIcon";
import { CloseIcon } from "../icons/CloseIcon";
import { UnLockIcon } from "../icons/UnLockIcon";
import { LockIcon } from "../icons/LockIcon";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import config from '../config/config';
import { postChangePictur } from "../api/postChangePictur.js";
import { postChangeInfo } from "../api/postChangeInfo.js";
import { postChangePassword } from "../api/postChangePassword.js";
import { changePicture, changeInfoPerfil } from "../actions"

function Setting() {
    const appState = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let nombre = `${appState.user.name} ${appState.user.apellidos}`
    const [loadingPicture, setLoadingPicture] = React.useState(false);
    const [loadingInfoP, setLoadingInfoP] = React.useState(false);
    const [loadingPassword, setLoadingPassword] = React.useState(false);
    const [texto, setTexto] = React.useState("");
    const [color, setColor] = React.useState("");
    const [textoEmail, setTextoEmail] = React.useState("");
    const [colorEmail, setColorEmail] = React.useState("");

    let header = {
        headers: {
            Authorization: `Bearer ${appState.token}`,
        },
    };

    let buttonLoading;
    let buttonLoadingInfoP;
    let buttonLoadingPassword;
    if (loadingPicture) {
        buttonLoading = <Loading size="sm" />
    }
    if (loadingInfoP) {
        buttonLoadingInfoP = <Loading size="sm" />
    }
    if (loadingPassword) {
        buttonLoadingPassword = <Loading size="sm" />
    }

    const changeImagen = () => {
        setLoadingPicture(true)
        const form = document.querySelector("form");
        let formData = new FormData(form);

        header = {
            headers: {
                Authorization: `Bearer ${appState.token}`,
                "Content-Type": "multipart/form-data"
            }
        }
        postChangePictur(formData, header).then((res) => {
            setLoadingPicture(false)
            if (res.data.success) {
                dispatch(changePicture(res.data.filename))
            }
        });
    }

    const changePersonalInformation = () => {
        setLoadingInfoP(true)
        let request = {
            name: document.getElementById("nombre").value || nombre,
            email: document.getElementById("email").value || appState.user.email
        }
        if (request.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)) {
            postChangeInfo(request, header).then((res) => {
                setLoadingInfoP(false)
                dispatch(changeInfoPerfil(request))
            })
        } else {
            setTextoEmail("Email no valido")
            setColorEmail("error")
        }
    }

    const changePassword = () => {
        setLoadingPassword(true)
        let requestPassword = {
            passwordAnt: document.getElementById("password").value,
            passwordNew: document.getElementById("passwordNew").value,
            passwordRepetNew: document.getElementById("passwordRepeatNew").value
        }
        if (requestPassword.passwordNew === requestPassword.passwordRepetNew) {
            setTexto("")
            setColor("")
            postChangePassword(requestPassword, header).then((res) => {
                setLoadingPassword(false)
            })
        } else {
            setTexto("Las contraseñas no coinciden")
            setColor("error")
            setLoadingPassword(false)
        }
    }


    return (
        <div>
            <Head />
            <Grid.Container gap={2} justify="center">
                <Grid xs={4}>
                    <Link to="/main">
                        <Avatar
                            bordered
                            size="md"
                            as="button"
                            squared
                            icon={<LeftArroy fill="currentColor" filled />}
                        />
                    </Link>
                </Grid>
                <Grid xs={4}>
                    <Text h3>Setting</Text>
                </Grid>
                <Grid xs={4}>

                </Grid>
            </Grid.Container>
            <Grid.Container gap={2}>
                <Grid gap={1}>
                    <section style={{ padding: '10px' }}>
                        <Card css={{ p: "$6", mw: "400px" }}>
                            <Card.Header>
                                <Text h4 css={{ lineHeight: "$xs" }}>
                                    Cambiar Imagen
                                </Text>
                            </Card.Header>
                            <Card.Body>
                                <form name="cangePictureForm" methot="POST" encType="multipart/form-date">
                                    <Grid.Container gap={0} justify="center">
                                        <Grid xs={3}>
                                            <Avatar
                                                bordered
                                                size="xl"
                                                src={config.URL + "images/" + appState.user.avatar}
                                            />
                                        </Grid>
                                        <Spacer x={1} />
                                        <Grid xs={8}>
                                            <Input
                                                clearable
                                                name="file"
                                                id="file"
                                                type="file"
                                                color="primary"
                                                size="sm"
                                                placeholder="File" />
                                        </Grid>
                                    </Grid.Container>
                                </form>
                            </Card.Body>
                            <Card.Footer>
                                <Button onPress={changeImagen}>Cambiar imagen</Button>{buttonLoading}
                            </Card.Footer>
                        </Card>
                    </section>
                </Grid>
                <Grid gap={1}>
                    <section style={{ padding: '10px' }}>
                        <Card css={{ p: "$6", mw: "400px" }}>
                            <Card.Header>
                                <Text h4 css={{ lineHeight: "$xs" }}>
                                    Informacion Personal
                                </Text>
                            </Card.Header>
                            <Card.Body>
                                <Grid.Container gap={1} justify="center">
                                    <Grid xs={12}>
                                        <Input
                                            id="nombre"
                                            clearable
                                            bordered
                                            fullWidth
                                            color="primary"
                                            size="lg"
                                            type="text"
                                            placeholder={nombre}
                                            contentLeft={<Usericon fill="currentColor" />}
                                        />
                                    </Grid>
                                    <Grid xs={12}>
                                        <Input
                                            id="email"
                                            clearable
                                            bordered
                                            fullWidth
                                            size="lg"
                                            type="email"
                                            status={colorEmail}
                                            color={colorEmail}
                                            helperColor={colorEmail}
                                            helperText={textoEmail}
                                            placeholder={appState.user.email}
                                            contentLeft={<Mail fill="currentColor" />}
                                        />
                                    </Grid>
                                </Grid.Container>
                            </Card.Body>
                            <Card.Footer>
                                <Button onPress={changePersonalInformation}>Actualizar</Button>{buttonLoadingInfoP}
                            </Card.Footer>
                        </Card>
                    </section>
                </Grid>
                <Grid gap={1}>
                <section style={{ padding: '10px' }}>
                    <Card css={{ p: "$6", mw: "400px" }}>
                        <Card.Header>
                            <Text h4 css={{ lineHeight: "$xs" }}>
                                Cambiar Contraseña
                            </Text>
                        </Card.Header>
                        <Card.Body>
                            <Grid.Container gap={1} justify="center">

                                <Grid xs={12}>
                                    <Input.Password
                                        id="password"
                                        clearable
                                        bordered
                                        fullWidth
                                        color="primary"
                                        size="lg"
                                        type="password"
                                        placeholder="Contraseña Antigua"
                                        visibleIcon={<UnLockIcon fill="currentColor" />}
                                        hiddenIcon={<LockIcon fill="currentColor" />}
                                    />
                                </Grid>
                                <Grid xs={12}>
                                    <Input.Password
                                        id="passwordNew"
                                        clearable
                                        bordered
                                        fullWidth
                                        color="primary"
                                        size="lg"
                                        type="password"
                                        placeholder="Nueva Contraseña"
                                        visibleIcon={<UnLockIcon fill="currentColor" />}
                                        hiddenIcon={<LockIcon fill="currentColor" />}
                                    />
                                </Grid>
                                <Grid xs={12}>
                                    <Input.Password
                                        id="passwordRepeatNew"
                                        clearable
                                        bordered
                                        fullWidth
                                        status={color}
                                        color={color}
                                        helperColor={color}
                                        helperText={texto}
                                        size="lg"
                                        type="password"
                                        placeholder="Repetir Contraseña"
                                        visibleIcon={<UnLockIcon fill="currentColor" />}
                                        hiddenIcon={<LockIcon fill="currentColor" />}
                                    />
                                </Grid>
                            </Grid.Container>
                        </Card.Body>
                        <Card.Footer>
                            <Button onPress={changePassword}>Actualizar</Button>{buttonLoadingPassword}
                        </Card.Footer>
                    </Card>
                </section>
            </Grid>
        </Grid.Container>
    </div >
)
}

export default Setting