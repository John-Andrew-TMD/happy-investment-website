<!--
 * @Author: YONG
 * @LastEditors: YONG
 * @Date: 2023-06-13 14:50:10
 * @LastEditTime: 2023-06-15 16:03:54
 * @Description:
-->
<template>
  <div class="banner">
    <a
      class="banner-bg"
      href="https://zswlzsd.topic.zhaoshang.net"
      target="_blank"
    >
      <h1>招商网络 链接园企高效对接</h1>
    </a>
    <div class="min">
      <ul class="banner-tab">
        <li
          v-for="(item, index) in radioGroup"
          :key="index"
          :class="bannerValue === item.value ? 'banner-tab-active' : ''"
          @click="handleChangeRadio(item)"
          :data-placeholder="item.placeholder"
          :data-type="item.dataType"
        >
          <span>{{ item.label }}</span>
          <img :src="item.src" :alt="item.label" />
        </li>
      </ul>
      <div class="banner-search">
        <input type="text" name="search" placeholder="请输入产业园区名称" />
        <div class="banner-search-operate">
          <img
            src="https://static.zhaoshang.net/front/images/concise_index/search@2x.png"
            alt="您可直接搜索关键词"
          />
        </div>
      </div>
    </div>
    <div class="banner-data">
      <div class="banner-data-ul">
        <div class="banner-data-li banner-data-both">
          <span class="banner-identify-num" data-num="7304">7304</span>
          <p>认证招商人</p>
        </div>
        <div class="banner-data-vertical"></div>
        <div class="banner-data-li">
          <span class="banner-company-num" data-num="3984">3984</span>
          <p>招商单位</p>
        </div>
        <div class="banner-data-vertical"></div>
        <div class="banner-data-li">
          <span class="banner-dock-num" data-num="21195">21195</span>
          <p>园企对接成功</p>
        </div>
        <div class="banner-data-vertical"></div>
        <div class="banner-data-li banner-data-both">
          <span class="banner-choose-num">100</span>
          <i class="unit">%</i>
          <p>真实选址企业</p>
        </div>
      </div>
      <ul class="banner-scroll-ul">
        <li class="banner-scroll-li">
          <img
            class="banner-data-title"
            src="https://static.zhaoshang.net/front/images/concise_index/banner_insert@2x.png"
            alt="单位新增认证"
          />
          <ul class="company-scroll">
            <li style="margin-top: -19.5029px">
              丹东市振兴区经济合作发展服务中心进驻招商网络
            </li>
            <li style="margin-top: 0px">张掖经济技术开发区进驻招商网络</li>
            <li style="margin-top: 0px">滁州市全椒县招商局进驻招商网络</li>
            <li style="margin-top: 0px">三明市永安市商务局进驻招商网络</li>
            <li style="margin-top: 0px">丹东市东港市招商局进驻招商网络</li>
            <li style="margin-top: 0px">丹东市振安区招商局进驻招商网络</li>
            <li style="margin-top: 0px">安康市宁陕县招商局进驻招商网络</li>
            <li style="margin-top: 0px">九江市都昌县人民政府进驻招商网络</li>
            <li style="margin-top: 0px">英特利高新科技产业园进驻招商网络</li>
            <li style="margin-top: 0px">丹东振兴经济开发区进驻招商网络</li>
          </ul>
        </li>
        <li class="banner-scroll-li">
          <img
            class="banner-data-title"
            src="https://static.zhaoshang.net/front/images/concise_index/banner_dock@2x.png"
            alt="园企对接成功"
          />
          <ul class="dock-scroll">
            <li style="margin-top: -19.5029px">
              巴中市平昌县人民政府成功对接了建材生产企业
            </li>
            <li style="margin-top: 0px">
              秦皇岛市卢龙县投资促进中心成功对接了金属冶炼生产企业
            </li>
            <li style="margin-top: 0px">
              泰州医药高新技术产业开发区成功对接了医药原料生产企业
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const bannerValue = ref(0);
const handleChangeRadio = (item) => {
  bannerValue.value = item.value;
};
const radioGroup = ref([
  {
    value: 0,
    label: "找园区",
    placeholder: "请输入产业园区名称",
    dataType: "/park/park-list/",
    src: "https://static.zhaoshang.net/front/images/concise_index/arrow_bottom@2x.png",
  },
  {
    value: 1,
    label: "找单位",
    placeholder: "请输入政府机构名称",
    dataType: "/park/zhengfu-list/",
    src: "https://static.zhaoshang.net/front/images/concise_index/arrow_bottom@2x.png",
  },
  {
    value: 2,
    label: "找企业",
    placeholder: "请输入选址企业意向地区、企业所属行业",
    dataType: "https://yun.zhaoshang.net/xiangmu/",
    src: "https://static.zhaoshang.net/front/images/concise_index/arrow_bottom@2x.png",
  },
  {
    value: 3,
    label: "找土地",
    placeholder: "请输入意向地区的土地",
    dataType: "/tudi/",
    src: "https://static.zhaoshang.net/front/images/concise_index/arrow_bottom@2x.png",
  },
]);
</script>

