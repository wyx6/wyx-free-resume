<!-- 简历求职意向属性面板 -->
<template>
  <el-tabs v-model="activeName" type="card" class="demo-tabs" stretch>
    <el-tab-pane label="数据配置" name="data">
      <el-form-item label="标题名称:">
        <el-input
          v-model="modelItem.data.title"
          type="text"
          maxlength="15"
          show-word-limit
        />
      </el-form-item>
      <div
        v-for="(item, index) in modelItem.data.LIST"
        :key="index"
        class="edu-list"
      >
        <p>
          <span>学历{{ index + 1 }}</span>
          <el-button
            :disabled="index === 0"
            type="danger"
            :icon="Delete"
            circle
            @click="deleteEdu(index)"
          />
        </p>
        <el-form-item label="日期选择:">
          <el-date-picker
            v-model="item.date"
            type="monthrange"
            range-separator="-"
            start-placeholder="开始月份"
            end-placeholder="结束月份"
          />
          <el-switch v-model="modelItem.data.isShow.date" />
        </el-form-item>
        <el-form-item label="学校名称:">
          <el-input
            v-model="item.schoolName"
            type="text"
            maxlength="40"
            show-word-limit
          />
          <el-switch v-model="modelItem.data.isShow.schoolName" />
        </el-form-item>
        <el-form-item label="专业名称:">
          <el-input
            v-model="item.specialized"
            type="text"
            maxlength="20"
            show-word-limit
          />
          <el-switch v-model="modelItem.data.isShow.specialized" />
        </el-form-item>
        <el-form-item label="学历学位:">
          <el-select v-model="item.degree" class="m-2" placeholder="Select">
            <el-option
              v-for="(sItem, sIndex) in degreeList"
              :key="sIndex"
              :label="sItem"
              :value="sItem"
            />
          </el-select>
          <el-switch v-model="modelItem.data.isShow.degree" />
        </el-form-item>
      </div>
      <!-- 添加或删除学历 -->
      <div class="addOrdelet">
        <el-button type="primary" @click="addEdu">添加学历</el-button>
      </div>
    </el-tab-pane>
    <el-tab-pane label="样式设置" name="style">
      <el-form label-width="100px" label-position="left">
        <!-- 公共样式属性 -->
        <common-title-options
          color-label="二级标题颜色"
          font-size-label="二级标题大小"
          font-weight-label="二级标题粗细"
        ></common-title-options>
        <!-- 公共样式属性 -->
        <common-options></common-options>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Delete } from '@element-plus/icons-vue'
import CommonTitleOptions from './CommonTitleOptions.vue'
import { useDegreeList } from '@/hooks/useDegreeList'
import CommonOptions from './CommonOptions.vue'
import useDesignSelectModelItem from '@/hooks/material/useDesignSelectModelItem'
defineOptions({ name: 'EDUBACKGROUNDOPTIONS' })
// 选中的模块
const { modelItem } = useDesignSelectModelItem()

const activeName = ref('data')
const { degreeList } = useDegreeList() // 学历列表
// 添加学历
const addEdu = (): void => {
  modelItem.data.LIST.push({
    date: ['2015-5', '2019-6'],
    schoolName: '小猪大学', // 学校名称
    specialized: '通信工程', // 专业
    degree: '本科', // 学历
    majorCourse: '主修计算机技术、Java、c++等等' // 主修课程
  })
}
// 删除学历
const deleteEdu = (index: number): void => {
  modelItem.data.LIST.splice(index, 1)
}
</script>
<style lang="scss" scoped>
.edu-list {
  p {
    display: flex;
    justify-content: center;
    height: 50px;
    align-items: center;
    margin-bottom: 10px;

    span {
      margin-right: 10px;
    }
  }
}

.addOrdelet {
  width: 100%;
  display: flex;
  height: 50px;
  align-items: center;
}
</style>
