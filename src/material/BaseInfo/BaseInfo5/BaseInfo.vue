<template>
  <div class="base-info">
    <!-- 基础信息 -->
    <div class="user-info">
      <h1>{{ modelData.name }}</h1>
      <!-- 一句话简介 -->
      <!-- <p v-show="isShow.abstract" class="user-abstract">{{ modelData.abstract }}</p> -->
      <!-- 年龄、地点、经验等信息 -->
      <ul>
        <li v-show="isShow.address" class="li-border">{{ modelData.address }}</li>
        <li v-show="isShow.phoneNumber" class="li-border">{{ modelData.phoneNumber }}</li>
        <li v-show="isShow.email">{{ modelData.email }}</li>
      </ul>
      <ul>
        <li v-show="isShow.age" class="li-border">{{ modelData.age }}岁</li>
        <li v-show="isShow.workService">{{ modelData.workService }}年经验</li>
      </ul>
      <!-- 求职意向 -->
      <ul>
        <!-- 求职类型 -->
        <li v-show="isShow.jobSearchType" class="li-border">
          <svg-icon icon-name="icon-gongzuoleixing" class-name="icon" color="#757575"></svg-icon>
          {{ modelData.jobSearchType }}
        </li>
        <!-- 意向岗位 -->
        <li v-show="isShow.intendedPositions" class="li-border">
          <svg-icon icon-name="icon-yixianggangwei" class-name="icon" color="#757575"></svg-icon
          >{{ modelData.intendedPositions }}
        </li>
        <!-- 意向城市 -->
        <li v-show="isShow.intendedCity" class="li-border">
          <svg-icon icon-name="icon-didiandingwei" class-name="icon" color="#757575"></svg-icon
          >{{ modelData.intendedCity }}
        </li>
        <!-- 期望薪资 -->
        <li v-show="isShow.expectSalary" class="li-border">
          <svg-icon icon-name="icon-nianduxinchou" class-name="icon" color="#757575"></svg-icon
          >{{ modelData.expectSalary }}
        </li>
        <!-- 求职状态 -->
        <li v-show="isShow.jobStatus">
          <svg-icon icon-name="icon-ruzhiriqi" class-name="icon" color="#757575"></svg-icon
          >{{ modelData.jobStatus }}
        </li>
      </ul>
    </div>
    <!-- 个人头像 -->
    <div v-show="isShow.avatar" class="avatar-box">
      <el-image style="width: 115px; height: 115px" :src="modelData.avatar" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { IBASEINFO } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'
import { reactive } from 'vue'
defineOptions({
  name: 'BASE_INFO_5'
})
const props = defineProps<{
  modelData: IBASEINFO // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}>()
const isShow = reactive(props.modelData.isShow)
</script>
<style scoped lang="scss">
.base-info {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding-top: v-bind('modelStyle.pTop');
  padding-bottom: v-bind('modelStyle.pBottom');
  padding-left: v-bind('modelStyle.pLeftRight');
  padding-right: v-bind('modelStyle.pLeftRight');
  margin-bottom: v-bind('modelStyle.mBottom');
  margin-top: v-bind('modelStyle.mTop');

  .avatar-box {
    width: 108px;
    height: 130px;
    border-radius: 8%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 40px;

    .el-image {
      border-radius: 8%;
    }
  }

  .user-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 5px;

    h1 {
      font-size: v-bind('modelStyle.titleFontSize');
      color: v-bind('modelStyle.titleColor');
      font-weight: v-bind('modelStyle.titleFontWeight');
      margin-bottom: 20px;
    }

    ul {
      display: flex;
      margin-bottom: 5px;

      li {
        list-style: none;
        font-size: v-bind('modelStyle.textFontSize');
        font-weight: v-bind('modelStyle.textFontWeight');
        padding-right: 12px;
        height: 20px;
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: v-bind('modelStyle.textColor');
      }

      .li-border {
        border-right: 2px solid #b4b4b4;
      }
    }
  }
}
</style>
