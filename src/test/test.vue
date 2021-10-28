<template>
  <div :class="modelClass" @click="changColor">
    我变色了
  </div>
  <n-button :class="modelClass" type="primary" size="medium" @click="changColor">
    我变色了
  </n-button>
  <span>{{ testStore.getName }}111</span>
  <n-button type="primary" size="medium" @click="testStore.changeName">
    changeName
  </n-button>
</template>

<script lang="ts" setup>
import { ref } from '@vue/reactivity'
import classmodule from './cssmodule.module.css'
import { useTestStore } from './store'

console.log(import.meta.env, 'import.meta.env.VITE_PORT')

console.log(classmodule, 'no-multiple-empty-lines')
// css module
const modelClass = ref(classmodule.red)
const changColor = () => {
  modelClass.value = modelClass.value === classmodule.red ? classmodule.skyblue : classmodule.red
}
// glob 文件导入
const globModules = import.meta.glob('./glob/*.js')
for (const modules in globModules) {
  if (Object.prototype.hasOwnProperty.call(globModules, modules)) {
    globModules[modules]().then(mod => {
      mod.default()
    })
  }
}

// pinia的使用
const testStore = useTestStore()
console.log(testStore, 'testStore.getName')
</script>

<style scoped lang="scss"></style>
