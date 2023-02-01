import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Text, Loading,Badge,Spacer } from "@nextui-org/react";
import TopHeadImage from "../component/TopHeadImage";
import Task from "../component/Task";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDetailEvent } from "../api/getDetailEvent";
import { setEvent, setList } from "../actions";

function DetallesEventos(){
    const params = useParams();
    const dispatch = useDispatch();
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

  const cambiarInfo = (option)=>{
    setLoadingList(option);
  }

  useEffect(() => {
    if (!loadingList) {
      setLoading(true);
      getDetailEvent(params.id, config).then((res) => {
        setDetail(res.data);
        setTasks(res.data.task)
        dispatch(setEvent(params.id))
        dispatch(setList(0))
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
          {detail ? (<TopHeadImage infoList={detail} cambiarInfo={cambiarInfo}/>) : null}
          
          {tasks.map((infoTask, i) => (
              <Task info={infoTask} key={i}/>
          ))}
          {tasks.length === 0 ? (<div><Spacer y={1} /><Badge color="secondary">Agregue una tarea</Badge></div>) : null}
          {loadingCond}
      </div>
    )
}
export default DetallesEventos