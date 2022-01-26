<template>
  <div class="wrap-content">
    <Notification :level="1">344</Notification>
  </div>
</template>

<script>
import { notification } from "../components/NodeComponent";

export default {
  name: "NodeComponent",
  components: { Notification: notification() },
};
</script>

<style lang="less" scoped>
.wrap-content {
  width: 100%;
}
</style>