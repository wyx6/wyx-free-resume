<!-- 荣誉奖项 -->
<template>
  <div class="awards">
    <!-- 标题 -->
    <model-title
      :title="modelData.title"
      :model-style="modelStyle"
    ></model-title>
    <!-- 荣誉奖项 -->
    <div class="awards-list">
      <ul v-for="(item, index) in modelData.LIST" :key="index">
        <div class="award-left">
          <!-- 奖项名称 -->
          <li v-show="modelData.isShow.awardsName" class="list-one">
            {{ item.awardsName }}
          </li>
          <!-- 奖项等级 -->
          <li v-show="modelData.isShow.awardsGrade">{{ item.awardsGrade }}</li>
        </div>
        <!-- 获奖日期 -->
        <li v-show="modelData.isShow.date">{{ formatDate(item.date) }}</li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { IAWARDS } from '@/interface/model'
import ModelTitle from '../../ModelTitle/ModelTitle5/ModelTitle.vue'
import { formatDate } from '@/utils/common'
import type { IMODELSTYLE } from '@/interface/modelStyle'
defineProps<{
  modelData: IAWARDS
  modelStyle: IMODELSTYLE // 模块样式
}>()
</script>
<style lang="scss" scoped>
.awards {
  padding-top: v-bind('modelStyle.pTop');
  padding-bottom: v-bind('modelStyle.pBottom');
  padding-left: v-bind('modelStyle.pLeftRight');
  padding-right: v-bind('modelStyle.pLeftRight');
  box-sizing: border-box;
  margin-bottom: v-bind('modelStyle.mBottom');
  margin-top: v-bind('modelStyle.mTop');

  .awards-list {
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-top: 25px;

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .award-left {
        display: flex;
        .list-one {
          margin-right: 15px;
        }
      }
      li {
        list-style: none;
        font-size: v-bind('modelStyle.textFontSize');
        color: v-bind('modelStyle.textColor');
        font-weight: v-bind('modelStyle.textFontWeight');
        letter-spacing: 2px;
      }

      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
