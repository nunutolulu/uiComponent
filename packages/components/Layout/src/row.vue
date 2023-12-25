<template>
    <div class="my-row" :class="rowClass" :style="rowStyle">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import myRow from './row';

</script>

<style lang="less" scoped>
@import '../../../styles/layout/row.less';
</style>>
