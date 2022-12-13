<template>
  <div class="footer">
    <div class="top">
      <h1>Our Team</h1>
    </div>
    <div class="foot">
      <el-card shadow="hover">
        <img src="../../assets/images/lm.jpg" alt="" />
        <div class="bottom">
          <div class="name">李萌</div>
          <el-tag>产品</el-tag>
        </div>
      </el-card>
      <el-card shadow="hover">
        <img src="../../assets/images/cjm.jpg" alt="" />
        <div class="bottom">
          <div class="name">陈佳美</div>
          <el-tag>后端</el-tag>
        </div>
      </el-card>
      <el-card shadow="hover">
        <img src="../../assets/images/zsh.jpg" alt="" />
        <div class="bottom">
          <div class="name">周圣颢</div>
          <el-tag>后端</el-tag>
        </div>
      </el-card>
      <el-card shadow="hover">
        <img src="../../assets/images/-9a74f6b1fa60eab.jpg" alt="" />
        <div class="bottom">
          <div class="name">张旭森</div>
          <el-tag>前端</el-tag>
        </div>
      </el-card>
      <el-card shadow="hover">
        <img src="../../assets/images/-9a74f6b1fa60eab.jpg" alt="" />
        <div class="bottom">
          <div class="name">伍中意</div>
          <el-tag>前端</el-tag>
        </div>
      </el-card>
      <el-card shadow="hover">
        <img src="../../assets/images/-9a74f6b1fa60eab.jpg" alt="" />
        <div class="bottom">
          <div class="name">刘宇宣</div>
          <el-tag>后端</el-tag>
        </div>
      </el-card>
      <el-card shadow="hover">
        <img src="../../assets/images/-9a74f6b1fa60eab.jpg" alt="" />
        <div class="bottom">
          <div class="name">彭鑫怡</div>
          <el-tag>后端</el-tag>
        </div>
      </el-card>
      <el-card shadow="hover">
        <img src="../../assets/images/-9a74f6b1fa60eab.jpg" alt="" />
        <div class="bottom">
          <div class="name">宋智乔</div>
          <el-tag>后端</el-tag>
        </div>
      </el-card>
      <el-card shadow="hover">
        <img src="../../assets/images/-9a74f6b1fa60eab.jpg" alt="" />
        <div class="bottom">
          <div class="name">刘怡</div>
          <el-tag>后端</el-tag>
        </div>
      </el-card>
      <el-card shadow="hover">
        <img src="../../assets/images/-9a74f6b1fa60eab.jpg" alt="" />
        <div class="bottom">
          <div class="name">凌鑫杰</div>
          <el-tag>后端</el-tag>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
$bgc: #f5f7f9;
$tit-size: 16px;
$bar-c: #e6e6e6;
$font-c: #047df6;
$hover-c: #409eff;
$border-r: 5px;
.footer {
  width: 1200px;
  margin: 20px auto;
  .top {
    text-align: center;
    h1 {
      font-weight: 600;
      font-size: 20px;
      font-family: Nunito;
      color: #272e36;
    }
  }
  .foot {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;

    .el-card {
      flex: 1;
      margin-right: 20px;
      margin-bottom: 20px;
      &:last-child {
        margin-right: 0px;
      }
      img {
        width: 100%;
        display: block;
        border-radius: 50%;
      }
      .bottom {
        margin-top: 10px;
        line-height: 20px;
        .name {
          font-size: 18px;
          font-weight: 500;
          text-align: center;
          margin-top: 10px;
          color: $font-c;
          cursor: pointer;
        }
        .el-tag {
          margin: 0 auto;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
