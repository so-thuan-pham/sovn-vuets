import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class ResultComponent extends Vue {
    @Prop()
    counter: number
}
