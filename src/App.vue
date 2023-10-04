<script setup>
import {ref, reactive} from 'vue';
import {layer} from '@layui/layer-vue'
import {useCounterStore} from "./store/modules/test";

const model = reactive({})
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

    <h1>Hello App!</h1>
    <p>
        <button @click="count()">{{ counter.count }}</button>
    </p>
    <p>
        <lay-button>默认按钮</lay-button>
        <lay-button type="primary">原始按钮</lay-button>
        <lay-button type="normal">百搭按钮</lay-button>
        <lay-button type="warm">暖色按钮</lay-button>

        <lay-button type="danger">警告按钮</lay-button>
    </p>
    <p>
        <!--使用 router-link 组件进行导航 -->
        <!--通过传递 `to` 来指定链接 -->
        <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
        <router-link to="/">Go to Home</router-link>
        <router-link to="/login">Go to About</router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
    <div style="width: 80%">
        <lay-form :model="model">
            <lay-form-item label="账户" prop="username">
                <lay-input v-model="model.username"></lay-input>
            </lay-form-item>
            <lay-form-item label="密码" prop="password">
                <lay-input v-model="model.password" type="password"></lay-input>
            </lay-form-item>
            <lay-form-item label="描述" prop="desc">
                <lay-textarea placeholder="请输入描述" v-model="model.describe"></lay-textarea>
            </lay-form-item>
            <lay-form-item style="text-align: center;">
                <lay-button type="primary" @click="submit">提交</lay-button>
                <lay-button type="default" @click="">重置</lay-button>
            </lay-form-item>
        </lay-form>
    </div>
</template>

<style scoped>
</style>
