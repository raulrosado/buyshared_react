import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CheckIcon } from "../icons/CheckIcon";
import { CloseIcon } from "../icons/CloseIcon";
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
import { saveLocalStorage } from "../actions";

export default function AcceptSolicitud() {
    const params = useParams();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [loadingGet, setLoadingGet] = useState(false);
    const [contenido, setContenido] = useState(false);
    const [respDone, setRespDone] = useState("");
    let user = []
    user = useSelector((state) => state.user);
    let emailInvitacion
    let head
    let login
    let loginAvatar

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
            if (response.data.success === true) {
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
            }
            if (response.data.success === false) {
                setRespDone(<Badge
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
                        {response.data.message}
                    </Badge>
                </Badge>)
            }
        });
    }
    useEffect(() => {
        aceptS()
    }, [])

    let loadingCond
    loadingGet ? (loadingCond = <Loading type="points" />) : (loadingCond = '')

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
                <Grid xs={12} md={6} sm={6} style={{ display: 'grid', alignItems: 'center' }}>
                    <Grid.Container gap={2} justify="center" className="login" style={{ display: 'grid', alignItems: 'center' }}>
                        <Grid.Container gap={2} justify="center">
                            <Text h1 id="modal-title">
                                Bienvenidos a
                                <Text b style={{ marginLeft: '5px' }}>
                                    BUYSHARED
                                </Text>
                            </Text>
                            {/* <Grid xs={12} justify="center">
                                avatar: {loginAvatar}
                            </Grid> */}
                            <Grid xs={12} justify="center">
                                {loadingCond}
                            </Grid>
                            {/* <Grid xs={12} justify="center">
                                {login ? (
                                    contenido
                                ) : (<div><Text>Para realizar dicha acción debe estar logueado</Text><Link to="/login">Ingresar en mi cuenta</Link></div>)
                                }
                            </Grid> */}
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
