import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Text, Loading,Badge,Spacer } from "@nextui-org/react";
import TopHeadImage from "../component/TopHeadImage";
import Task from "../component/Task";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDetailEvent } from "../api/getDetailEvent";

function DetallesEventos(){
    const params = useParams();
    const user = useSelector((state) => state.user);
    const [detail, setDetail] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingList, setLoadingList] = useState(false);

  let config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  useEffect(() => {
    if (!loadingList) {
      setLoading(true);
      getDetailEvent(params.id, config).then((res) => {
        setDetail(res.data);
        setTasks(res.data.task)
        setLoading(false);
        setLoadingList(true);
      });
    }
  });

  let loadingCond;
  if (loading) {
    loadingCond = <Loading type="points" />;
  }

    return (
        <div>
            {detail ? (<TopHeadImage infoList={detail}/>) : null}
            
            {tasks.map((infoTask, i) => (
                <Task info={infoTask} key={i}/>
            ))}
            {tasks.length === 0 ? (<div><Spacer y={1} /><Badge color="secondary">Agregue una tarea</Badge></div>) : null}
            {loadingCond}
        </div>
    )
}
export default DetallesEventos