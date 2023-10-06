<script setup>
import {ref, reactive} from 'vue';
import {layer} from '@layui/layer-vue'
import {useCounterStore} from "./store/modules/test";

const counter = useCounterStore()

const count = () => {
    counter.increment()
}

const submit = () => {
    layer.msg(`${JSON.stringify(model)}`, {time: 2000});
};
</script>

<template>
    <lay-notice-bar text="以创造性的行为实践于人世。若能以写作为工具，为道途，先帮助自己一程，再以领悟帮助他人一程。这是一种服务。" mode="link"></lay-notice-bar>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
</template>

<style scoped>
</style>
