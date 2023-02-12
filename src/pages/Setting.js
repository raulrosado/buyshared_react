import React, { useState, useEffect } from "react";
import Head from '../component/Head.js';
import {
    Avatar,
    Grid,
    Text,
    Input,
    Card,
    User,
    Button
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

function Setting() {
    const appState = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let nombre = `${appState.user.name} ${appState.user.apellidos}`


    let header = {
        headers: {
            Authorization: `Bearer ${appState.token}`,
        },
    };

    

    return (
        <div>
            <Head />
            <Grid.Container gap={0} justify="center">
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
            <section style={{ padding: '10px' }}>
                <Card css={{ p: "$6", mw: "400px" }}>
                    <Card.Header>
                        <Text h4 css={{ lineHeight: "$xs" }}>
                            Cambiar Imagen
                        </Text>
                    </Card.Header>
                    <Card.Body>
                        <form name="addListForm" methot="POST" encType="multipart/form-date">
                            <Grid.Container gap={1} justify="center">
                                <Grid xs={3}>
                                <Avatar
                                    bordered
                                    size="xl"
                                    src={config.URL + "images/" + appState.user.avatar}
                                />
                                </Grid>
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
                        <Button>Cambiar imagen</Button>
                    </Card.Footer>
                </Card>
            </section>
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
                                    color="primary"
                                    size="lg"
                                    type="email"
                                    placeholder={appState.user.email}
                                    contentLeft={<Mail fill="currentColor" />}
                                />
                            </Grid>
                        </Grid.Container>
                    </Card.Body>
                    <Card.Footer>
                        <Button>Actualizar</Button>
                    </Card.Footer>
                </Card>
            </section>
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
                                    id="password"
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
                                    id="password"
                                    clearable
                                    bordered
                                    fullWidth
                                    color="primary"
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
                        <Button>Actualizar</Button>
                    </Card.Footer>
                </Card>
            </section>
        </div>
    )
}

export default Setting