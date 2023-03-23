import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CheckIcon } from "../icons/CheckIcon";
import {
    Button,
    Grid,
    Image,
    Loading,
    Text,
    User,
    Badge
} from "@nextui-org/react";

import config from '../config/config';
import { Link } from "react-router-dom";
import { actionSolicitud } from "../api/actionSolicitud";
import { getInfoSolicitud } from "../api/getInfoSolicitud";

export default function AcceptSolicitud() {
    const params = useParams();
    const [loading, setLoading] = useState(false);
    const [loadingGet, setLoadingGet] = useState(false);
    const [contenido, setContenido] = useState(false);
    const [respDone, setRespDone] = useState("");
    const user = useSelector((state) => state.user);
    let emailInvitacion
    let head

    useEffect(() => {
        if (user !== null) {
            setLoadingGet(true)
            getInfoSolicitud(params.token, head).then((response) => {
                setLoadingGet(false)
                emailInvitacion = response.data.email
                if (emailInvitacion === user.user.email) {
                    setContenido(<Grid.Container gap={2} justify="center">
                        <Grid xs={6} justify="center">
                            <Button auto color="error" onPress={cancel}>Cancelar</Button>
                        </Grid>
                        <Grid xs={6} justify="center">
                            <Button auto onPress={aceptS}>
                                Aceptar solicitud
                            </Button>
                        </Grid>
                    </Grid.Container>)
                } else {
                    setContenido(<div><Text>Esta invitación no está destinada a usted</Text><Link to="/login">Ingresar en mi cuenta</Link></div>)
                }
            });
        }
    }, [])

    let login
    let loginAvatar
    if (user === null) {
        login = false
    } else {
        login = true

        head = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };
        loginAvatar = <User
            src={config.URL + "images/" + user.user.avatar}
            name={user.user.name}
            description={user.user.apellidos} />
    }

    const cancel = () => {
        enviar(1)
    }
    const aceptS = () => {
        enviar(2)
    }

    const enviar = (action) => {
        setLoading(true)
        const parametro = {
            action: action,
            token: params.token
        };
        actionSolicitud(parametro, head).then((response) => {
            setLoading(false)
            setContenido(<Link to="/main">Regrese a su lista</Link>)
            setRespDone(<Badge
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
                    {response.data.message}
                </Badge>
            </Badge>)
        });
    }

    let loadingCond
    loadingGet ? (loadingCond = <Loading type="points" />) : (loadingCond = '')

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
                <Grid xs={12} md={6} sm={6} style={{ display: 'grid', alignItems: 'center' }}>
                    <Grid.Container gap={2} justify="center" className="login" style={{ display: 'grid', alignItems: 'center' }}>
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
                                {loadingCond}
                            </Grid>
                            <Grid xs={12} justify="center">
                                {login ? (
                                    contenido
                                ) : (<div><Text>Para realizar dicha acción debe estar logueado</Text><Link to="/login">Ingresar en mi cuenta</Link></div>)
                                }
                            </Grid>
                            <Grid xs={12} justify="center">
                                {respDone}
                            </Grid>
                        </Grid.Container>
                    </Grid.Container>
                </Grid>
            </Grid.Container>
        </div>
    )
}
