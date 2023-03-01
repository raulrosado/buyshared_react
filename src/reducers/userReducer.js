import { SET_USER, SEL_EVENT, SEL_LIST, SHOW_MODAL, ADD_LISTS, ADD_EVENTS, ADD_EVENTSAVATARS, ADD_LISTSAVATARS, DEL_LIST, DEL_EVENT, ADD_TASK, ADD_TASKS } from "../actions/type";
import { DEL_TASK, COMPLET_TASK, LOGOUT,CHANGEPICTURE,CHANGEINFOPROFILE,ADD_TASKSREFERENCE,SEL_REFERENCE } from "../actions/type";

const initialState = {
  user: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return { ...state, user: "" };

    case SET_USER:
      return { ...state, user: action.payload };
    case SEL_EVENT:
      const antiguo = { ...state.user }
      antiguo.idEvent = action.payload
      return { ...state, user: antiguo };
    case SEL_LIST:
      const antiguoList = { ...state.user }
      antiguoList.idList = action.payload
      return { ...state, user: antiguoList };
    case SHOW_MODAL:
      const showM = { ...state.user }
      showM.showModal = action.payload
      return { ...state, user: showM };
    case ADD_LISTS:
      const estadoList = { ...state.user }
      estadoList.lists = action.payload
      return { ...state, user: estadoList };

    case ADD_EVENTS:
      const estadoEvent = { ...state.user }
      estadoEvent.events = action.payload
      return { ...state, user: estadoEvent };

    case ADD_EVENTSAVATARS:
      const estadoEventAvatar = { ...state.user }
      estadoEventAvatar.eventsAvatars = action.payload
      return { ...state, user: estadoEventAvatar };

    case ADD_LISTSAVATARS:
      const estadoListAvatar = { ...state.user }
      estadoListAvatar.listsAvatars = action.payload
      return { ...state, user: estadoListAvatar };

    case DEL_LIST:
      const antiguoListState = { ...state.user }
      let indice = antiguoListState.lists.findIndex(elem => elem._id === action.payload);
      console.log(indice)
      if (indice >= 0) {
        let newArray = antiguoListState.lists.filter(elem => elem._id !== action.payload);
        console.log(newArray)
        antiguoListState.lists = newArray
      }
      return { ...state, user: antiguoListState };

    case DEL_EVENT:
      const antiguoEventState = { ...state.user }
      let indice2 = antiguoEventState.events.findIndex(elem => elem._id === action.payload);
      if (indice2 >= 0) {
        let newArray2 = antiguoEventState.events.filter(elem => elem._id !== action.payload);
        antiguoEventState.events = newArray2
      }
      return { ...state, user: antiguoEventState };

    case ADD_TASK:
      const antiguoStateTask = { ...state.user }
      antiguoStateTask.tasks = antiguoStateTask.tasks.concat(action.payload);
      return { ...state, user: antiguoStateTask };

    case ADD_TASKS:
      const tateTasks = { ...state.user }
      tateTasks.tasks = action.payload
      return { ...state, user: tateTasks };

    case ADD_TASKSREFERENCE:
      const tateTasksR = { ...state.user }
      tateTasksR.tasks = tateTasksR.tasks.concat(action.payload);
      return { ...state, user: tateTasksR };

    case DEL_TASK:
      const antiguoTaskStateToDel = { ...state.user }
      let newArrayTask = antiguoTaskStateToDel.tasks.filter(elem => elem._id !== action.payload);
      antiguoTaskStateToDel.tasks = newArrayTask
      return { ...state, user: antiguoTaskStateToDel };

    case COMPLET_TASK:
      const completStateTasks = { ...state.user }
      let taskSelect = completStateTasks.tasks.filter(elem => elem._id === action.payload.id);
      taskSelect[0].estado = action.payload.estado

      let newArrayTask2 = completStateTasks.tasks.filter(elem => elem._id !== action.payload);
      newArrayTask2.concat(taskSelect);
      completStateTasks.tasks = newArrayTask2;
      return { ...state, user: completStateTasks };

    case CHANGEPICTURE:
      const infoPAvatar = {...state.user}
      infoPAvatar.user.avatar = action.payload
      return { ...state, user: infoPAvatar };

    case CHANGEINFOPROFILE :
      const infoPerson = {...state.user}
      let nombre = action.payload.name.split(" ")
      infoPerson.user.name = nombre[0]
      infoPerson.user.apellidos = nombre[1]+ ' ' +nombre[2]
      infoPerson.user.email = action.payload.email
      return { ...state, user: infoPerson};

    case SEL_REFERENCE :
      const antiguoReference = { ...state.user }
      antiguoReference.idReference = action.payload
      return { ...state, user: antiguoReference };

    default:
      return { ...state };
  }
};
export default userReducer;