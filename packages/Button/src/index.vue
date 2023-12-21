<template>
    <button class="my-button" 
        :class="typeClass" 
        :type="nativeType" 
        :autofocus="autoFocus" 
        :disabled="disabled || loading"
        @click="handlerClick">
        <i v-if="props.loading" class="my-icon-loading"></i>
        <i v-if="props.icon && !props.loading" :class="props.icon"></i>
        <span v-if="$slots.default">
            <slot></slot>
        </span>
    </button>
</template>


<script lang="ts" setup>
import { computed } from 'vue'
import { Emits, Props } from './button'
const props = defineProps(Props)
const emits = defineEmits(Emits)
const typeClass = computed(() => {
    const { type, size, round, plain, circle, disabled, loading } = props;
    return [
        {
            [`my-button-${type}`]: type,
            [`my-button-${size}`]: size,
            [`my-button-${round}`]: round,
            [`my-button-${plain}`]: plain,
            [`my-button-${circle}`]: circle,
            [`my-button-${disabled}`]: disabled,
            [`my-button-${loading}`]: loading
        }
    ];
})
function handlerClick(evt: MouseEvent): void {
    emits('click', evt)
}
</script>

<style scoped>
@import '../styles/button.less';
</style>