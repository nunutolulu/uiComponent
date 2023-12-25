<template>
    <div class="my-row" :class="rowClass" :style="rowStyle">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
// import { } from './row';
import { computed } from 'vue'
// const props = defineProps(Props)
// computed(() => {
//     rowStyle(){
//         return marginLeft:-this.gutter
//     }
// })

const rowStyle:string|number ={

}

</script>

<style lang="less" scoped>
@import '../../../styles/layout/row.less';
</style>>
