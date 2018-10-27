import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import counterStore from '../../store/counter/counter';
import orderStore from '../../store/order/order';
import { Order } from '../../store/order';

@Component
export default class ResultComponent extends Vue {
    get counter() {
        return counterStore.state.counter;
    }

    getOrders() {
        return orderStore.state.orders;
    }

    newOrder() {
        orderStore.actions.newOrder({} as Order);
        orderStore.actions.deleteOrder({} as Order);
    }

    deleteOrder(){
        
    }
}
