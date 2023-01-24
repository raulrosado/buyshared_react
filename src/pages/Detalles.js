import React from "react"
import { useParams } from "react-router-dom";
import TopHeadImage2 from "../component/TopHeadImage2";
import Task from "../component/Task";

function Detalles(){
    const params = useParams();
    return (
        <div>
            <TopHeadImage2/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            {/* Detalles: {params.id} */}
        </div>
    )
}
export default Detalles