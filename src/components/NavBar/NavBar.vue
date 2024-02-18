<!-- 首页标题栏 -->
<template>
  <div class="nav-bar-box">
    <div class="logo" @click="toIndex">
      <img src="@/assets/logo.png" alt="logo" srcset="" />
      <span>Resume制简</span>
    </div>
    <div class="center">
      <div class="resume same" @click="toMyResume">我的简历</div>
      <div class="template same" @click="toTemplate">简历模板</div>
      <div class="forum same" @click="toForum">求职论坛</div>
      <div class="AI same">
        <a href="">AI助手</a>
      </div>
    </div>
    <!-- GitHub -->
    <div class="right">
      <el-popover :width="200" trigger="click" teleported>
        <template #reference>
          <span class="contact-me">
            <svg-icon
              icon-name="icon-lianxiwomen1"
              :color="iconColor"
              size="16px"
            ></svg-icon>
            官方交流群
          </span>
        </template>
        <!-- 内容区域 -->
        <div class="vx-box">
          <div class="vx-title">
            <h1>进入微信群</h1>
            <p>进入交流群，迅速解答疑问！</p>
          </div>
          <div class="vx-img">
            <img class="bgc-img" src="@/assets/images/vx.jpg" alt="" />
          </div>
        </div>
      </el-popover>

      <el-popover :width="200" trigger="click" teleported>
        <template #reference>
          <span class="contact-me">
            <svg-icon
              icon-name="icon-lianxiwomen1"
              :color="iconColor"
              size="16px"
            ></svg-icon>
            联系我
          </span>
        </template>
        <!-- 内容区域 -->
        <div class="vx-box">
          <div class="vx-title">
            <h1>添加微信</h1>
            <p>进入交流群，迅速解答疑问！</p>
          </div>
          <div class="vx-img">
            <img class="bgc-img" src="@/assets/images/vx.jpg" alt="" />
          </div>
        </div>
      </el-popover>

      <a
        href="https://github.com/wyx6/free-resume"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg-icon
          icon-name="icon-gitee-fill-round"
          :color="iconColor"
          size="31px"
        ></svg-icon>
      </a>
      <a
        href="https://github.com/wyx6/free-resume"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg-icon
          icon-name="icon-github-fill"
          :color="iconColor"
          size="35px"
        ></svg-icon>
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
interface IBgcColor {
  bgColor?: string
  fontColor?: string
  iconColor?: string
}
withDefaults(defineProps<IBgcColor>(), {
  bgColor: '',
  fontColor: '',
  iconColor: '#fff'
})

const toMyResume = () => {
  router.push({
    path: '/myResume',
    query: {}
  })
}
const toTemplate = () => {
  router.push({
    path: '/template',
    query: {}
  })
}
const toForum = () => {}

const toIndex = () => {
  router.push({
    path: '/',
    query: {}
  })
}
</script>
<style lang="scss" scoped>
.nav-bar-box {
  display: flex;
  height: 80px;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  background-color: v-bind('bgColor');
  z-index: 10;
  user-select: none;
  padding: 0 40px;
  position: fixed;
  top: 0;
  transition: all 0.3s;

  .logo {
    height: 100%;
    display: flex;
    align-items: center;

    img {
      width: 65px;
      height: 75px;
      margin-right: 10px;
    }

    span {
      letter-spacing: 4px;
      font-size: 24px;
      font-weight: 600;
      font-family: cursive;
      color: v-bind('fontColor');
    }
  }

  .center {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    background-color: v-bind('bgColor');
    color: v-bind('fontColor');
    :hover {
      font-weight: bold;
    }
    .resume {
    }
    .template {
    }
    .forum {
    }
    .AI {
      a {
        color: v-bind('fontColor');
      }
    }
  }
  .same {
    height: 100%;
    margin-left: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .right {
    display: flex;
    align-items: center;

    .contact-me {
      cursor: pointer;
      margin-right: 15px;
      font-size: 14px;
      color: v-bind('iconColor');
    }

    .svg-icon {
      cursor: pointer;
    }

    & :first-child {
      margin-left: 15px;
    }
  }
}

.vx-box {
  .vx-title {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 14px;
    }

    p {
      font-size: 12px;
      color: rgb(105, 105, 105);
      margin: 6px 0;
    }
  }

  .vx-img {
    width: 100%;
    overflow: hidden;

    .bgc-img {
      width: 100%;
    }
  }
}
</style>
