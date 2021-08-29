<template>
  <div id="app">
    <div class="header" v-if="activeNav !== '/'">
      <div class="container">
        <div class="row">
          <div class="col-md-12 clearfix">
            <router-link to="/home" exact>
              <div class="logo_lage">
                <span>Dev</span>
              </div>
            </router-link>
            <router-link
              class="nav_link"
              :class="{ active: activeNav === '/home' }"
              to="/home"
              >概况</router-link
            >
            <router-link
              class="nav_link"
              :class="{ active: activeNav === '/user_list' }"
              to="/user_list"
              >用户列表
            </router-link>
            <router-link
              class="nav_link"
              :class="{ active: activeNav === '/article_list' }"
              to="/article_list"
              >文章列表
            </router-link>
            <router-link
              class="nav_link"
              :class="{ active: activeNav === '/message' }"
              to="/message"
              >留言
            </router-link>
            <router-link
              class="nav_link"
              :class="{ active: activeNav === '/update_log' }"
              to="/update_log"
            >
              更新日志
            </router-link>
            <!--<a class="nav_link" :class="{active : activeNav === '/more'}" to="/more">更多-->
            <!--<div>-->
            <!--<router-link class="nav_link" :class="{active : activeNav === '/article_list'}" to="/article_list">文章列表</router-link>-->
            <!--</div>-->
            <!--<div>-->
            <!--<router-link class="nav_link" :class="{active : activeNav === '/article_list'}" to="/article_list">文章列表</router-link>-->
            <!--</div>-->
            <!--</a>-->
            <div class="pull-right">
              <div class="nav_welcome">
                <div class="avator">
                  <img src="./imgs/gitlab-project.jpg" width="100%" />
                </div>
                管理员，晚上好
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <login-register></login-register>
    <mu-dialog :open="dialog" :title="title" @close="closeDialog">
      {{ content }}
      <mu-flat-button
        v-if="button"
        slot="actions"
        @click="closeDialog"
        primary
        label="明白了"
      />
      <mu-flat-button
        v-if="button && multiple"
        slot="actions"
        primary
        @click="closeDialog"
        label="取消"
      />
    </mu-dialog>
    <transition name="fade" mode="out-in">
      <router-view :class="{ view: activeNav !== '/' }"></router-view>
    </transition>
  </div>
</template>
<script>
import LoginRegister from "./components/bombBox/LoginRegister.vue";
import { mapState } from "vuex";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "app",
  props: ["id"],
  components: {
    LoginRegister,
  },
  computed: {
    ...mapState({
      activeNav: (state) => state.NavHeader.activeNav,
      userInfo: (state) => state.NavHeader.userInfo,
      dialog: (state) => state.Ui.dialog,
      title: (state) => state.Ui.title,
      content: (state) => state.Ui.content,
      button: (state) => state.Ui.button,
      multiple: (state) => state.Ui.multiple,
    }),
    ...mapGetters({
      doneTodosCount: "doneTodosCount",
    }),
  },
  methods: {
    ...mapActions({
      getUserInfo: "GETUSERINFO",
    }),
    ...mapMutations({
      listenerRouting: "listenerRouting", // 映射 this.listenerRouting() 为 this.$store.commit('listenerRouting')
      loginRegistration: "loginRegistration",
      closeDialog: "CLOSE_DIALOG",
      openDialog: "OPEN_DIALOG",
    }),
    fetchData() {
      this.listenerRouting(this.$route.fullPath);
    },
  },
  created: function () {
    this.listenerRouting(this.$route.fullPath);
    if (this.activeNav !== "/") {
      this.getUserInfo();
    }
  },
  data() {
    return {
      fullPath: this.$route.fullPath,
    };
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "fetchData",
  },
};
</script>
<style lang="less">
@import "lib/style/global";
@import "lib/style/color";

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

.view {
  margin-top: 50px;
}

.header {
  border-bottom: 1px solid @color810;
  background-color: @manager_color01;
  position: fixed;
  z-index: 999;
  height: 50px;
  transition: all 0.1s ease;
  top: 0;
  left: 0;
  right: 0;
  .logo_lage {
    position: relative;
    background: url("imgs/logo_manager.png") 0 0 no-repeat;
    background-size: 180px;
    width: 180px;
    height: 46px;
    margin: 4px 31px 0 0;
    span {
      position: absolute;
      top: 6px;
      right: 1.8em;
      background-color: #f3401d;
      color: #ffffff;
      padding: 0 5px;
      border-radius: 99px;
      font-size: 12px;
    }
  }
  a {
    font-size: 15px;
    float: left;
    color: @color400;
    text-decoration: none;
    transition: all 0.2s;
  }
  .nav_link {
    padding: 0 11px 0 11px;
    height: 40px;
    display: block;
    line-height: 3.4em;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      //background-color: @background-color150;
      color: @manager_color02;
    }
  }
  .nav_welcome {
    height: 40px;
    line-height: 3.4em;
    cursor: pointer;
    font-size: 15px;
    position: relative;
    .avator {
      position: absolute;
      top: 0.5em;
      left: -2.8em;
      width: 35px;
      height: 35px;
      background-color: @text100;
      border-radius: 50%;
      overflow: hidden;
      img {
        display: block;
      }
    }
  }
  .active {
    color: @manager_color02;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease-in;
}

.fade-enter,
.fade-leave-active {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
