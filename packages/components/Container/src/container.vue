<template>
    <div class="container" :style="styleName">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
type Directives = 'horizontal' | 'vertical'
interface Props {
    direction?: Directives
}
const props = withDefaults(defineProps<Props>(), {
    direction: 'vertical'
})
const styleName = `flex-direction:${props.direction == 'horizontal' ? 'row' : 'column'}`
</script>

<style lang="less" scoped>
.container {
    display: flex;
    width: 100%
}
</style>>
