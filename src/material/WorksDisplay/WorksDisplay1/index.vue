<!-- 作品展示 -->
<template>
  <div class="works-display">
    <!-- 标题 -->
    <model-title
      :title="modelData.title"
      :model-style="modelStyle"
    ></model-title>
    <!-- 作品展示 -->
    <ul class="works-display-list">
      <li v-for="(item, index) in modelData.LIST" :key="index">
        <h1>{{ item.worksName }}</h1>
        <a :href="item.worksLink" target="_blank">{{ item.worksLink }}</a>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import type { IWORKSDISPLAY } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'
import ModelTitle from '../../ModelTitle/ModelTitle1/ModelTitle1.vue'
defineProps<{
  modelData: IWORKSDISPLAY
  modelStyle: IMODELSTYLE // 模块样式
}>()
</script>
<style lang="scss" scoped>
.works-display {
  padding-top: v-bind('modelStyle.pTop');
  padding-bottom: v-bind('modelStyle.pBottom');
  padding-left: v-bind('modelStyle.pLeftRight');
  padding-right: v-bind('modelStyle.pLeftRight');
  box-sizing: border-box;
  margin-bottom: v-bind('modelStyle.mBottom');
  margin-top: v-bind('modelStyle.mTop');

  .works-display-list {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    li {
      display: flex;
      flex-direction: column;
      list-style: none;

      h1 {
        font-size: v-bind('modelStyle.textFontSize');
        color: v-bind('modelStyle.textColor');
        font-weight: v-bind('modelStyle.textFontWeight');
        letter-spacing: 2px;
        margin: 0;
      }

      a {
        font-size: 20px;
        margin-top: 5px;

        &:hover {
          color: #00c091;
        }
      }

      &:not(:last-child) {
        margin-bottom: 15px;
      }
    }
  }
}
</style>
