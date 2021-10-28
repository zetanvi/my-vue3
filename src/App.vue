<template>
  <n-config-provider :theme="theme">
    <n-button type="primary" size="medium" @click="theme = darkTheme">
      深色
    </n-button>
    <n-button type="primary" size="medium" @click="theme = null">
      浅色
    </n-button>
    <n-icon size="40">
      <game-controller-outline />
    </n-icon>
    <router-view />
    <!-- n-global-style 给body添加主题样式 -->
    <n-global-style />
  </n-config-provider>
</template>
<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import { ref } from 'vue'
import { GameControllerOutline } from '@vicons/ionicons5'
const theme = ref<any>(null)
</script>
<style></style>
