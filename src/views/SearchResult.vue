<template>
  <!-- <div class="header">
    <div class="logo"><img src="../assets/images/logo.png" alt="" /></div>
    <div class="menu">
      <h1><a href="">首页</a></h1>
      <h1><a href="">分析</a></h1>
    </div>
    <div class="avatar">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar :size="60" src="../assets/images/-9a74f6b1fa60eab.jpg" />
          <h3>小国际</h3>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>账号设置</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div> -->
  <Head />
  <Search />
  <div class="container">
    <div class="left">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="资源类型" name="1">
          <div>
            <div></div>
          </div>
          <div>学术期刊</div>
          <div>学位论文</div>
        </el-collapse-item>
        <el-collapse-item title="年份" name="2">
          <div>
            <span>2022</span>
            <span class="page-num">({{ num }})</span>
          </div>
          <div>
            <span>2021</span>
            <span class="page-num">({{ num }})</span>
          </div>
          <div>
            <span>2020</span>
            <span class="page-num">({{ num }})</span>
          </div>
          <div>
            <span>2019</span>
            <span class="page-num">({{ num }})</span>
          </div>
          <div>
            <span>2018</span>
            <span class="page-num">({{ num }})</span>
          </div>
          <div>
            <span>2017</span>
            <span class="page-num">({{ num }})</span>
          </div>
          <!-- <div>
            <span>2022</span>
            <span class="page-num">({{ num }})</span>
          </div>
          <div>
            <span>2022</span>
            <span class="page-num">({{ num }})</span>
          </div>
          <div>
            <span>2022</span>
            <span class="page-num">({{ num }})</span>
          </div> -->
        </el-collapse-item>
        <el-collapse-item title="学科分类" name="3">
          <div>
            <span>生物</span>
            <span class="page-num">(243546)</span>
          </div>
          <div>
            <span>化学</span>
            <span class="page-num">(12868)</span>
          </div>
          <div>
            <span>社科</span>
            <span class="page-num">(1868)</span>
          </div>
          <div>
            <span>经济</span>
            <span class="page-num">(3791)</span>
          </div>
        </el-collapse-item>
        <el-collapse-item title="语种" name="4">
          <div>中文</div>
          <div>英文</div>
          <div>日文</div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="right">
      <div class="author-num">共找到: {{ AuthorList.length }} 位学者</div>
      <div class="author">
        <el-card
          shadow="hover"
          @click="HandelAuthor(name)"
          v-for="item in AuthorList"
          :key="item.name"
        >
          <el-avatar :src="item.cover" />
          <div class="author-name">
            {{ item.name }}
            <div class="author-info">{{ item.country }}</div>
          </div>
        </el-card>
      </div>
      <el-divider border-style="dashed" />
      <div class="page">
        <div class="page-control">
          <div>
            <el-icon><Filter /></el-icon>筛选:
          </div>
          <ul>
            <li ref="iocn1">
              相关度<el-icon v-show="iconShow[0]"><Bottom /></el-icon>
            </li>
            <li ref="icon2">
              发布时间<el-icon><Bottom /></el-icon>
            </li>
          </ul>
          <div class="icon3" @click="HandelAnalysis">
            <el-icon :size="30"><histogram /></el-icon> 结果分析
          </div>
        </div>
        <div class="page-list">
          <div class="page-list-top">
            <div>
              共找到<span class="page-num">{{ PageList.length }}</span
              >条结果
            </div>
          </div>
          <div class="page-list-content">
            <div class="page-list-item" v-for="item in PageList" :key="item.id">
              <div class="item-tit">
                <h1>
                  <a :href="item.link">{{ item.title }}</a>
                </h1>
              </div>
              <div class="item-name">
                作者: <span>{{ item.totalauthorname }}</span>
                <div class="tag">
                  <el-tag v-for="(info, i) in AuthorInfo" :key="i">{{
                    info
                  }}</el-tag>
                </div>
              </div>
              <div class="item-content">
                摘要:
                <span>{{ item.abstract }}</span>
              </div>
              <div class="item-words">
                <el-tag
                  effect="dark"
                  v-for="(words, i) in item.keywords"
                  :key="i"
                  round
                  >{{ words }}</el-tag
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="advised">
      <div class="adv-head">智能推荐</div>
      <div class="charts">
        <div class="tit">相关推荐</div>
        <div class="related">
          <Relation style="height: 200px; width: 200px" />
        </div>
      </div>
      <div class="charts">
        <div class="tit">研究趋势</div>
        <div class="related">
          <Table style="height: 200px; width: 200px" />
        </div>
      </div>
      <div class="charts">
        <div class="tit">相关热词</div>
        <div class="related">
          <Word style="height: 200px; width: 200px" />
        </div>
      </div>
    </div>
  </div>
  <Team />
  <!-- <div class="footer">
    <div class="top">
      <h1>Our Team</h1>
    </div>
    <div class="foot">
      <el-card shadow="hover">
        <img src="../assets/images/lm.jpg" alt="" />
        <div class="bottom">
          <div class="name">李萌</div>
          <el-tag>产品</el-tag>
        </div>
      </el-card>
      <el-card shadow="hover">
        <img src="../assets/images/cjm.jpg" alt="" />
        <div class="bottom">
          <div class="name">陈佳美</div>
          <el-tag>后端</el-tag>
        </div>
      </el-card>
      <el-card shadow="hover">
        <img src="../assets/images/zsh.jpg" alt="" />
        <div class="bottom">
          <div class="name">周圣颢</div>
          <el-tag>后端</el-tag>
        </div>
      </el-card>
      <el-card shadow="hover">
        <img src="../assets/images/-9a74f6b1fa60eab.jpg" alt="" />
        <div class="bottom">
          <div class="name">张旭森</div>
          <el-tag>前端</el-tag>
        </div>
      </el-card>
    </div>
  </div> -->
  <el-backtop :right="50" :bottom="100" />
