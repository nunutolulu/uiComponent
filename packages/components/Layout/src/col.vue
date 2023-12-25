<template>
  <div class="my-col" :style="styles">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import myCol from './col'
</script>

<style>
@import '../../../styles/layout/col.less';
</style>