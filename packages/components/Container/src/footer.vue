<template>
    <div :class="className" :style="styleName">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
interface Props {
    height?: string
}
const props = withDefaults(defineProps<Props>(), {
    height: '60px'
})
const styleName = `height:${props.height}`
const className = 'my-footer'
</script>

<style lang="less" scoped>

</style>>