<template>
    <svg class="icon">
        <use :xlink:href="`#i-${name}`" :class="name">
        </use>
    </svg>
</template>
<script>
    export default{
        props:['name']
    }
</script>
<style>
    .icon{
        width:1em;
        height:1em;
    }
    .loading{
        animation: loading 1s linear infinite;
    }
    @keyframes loading {
        0%{
            transform: rotate(0deg);
            transform-origin: center;
        }
        100%{
            transform: rotate(360deg);
            transform-origin: center;
        }
    }
</style>