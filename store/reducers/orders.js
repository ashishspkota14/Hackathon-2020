import { ADD_ORDER, SET_ORDER } from "../actions/orders";
import Order from "../../models/orders";

const initialState = {
    orders:[]
};

export default(state=initialState, action)=>{
switch(action.type){
    case SET_ORDER:
        return{
            orders:action.orders
        }
    case ADD_ORDER:
        const newOrder = new Order(
            action.orderData.id,
            action.orderData.items,
            action.orderData.amount,
            action.orderData.date
        );

return {
    ...state, //copying state which is not needed in this case
    orders:state.orders.concat(newOrder)
};
}

return state;
};