<template>
  <div class="investment-main">
    <div class="header-content">
      <div class="header-website">
        <a class="website-logo" href="/" title="快乐招商">
          <img
            src="https://static.zhaoshang.net/front/images/concise_index/website_logo.svg"
            alt="快乐招商"
          />
        </a>
        <div
          class="change-website"
          @mouseover="isShow = true"
          @mouseleave="isShow = false"
        >
          <span> 全站</span>
          <img
            class="common-module-default"
            src="https://static.zhaoshang.net/front/images/concise_index/solid_arrow@2x.png"
            alt=" 全站"
          />
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
      <div class="header-ul">
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
        <a class="header-carrier-fold" href="Javascript:void(0)" title="载体">
          <span>载体</span>
          <img
            class="common-module-default"
            src="https://static.zhaoshang.net/front/images/concise_index/solid_arrow@2x.png"
            alt="载体"
          />
          <img
            class="common-module-active"
            src="https://static.zhaoshang.net/front/images/concise_index/solid_arrow_active@2x.png"
            alt="载体"
          />
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
import websiteUl from "./websiteUl/index";
const props = defineProps({
  isShow: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.min {
  width: 1200px;
  margin: auto;
}
.common-module-default {
  display: block;
}
.common-module-active {
  display: none;
}

/* 公共标题 */
.common-module-header {
  margin-bottom: 24px;
}
.common-module-header h2 {
  color: #333333;
  font-size: 32px;
  font-weight: bold;
  line-height: 48px;
  text-align: center;
}
.common-module-line {
  width: 60px;
  height: 2px;
  overflow: hidden;
  margin: auto;
}
.common-line-d5000 {
  float: left;
  width: 20px;
  height: 2px;
  background-color: #d50000;
}
.common-line-1F6CDD {
  float: left;
  width: 40px;
  height: 2px;
  background-color: #1f6cdd;
}

/* 公共tab切换 */
.common-header {
  overflow: hidden;
}
.common-tab {
  float: left;
}
.common-tab li {
  float: left;
  color: #333333;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  margin-right: 60px;
  padding: 0 5px 8px 5px;
  border-bottom: 2px solid #ffffff;
  cursor: pointer;
}
.common-tab li.common-tab-active {
  color: #d50000;
  font-weight: bold;
  border-bottom: 2px solid #d50000;
}
.common-tab li:hover {
  color: #d50000;
}

/* 公共操作 */
.common-operate {
  float: right;
  height: 28px;
  padding: 0 6px 0 4px;
  border-radius: 2px;
  background-color: #d50000;
  cursor: pointer;
}
.common-operate img {
  float: left;
  width: 16px;
  height: 16px;
  margin: 6px 2px 6px 0;
}
.common-operate span {
  float: left;
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
}
.common-operate:hover {
  background-color: #b60e0e;
}

/* 公共查看更多 */
.common-see-more {
  position: relative;
  display: block;
  width: 184px;
  height: 40px;
  color: #808695;
  font-size: 14px;
  font-weight: 400;
  line-height: 40px;
  text-align: center;
  margin: 24px auto 64px auto;
  border-radius: 2px;
  background-color: #eff2f8;
  cursor: pointer;
}
.common-see-more:hover {
  color: #ffffff;
  background-color: #d50000;
}

/* 公共2/1布局 */
.common-double-content {
  margin-bottom: 16px;
}
.common-double-left {
  float: left;
  width: 846px;
  padding: 24px;
  border-radius: 2px;
  margin-right: 16px;
  background-color: #ffffff;
  box-shadow: 2px 6px 20px 0px rgba(215, 224, 230, 0.3);
}
.common-double-header {
  overflow: hidden;
}
.common-double-header h2 {
  float: left;
  color: #333333;
  font-size: 20px;
  font-weight: bold;
}
.common-double-operate {
  float: right;
}
.common-double-operate span {
  float: left;
  color: #666666;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
.common-double-operate img {
  float: left;
  width: 10px;
  height: 10px;
  margin: 5px 0 5px 2px;
}
.common-double-operate:hover span {
  color: #d50000;
}
.common-double-operate:hover .common-module-default {
  display: none;
}
.common-double-operate:hover .common-module-active {
  display: block;
}

.common-double-right {
  float: right;
  width: 242px;
  padding: 24px;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 2px 6px 20px 0px rgba(215, 224, 230, 0.3);
}

/* 头部 */
.header {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 2560px;
  min-width: 1200px;
  margin: auto;
  background-color: #ffffff;
  backdrop-filter: blur(11px);
}
.fill-header {
  position: fixed;
  top: 40px;
  width: 100%;
  max-width: 2560px;
  min-width: 1200px;
  margin: auto;
  height: 86px;
}
.js-fill-header {
  position: relative;
  top: unset;
}
.js-fixed-header {
  position: fixed;
  top: 0;
  box-shadow: 0 0 20px rgb(0 0 0 / 5%);
}
.header-content {
  overflow: hidden;
}

.header-website {
  float: left;
}
.website-logo {
  float: left;
  width: 198px;
  height: 66px;
  margin: 10px 0;
}
.website-logo img {
  display: block;
  width: 198px;
  height: 66px;
}
.change-website {
  float: left;
  margin: 30px 0 30px 16px;
  cursor: pointer;
}
.change-website.change-website-active {
  margin: 30px 0 0 0;
  padding: 0 0 30px 16px;
  cursor: pointer;
}
.change-website span {
  float: left;
  color: #333333;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
}
.change-website img {
  float: left;
  width: 10px;
  height: 10px;
  margin: 7.5px 0 7.5px 5px;
}
.change-website.change-website-active span {
  color: #d50000;
}
.change-website.change-website-active .common-module-default {
  display: none;
}
.change-website.change-website-active .common-module-active {
  display: block;
}

.header-ul {
  float: right;
  margin: 0 0 0 auto;
}
.header-ul a {
  float: left;
  margin: 30px 0 30px 40px;
}
.header-ul a span {
  float: left;
  color: #333333;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
}
.header-ul a p {
  float: left;
  color: #d50000;
  font-size: 14px;
  font-style: italic;
  font-family: -webkit-body;
  font-weight: normal;
  line-height: 26px;
  margin-left: 4px;
}
.header-ul a:hover span {
  color: #d50000;
}
.header-ul a.header-fold-active {
  margin: 30px 0 0 40px;
  padding-bottom: 30px;
}
.header-carrier-fold:hover span {
  color: #333333;
}
.header-carrier-fold img {
  float: left;
  width: 8px;
  height: 8px;
  margin: 8px 0 8px 4px;
}
.header-carrier-fold.header-fold-active span {
  color: #d50000;
}
.header-carrier-fold.header-fold-active .common-module-default {
  display: none;
}
.header-carrier-fold.header-fold-active .common-module-active {
  display: block;
}

.header-contact {
  float: right;
  margin: 33px 0 33px 70px;
}
.header-contact img {
  float: left;
  width: 20px;
  height: 20px;
  margin-top: -2px;
}
.header-contact span {
  float: left;
  color: #d50000;
  font-size: 18px;
  font-weight: bold;
  line-height: 20px;
  margin-left: 8px;
}

/* 站点切换 */
.website-ul {
  display: none;
  position: absolute;
  top: 86px;
  right: 0;
  left: 0;
  width: 100%;
  height: 226px;
  padding: 40px 0;
  margin: 0 auto;
  background: #ffffff;
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0px 10px 20px 0px rgba(156, 176, 203, 0.1);
}
.website-li {
  position: relative;
  float: left;
  margin-right: 62px;
}
.website-li p {
  color: #666666;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  padding-bottom: 2px;
}
.website-ab {
  position: absolute;
  left: 0;
}
.website-ab a {
  display: block;
  width: max-content;
  margin-top: 14px;
  overflow: hidden;
}
.website-ab span {
  float: left;
  width: max-content;
  color: #666666;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
.website-ab a:hover span {
  color: #d50000;
}
.website-ab a.current-site span {
  color: #d50000;
}
.website-ab img {
  float: left;
  width: 30px;
  height: 12px;
  margin: 4px 0 4px 4px;
}

/* 载体下拉 */
.website-carrier-ul {
  display: none;
  position: absolute;
  top: 86px;
  right: 0;
  left: 0;
  width: 100%;
  padding: 24px 0;
  margin: 0 auto;
  background: #ffffff;
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0px 10px 20px 0px rgba(156, 176, 203, 0.1);
}
.website-carrier-fold {
  width: 500px;
  margin: 0 auto;
  padding-left: 252px;
  overflow: hidden;
}
.website-carrier-fold a {
  float: left;
  width: max-content;
  margin: 0 20px;
  overflow: hidden;
}
.website-carrier-fold span {
  float: left;
  width: max-content;
  color: #666666;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
.website-carrier-fold a:hover span {
  color: #d50000;
}

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

/* banner数据 */
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

/* banner滚动 */
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
/* 选址项目对接 */
.dock-item {
  width: 100%;
  max-width: 2560px;
  min-width: 1200px;
  margin: 0 auto;
}
.dock-ul li {
  display: none;
  float: left;
}
.dock-ul li.active {
  display: block;
}
.dock-item-single {
  position: relative;
  float: left;
  width: 342px;
  height: 90px;
  margin: 16px 15px 0 0;
  padding: 24px;
  border-radius: 2px;
  background: #ffffff;
  box-shadow: 2px 6px 20px 0px rgba(215, 224, 230, 0.3);
}
.dock-item-single.no-margin-right {
  margin: 16px 0 0 0;
}

.dock-item-single .item-name {
  display: inline-block;
  max-width: 342px;
  height: 24px;
  color: #333333;
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}
.dock-item-single .item-name:hover {
  color: #d50000;
}
.dock-item-single .item-district {
  margin-top: 11px;
  overflow: hidden;
}
.dock-item-single .item-district span {
  float: left;
  width: 72px;
  color: #333333;
  font-size: 14px;
  font-weight: 400;
}
.dock-item-single .item-district p {
  float: left;
  width: 270px;
  height: 14px;
  color: #333333;
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}
.item-user {
  margin-top: 18px;
  overflow: hidden;
}
.item-user-logo {
  float: left;
  width: 24px;
  height: 24px;
  border-radius: 2px;
  margin-right: 8px;
}
.item-user-logo img {
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 2px;
  object-fit: cover;
  object-position: top;
}
.item-user-logo span {
  display: block;
  width: 24px;
  height: 24px;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  line-height: 24px;
  text-align: center;
  border-radius: 2px;
}
.item-username {
  float: left;
  max-width: 78px;
  height: 24px;
  color: #333333;
  font-size: 14px;
  font-weight: bold;
  line-height: 24px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}
.item-operate {
  float: left;
  cursor: pointer;
}
.item-operate img {
  float: left;
  width: 18px;
  height: 18px;
  margin: 3px 0 3px 8px;
}
.item-operate:hover .common-module-default {
  display: none;
}
.item-operate:hover .common-module-active {
  display: block;
}
.item-operate:hover + .item-code {
  display: block;
}
.item-code {
  display: none;
  position: absolute;
  z-index: 1;
  top: -21px;
  right: 24px;
  padding: 10px;
  border-radius: 2px;
  background: #ffffff;
  box-shadow: 2px 6px 20px 0px rgb(215 224 230 / 30%);
}
.item-code img {
  display: block;
  width: 160px;
  height: 160px;
}
.item-area {
  float: right;
  color: #d50000;
  font-size: 24px;
  font-weight: bold;
  line-height: 24px;
}
.dock-item-more .common-see-more {
  display: none;
}
.dock-item-more .common-see-more.active {
  display: block;
}

/* 推荐招商载体 */
.carrier {
  width: 100%;
  max-width: 2560px;
  min-width: 1200px;
  margin: 0 auto;
}
.carrier-ul li {
  float: left;
  display: none;
}
.carrier-ul li.active {
  display: block;
}
.carrier-single {
  float: left;
  width: 288px;
  margin: 16px 16px 0 0;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 2px 6px 20px 0px rgba(215, 224, 230, 0.3);
}
.carrier-single.no-margin-right {
  margin: 16px 0 0 0;
}
.carrier-pic {
  display: block;
  width: 288px;
  height: 216px;
  overflow: hidden;
}
.carrier-pic img {
  display: block;
  width: 288px;
  height: 216px;
  transition: all 0.5s;
}
.carrier-info {
  padding: 20px 24px 24px 24px;
}
.carrier-title {
  display: inline-block;
  max-width: 242px;
  height: 26px;
  color: #333333;
  font-size: 18px;
  font-weight: bold;
  line-height: 26px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}
.carrier-title:hover {
  color: #d50000;
}
.carrier-district {
  margin-top: 8px;
  overflow: hidden;
}
.carrier-district img {
  float: left;
  width: 18px;
  height: 18px;
  margin: 1px 4px 1px 0;
}
.carrier-district span {
  float: left;
  width: 182px;
  height: 20px;
  color: #333333;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}
.carrier-single:hover .carrier-pic img {
  transform: scale(1.2, 1.2);
}
.carrier-see-more .common-see-more {
  display: none;
  margin: 24px auto 32px auto;
}
.carrier-see-more .common-see-more.active {
  display: block;
}

/* 观点 */
.viewpoint {
  width: 100%;
  max-width: 2560px;
  min-width: 1200px;
  margin: 32px auto 0 auto;
}
.viewpoint .common-double-left {
  height: 352px;
}
.viewpoint-policy-single {
  margin-top: 24px;
}
.viewpoint-policy-pic {
  float: left;
  width: 398px;
  height: 224px;
  margin-right: 22px;
  overflow: hidden;
}
.viewpoint-policy-pic img {
  float: left;
  width: 398px;
  height: 224px;
  transition: all 0.5s;
}
.viewpoint-policy-pic:hover img {
  transform: scale(1.2, 1.2);
}
.viewpoint-policy-info {
  position: relative;
  float: left;
  width: 426px;
  margin-bottom: 36px;
}
.viewpoint-policy-info.no-margin-bottom {
  margin-bottom: 0;
}
.viewpoint-policy-title {
  overflow: hidden;
}
.viewpoint-policy-title a {
  float: left;
  max-width: 354px;
  height: 24px;
  color: #333333;
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  margin-right: 8px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}
.viewpoint-policy-title a:hover {
  color: #d50000;
}
.viewpoint-policy-title span {
  float: left;
  width: 64px;
  height: 20px;
  color: #808695;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  margin: 2px 0;
  border-radius: 2px;
  background-color: #f2f3f8;
}
.viewpoint-policy-desc {
  max-height: 66px;
  color: #666666;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.viewpoint-policy-ul {
  margin-top: 10px;
  overflow: hidden;
}
.viewpoint-policy-ul li {
  float: left;
  width: 412px;
  margin: 16px 22px 0 0;
}
.viewpoint-policy-ul li.no-margin-right {
  float: left;
  margin: 16px 0 0 0;
}
.viewpoint-policy-ul li span {
  float: left;
  width: 64px;
  height: 20px;
  color: #808695;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  margin-right: 8px;
  border-radius: 2px;
  background-color: #f2f3f8;
}
.viewpoint-policy-ul li a {
  float: left;
  max-width: 340px;
  height: 20px;
  color: #333333;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}
.viewpoint-policy-ul li a:hover {
  color: #d50000;
}
.viewpoint-right-ul {
  padding-top: 8px;
  overflow: hidden;
}
.viewpoint-right-ul a {
  float: left;
  width: 114px;
  margin: 16px 14px 0 0;
  padding: 20px 0 24px 0;
  border-radius: 2px;
  background-color: #f9fafd;
}
.viewpoint-right-ul a:hover {
  background-color: #eff2f8;
}
.viewpoint-right-ul a.no-margin-right {
  margin: 16px 0 0 0;
}
.viewpoint-right-ul a img {
  display: block;
  width: 24px;
  height: 24px;
  margin: 0 auto 8px auto;
}
.viewpoint-right-ul a span {
  display: block;
  color: #333333;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
}

/* 招商课程 */
.course {
  width: 100%;
  max-width: 2560px;
  min-width: 1200px;
  margin: 0 auto;
}
.course .common-double-left {
  height: 278px;
}
.course-ul {
  overflow: hidden;
}
.course-ul li {
  float: left;
  width: 198px;
  margin: 24px 18px 0 0;
}
.course-ul li.no-margin-right {
  margin: 24px 0 0 0;
}
.course-pic {
  display: block;
  width: 198px;
  height: 112px;
  margin-bottom: 14px;
  overflow: hidden;
}
.course-pic img {
  display: block;
  width: 198px;
  height: 112px;
  transition: all 0.5s;
}
.course-pic:hover img {
  transform: scale(1.2, 1.2);
}
.course-title {
  display: block;
  width: 198px;
  max-height: 52px;
  color: #333333;
  font-size: 18px;
  font-weight: bold;
  line-height: 26px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.course-title:hover {
  color: #d50000;
}
.course-desc {
  max-height: 44px;
  color: #666666;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-top: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.course .common-double-right {
  position: relative;
  height: 278px;
}
.course .common-double-right img {
  display: block;
  width: 210px;
  height: 262px;
  margin: 10px auto 0 auto;
}
.course .common-double-right span {
  position: absolute;
  bottom: 33px;
  left: 50%;
  margin-left: -43px;
  display: block;
  width: 86px;
  color: #666666;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
}

/*活动邀请的弹窗*/
.invest-info {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  overflow: auto;
  display: none;
}
.invest-bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 998;
  width: 100%;
  min-height: 100%;
}
.invest-center {
  width: 350px;
  _margin-top: 100px;
  overflow: hidden;
  z-index: 999;
  padding: 23px 25px;
  background: url("../images/activity/invest_modal_bk.png");
  position: absolute;
  left: 50%;
  margin-left: -200px;
  top: 50%;
  margin-top: -200px;
}
.invest-center .close-img {
  float: right;
  width: 12px;
  margin-top: -20px;
  margin-right: -20px;
}
.invest-string {
  text-align: center;
  line-height: 36px;
  font-size: 18px;
  color: #fff;
}

.invest-btn {
  overflow: hidden;
  margin-top: 30px;
  margin-left: 10px;
}
.invest-btn div {
  width: 160px;
  height: 48px;
  line-height: 50px;
  font-size: 18px;
  text-align: center;
  float: left;
  cursor: pointer;
  color: #d50000;
}
.invest-btn .invest-register {
  background: url("../images/activity/invest_modal_register.png");
  margin-right: 10px;
}
.invest-login {
  background: url("../images/activity/invest_modal_login.png");
}
.invest-close {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: 25px;
  margin-left: -20px;
  cursor: pointer;
  z-index: 999;
}
.invest-close img {
  width: 40px;
  height: 40px;
}

/* 单位认证引导弹窗 */
.business-lead-model {
  display: none;
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 2560px;
  min-width: 1200px;
  height: 100%;
  margin: auto;
  background: rgba(0, 0, 0, 0.6);
}
.business-lead-content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 300px;
  height: 174px;
  margin: auto;
  padding: 20px 24px;
  background-color: #ffffff;
  box-shadow: 0px 2px 26px 0px rgba(0, 0, 0, 0.1);
}
.business-lead-close {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 12px;
  height: 12px;
  cursor: pointer;
}
.business-lead-close img {
  display: block;
  width: 12px;
  height: 12px;
}
.business-lead-title {
  color: #333333;
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  text-align: center;
}
.business-lead-intro {
  color: #666666;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  margin: 12px 0 30px 0;
}
.business-lead-content ul {
  overflow: hidden;
}
.business-lead-content ul li {
  width: 138px;
  height: 54px;
  font-size: 16px;
  font-weight: bold;
  line-height: 54px;
  text-align: center;
  border-radius: 2px;
  cursor: pointer;
}
.business-lead-go {
  float: left;
  color: #ffffff;
  background-color: #d50000;
}
.business-lead-cancel {
  float: right;
  color: #afafaf;
  background-color: #ededed;
}

/* 底部变色 */
.index-footer {
  background: #262727;
}
.footer-substation-title,
.footer-link span {
  color: #999;
}
.footer-top-link {
  display: none;
}
.footer-link a {
  color: #999;
}
.index-footer a:hover {
  color: #ffffff;
}
.pendant_login_phone,
.pendant_login_account,
.pendant_login_register,
.pendant_login_forget,
.existing_account_binding,
.existing_phone_binding,
.register_login_binding {
  background: #262727;
}

#zc__sdk__sys__btn,
#zc__sdk__container {
  visibility: hidden;
}
</style>