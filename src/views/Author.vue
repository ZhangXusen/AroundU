<template>
  <Header />
  <Search />
  <div class="container">
    <div class="left">
      <div class="avatar">
        <el-avatar :size="100" />
        <div class="info">
          <div class="name">{{Author.author}}</div>
          <el-tag effect="dark" round >{{Author.authorInfo}}</el-tag>
        </div>
      </div>
      <div class="paper">
        <el-card shadow="hover">
          <el-icon :size="50" color="#409EFC"><Document /></el-icon>
          <span class="info">
            <div class="tit">发刊量</div>
            <div class="num">13</div>
          </span>
        </el-card>
        <el-card shadow="hover"
          ><el-icon :size="50" color="#64cda4"><help-filled /></el-icon>
          <span class="info">
            <div class="tit">被引用量</div>
            <div class="num">3</div>
          </span></el-card
        >
        <el-card shadow="hover">
          <el-icon :size="50" color="#f47575"><Paperclip /></el-icon>
          <span class="info">
            <div class="tit">国家</div>
            <div class="num">{{Author.country}}</div>
          </span>
        </el-card>
      </div>
      <div class="my-charts">
        <div class="chart">
          <div class="chart-tit">研究兴趣</div>
          <div class="chart-content">
            <WordAnt />
          </div>
        </div>
        <div class="chart">
          <div class="chart-tit">发文趋势</div>
          <div class="chart-content">
            <LineAnt />
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="top">相关学者</div>
      <div class="content">
        <span class="content-name">李伟</span>
        <div class="company"><el-tag>{{Author.authorInfo}} </el-tag></div>
        <div class="words">
          相关研究:
          <el-tag effect="dark" round>热词</el-tag>
        </div>
      </div>
      <div class="content">
        <span class="content-name">某某</span>
        <div class="company"><el-tag>公司名 </el-tag></div>
        <div class="words">
          相关研究:
          <el-tag effect="dark" round>热词</el-tag>
          <el-tag effect="dark" round>热词</el-tag>
          <el-tag effect="dark" round>热词</el-tag>
        </div>
      </div>
      <div class="content">
        <span class="content-name">某某</span>
        <div class="company"><el-tag>公司名 </el-tag></div>
        <div class="words">
          相关研究:
          <el-tag effect="dark" round>热词</el-tag>
          <el-tag effect="dark" round>热词</el-tag>
          <el-tag effect="dark" round>热词</el-tag>
        </div>
      </div>
      <div class="content">
        <span class="content-name">某某</span>
        <div class="company"><el-tag>公司名 </el-tag></div>
        <div class="words">
          相关研究:
          <el-tag effect="dark" round>热词</el-tag>
          <el-tag effect="dark" round>热词</el-tag>
          <el-tag effect="dark" round>热词</el-tag>
        </div>
      </div>
    </div>
  </div>
  <Team />
</template>
<script setup>
import Header from "../components/search/SearchHead";
import Search from "../components/search/Logo";
import Team from "../components/search/Team";
import { Document, HelpFilled, Paperclip } from "@element-plus/icons-vue";
import WordAnt from "../components/charts/WordAnt";
import LineAnt from "../components/charts/LineAnt";
import { ref, reactive } from "vue";
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
  margin: 20px auto;
  padding: 10px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  .left {
    float: left;
    width: 900px;
    .avatar {
      min-height: 120px;
      .el-avatar {
        float: left;
      }
      .info {
        float: left;
        margin-left: 10px;
        margin-top: 20px;
        display: flex;
        align-items: center;
        flex-direction: column;
        .name {
          font-size: 20px;
          color: $font-c;
          font-size: 500;
        }
        .el-tag {
          margin-top: 10px;
          font-size: 18px;
        }
      }
    }
    .paper {
      display: flex;
      flex-direction: row;
      .el-card {
        flex: 1;
        margin-right: 20px;
        margin-bottom: 20px;
        padding: 20px;
        &:last-child {
          margin-right: 0px;
        }
        :deep(.el-card__body) {
          padding: 0;
        }
        .el-icon {
          float: left;
        }
        .info {
          float: left;
          margin-left: 15px;
          .tit {
            font-size: 18px;
            font-weight: 500;
            color: $font-c;
            margin-bottom: 10px;
          }
          .num {
            font-size: 18px;
            color: #000;
            font-weight: 500;
            text-align: center;
          }
        }
      }
    }
    .my-charts {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .chart {
        background-color: #fff;
        flex: 1;
        &:first-child {
          margin-right: 20px;
        }
        margin-bottom: 20px;
        border-radius: $border-r;
        border: 1px solid #ebeef5;
        &-tit {
          text-align: center;
          font-size: 20px;
          font-weight: 500;
          color: $font-c;
          margin: 20px 0;
        }
        &-content {
          margin: 10px;
        }
      }
    }
  }
  .right {
    float: right;
    margin-right: 10px;
    margin-left: 20px;
    margin-top: 120px;
    .top {
      height: 90px;
      line-height: 90px;
      width: 280px;
      background-color: $bar-c;
      font-size:22px;
      font-weight: 500;
      padding-left: 20px;
      color: $font-c;
      border: 1px solid #ebeef5;
      border-radius: $border-r;
    }
    .content {
      margin-top: 10px;
      background-color: $bgc;
      padding: 20px;
      border: 1px solid $hover-c;
      border-radius: $border-r;
      &-name {
        font-size: 20px;
        color: $font-c;
        font-weight: 500;
      }
      .company {
        float: right;
        margin-right: 150px;
      }
      .words {
        margin-top: 20px;
        color: $hover-c;
        font-weight: 500;
        font-size: 18px;
        .el-tag {
          font-size: 18px;
          padding: 5px;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