</template>
<script setup>
import Relation from "../components/charts/Relation";
import Table from "../components/charts/Table";
import Word from "../components/charts/Word";
import Head from "../components/search/SearchHead";
import Search from "../components/search/Logo";
import Team from "../components/search/Team";
import router from "../router";
import { GetPageList, GetAuthor } from "../api/search";
import { Bottom, Filter, Histogram } from "@element-plus/icons-vue";
import { reactive, ref } from "@vue/reactivity";
const activeNames = ref(["1", "2", "3", "4"]);
const iconShow = reactive([true, false]);
const num = ref(248314);
const icon1 = ref(null);
const icon2 = ref(null);
const HandelAnalysis = () => {
  router.push("/searchanalysis");
};
const HandelAuthor = (name) => {
  router.push("/author");
};
// 请求数据
const PageList = ref([
  {
    title: "实山资去合世海",
    keywords: ["定", "温", "海", "就"],
    link: "http://ykhhsotxpl.cc/xtvqrgvo",
    totalauthorname: "贺明",
    abstract:
      "想需广织及比千不部解合原造南。意压门多备行身把想经中拉联使力保。命被即九济格受眼石联色法影即这别。全四心越定最民便命民月程火向见。无北级质复九级手深照着存作由据你。资道看术百你应关图式验越求布。",
  },
  {
    title: "务于我只会水",
    keywords: ["马", "况", "千"],
    link: "http://kknqk.za/sidy",
    totalauthorname: "龙刚",
    abstract:
      "究分设往又石节装时信究合增回定少海。军白适质毛万子务记能需统严。求约住史他号严政多会万专给九思分。白深其向已次手放置须习选铁。身发被来分节向得相争采代住住的深。段保说放结清属正青世率交她又对率将。",
  },
]);
const AuthorList = ref([
  {
    name: "余超",
    country: "临夏回族自治州",
    cover: "http://dummyimage.com/200x100/4A7BF7&text=Hello",
  },
  {
    name: "侯洋",
    country: "香港岛",
    cover: "http://dummyimage.com/200x100/4A7BF7&text=Hello",
  },
]);

