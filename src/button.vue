<template>
    <button class="g-button" :class="`icon-${iconPosition}`" @click="onClickBtn">
        <g-icon v-if="loadingSta" name="loading"></g-icon>
        <g-icon v-if="icon && !loadingSta" :name="icon" class="icon notLoading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>

    </button>

</template>
<script>
    export default {
        props: {
            icon: {},
            iconPosition: {
                type: String,
                default: 'left',
                validator(value){
                    return value === 'left' || value === 'right';
                }
            }
        },
        data(){
            return {
                loadingSta: false
            }
        },
        methods: {
            onClickBtn(){
                this.loadingSta = !this.loadingSta
            }
        },
    }
</script>
<style>
    .g-button{
        font-size: var(--font-size);
        height: var(--button--height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background-color: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
    }
    .g-button:hover{
        border-color: var(--border-active-color);
    }
    .g-button:active{
        background-color: var(--button-active-bg);
    }
    .g-button:focus{
        outline: none;
    }
    .icon-right .icon{
        order:2;
        margin-left: .3em;
        margin-right: 0;
    }
    .icon-right .content{
        order:1;
    }
    .icon-left .icon{
        order:1;
        margin-left: 0;
        margin-right: .3em;
    }
    .icon-left .content{
        order:2;
    }

</style>