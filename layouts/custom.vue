<template>
  <div class="layout" ref="layout">
    <header class="index-header">
      <div class="bg-181819 text-color999">
        <div class="main header-content investment-main">
          <div class="headera-left">
            <div class="headera-phone phone-refer">
              <el-icon class="mr-5"><Iphone /></el-icon>
              手机访问
            </div>
            <div class="headera-collect headera-phone">
              <el-icon class="mr-5"><Star /></el-icon>
              添加收藏
            </div>
          </div>
          <div class="news-login-wrapper">
            <div
              class="index-navigation js-navigation"
              @mouseover="isShow = true"
              @mouseleave="isShow = false"
            >
              网站导航
              <el-icon><CaretBottom /></el-icon>
              <navigation :isShow="isShow" />
            </div>
            <a
              href="https://yun.zhaoshang.net/"
              target="_blank"
              class="project-cloud"
              >项目对接</a
            ><a
              href="https://tj.zhaoshang.net/topic/zsppyx"
              target="_blank"
              class="right-line"
              >宣传合作</a
            ><a href="#" class="right-line login">载体发布</a>
            <div class="news-login login-user">
              <div class="register" data-source="导航右上角">注册</div>
              <div class="header-line"></div>
              <div class="login" data-source="导航右上角">登录</div>
            </div>
          </div>
        </div>
      </div>

      <headerContent />
    </header>
    <div class="main-container" ref="mainContianer">
      <el-config-provider :locale="zhCn">
        <slot />
      </el-config-provider>
    </div>
    <footerOwner />
  </div>
</template>

<script setup>
import { CaretBottom, Star, Iphone } from "@element-plus/icons-vue";
import navigation from "./components/navigation";
import footerOwner from "./components/footer.vue";
import headerContent from "./components/headerContent";
import { ref, onBeforeMount, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useScroll } from "@vueuse/core";
import { useUserStore } from "~/stores/user";
import { imgPathPrefix } from "~/env.config.js";
import zhCn from "element-plus/es/locale/lang/zh-cn";
const user = useUserStore();
const router = useRouter();
const route = useRoute();

const activeIndex = ref("index");

const layout = ref(null);
const { x, y } = useScroll(layout);
const isScrolled = ref(false);
const isShow = ref(false);
const productDropdown = ref([]);
const curProduct = ref(user.curProduct);
const serviceDropdown = ref([]);
const curService = ref(null);
const weChatImg = ref(null);

function getImg() {
  return `/images/server_0${getRandomInt(1, 8)}.png`;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // 不含最大值，含最小值
}

watch(
  () => y.value,
  (newVal) => {
    if (newVal > 56) {
      isScrolled.value = true;
    } else {
      isScrolled.value = false;
    }
  }
);
watch(
  () => route.name,
  (nVal, oVal) => {
    activeIndex.value = nVal;
  },
  {
    immediate: true,
    deep: true,
  }
);

function handleSelect(index) {
  const route = {
    index: "/",
    safetyProduct: "/safetyProduct",
    safeService: "/safeService",
    policyDoc: "/policyDoc",
    filePreview: "/filePreview",
  };
  router.push(route[index]);
}

// 进入管理系统
function jumpEntrance() {
  window.open("/biz/", "_blank");
}

async function getDropdownData() {
  const params = {
    url: "/outerapi/consoleconfig/selectDropdownData",
    body: {
      name: "",
    },
  };
  const res = await fetch(params);
  if (res.returnModel) {
    productDropdown.value = res.returnModel.data.productDropdownList.map(
      (item) => item.name
    );
    serviceDropdown.value = res.returnModel.data.serviceDropdownList.map(
      (item) => item.name
    );
    if (user.curProduct) {
      user.setCurProduct(user.curProduct);
      curProduct.value = user.curProduct;
    } else {
      user.setCurProduct(productDropdown.value[0]);
      curProduct.value = productDropdown.value[0];
    }
    if (user.curService) {
      user.setCurService(user.curService);
      curService.value = user.curService;
    } else {
      user.setCurService(serviceDropdown.value[0]);
      curService.value = serviceDropdown.value[0];
    }
  }
}

function changeProduct(product) {
  router.push("/safetyProduct");
  curProduct.value = product;
  user.setCurProduct(curProduct.value);
}

function changeService(service) {
  router.push("/safeService");
  curService.value = service;
  user.setCurService(curService.value);
}

function jumpToProduct(name) {
  router.push("/safetyProduct");
  user.setCurProduct(name);
}

function jumpToService(name) {
  router.push("/safeService");
  user.setCurService(name);
}

async function getBottomData() {
  const params = {
    url: "/outerapi/consoleconfig/selectBottomData",
    body: {},
  };
  const res = await fetch(params);
  if (res.isNormal === true) {
    const data = res.returnModel.data;
    classifyList.value[0].list = data.productRecommendList.map(
      (item) => item.name
    );
    classifyList.value[1].list = data.serviceRecommendList.map(
      (item) => item.name
    );
    if (data.contactUsList.length > 0) {
      const contactUsList = [
        `咨询热线：${data.contactUsList[0].titleName}`,
        `联系邮箱：${data.contactUsList[0].introduceDesc}`,
      ];
      classifyList.value[2].list = contactUsList;
    } else {
      classifyList.value[2].visible = false;
    }
    weChatImg.value = `${imgPathPrefix}${data.contactUsList[0].imgPath}`;
  }
}

onBeforeMount(() => {
  getDropdownData();
  getBottomData();
});
</script>
<style lang="scss" scoped>
@import "./custom.scss";
</style>
