<template>
  <div class="project-Introduce-box">
    <div class="left">
      <h1>一款开源的、免费的简历设计神器</h1>
      <p>提供多种模板和设计风格,30分钟快速制作一份精美简历</p>
      <!-- 更多功能 -->
      <div class="more-panel">
        <div class="button" @click="onlineMake">在线制作</div>
        <div class="button" @click="customTemplate">简历模板</div>
        <div class="button" @click="customTemplate">求职论坛</div>
        <div class="button ai-helper">
          <a
            href="https://share.fastgpt.in/chat/share?shareId=vf7bdfkp0n0adr15gvbnqen9"
          >
            AI助手
          </a>
        </div>
      </div>
    </div>
    <div class="right">
      <video src=""></video>
    </div>
    <!-- <div class="right">
      <img src="@/assets/images/index.png" alt="" class="bg-image" />
    </div> -->
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['onlineMake', 'customTemplate'])

const onlineMake = () => {
  emit('onlineMake')
}
const customTemplate = () => {
  emit('customTemplate')
}
// const AiHelper = () => {
//   emit('AiHelper')
// }
</script>

<style lang="scss" scoped>
.project-Introduce-box {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: url('@/assets/images/home-banner.png') no-repeat 50% / cover;

  .left {
    color: #fff;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 100px;

    h1 {
      font-size: 2.5vw;
      margin-bottom: 20px;
    }

    p {
      font-size: 1vw;
      opacity: 0.8;
    }

    .more-panel {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 500px;
      margin-top: 40px;
      font-weight: bold;

      .button {
        width: 120px;
        height: 34px;
        line-height: 34px;
        text-align: center;
        letter-spacing: 2px;
        color: #fff;
        font-size: 14px;
        background-image: -webkit-linear-gradient(to right, #2ddd9d, #1cc7cf);
        background-image: -moz-linear-gradient(to right, #2ddd9d, #1cc7cf);
        background-image: -ms-linear-gradient(to right, #2ddd9d, #1cc7cf);
        background-image: linear-gradient(to right, #2ddd9d, #1cc7cf);
        -webkit-border-radius: 50px;
        -moz-border-radius: 50px;
        border-radius: 50px;
        background-color: #2ddd9d;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        -ms-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
        cursor: pointer;
        user-select: none;

        &:hover {
          opacity: 0.8;
        }
        a {
          color: #fff;
        }
      }
    }
  }

  .right {
    margin-right: 5vw;

    img {
      width: 40vw;
      height: 50vh;
    }
  }
}
a {
  text-decoration: none;
}
</style>
