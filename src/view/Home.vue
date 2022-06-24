<template>
	<useVModel
		:color="my_color"
		:name="my_name"
		@update:color="changeColor"
		@update:name="changeName"
	></useVModel>
	color已改为{{ my_color }} name已改为{{ my_name }}
</template>

<script lang="ts" setup>
	import useVModel from '@/components/test/useVModel.vue'
	import { ref } from 'vue'
	const my_color = ref('skyblue')
	function changeColor(color: string) {
		my_color.value = color
	}
	const my_name = ref('mellow')
	function changeName(name: string) {
		my_name.value = name
	}
</script>

<style scoped lang="scss"></style>
