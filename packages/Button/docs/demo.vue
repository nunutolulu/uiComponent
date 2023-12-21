<!-- 交互式预览实例 -->
<template>
    <div>
        <my-button type="primary">主要按钮</my-button>
        <my-button type="success">成功按钮</my-button>
        <my-button type="info">信息按钮</my-button>
        <my-button type="warning">警告按钮</my-button>
        <my-button type="danger">危险按钮</my-button>
    </div>
    <br />
    <br />

    <div>
        <my-button type="primary" plain>朴素按钮</my-button>
        <my-button type="success" plain>成功按钮</my-button>
        <my-button type="info" plain>信息按钮</my-button>
        <my-button type="warning" plain>警告按钮</my-button>
        <my-button type="danger" plain>危险按钮</my-button>
    </div>
    <br />
    <br />

    <div>
        <my-button type="primary" round>圆角按钮</my-button>
        <my-button type="success" round>成功按钮</my-button>
        <my-button type="info" round>信息按钮</my-button>
        <my-button type="warning" round>警告按钮</my-button>
        <my-button type="danger" round>危险按钮</my-button>
    </div>
    <br />
    <br />

</template>

<style scoped>
div+div {
    margin-top: 12px;
}

</style>