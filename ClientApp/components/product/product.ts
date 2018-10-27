import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Product } from '../../store/product';
import productStore from '../../store/product/product';

@Component
export default class ProductComponent extends Vue {
    products: Product[] = [];

    created() {
        productStore.actions.newProduct({id: 1, name: 'Product A', price: 100})
    }

    mounted() {
        productStore.actions.fetchProducts().then(data => {
            this.products = data;
        })
    }
}