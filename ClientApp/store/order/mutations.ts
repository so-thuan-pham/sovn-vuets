import * as OrderModule from "./index"
export {insertOrder2} from "./mutations2"

export const insertOrder = function insertOrder(state: OrderModule.OrderState, payload: OrderModule.Order) {
    state.orders.push(payload);
}

export const deleteOrder = function deleteOrder(state: OrderModule.OrderState, payload: OrderModule.Order){
    state.orders.splice(2, 1);
}