import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class CounterComponent extends Vue {
    
    increment() {
        this.$store.state.counter++;
    }

    decrement() {
        this.$store.state.counter--;
    }
}
