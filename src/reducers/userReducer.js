import { SET_USER,SEL_EVENT,SEL_LIST,SHOW_MODAL } from "../actions/type";

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
    default:
      return { ...state };
  }
};
export default userReducer;