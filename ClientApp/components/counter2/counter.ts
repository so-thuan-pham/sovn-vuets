import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class CounterComponent extends Vue {
    increment() {
        this.$emit('updated', 1);
    }
    
    decrement() {
        this.$emit('updated', -1);
    }
}
