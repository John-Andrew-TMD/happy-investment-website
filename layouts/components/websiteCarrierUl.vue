<template>
  <div
    class="website-carrier-ul"
    :style="`display: ${!isShow ? 'none' : 'block'}`"
  >
    <div class="min">
      <div class="website-carrier-fold">
        <a
          href="https://www.zhaoshang.net/changfang/"
          target="_blank"
          title="厂房"
        >
          <span>厂房</span>
        </a>
        <a href="https://www.zhaoshang.net/tudi/" target="_blank" title="土地">
          <span>土地</span>
        </a>
        <a
          href="https://www.zhaoshang.net/xiezilou/"
          target="_blank"
          title="写字楼"
        >
          <span>写字楼</span>
        </a>
        <a
          href="https://www.zhaoshang.net/cangku/"
          target="_blank"
          title="仓库"
        >
          <span>仓库</span>
        </a>
        <a
          href="https://www.zhaoshang.net/item/list"
          target="_blank"
          title="招商项目"
        >
          <span>招商项目</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isShow: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
@import "./websiteUl/index.scss";
.website-carrier-fold > a:hover span {
  color: #d50000;
}
</style>