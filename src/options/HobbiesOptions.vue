<!-- 兴趣爱好属性面板设置 -->
<template>
  <el-tabs v-model="activeName" type="card" class="demo-tabs" stretch>
    <el-tab-pane label="数据配置" name="data">
      <el-form label-width="80px" label-position="left">
        <el-form-item label="标题名称:">
          <el-input
            v-model="modelItem.data.title"
            type="text"
            maxlength="15"
            show-word-limit
          />
        </el-form-item>
        <el-form-item label="兴趣爱好:">
          <el-input
            v-model="modelItem.data.content"
            type="textarea"
            maxlength="500"
            show-word-limit
            :rows="5"
          />
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="样式设置" name="style">
      <el-form label-width="100px" label-position="left">
        <!-- 公共样式属性 -->
        <common-options></common-options>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import useDesignSelectModelItem from '@/hooks/material/useDesignSelectModelItem'
import CommonOptions from './CommonOptions.vue' // 公共属性设置
defineOptions({ name: 'HOBBIESOPTIONS' })
// 选中的模块
const { modelItem } = useDesignSelectModelItem()
const activeName = ref('data')
</script>
