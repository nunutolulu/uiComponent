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
    width: "300px"
})
const styleName = `width:${props.width}`
const className = 'my-aside'
</script>

<style lang="less" scoped></style>>