const getAuthorList = () => {
  GetAuthor().then((res) => {
    console.log(res);
    AuthorList.value = res;
  });
};
const getPaperList=()=>{
    GetPageList().then((res) => {
      console.log(res);
      PageList.value =res;
    })
}
getAuthorList();
getPaperList();
// const getPaperList = () => {
//   GetPaperList().then((res) => {
//     console.log(res.data);
//     PageList = res.data;
//   });
// };
// const AuthorInfo = reactive(null);
// const getAuthor = (id) => {
//   GetAuthor().then((res) => {
//     console.log(res.data);
//     AuthorInfo = res.data.authInfo;
//   });
// };
</script>
<style lang="scss" scoped>
$bgc: #f5f7f9;
$tit-size: 16px;
$bar-c: #e6e6e6;
$font-c: #047df6;
$hover-c: #409eff;
$border-r: 5px;
.container {
  display: flex;
  flex-direction: row;
  width: 1200px;
  margin: 10px auto;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  .left {
    float: left;
    width: 200px;
    :deep(.el-collapse) {
      background-color: $bar-c;
      border: 1px solid #ccc;
      .el-collapse-item__header {
        background-color: $bar-c;
        padding-left: 10px;
        font-size: 16px;
        font-weight: 600;
      }
    }
    :deep(.el-collapse-item__content) {
      font-size: 16px;
      padding-bottom: 10px;
      div {
        padding-left: 10px;
        &:hover {
          background-color: #f7f7f7;
        }
        .page-num {
          float: right;
          color: #ccc;
          margin-right: 10px;
        }
      }
    }
  }
  .right {
    float: left;
    margin-left: 20px;
    width: 755px;
    .author-num {
      margin-bottom: 10px;
      font-size: 14px;
      color: $font-c;
    }
    .author {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      .el-card {
        margin-right: 20px;
      }
      .author-name {
        float: right;
        margin-left: 10px;
        color: $font-c;
        cursor: pointer;
        .author-info {
          margin-top: 5px;
          color: #ccc;
        }
      }
    }
    .el-divider--horizontal {
      margin: 10px 0;
    }
    .page {
      border: 1px solid #ccc;
      .page-control {
        height: 44px;
        line-height: 44px;
        background-color: $bar-c;
        padding-left: 5px;
        font-size: 14px;
        border-bottom: 1px solid #ccc;
        div {
          float: left;
        }
        ul {
          float: left;
          li {
            float: left;
            margin-left: 10px;
            cursor: pointer;
            &:hover {
              background-color: #fff;
              color: $font-c;
              border: 0px solid #ccc;
            }
          }
        }
        .icon3 {
          display: flex;
          align-items: center;
          color: $font-c;
          float: right;
          font-size: 18px;
          margin-right: 10px;
          cursor: pointer;
          .el-icon {
            margin-right: 5px;
          }
          &:hover {
            color: $hover-c;
          }
        }
      }
      &-list {
        margin-top: 10px;
        &-top {
          height: 22px;
          line-height: 22px;
          div {
            // float: left;
            font-size: 14px;
            padding-left: 5px;
            .page-num {
              color: $font-c;
              cursor: pointer;
            }
          }
        }
        &-item {
          margin-top: 10px;
          border-top: 1px solid #ccc;
          padding: 20px 5px 20px 5px;
          .item-tit {
            font-size: 18px;
            color: #000;
            font-weight: 600;
            cursor: pointer;
            h1 a{
              color: $font-c;
              text-decoration: none;
              &:hover {
                color: #ff6c00;
              }
            }
          }
          .item-name {
            color: $font-c;
            font-size: 14px;
            font-weight: 400;
            margin-top: 5px;
            cursor: pointer;
            span {
              margin-left: 10px;
              &:hover {
                color: #ff6c00;
              }
            }
            .tag {
              display: inline-block;
              margin-left: 50px;
              cursor: pointer;
            }
          }
          .item-content {
            color: #666;
            font-size: 14px;
            max-width: 709px;
            max-height: 45px;
            text-overflow: ellipsis;
            overflow: hidden;
            line-height: 24px;
            -webkit-line-clamp: 2; /* 行数 */
            -webkit-box-orient: vertical;
            span {
              width: 700px;
              height: 45px;
              -webkit-line-clamp: 2; /* 行数 */
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
              line-height: 24px;
              text-align: justify;
            }
          }
          .item-words {
            padding-left: 5px;
            .el-tag {
              margin-right: 10px;
              margin-top: 10px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  .advised {
    display: flex;
    flex-direction: column;
    float: right;
    min-width: 200px;
    margin-left: 20px;
    max-height: 900px;
    .adv-head {
      color: #fff;
      background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
      font-size: 30px;
      font-weight: 500;
      font-family: cursive;
      text-align: center;
      cursor: pointer;
      padding: 10px 0;
    }
    .charts {
      .tit {
        height: 30px;
        line-height: 30px;
        text-align: left;
        font-size: 16px;
        font-weight: 500;
        color: $font-c;
        padding-left: 5px;
        background-color: $bar-c;
        border: 1px solid #ccc;
      }
      .related {
        height: 200px;
        width: 200px;
        border: 1px solid #ccc;
      }
    }
  }
}
</style>
