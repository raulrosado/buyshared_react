import React, { useEffect, useState } from "react";
import { Text, Loading, Spacer, Badge } from "@nextui-org/react";
import { useParams } from "react-router-dom";
import TopHeadImage2 from "../component/TopHeadImage2";
import Task from "../component/Task";
import { useDispatch, useSelector } from "react-redux";
import { getDetailList } from "../api/getDetailList";
import { setEvent, setList, addTasksState } from "../actions";

function Detalles() {
  const params = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const listTasks = useSelector(state => state.user.tasks);

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingList, setLoadingList] = useState(false);

  const cambiarInfo = (option) => {
    setLoadingList(option);
  }

  let config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  useEffect(() => {
    if (listTasks !== undefined) {
      setTasks(listTasks)
    }
  }, [listTasks])

  useEffect(() => {
    if (!loadingList) {
      setLoading(true);
      getDetailList(params.id, config).then((res) => {
        setTasks(res.data.tasks)
        if (res.data.tasks !== undefined) {
          dispatch(addTasksState(res.data.tasks))
        }
        dispatch(setEvent(0))
        dispatch(setList(params.id))
        setLoading(false);
        setLoadingList(true);
      });
    }
  }, []);


  let loadingCond;
  if (loading) {
    loadingCond = <Loading type="points" />;
  }

  return (
    <div>
      <TopHeadImage2 cambiarInfo={cambiarInfo} />
      {tasks.length > 0 ? (tasks.map((infoTask, i) => (
        <Task info={infoTask} key={i} />
      ))):<Text>Nada</Text>}
      {tasks.length === 0 ? (<div><Spacer y={1} /><Badge color="secondary">Agregue una tarea</Badge></div>) : null}
      {loadingCond}
    </div>
  );
}
export default Detalles;
