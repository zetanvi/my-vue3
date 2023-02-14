<template>
  <n-layout>
    <useVModel
      :color="my_color"
      :name="my_name"
      @update:color="changeColor"
      @update:name="changeName"
    />
    <n-button type="primary" size="medium" @click="goFelling">
      伐木go
    </n-button>
  </n-layout>
</template>

<script lang="ts" setup>
import useVModel from '@/components/test/useVModel.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const my_color = ref('skyblue')
function changeColor(color: string) {
  my_color.value = color
}
const my_name = ref('mellow')
function changeName(name: string) {
  my_name.value = name
}
const router = useRouter()
function goFelling() {
  router.push({ name: 'Felling' })
}
</script>

<style scoped lang="scss"></style>
