<template>
  <n-layout class="h-screen bg-green-200">
    <div class="w-100 h-full bg-red-300 my-0 mx-auto relative">
      <div :style="`height:${cut_count * human_height}px`" class="w-50 absolute bottom-0 left-25 bg-yellow-900">
        <div v-for="(item, index) in branches" :key="index" :style="`top:${index * human_height * 2}px`" :class="`bg-cyan-400 absolute w-40 h-15 ${item.location}`">
          {{ index }}
        </div>
      </div>
      <n-button type="primary" size="medium" @click="cutTree"> 砍一下 </n-button>
    </div>
  </n-layout>
</template>

<script lang="ts" setup>
  import { computed, ref } from 'vue'
  enum GameLevel {
    simple = 1,
    normal = 2,
    hard = 3,
  }

  // 人物高度
  const human_height = 60
  // 生成从minNum到maxNum的随机数
  function randomNum(minNum: number, maxNum: number) {
    switch (arguments.length) {
      case 1:
        return Math.floor(Math.random() * minNum + 1)
      case 2:
        return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum)
      default:
        return 0
    }
  }

  // 开始（生成树木高度、生成树枝）
  const cut_count = ref(0)
  const branches = computed(() => {
    return new Array(Math.floor(cut_count.value / 2)).fill({
      location: Math.random() - 0.5 > 0 ? '-left-40' : '-right-40',
    })
  })
  function star() {
    cut_count.value = 12
    // cut_count.value = randomNum(20,30)
    console.log(cut_count.value, 'cut_count')
  }
  star()

  // 砍一下
  function cutTree() {
    cut_count.value--
  }

  // 计算top
  function getTop(index: number) {
    return `top-${index * 30}`
  }
</script>
