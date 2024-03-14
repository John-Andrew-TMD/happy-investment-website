<template>
  <div class="investment-main">
    <div class="header-content">
      <div class="header-website" @mouseleave="isShow = false">
        <a class="website-logo" href="/" title="快乐招商">
          <img
            src="https://static.zhaoshang.net/front/images/concise_index/website_logo.svg"
            alt="快乐招商"
          />
        </a>
        <div class="change-website" @mouseover="isShow = true">
          <span> 全站 </span>
          <el-icon><CaretBottom /></el-icon>
          <img
            class="common-module-active"
            src="https://static.zhaoshang.net/front/images/concise_index/solid_arrow_active@2x.png"
            alt=" 全站"
          />
          <websiteUl :isShow="isShow" />
        </div>
      </div>
      <div class="header-contact">
        <img
          src="https://static.zhaoshang.net/front/images/concise_index/phone.gif"
          alt="400-105-0506"
        />
        <span class="zhaoshang_topic">400-168-6016</span>
      </div>

      <div class="header-ul" @mouseleave="isShowFold = false">
        <a href="https://yun.zhaoshang.net" target="_blank" title="项目对接">
          <span>项目对接</span>
          <p>HOT</p>
        </a>
        <a
          href="https://www.zhaoshang.net/park/list"
          target="_blank"
          title="园区"
        >
          <span>园区</span>
        </a>
        <a
          class="header-carrier-fold"
          href="Javascript:void(0)"
          title="载体"
          @mouseover="isShowFold = true"
        >
          <span>载体</span>
          <el-icon><CaretBottom /></el-icon>
          <img
            class="common-module-active"
            src="https://static.zhaoshang.net/front/images/concise_index/solid_arrow_active@2x.png"
            alt="载体"
          />
          <websiteCarrierUl :isShow="isShowFold" />
        </a>
        <a href="https://www.zhaoshang.net/quxian/" title="市县">
          <span>市县</span>
        </a>
        <a
          href="https://www.zhaoshang.net/news/policy/"
          target="_blank"
          title="政策"
        >
          <span>政策</span>
        </a>
        <a
          href="https://www.zhaoshang.net/news/dujia/"
          target="_blank"
          title="观点"
        >
          <span>观点</span>
        </a>
        <a href="https://www.zhaoshang.net/hudong" target="_blank" title="互动">
          <span>互动</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CaretBottom } from "@element-plus/icons-vue";
import websiteUl from "./websiteUl/index";
import websiteCarrierUl from "./websiteCarrierUl";
const isShow = ref(false);
const isShowFold = ref(false);
</script>

<style lang="scss" scoped>
@import "./websiteUl/index.scss";
</style>