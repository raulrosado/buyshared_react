import React from "react"
import { Container, Row, Text, Col, Avatar, Button, Dropdown, User,Grid} from "@nextui-org/react";
import { useParams } from "react-router-dom";
import TopHeadImage from "../component/TopHeadImage";

function Detalles(){
    const params = useParams();
    return (
        <div>
            <TopHeadImage/>
            {/* Detalles: {params.id} */}
        </div>
    )
}
export default Detalles