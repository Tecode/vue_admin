<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <nav-title class="update_log"
                  nav_title="编辑更新日志"
                  placeholder_text="账号名称或账号，回车">
        </nav-title>
        <update-log-edite-item></update-log-edite-item>
      </div>
    </div>
  </div>
</template>

<script>
import UpdateLogEditeItem from '../components/updateLogEdite/UpdateLogEditeItem.vue'
import NavTitle from '../components/common/Title.vue'
export default {
  name: 'user-view',
  components:{
		UpdateLogEditeItem,
		NavTitle
  },
  computed: {
  }
}
</script>

<style lang="less" scoped>
  .update_log{
    margin-bottom: 40px;
  }
</style>