<style lang="scss" scoped>
/* banner */
.banner {
  position: relative;
  width: 100%;
  max-width: 2560px;
  min-width: 1200px;
  height: 400px;
  margin: 0 auto 178px auto;
  background-size: 100% 100%;
}
.banner-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 2560px;
  min-width: 1200px;
  height: 400px;
  background: url(../images/concise_index/index_banner.jpg) no-repeat center;
  background-size: 100% 100%;
}
.banner h1 {
  color: #ffffff;
  font-size: 56px;
  font-weight: bold;
  line-height: 84px;
  text-align: center;
  padding-top: 70px;
  text-shadow: 0px 2px 6px #00277f;
}
.banner-tab {
  position: absolute;
  top: 180px;
  width: 520px;
  font-size: 0;
  text-align: center;
  margin: 0 0 0 290px;
  overflow: hidden;
  *left: 50%;
  *margin-left: -260px;
}
.banner-tab li {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  height: 34px;
  margin: 0 24px;
  cursor: pointer;
}
.banner-tab li span {
  display: block;
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  text-shadow: 0px 0px 1px #012a84;
}
.banner-tab li img {
  display: none;
  width: 8px;
  height: 8px;
  margin: auto;
}
.banner-tab li.banner-tab-active span {
  font-weight: bold;
  text-shadow: 0px 0px 4px rgba(1, 42, 132, 0.73);
}
.banner-tab li.banner-tab-active img {
  display: block;
  *display: inline-block;
}

.banner-search {
  position: relative;
  top: 220px;
  width: 688px;
  margin: 0 auto;
  overflow: hidden;
}
.banner-search input {
  float: left;
  width: 668px;
  height: 46px;
  padding-left: 18px;
  background-color: #ffffff;
  box-shadow: 0px 2px 14px 0px rgba(71, 111, 162, 0.42);
  border-radius: 2px;
  border: 1px solid #ffffff;
  backdrop-filter: blur(15px);
}
.banner-search input::placeholder {
  color: #333333;
  font-size: 14px;
  font-weight: 400;
}
.banner-search-operate {
  position: absolute;
  right: 0;
  width: 102px;
  height: 48px;
  background-color: #d50000;
  border-radius: 0px 2px 2px 0px;
  cursor: pointer;
}
.banner-search-operate:hover {
  background-color: #b60e0e;
}
.banner-search-operate img {
  display: block;
  width: 26px;
  height: 26px;
  margin: 11px auto;
}

/* banneræ•°æ® */
.banner-data {
  position: absolute;
  bottom: -114px;
  width: 1200px;
  left: 50%;
  margin-left: -600px;
}
.banner-data-ul {
  position: relative;
  width: 1200px;
  padding: 16px 0 20px 0;
  overflow: hidden;
  border-radius: 3px;
  box-shadow: 0px 2px 22px 0px rgba(156, 176, 203, 0.44);
  background: #ffffff;
  background: linear-gradient(360deg, #ffffff 0%, #f3faff 100%);
  backdrop-filter: blur(10px);
}
.banner-data-ul::after {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  content: "";
  width: 1200px;
  height: 110px;
  border-radius: 3px;
  border-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    )
    1 1;
}
.banner-data-li {
  float: left;
  width: 311px;
  text-align: center;
}
.banner-data-li.banner-data-both {
  width: 285px;
}
.banner-data-li span {
  color: #333333;
  font-size: 40px;
  font-weight: bold;
  line-height: 48px;
}
.banner-data-li .unit {
  color: #333333;
  font-size: 20px;
}
.banner-data-li p {
  color: #666666;
  font-size: 18px;
  font-weight: 400;
  margin-top: 6px;
}
.banner-data-vertical {
  float: left;
  width: 2px;
  height: 45px;
  opacity: 0.4;
  margin: 13.5px 0;
  background-color: #bbc5d2;
}

/* banneræ»šåŠ¨ */
.banner-scroll-ul {
  padding: 14px 24px;
  overflow: hidden;
  background-color: #f5f7fa;
  border-radius: 0px 0px 2px 2px;
}
.banner-scroll-li {
  float: left;
  width: 576px;
  height: 24px;
}
.banner-data-title {
  float: left;
  height: 16px;
  margin: 4px 0;
  margin-right: 16px;
}
.banner-scroll-li ul {
  float: left;
  height: 24px;
  overflow: hidden;
}
.banner-scroll-li ul li {
  color: #333333;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  width: 440px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
