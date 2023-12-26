<template>
  <div class="my-col" :style="styles">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { inject, getCurrentInstance } from 'vue'
import classnames from 'classnames'
// import { useNamespace } from '../../../hooks/use-namespace'
interface Props {
  span?: number
}
const props = withDefaults(defineProps<Props>(), {
  span: 24 //初始默认24格子
})
const styles = classnames(`grid-column-start: span ${props.span}`,{})

// type ComputeOffset = (span: number) => number
// const computeOffset: ComputeOffset = inject('computeOffset')!
// let offset = computeOffset(props.span)
// console.log('返回的', offset);
// console.log(getCurrentInstance());

</script>

<style>
@import '../../../styles/layout/col.less';
</style>