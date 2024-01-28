<template>
  <!-- 导航栏 -->
  <NavBar :bg-color="navColor" :font-color="fontColor" :icon-color="iconColor"></NavBar>
  <div>
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 text="2xl" justify="center">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="card-list">
      <template v-for="(item, index) in templateList" :key="index">
        <TemplateCard :card-data="item" @to-design="toDesign(item)"></TemplateCard>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import NavBar from '@/components/NavBar/NavBar.vue'
import { throttle } from 'lodash'
import TemplateCard from '@/view/index/components/TemplateCard.vue'
import templateList from '@/template/index'
// 监听元素滚动
onMounted(() => {
  window.addEventListener('scroll', throttleHandle)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', throttleHandle)
})
// 页面滚动改变导航栏样式
const throttleHandle = throttle(() => {
  handleScroll()
}, 300)
const navColor = ref<string>('  #ffffff')
const fontColor = ref<string>('green')
const iconColor = ref<string>('green')
const handleScroll = () => {
  if (document.documentElement.scrollTop > 0) {
    navColor.value = '#ffffff'
    fontColor.value = 'green'
    iconColor.value = 'green'
  } else {
    navColor.value = '  #ffffff'
    iconColor.value = 'green'
    fontColor.value = 'green'
  }
}
const toDesign = (Item: ITempList) => {
  openGlobalLoading() // 等待动画层
  resetSelectModel() // 重置选中模块
  router.push({
    path: '/design',
    query: {
      id: Item.id,
      name: Item.name
    }
  })
}
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.card-list {
  width: 100vw;
  display: flex;
  margin-top: 25px;
}
</style>
