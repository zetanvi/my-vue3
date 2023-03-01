<template>
	<NForm ref="formElRef"> </NForm>
</template>

<script lang="ts" setup>
	import { FormInst } from 'naive-ui'
	import { ref } from 'vue'
	import type { NFormProps } from './types/form'

	const formElRef = ref<Nullable<FormInst>>(null)

</script>

<style scoped lang="less"></style>
