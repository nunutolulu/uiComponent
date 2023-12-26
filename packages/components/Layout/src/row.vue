<template>
    <div class="my-row" :class="rowClass" :style="rowStyle" ref="row">
        <slot :computeOffset="computeOffset"></slot>
    </div>
</template>

<script lang="ts" setup>
import { provide } from 'vue'
// import { useNamespace } from '../../../hooks/use-namespace'
import classnames from 'classnames'

type Justify = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'
type Align = 'start' | 'center' | 'end'

interface Props {
    justify?: Justify,
    align?: Align,
    flex?: boolean,
    gutter?: number
}
const props = withDefaults(defineProps<Props>(), {
    justify: 'start',
    align: 'start',
    flex: false,
    gutter: 0
})
// 组合类名
const rowClass = classnames('row-bg', 'yt-row', {
    [`row-flex-container`]: props.flex,
    [`row-grid-container`]: !props.flex
})
// 组合样式
const rowStyle = classnames(
    `justify-content:${props.justify};`,
    `align-items:${props.align};`,
    {
        [`grid-gap:${props.gutter}px`]: props.gutter
    })

let offset = 0
function computeOffset(span: number): number {
    offset += span
    return offset
}
provide('computeOffset', computeOffset)
</script>

<style lang="less" scoped>
@import '../../../styles/layout/row.less';
</style>>
