import React from "react"
import { useParams } from "react-router-dom";
import TopHeadImage from "../component/TopHeadImage";
import Task from "../component/Task";

function DetallesEventos(){
    const params = useParams();
    return (
        <div>
            <TopHeadImage/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            {/* Detalles: {params.id} */}
        </div>
    )
}
export default DetallesEventos