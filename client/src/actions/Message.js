import * as api from '../api/index';


export const addMessage=(convoId, user, text)=> async(dispatch) => {
    try {
        const {data} = await api.message(convoId, user, text);
        dispatch({ type: "New_User", payload: data});
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const converId = (logedUser, selectedUser) => async(dispatch) => {
   try {
      const {data} = await api.getconvo(logedUser, selectedUser);
      console.log(data);
      dispatch({ type: "New_User", payload: data});
      return data;
   }catch(err) {
      console.log(err);
   }
} 