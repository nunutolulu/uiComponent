<template>
  <div class="common-layout">
    <my-container direction="horizontal">
      <my-aside>Aside</my-aside>
      <my-main>Main</my-main>
    </my-container>
  </div>
</template>
  
<script>

</script>
  
<style lang="less">
.common-layout {
  margin-bottom: 30px;
  .my-main,
  .my-aside {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .my-main {
    background-color: var(--yt-primary-color-light-2);
    height: 150px;
    // width: 100%;
  }

  .my-aside {
    background-color: var(--yt-primary-color-light-4);
  }
}</style>