<template>
    <button class="g-button" :class="`icon-${iconPosition}`">
        <svg v-if="icon" class="icon"><use :xlink:href="`#i-${icon}`"></use></svg>
        <slot></slot>
    </button>

</template>
<script>
    export default {
        props:['icon','iconPosition']
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
    .icon{
        width:1em;
        height:1em;
        margin-left: 0;
        margin-right: .3em;
    }
    .icon-right .icon{
        order:2;
        margin-left: .3em;
        margin-right: 0;
    }
</style>