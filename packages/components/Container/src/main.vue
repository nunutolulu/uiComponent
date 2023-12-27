<template>
    <div :class="className" :style="styleName">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
interface Props {
    width?: string
}
const props = withDefaults(defineProps<Props>(), {
    width: "100%"
})
const styleName = `width:${props.width}`
const className = 'my-main'
</script>

<style lang="less" scoped></style>>