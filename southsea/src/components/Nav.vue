<template>
  <div>
    <el-container>
      <!-- 导航栏 -->
      <el-header>
        <div class="nav">
          <div class="logo">
            <a href="#">渔业资源管理系统</a>
          </div>
          <el-menu
            :default-active="this.$route.path"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#0086ff"
            text-color="#eeeeee"
            active-text-color="#fff"
            router
          >
            <el-menu-item index="/Map">GIS控制台</el-menu-item>
            <el-menu-item index="2">计划任务管理</el-menu-item>
            <el-menu-item index="3">生产主体库</el-menu-item>
            <el-menu-item index="4">基础信息管理</el-menu-item>
          </el-menu>
          <div class="user">
            <el-avatar icon="el-icon-user-solid"></el-avatar>
            <div class="drop-down">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  镇街信息员：18507161949<i
                    class="el-icon-arrow-down el-icon--right"
                  ></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>个人信息</el-dropdown-item>
                  <el-dropdown-item>修改头像</el-dropdown-item>
                  <el-dropdown-item>修改密码</el-dropdown-item>
                  <el-dropdown-item divided>切换到种植系统</el-dropdown-item>
                  <el-dropdown-item divided>退出</el-dropdown-item>
                  <el-dropdown-item divided>清除缓存</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </div>
      </el-header>
      <!-- 主体内容 -->
      <el-container>
        <!-- 主体内容--侧边栏 -->
        <el-aside width="300px">
          <el-tabs
            v-model="activeName"
            @tab-click="handleClick"
            :stretch="true"
          >
            <el-tab-pane label="采集中" name="first">
              <el-col :span="22" :offset="1">
                <el-card shadow="always">
                  <i class="el-icon-s-opportunity" style="color: green"></i
                  >您当前没有任何的任务
                </el-card>
              </el-col>
            </el-tab-pane>
            <el-tab-pane label="已到期" name="second">
              <el-col :span="22" :offset="1">
                <el-card shadow="always">
                  <i class="el-icon-s-opportunity" style="color: green"></i
                  >您当前没有到期任务
                </el-card>
              </el-col>
            </el-tab-pane>
            <el-tab-pane label="数据查看" name="third">
              <!-- 统计图容器 -->
              <div ref="myChart" style="width: 300px; height: 270px"></div>
            </el-tab-pane>
          </el-tabs>
        </el-aside>
        <!-- 主体内容--地图 -->
        <el-main>
          <!-- 顶部按钮 -->
          <div class="content-top">
            <el-row>
              <el-button type="primary"
                >区镇级管理员/创建任务计划
                <i class="el-icon-arrow-right el-icon--right"></i>
              </el-button>

              <el-button type="primary">
                <i class="el-icon-share"></i>
                任务执行/数据标注/村居采集,镇/街区支持录入
                <i class="el-icon-arrow-right el-icon--right"></i>
              </el-button>

              <el-button type="primary">
                <i class="el-icon-s-opportunity"></i>
                任务执行/数据标注/村居采集,镇/街区支持录入
              </el-button>
            </el-row>
          </div>
          <!-- 地图模块 -->
          <div class="map-content">
            <!-- 搜索按钮 -->
            <el-button type="primary" icon="el-icon-search" class="map-search"
              >搜索</el-button
            >
            <!-- 筛选框 -->
            <div class="table" ref="filter">
              <table>
                <tr>
                  <td>当前辖区</td>
                  <td>
                    <el-select
                      v-model="options.value"
                      size="mini"
                      class="first-card"
                    >
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                    -
                    <el-select
                      v-model="options1.value"
                      size="mini"
                      class="first-card"
                    >
                      <el-option
                        v-for="item in options1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td>图斑状态</td>
                  <td>
                    <el-select v-model="state.value" size="mini">
                      <el-option
                        v-for="itemState in state"
                        :key="itemState.value"
                        :label="itemState.label"
                        :value="itemState.value"
                      >
                      </el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td>任务模式</td>
                  <td>
                    <el-select v-model="model.value" size="mini">
                      <el-option
                        v-for="itemModel in model"
                        :key="itemModel.value"
                        :label="itemModel.label"
                        :value="itemModel.value"
                      >
                      </el-option>
                    </el-select>
                  </td>
                </tr>
                <tr>
                  <td>当前任务</td>
                </tr>
              </table>
            </div>
            <el-button
              type="primary"
              size="mini"
              class="btn-table"
              @click="changeTop"
            >
              <i :class="[isShow ? 'el-icon-arrow-up' : 'el-icon-arrow-down']"
                ref="icon"
              ></i>
            </el-button>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Map",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      activeName: "first",
      isShow: true,
      value: "",
      options: [
        {
          value: "选项1",
          label: "大沥镇",
        },
      ],
      options1: [
        {
          value: "选项1",
          label: "全部",
        },
      ],
      state: [
        {
          value: "选项1",
          label: "全部",
        },
        {
          value: "选项2",
          label: "已采集",
        },
        {
          value: "选项3",
          label: "未采集",
        },
      ],
      model: [
        {
          value: "选项1",
          label: "任务执行模式",
        },
        {
          value: "选项2",
          label: "任务查看模式",
        },
      ],
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    onSubmit() {
      console.log("submit!");
    },
    changeTop() {
      if (this.isShow) {
        this.$refs.filter.style.top = "-260px";
        document.querySelector(".btn-table").style.top = "2px";
      } else {
        this.$refs.filter.style.top = "0";
        document.querySelector(".btn-table").style.top = "250px";
      }
      this.isShow = !this.isShow;
    },
    // 鱼塘数量
    drawLine() {
     
      var myChart = this.$echarts.init(this.$refs.myChart);
       console.log(this.$refs.myChart);
      myChart.setOption({
        title: {
          text: "鱼塘总数量：441",
          subtext: "各二级地级数量",
          left: "left",
        },
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "50%",
            data: [{ value: 411, name: "鱼塘" }],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "#5470c6",
              },
            },
          },
        ],
      });
    },

  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.el-header {
  padding: 0;
}
.el-menu-demo {
  flex: 1;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0086ff;
  height: 60px;
}
.logo {
  width: 400px;
  text-align: left;
  margin-left: 40px;
}
.logo a {
  font-size: 18px;
  color: #fff;
  text-decoration: none;
}
.user {
  display: flex;
  margin-right: 15px;
}
.drop-down {
  line-height: 40px;
  margin-left: 10px;
  cursor: pointer;
}
.el-dropdown-link {
  color: #fff;
}
.el-dropdown-menu__item {
  width: 150px;
}
.el-aside {
  border-right: 1px solid #ccc;
  height: calc(100vh - 60px);
  overflow: scroll;
}
.el-tabs__content {
  height: 1000px;
}
.el-aside::-webkit-scrollbar {
  display: none;
}
.el-main {
  padding: 0;
}
.content-top {
  width: 1200px;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: start;
  padding-left: 10px;
  height: 70px;
  align-items: center;
}
.content-top button {
  margin: 10px 10px;
}
.map-content {
  position: relative;
  height: calc(100% - 70px);
  overflow: hidden;
}
.map-search {
  position: absolute;
  right: 10px;
  top: 10px;
}
.first-card {
  width: 93px;
}
.table {
  position: absolute;
  top: 0;
  left: 0;
  width: 320px;
  padding: 20px 0 20px 20px;
  background-color: rgba(1, 1, 1, 0.5);
  transition: all, 1.2s;
}
.table tr {
  color: #fff;
  font-size: 14px;
  height: 50px;
}
.table tr td {
  padding-right: 20px;
}
.btn-table {
  position: absolute;
  left: 2px;
  top: 250px;
  transition: all, 1.2s;
}
.el-card__body {
  padding: 10px 0;
}
.is-always-shadow {
  margin-top: 10px;
}
</style>