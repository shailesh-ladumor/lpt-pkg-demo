import {TicketTypes} from '../actionType';

export default (state = [], action) => {
  switch(action.type){
    case TicketTypes.FETCH_TCKETS:
     return action.payload;
    default:
     return state; 
  }
}