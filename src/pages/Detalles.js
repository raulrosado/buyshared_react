import React, { useEffect, useState } from "react";
import { Text, Loading,Spacer,Badge } from "@nextui-org/react";
import { useParams } from "react-router-dom";
import TopHeadImage2 from "../component/TopHeadImage2";
import Task from "../component/Task";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDetailList } from "../api/getDetailList";

function Detalles() {
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
      getDetailList(params.id, config).then((res) => {
        //cargo el array de imagenes
        // setListsAvatares(res.data[res.data.length - 1]);
        // //elimino el ultimo elemento del array pq son las imagenes
        // let listsMenos = res.data
        // listsMenos.pop();
        // setLists(listsMenos);
        // console.log(res)
        setDetail(res.data);
        setTasks(res.data.tasks)

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
      {detail ? (<TopHeadImage2 infoList={detail}/>) : null}
      {tasks.map((infoTask, i) => (
        <Task info={infoTask} key={i}/>
      ))}
      {tasks.length === 0 ? (<div><Spacer y={1} /><Badge color="secondary">Agregue una tarea</Badge></div>) : null}
      {loadingCond}
    </div>
  );
}
export default Detalles;
