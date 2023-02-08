import { SET_USER,SEL_EVENT,SEL_LIST,SHOW_MODAL,ADD_LISTS,ADD_EVENTS,ADD_EVENTSAVATARS,ADD_LISTSAVATARS,DEL_LIST,DEL_EVENT,ADD_TASK,ADD_TASKS } from "../actions/type";

const initialState ={
    user:[]    
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SEL_EVENT:
      const antiguo = {...state.user}
      antiguo.idEvent = action.payload
      return { ...state, user:antiguo};
    case SEL_LIST:
      const antiguoList = {...state.user}
      antiguoList.idList = action.payload
      return { ...state, user:antiguoList};
    case SHOW_MODAL:
      const showM = {...state.user}
      showM.showModal = action.payload
      return { ...state, user: showM };
    case ADD_LISTS:
      const estadoList = {...state.user}
      estadoList.lists = action.payload
      return { ...state, user: estadoList };
    case ADD_EVENTS:
      const estadoEvent = {...state.user}
      estadoEvent.events = action.payload
      return { ...state, user: estadoEvent };

    case ADD_EVENTSAVATARS:
      const estadoEventAvatar = {...state.user}
      estadoEventAvatar.eventsAvatars = action.payload
      return { ...state, user: estadoEventAvatar };

    case ADD_LISTSAVATARS:
      const estadoListAvatar = {...state.user}
      estadoListAvatar.listsAvatars = action.payload
      return { ...state, user: estadoListAvatar };

    case DEL_LIST:
      const antiguoListState= {...state.user}
      let indice = antiguoListState.lists.findIndex(elem => elem._id === action.payload);
      console.log(indice)
      if(indice >= 0){
        // let newArray = antiguoListState.lists.splice(indice, 1);
        let newArray = antiguoListState.lists.filter(elem => elem._id !== action.payload);
        console.log(newArray)
        antiguoListState.lists = newArray
      }
      
      return { ...state, user: antiguoListState};

    case DEL_EVENT:
      const antiguoEventState= {...state.user}
      let indice2 = antiguoEventState.events.findIndex(elem => elem._id === action.payload);
      console.log(indice2)
      if(indice2 >= 0){
        let newArray2 = antiguoEventState.events.filter(elem => elem._id !== action.payload);
        console.log(newArray2)
        antiguoEventState.events = newArray2
      }
      return { ...state, user: antiguoEventState };
    
    case ADD_TASK:
      const antiguoStateTask = {...state.user}
      antiguoStateTask.tasks.push(action.payload)
      return { ...state, user: antiguoStateTask };
      
    case ADD_TASKS:
      const tateTasks = {...state.user}
      tateTasks.tasks.push(action.payload)
      return { ...state, user: tateTasks };

    default:
      return { ...state };
  }
};
export default userReducer;