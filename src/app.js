import Vue from 'vue'
import Icon from './icon.vue'
import Button from './button.vue'

Vue.component('g-icon',Icon)
Vue.component('g-button',Button)


new Vue({
    el:'#app',
    data:{
        message: 'hi',
        name:''
    }
})