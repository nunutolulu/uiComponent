<template>
  <div>
    <my-row :gutter="20" class="margin">
        <my-col :span="16"><div class="grid-content col-bg-primary"></div></my-col>
        <my-col :span="8"><div class="grid-content col-bg-minor"></div></my-col>
    </my-row>
    <my-row :gutter="20" class="margin">
        <my-col :span="8"><div class="grid-content col-bg-primary"></div></my-col>
        <my-col :span="4"><div class="grid-content col-bg-minor"></div></my-col>
        <my-col :span="8"><div class="grid-content col-bg-primary"></div></my-col>
        <my-col :span="4"><div class="grid-content col-bg-minor"></div></my-col>
    </my-row>
    <my-row :gutter="20" class="margin">
        <my-col :span="6"><div class="grid-content col-bg-primary"></div></my-col>
        <my-col :span="3"><div class="grid-content col-bg-minor"></div></my-col>
        <my-col :span="6"><div class="grid-content col-bg-primary"></div></my-col>
        <my-col :span="9"><div class="grid-content col-bg-minor"></div></my-col>
    </my-row>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
//这里是在源码里面添加的类名
.margin {
    margin-bottom: 10px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.flex-content {
    min-height: 36px;
    width: 100px; //到时候可以根据父元素改成100%
}

.col-bg-primary {
    background-color: skyblue;
}

.col-bg-minor {
    background-color: #61ecd9;
}
</style>>