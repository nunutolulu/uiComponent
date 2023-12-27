<template>
  <div class="common-layout">
    <my-container>
      <my-header>Header</my-header>
      <my-main>Main</my-main>
    </my-container>
  </div>
</template>

<script>

</script>

<style lang="less">
.common-layout {
  margin-bottom: 30px;
  .my-header,
  .my-footer,
  .my-main,
  .my-aside {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .my-header {
    background-color: var(--yt-primary-color-light-1);
  }
  .my-main {
    background-color: var(--yt-primary-color-light-2);
    height: 150px;
    width: 100%;
  }
  .my-footer {
    background-color: var(--yt-primary-color-light-3);
    width: 100%;
  }
  .my-aside {
    background-color: var(--yt-primary-color-light-4);
  }
}
</style>