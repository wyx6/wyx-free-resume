<template>
  <div class="edu-background">
    <!-- 标题 -->
    <model-title
      :title="modelData.title"
      :model-style="modelStyle"
    ></model-title>
    <!-- 教育背景 -->
    <div class="edu-list">
      <div
        v-for="(item, index) in modelData.LIST"
        :key="index"
        class="single-edu"
      >
        <div class="edu-school">
          <!-- 学校名称 -->
          <div v-if="modelData.isShow.schoolName">{{ item.schoolName }}</div>
          <!-- 学历日期 -->
          <div v-if="modelData.isShow.date">{{ formatDate(item.date) }}</div>
        </div>
        <div class="edu-inf">
          <!-- 专业 -->
          <div v-if="modelData.isShow.specialized">{{ item.specialized }}</div>
          <!-- 学历 -->
          <div v-if="modelData.isShow.degree">{{ item.degree }}</div>
          <!-- 学院 -->
          <div v-if="modelData.isShow.degree">信息科学与技术学院</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { IEDUBACKGROUND } from '@/interface/model'
import ModelTitle from '../../ModelTitle/ModelTitle5/ModelTitle.vue'
import { formatDate } from '@/utils/common'
import type { IMODELSTYLE } from '@/interface/modelStyle'
defineProps<{
  modelData: IEDUBACKGROUND
  modelStyle: IMODELSTYLE // 模块样式
}>()
</script>
<style lang="scss" scoped>
.edu-background {
  padding-top: v-bind('modelStyle.pTop');
  padding-bottom: v-bind('modelStyle.pBottom');
  padding-left: v-bind('modelStyle.pLeftRight');
  padding-right: v-bind('modelStyle.pLeftRight');
  margin-bottom: v-bind('modelStyle.mBottom');
  margin-top: v-bind('modelStyle.mTop');
  box-sizing: border-box;

  .edu-list {
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-top: 25px;
    .single-edu {
      margin-bottom: 15px;
      .edu-school {
        display: flex;
        justify-content: space-between;
        align-items: center;

        div {
          font-size: v-bind('modelStyle.titleFontSize');
          color: v-bind('modelStyle.titleColor');
          font-weight: v-bind('modelStyle.titleFontWeight');
          letter-spacing: 2px;
        }

        &:not(:last-child) {
          margin-bottom: 10px;
        }
      }
      .edu-inf {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        div {
          margin-right: 10px;
          font-size: v-bind('modelStyle.titleFontSize');
          color: v-bind('modelStyle.titleColor');
          font-weight: v-bind('modelStyle.titleFontWeight');
          letter-spacing: 2px;
        }
      }
    }
  }
}
</style>
