import Vue from 'vue';
import { Component } from 'vue-property-decorator';

const AppCounter = require('./counter.vue.html');
const AppResult = require('./result.vue.html');

@Component({
    components: {
        AppCounter,
        AppResult
    }
})
export default class AppCounterComponent extends Vue {
    counter: number = 0
}