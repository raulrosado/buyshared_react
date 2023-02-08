import { SET_USER,SEL_EVENT,SEL_LIST,SHOW_MODAL,ADD_LISTS,ADD_EVENTS,ADD_EVENTSAVATARS,ADD_LISTSAVATARS,DEL_LIST,DEL_EVENT } from "./type";

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