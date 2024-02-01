<template>
  <!-- 导航栏 -->
  <NavBar
    :bg-color="navColor"
    :font-color="fontColor"
    :icon-color="iconColor"
  ></NavBar>
  <div class="box">
    <div class="middle-box">
      <div class="left">
        <div class="infor-box">
          <div class="title">个人信息</div>
          <div class="per-infor">
            <div class="per-img">
              <img src="@/assets/images/home-banner.png" alt="" />
            </div>
            <div class="infor">
              <div class="name">小希学前端</div>
              <div class="school">
                <span>希望小学大学</span>
                <span>清华北大</span>
              </div>
              <div class="time">2024年01月28日 01:11</div>
            </div>
          </div>
        </div>
        <div class="resume-box">
          <div class="title">全部简历</div>
          <div class="all-resume">
            <div
              v-for="(resume, index) in myResumes"
              :key="index"
              class="single"
            >
              <div class="resume-img">
                <img src="@/assets/images/home-banner.png" alt="" />
              </div>
              <div class="resume-right">
                <div class="resume-name">优秀大学生实习简历模板</div>
                <div class="resume-info">
                  <div class="resume-info-left">
                    <div class="score">68分</div>
                    <div class="language">中文</div>
                  </div>
                  <div class="resume-info-right">最后编辑于：01月25日</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <el-tabs
          v-model="activeName"
          class="demo-tabs"
          @tab-click="handleClick"
        >
          <el-tab-pane label="帖子" name="first">
            <template #label>
              <span class="custom-tabs-label">
                <span>帖子</span>
              </span>
            </template>
            <div class="content-box">
              <div
                v-for="(article, index) in articles"
                :key="index"
                class="article"
              >
                <div class="article-content">
                  <div class="article-title">
                    封装搭建Vue3 +
                    Vite项目框架进阶版，值得学习收藏【前端工程化】
                  </div>
                  <div class="article-intro">
                    小希这次带来了进阶版的Vue3 +
                    Vite项目框架的封装搭建，基础小希这次带来了进阶版的Vue3 +
                    Vite项目框架的封装搭建，基础版的包括企业级项目规范以及基础配置在上篇文章，小白或者有兴趣的朋友可以先看看
                  </div>
                  <div class="article-data">
                    <div>
                      <el-icon color="#409EFC" class="no-inherit">
                        <View />
                      </el-icon>
                      926
                    </div>
                    <div>
                      <el-icon color="#409EFC"><ChatDotSquare /></el-icon>
                      12
                    </div>
                    <div>
                      <el-icon color="#409EFC"><ChatDotSquare /></el-icon>
                      32
                    </div>
                  </div>
                </div>
                <div class="article-img">
                  <img src="@/assets/images/home-banner.png" alt="" />
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="收藏" name="second">
            <template #label>
              <span class="custom-tabs-label">
                <span>收藏</span>
              </span>
            </template>
            收藏
          </el-tab-pane>
          <el-tab-pane label="点赞" name="third">
            <template #label>
              <span class="custom-tabs-label">
                <span>点赞</span>
              </span>
            </template>
            点赞
          </el-tab-pane>
          <el-tab-pane label="更多功能敬请期待" name="fourth" disabled>
            <template #label>
              <span class="custom-tabs-label">
                <span>更多功能敬请期待</span>
              </span>
            </template>

            更多功能敬请期待
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import NavBar from '@/components/NavBar/NavBar.vue'
import { throttle } from 'lodash'
const myResumes = ref(3)
const articles = ref(4)
import type { TabsPaneContext } from 'element-plus'
import { View } from '@element-plus/icons-vue'
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
const activeName = ref('first')
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
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style scoped>
.box {
  padding: 120px 80px 80px 80px;
  background-color: #f5f5f7;
  .middle-box {
    display: flex;
    align-items: flex-start;
    .left {
      flex: 1;
      margin-right: 40px;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 8px;
      .infor-box {
        .title {
        }
        .per-infor {
          margin: 20px 0;
          padding: 20px;
          display: flex;
          background-color: #ffffff;
          .per-img {
            width: 80px;
            height: 110px;
            margin-right: 20px;
            img {
              width: 80px;
              height: 110px;
              border-radius: 5px;
            }
          }
          .infor {
            padding: 10px 0;
            .name {
              margin-bottom: 17px;
              font-size: 16px;
            }
            .school {
              margin-bottom: 17px;
              font-size: 14px;
              span {
                color: green;
                margin-right: 10px;
              }
            }
            .time {
              font-size: 12px;
            }
          }
        }
      }
      .resume-box {
        .title {
        }
        .all-resume {
          .single {
            display: flex;
            margin: 20px 0;
            padding: 15px 15px;
            border: 0.5px solid #d4d4d6;
            border-radius: 5px;
            .resume-img {
              width: 50px;
              height: 70px;
              margin-right: 20px;
              img {
                width: 50px;
                height: 70px;
                border-radius: 5px;
              }
            }
            .resume-right {
              width: 100%;
              padding: 5px 0;
              .resume-name {
                margin-bottom: 17px;
                font-size: 16px;
              }
              .resume-info {
                display: flex;
                justify-content: space-between;
                .resume-info-left {
                  display: flex;
                  .score {
                    margin-right: 15px;
                  }
                  .language {
                  }
                }
                .resume-info-right {
                  font-size: 10px;
                }
              }
            }
          }
        }
      }
    }
    .right {
      flex: 2;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 8px;
      .content-box {
        .article {
          display: flex;

          padding: 20px 10px;
          border-bottom: 0.5px solid #e2e2e4;
          .article-content {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-top: 5px;
            .article-title {
              font-size: 18px;
              font-weight: 600;
            }
            .article-intro {
              width: 650px;
              margin-right: 20px;
              font-size: 13px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
            .article-data {
              display: flex;
              font-size: 13px;
            }
          }
          .article-img {
            width: 110px;
            height: 80px;

            img {
              width: 110px;
              height: 80px;
              border-radius: 5px;
            }
          }
        }
      }
    }
  }
  .demo-tabs > :deep(.el-tabs__content) {
    padding: 30px;
  }
  .custom-tabs-label {
    font-size: 18px;
  }
}
</style>
