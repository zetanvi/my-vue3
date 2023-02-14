<template>
	<n-layout :style="style" class="h-300px"> </n-layout>
</template>

<script lang="ts" setup>
	import { useVModel, useTimeoutFn,useVModels } from '@vueuse/core'
	import { computed } from 'vue'
	const props = defineProps<{ color: string; name: string }>()
	const emit = defineEmits(['update:color','update:name'])
	const bgcolor = useVModel(props, 'color', emit)
	useTimeoutFn(() => {
		bgcolor.value = 'red'
	}, 3000)
	const style = computed(() => {
		return `background:${bgcolor.value}`
	})

	const { name } = useVModels(props)
  useTimeoutFn(() => {
		name.value = 'zetanvi'
	}, 2000)
</script>
