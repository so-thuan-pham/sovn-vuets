import {OrderState, Order} from './index';
import { storeBuilder } from '../store';
import * as OrderMutations from './mutations';
import * as OrderActions from './actions';

//State
const state: OrderState = {
    orders: [] as Order[],
}

export const b = storeBuilder.module<OrderState>("order", state);
const stateGetter = b.state();

//getters

//actions
export const actions = {
    newOrder: b.dispatch(OrderActions.newOrder),
    deleteOrder: b.dispatch(OrderActions.deleteOrder)
}

//mutations
export const mutations = {
    insertOrder: b.commit(OrderMutations.insertOrder),
    insertOrder1: b.commit(OrderMutations.insertOrder2),
    deleteOrder: b.commit(OrderMutations.deleteOrder)
}


// exported "counter" module interface
const orderStore = {
    get state() { return stateGetter() },
    mutations: mutations,
    actions: actions
}

export default orderStore