<!-- 实习经验属性设置 -->
<template>
  <el-tabs v-model="activeName" type="card" class="demo-tabs" stretch>
    <el-tab-pane label="数据配置" name="data">
      <el-form label-width="70px" label-position="left">
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
          class="campus-list"
        >
          <p>
            <span>实习经验{{ index + 1 }}</span>
            <el-button
              :disabled="index === 0"
              type="danger"
              :icon="Delete"
              circle
              @click="deleteCampus(index)"
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
          <el-form-item label="公司名称:">
            <el-input
              v-model="item.companyName"
              type="text"
              maxlength="35"
              show-word-limit
            />
            <el-switch v-model="modelItem.data.isShow.companyName" />
          </el-form-item>
          <el-form-item label="主要职责:">
            <el-input
              v-model="item.posts"
              type="text"
              maxlength="35"
              show-word-limit
            />
            <el-switch v-model="modelItem.data.isShow.posts" />
          </el-form-item>
          <el-form-item
            v-for="(content, cIndex) in item.jobContent"
            :key="cIndex"
            label="工作内容:"
          >
            <el-input
              v-model="content.content"
              type="textarea"
              maxlength="200"
              show-word-limit
              :rows="3"
            />
            <el-button
              type="danger"
              :icon="SemiSelect"
              circle
              @click="deleteContent(index, cIndex)"
            />
            <el-button
              :disabled="cIndex !== item.jobContent.length - 1"
              type="primary"
              :icon="Plus"
              circle
              @click="addContent(index)"
            />
          </el-form-item>
        </div>
        <!-- 添加或删除经历 -->
        <div class="addOrdelet">
          <el-button type="primary" @click="addCampus">添加经历</el-button>
        </div>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="样式设置" name="style">
      <el-form label-width="100px" label-position="left">
        <!-- 标题样式属性 -->
        <common-title-options></common-title-options>
        <!-- 公共样式属性 -->
        <common-options></common-options>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import CommonOptions from './CommonOptions.vue'
import CommonTitleOptions from './CommonTitleOptions.vue'
import useDesignSelectModelItem from '@/hooks/material/useDesignSelectModelItem'
import { Delete, SemiSelect, Plus } from '@element-plus/icons-vue'
defineOptions({ name: 'INTERNSHIPEXPERIENCEOPTIONS' })
// 选中的模块
const { modelItem } = useDesignSelectModelItem()
const activeName = ref('data')

/**
 * 数据配置
 */
// 删除技能
const deleteCampus = (index: number): void => {
  modelItem.data.LIST.splice(index, 1)
}
// 添加经验
const addCampus = (): void => {
  modelItem.data.LIST.push({
    date: ['2021-9', '2022-10'], // 实习时间
    companyName: '业绩公司', // 公司名称
    posts: '前端开发工程师', // 职位
    jobContent: [
      {
        content: '主要工作内容是打杂'
      },
      {
        content:
          '主要工作内容是打杂主要工作内容是打杂主要工作内容是打杂主要工作内容是打杂主要工作内容是打杂'
      },
      {
        content: '主要工作内容是打杂'
      }
    ]
  })
}
// 添加实习内容
const addContent = (index: number): void => {
  modelItem.data.LIST[index].jobContent.push({
    content: '主要工作内容是打杂'
  })
}
// 删除内容
const deleteContent = (index: number, cIndex: number): void => {
  modelItem.data.LIST[index].jobContent.splice(cIndex, 1)
}
</script>
<style lang="scss" scoped>
.campus-list {
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

  .el-button {
    margin-left: 10px;
  }
}
</style>
