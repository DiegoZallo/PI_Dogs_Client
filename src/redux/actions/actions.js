import { ADD_DOG,
    DELETE_DOG,
    GET_BYNAME,
    GET_DOGS,
    GET_TEMPERAMENTS,
    PAGINATE,
    FILTER,
    ORDER,
    ERROR_TYPE} from "../actionTypes/actionTypes";

import axios from "axios";

    
export const getDogs = () => {
    return async (dispatch) => {
      try {
            const dogs=(await axios(`dogs`)).data;
            return dispatch({
               type: GET_DOGS,
               payload: [...dogs],
            });     
      } catch (error) {
            return dispatch({
                type: ERROR_TYPE, 
                payload: error.message, 
            });
      }
    };
}
export const addDog = (newDog) => {
    return async (dispatch) => {
      try {
            await axios.post(`dogs`, newDog)
            return dispatch({
               type: ADD_DOG,
               payload: newDog,
            });     
      } catch (error) {
            return dispatch({
                type: ERROR_TYPE, 
                payload: error.message, 
            });
      }
    };
}
export const getByName = (name) => {
    return async (dispatch) => {
        try {
           const dogs=(await axios(`dogs?name=${name}`)).data;
           return dispatch({
                 type: GET_BYNAME,
                 payload: dogs,
           });     
        } catch (error) {
            return dispatch({
                type: ERROR_TYPE, 
                payload: error.message, 
            });
        }
      }; 
}
export const deleteDog = (id) => {
    return async (dispatch) => {
        try {
           const dogs=(await axios.delete(`dogs/${id}`)).data;
           return dispatch({
                 type: DELETE_DOG,
                 payload: dogs,
           });     
        } catch (error) {
            return dispatch({
                type: ERROR_TYPE, 
                payload: error.message, 
            });
        }
      }; 
}
export const getTemperaments = () => {
    return async (dispatch) => {
      try {
            const temp = (await axios(`temperaments`)).data
            return dispatch({
               type: GET_TEMPERAMENTS,
               payload: temp
            });     
      } catch (error) {
            return dispatch({
                type: ERROR_TYPE, 
                payload: error.message, 
            });
      }
    };
}
    export const paginate=(page)=>{
        return { 
            type: PAGINATE, 
            payload: page
            }
}
    export const filter=(cond, name)=>{
        return async (dispatch) => {
        cond.name= name.toLowerCase();
        return dispatch({ 
            type: FILTER, 
            payload: cond
            });
        }
}
    export const order=(order)=>{
        return { 
            type: ORDER, 
            payload: order
            }
}
    export const reset_error=()=>{
        return { 
            type: ERROR_TYPE, 
            payload: ''
            }
}


    