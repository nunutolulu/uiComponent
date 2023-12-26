<template>
    <div>
        <my-row :gutter="24" class="margin">
            <my-col :span="6">
                <div class="grid-content col-bg-primary"></div>
            </my-col>
            <my-col :span="6">
                <div class="grid-content col-bg-minor"></div>
            </my-col>
            <my-col :span="6">
                <div class="grid-content col-bg-primary"></div>
            </my-col>
            <my-col :span="6">
                <div class="grid-content col-bg-minor"></div>
            </my-col>
        </my-row>
    </div>
</template>

<script>
</script>

<style>
.margin {
    margin-bottom: 10px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.flex-content {
    min-height: 36px;
    width: 100px; 
}

.col-bg-primary {
    background-color: skyblue;
}

.col-bg-minor {
    background-color: #61ecd9;
}
</style>