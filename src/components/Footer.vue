<template>
  <van-tabbar v-model="active" @change="change">
    <van-tabbar-item class="animate__animated" :class="{ animate__pulse: Boolean(isActive == 0) }">
      <span>首页</span>
      <template #icon="props">
        <img :src="props.active ? HomeIcon.active : HomeIcon.inactive" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item class="animate__animated" :class="{ animate__pulse: Boolean(isActive == 1) }">
      <span>热门</span>
      <template #icon="props">
        <img :src="props.active ? hotIcon.active : hotIcon.inactive" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item class="animate__animated" :class="{ animate__pulse: Boolean(isActive == 2) }">
      <span>我的</span>
      <template #icon="props">
        <img :src="props.active ? userIcon.active : userIcon.inactive" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const active = ref(0); //默认初始页面

const isActive = ref(null); //动态切换class

// 首页图标
const HomeIcon = {
  active: "http://cdn.xxoutman.cn/home-a-1695779373387.svg?1695779373644",
  inactive: "http://cdn.xxoutman.cn/home-1695779161735.svg?1695779162022",
};
// 用户图标
const userIcon = {
  active: "http://cdn.xxoutman.cn/%E7%94%A8%E6%88%B7-1695823337049.svg?1695823337332",
  inactive: "http://cdn.xxoutman.cn/%E7%94%A8%E6%88%B7%20(1)-1695823575492.svg?1695823575756",
};
// 热门图标
const hotIcon = {
  active: "http://cdn.xxoutman.cn/%E7%83%AD%E9%97%A8%20(1)-1695823696759.svg?1695823696919",
  inactive: "http://cdn.xxoutman.cn/%E7%83%AD%E9%97%A8-1695823664618.svg?1695823664750",
};
const router = useRouter();

const change = (num) => {
  isActive.value = num; //动态class进行赋值
  // 进行路由跳转
  if (num == 0) {
    // 导航到命名路由
    router.push({ path: "/home" });
    // router.push({ name: "Home", params: { user: "params传递参数" } });
  } else if (num == 1) {
    router.push({ path: "/hot" });
  } else if (num == 2) {
    router.push({ path: "/user" });
  }
};
</script>

<style lang="scss" scoped>
.animate__animated.animate__pulse {
  --animate-duration: 0.5s;
}
</style>
