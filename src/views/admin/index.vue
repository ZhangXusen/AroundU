<template>
  <el-row gutter="10">
    <el-col :span="6">
      <el-card shadow="hover">
        <div class="user">
          <img
            src="../../assets/images/-9a74f6b1fa60eab.jpg"
            style="width: 75px"
          />
          <div class="user-info">
            <p>Admin</p>
            <p class="mng">管理员</p>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="hover">
        <div class="user">
          <img
            src="../../assets/images/-9a74f6b1fa60eab.jpg"
            style="width: 75px"
          />
          <div class="user-info">
            <p>Admin</p>
            <p class="mng">管理员</p>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6"
      ><el-card shadow="hover">
        <div class="user">
          <img
            src="../../assets/images/-9a74f6b1fa60eab.jpg"
            style="width: 75px"
          />
          <div class="user-info">
            <p>Admin</p>
            <p class="mng">管理员</p>
          </div>
        </div>
      </el-card></el-col
    >
    <el-col :span="6"
      ><el-card shadow="hover">
        <div class="user">
          <img
            src="../../assets/images/-9a74f6b1fa60eab.jpg"
            style="width: 75px"
          />
          <div class="user-info">
            <p>Admin</p>
            <p class="mng">管理员</p>
          </div>
        </div>
      </el-card></el-col
    >
  </el-row>
  <elel-row>
    <el-col :span="16">
      <el-card shadow="hover"></el-card>
    </el-col>
    <el-col :span="8"><el-card shadow="hover"></el-card></el-col>
  </elel-row>
</template>

<script>
export default {
  name: "home",
};
</script>

<style>
.el-col {
  margin-top: 10px;
}
.el-card {
  display: flex;
  align-items: center;
}

.user img {
  border-radius: 50%;
  border: 2px solid #a0cfff;
  float: left;
}
.user-info {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.user-info p {
  height: 35px;
  line-height: 45px;
  margin-left: 10px;
}
.mng {
  font-size: 13px;
  color: #909399;
}
</style>
