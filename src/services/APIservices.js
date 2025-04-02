export const getAgenda = async (dispatch) => {
    const response = await fetch('https://playground.4geeks.com/contact/agendas/Davidruiz03061976/contacts',{
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if(!response.ok){
      createAgenda()
      return
    }
    const data = await response.json();
    dispatch({type: 'getContact', payload: data.contacts});
  }
  export const createAgenda = async () => {
    const response = await fetch('https://playground.4geeks.com/contact/agendas/Davidruiz03061976',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if(response.ok){
      const data = await response.json();
      return data;
    }
  }
  export const createContact = async (dispatch,data) => {
    const response = await fetch('https://playground.4geeks.com/contact/agendas/Davidruiz03061976/contacts',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if(response.ok){
      const data = await response.json();
      // getAgenda(dispatch)
      dispatch({type: 'addContact', payload: data});
    }
  }
  export const editContact = async (dispatch, data , id) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Davidruiz03061976/contacts/${id}`,{
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if(response.ok){
      const dataNew = await response.json();
      getAgenda(dispatch)
      return;
    }
  }
  export const deleteContact = async (dispatch, id) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Davidruiz03061976/contacts/${id}`,{
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
    });
    if(response.ok){
      dispatch({type: 'deleteContact', payload: id});
      return;
    }
  }
 