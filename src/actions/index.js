import { SET_USER,SEL_EVENT,SEL_LIST,SHOW_MODAL,ADD_LISTS,ADD_EVENTS,ADD_EVENTSAVATARS,ADD_LISTSAVATARS,DEL_LIST,DEL_EVENT,ADD_TASK,ADD_TASKS } from "./type";
import { DEL_TASK,COMPLET_TASK,LOGOUT,CHANGEPICTURE,CHANGEINFOPROFILE,ADD_TASKSREFERENCE,SEL_REFERENCE,SAVE,ADD_LIST,ADD_LISTSAVATAR,ADD_EVENT } from "./type";

export const setUser = (payload) =>({
    type:SET_USER,
    payload,
})
export const setEvent = (payload) =>({
    type:SEL_EVENT,
    payload,
})
export const setList = (payload) =>({
    type:SEL_LIST,
    payload,
})
export const setShowModal = (payload) =>({
    type:SHOW_MODAL,
    payload,
})
export const addLists = (payload) =>({
    type:ADD_LISTS,
    payload,
})
export const addEvents = (payload) =>({
    type:ADD_EVENTS,
    payload,
})
export const addEventsAvatar = (payload) =>({
    type:ADD_EVENTSAVATARS,
    payload,
})
export const addListsAvatar = (payload) =>({
    type:ADD_LISTSAVATARS,
    payload,
})
export const delListAction = (payload) =>({
    type:DEL_LIST,
    payload,
})
export const delEventAction = (payload) =>({
    type:DEL_EVENT,
    payload,
})
export const addTaskState = (payload) =>({
    type:ADD_TASK,
    payload,
})
export const addTasksState = (payload) =>({
    type:ADD_TASKS,
    payload,
})
export const addTasksReferenceState = (payload) =>({
    type:ADD_TASKSREFERENCE,
    payload,
})
export const delTasksState = (payload) =>({
    type:DEL_TASK,
    payload,
})
export const completTasksState = (payload) =>({
    type:COMPLET_TASK,
    payload,
})
export const logoutProfil = (payload) =>({
    type:LOGOUT,
    payload,
})
export const changePicture = (payload) =>({
    type:CHANGEPICTURE,
    payload,
})
export const changeInfoPerfil = (payload) =>({
    type:CHANGEINFOPROFILE,
    payload,
})
export const selectReference = (payload) =>({
    type:SEL_REFERENCE,
    payload,
})
export const saveLocalStorage = (payload) =>({
    type:SAVE,
    payload,
})

export const addNewList = (payload) =>({
    type:ADD_LIST,
    payload,
})

export const addAvatarList = (payload) =>({
    type:ADD_LISTSAVATAR,
    payload,
})

export const addNewEvent = (payload) =>({
    type:ADD_EVENT,
    payload,
})  