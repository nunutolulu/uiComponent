<template>
    <span class="my-icon" :class="className" :style="styleName"></span>
</template>

<script lang="ts" setup>
import classnames from 'classnames'

interface Props {
    size?: number,
    type?: string,
    color?: string
}
const props = withDefaults(defineProps<Props>(), {
    size: 30,
    type: '',
    color: ''
})

const className = classnames('iconfont', 'icon', {
    [`${props.type}`]: props.type
})
const styleName = classnames(`font-size:${props.size}px;`, {
    [`color:${props.color}`]: props.color
})
</script>

<style lang="less" scoped>
@import '../assets/iconfont.css';
</style>