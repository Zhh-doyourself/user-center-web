<template>
  <div id="basiclayout">
    <a-layout>
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="http://zhh821.space3v.work" target="_blank"> 品优购 </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";

// 测试代码
// import { getCurrentUser } from "@/api/user";
//
// getCurrentUser().then((res) => {
//   console.log(res);
// });
</script>

<style scoped>
#basiclayout .footer {
  position: fixed;
  bottom: 0;
  /* left: 0; right: 0; 强行让底部居中 */
  left: 0;
  right: 0;
  /*margin-top: 20px;*/
  background: #efefef;
  text-align: center;
}

#basiclayout .content {
  padding: 20px;
  margin-bottom: 20px;
  /* height: 500px; */
  /* background: linear-gradient(to right, #efefef, #fff); */
  background: #ffffff;
}

#basiclayout .header {
  background: white;
  margin-bottom: 20px;
  color: unset;
  padding-inline: 20px;
}
</style>
