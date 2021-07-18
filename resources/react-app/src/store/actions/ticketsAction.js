import axios from 'axios';
import {TicketTypes} from '../actionType';

export const fetchTickets = () => async (dispatch) =>{
  await axios.get('api/tickets').then(({data})=>{
   dispatch({type: TicketTypes.FETCH_TCKETS, payload: data.data})
  });
}
