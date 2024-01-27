<<<<<<< HEAD
<template>
  <div>
    <router-view v-show="!loading"></router-view>
    <loading-com-vue v-show="loading"></loading-com-vue>
  </div>
</template>

<script setup lang="ts">
import LoadingComVue from '@/components/Loading/LoadingCom.vue' // 全局等待层
import { openAndCloseLoadingByTime } from './utils/common'
import appStore from './store'
import { storeToRefs } from 'pinia'

const { loading } = storeToRefs(appStore.useLoadingStore)
openAndCloseLoadingByTime(1500) //等待动画层
</script>
<style lang="scss" scoped>
#app {
  min-width: 1500px;
=======
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
>>>>>>> b928a98f11be1ef4272994a4fed3fda2388a8f60
}
</style>
