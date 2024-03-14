<template>
  <div
    :class="`navigation-div-all js-navigation-div ${
      isShow ? 'active-navigation-div' : ''
    }`"
  >
    <ul>
      <li class="navigation-li">
        <div class="nav-park">
          <div class="navigation-li-title">
            <a href="https://www.zhaoshang.net/yuanqu/list/" title="园区"
              >园区</a
            >
          </div>
          <div class="navigation-li-div">
            <a href="https://www.zhaoshang.net/yuanqu/list/" title="园区大全"
              >园区大全</a
            >
            <a
              href="https://www.zhaoshang.net/news/policy/"
              class="marting-right-flot"
              title="产业扶持"
              >产业扶持</a
            >
          </div>
          <div class="navigation-li-div">
            <a
              href="https://www.zhaoshang.net/quxian/industry/"
              title="产业集群"
              >产业集群</a
            >
            <a
              href="https://www.zhaoshang.net/yuanqu-directory/list/"
              class="marting-right-flot"
              title="企业名录"
              >企业名录</a
            >
          </div>
        </div>
      </li>
      <li class="navigation-li">
        <div class="nav-quxian">
          <div class="navigation-li-title">
            <a href="https://www.zhaoshang.net/quxian/" title="市县">市县</a>
          </div>
          <div class="navigation-li-div">
            <a
              href="https://www.zhaoshang.net/quxian/zhaoshang/"
              title="招商引资"
              >招商引资</a
            >
            <a
              href="https://www.zhaoshang.net/news/policy/"
              class="marting-right-flot"
              title="产业扶持"
              >产业扶持</a
            >
          </div>
          <div class="navigation-li-div">
            <a
              href="https://www.zhaoshang.net/quxian/land-data/"
              title="土地数据"
              >土地数据</a
            >
            <a
              href="https://www.zhaoshang.net/quxian/recommend-park"
              class="marting-right-flot"
              title="工业园区"
              >工业园区</a
            >
          </div>
          <div class="navigation-li-div">
            <a href="https://www.zhaoshang.net/quxian/industry" title="产业集群"
              >产业集群</a
            >
            <a
              href="https://www.zhaoshang.net/quxian/xiangmu/"
              class="marting-right-flot"
              title="项目动态"
              >项目动态</a
            >
          </div>
          <div class="navigation-li-div">
            <a href="https://www.zhaoshang.net/quxian/qiye/" title="企业名录"
              >企业名录</a
            >
            <a
              href="https://www.zhaoshang.net/quxian/#district-resources"
              class="marting-right-flot"
              title="载体资源"
              >载体资源</a
            >
          </div>
        </div>
      </li>
      <li class="navigation-li">
        <div class="nav-news">
          <div class="navigation-li-title">
            <a href="https://www.zhaoshang.net/news/" title="资讯">资讯</a>
          </div>
          <div class="navigation-li-div">
            <a
              href="https://www.zhaoshang.net/news/policy/"
              class="marting-right-flot marting-right-no"
              title="产业扶持"
              >产业扶持</a
            >
            <a href="https://www.zhaoshang.net/news/dujia/" title="观点"
              >观点</a
            >
          </div>
          <div class="navigation-li-div">
            <a href="https://www.zhaoshang.net/project/" title="项目动态"
              >项目动态</a
            >
            <a
              href="https://www.zhaoshang.net/news/government-report/"
              class="marting-right-flot marting-right-no"
              title="政府报告"
              >政府报告</a
            >
          </div>
          <div class="navigation-li-div">
            <a href="https://www.zhaoshang.net/email/list/" title="周刊"
              >周刊</a
            >
            <a
              href="https://www.zhaoshang.net/quxian/industry/"
              class="marting-right-flot"
              title="产业"
              >产业</a
            >
          </div>
          <div class="navigation-li-div">
            <a href="https://www.zhaoshang.net/quanjing/" title="全景">全景</a>
          </div>
        </div>
      </li>
      <li class="navigation-li">
        <div class="nav-land">
          <div class="navigation-li-title">
            <a href="https://www.zhaoshang.net/tudi/" title="土地">土地</a>
          </div>
          <div class="navigation-li-div">
            <a href="https://www.zhaoshang.net/tudi/1" title="土地出让"
              >土地出让</a
            >
          </div>
          <div class="navigation-li-div">
            <a href="https://www.zhaoshang.net/tudi/lt3/1" title="工业用地"
              >工业用地</a
            >
            <a
              href="https://www.zhaoshang.net/tudi/lt1/1"
              class="marting-right-flot"
              title="住宅用地"
              >住宅用地</a
            >
          </div>
          <div class="navigation-li-div">
            <a href="https://www.zhaoshang.net/tudi/lt2/1" title="商办用地"
              >商办用地</a
            >
            <a
              href="https://www.zhaoshang.net/tudi/lt5/1"
              class="marting-right-flot"
              title="其它用地"
              >其它用地</a
            >
          </div>
          <div class="navigation-li-div">
            <a href="https://www.xuanzhi.com/zhaopaigua/" title="招拍挂"
              >招拍挂</a
            >
            <a
              href="https://www.zhaoshang.net/news/policy/"
              class="marting-right-flot"
              title="土地政策"
              >土地政策</a
            >
          </div>
          <div class="navigation-li-div">
            <a href="https://www.zhaoshang.net/tudi/chengjiao/" title="土地成交"
              >土地成交</a
            >
            <a
              href="https://www.zhaoshang.net/news/land-report/"
              class="marting-right-flot"
              title="土地报告"
              >土地报告</a
            >
          </div>
        </div>
        <div class="nav-fact-dep marting-top">
          <div class="navigation-li-title">
            <a href="https://www.zhaoshang.net/changfang/" title="厂房/仓库"
              >厂房/仓库</a
            >
          </div>
          <div class="navigation-li-div">
            <a href="https://www.zhaoshang.net/changfang/chuzu" title="厂房出租"
              >厂房出租</a
            >
            <a
              href="https://www.zhaoshang.net/changfang/chushou"
              class="marting-right-flot"
              title="厂房出售"
              >厂房出售</a
            >
          </div>
          <div class="navigation-li-div">
            <a href="https://www.zhaoshang.net/cangku/" title="仓库出租"
              >仓库出租</a
            >
            <a
              href="https://www.zhaoshang.net/cangku/chushou"
              class="marting-right-flot"
              title="仓库出售"
              >仓库出售</a
            >
          </div>
        </div>
      </li>
      <li class="navigation-li navigation-li-big">
        <div class="nav-office">
          <div class="navigation-li-title">
            <a href="https://www.zhaoshang.net/xiezilou/" title="写字楼"
              >写字楼</a
            >
          </div>
          <div class="navigation-li-div">
            <a
              href="https://www.zhaoshang.net/xiezilou/chuzu/"
              title="写字楼出租"
              >写字楼出租</a
            >
            <a
              href="https://www.zhaoshang.net/xiezilou/chushou/"
              class="marting-right-flot"
              title="写字楼出售"
              >写字楼出售</a
            >
          </div>
          <div class="navigation-li-div">
            <a
              href="https://www.zhaoshang.net/xiezilou/loupan/lo/"
              title="写字楼楼盘"
              >写字楼楼盘</a
            >
          </div>
        </div>
        <div class="nav-item marting-top">
          <div class="navigation-li-title">
            <a href="https://www.zhaoshang.net/item/list/" title="项目">项目</a>
          </div>
          <div class="navigation-li-div">
            <a href="https://www.zhaoshang.net/item/list/" title="招商项目"
              >招商项目</a
            >
            <a
              href="https://www.zhaoshang.net/project/"
              class="marting-right-flot"
              title="项目动态"
              >项目动态</a
            >
          </div>
        </div>
      </li>
      <li class="navigation-li navigation-li-big last-navigation-li">
        <div class="code-qr">
          <div class="code-qr-cloud">
            <img
              src="https://static.zhaoshang.net/front/images/wx_invite_code@2x.jpg"
              alt=""
            />
            <div class="cloud-title">快乐招商招商端</div>
            <div class="cloud-content">数十万精准项目匹配</div>
          </div>
          <div class="adviser-div">
            <img
              src="https://static.zhaoshang.net/front/images/company_port_qrcode@2x.jpg"
              alt=""
            />
            <div class="cloud-title">快乐招商选哪儿</div>
            <div class="cloud-content">全国优质园区资源任您选！</div>
          </div>
        </div>
      </li>
    </ul>
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
.navigation-div-all {
  position: absolute;
  top: 40px;
  width: 1200px;
  overflow: hidden;
  padding: 20px 0;
  left: 50%;
  margin-left: -600px;
  z-index: 1000;
  background-color: #ffffff;
  border: 1px solid #ededed;
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
  display: none;
}
.navigation-div-all.active-navigation-div {
  display: block;
}
.navigation-li {
  float: left;
  width: 132px;
  padding: 0 28px;
  box-sizing: content-box;
  height: 330px;
  border-right: 1px solid #ededed;
}
.navigation-li-title {
  font-size: 18px;
  font-weight: bold;
  color: #d50000;
  margin-top: 10px;
  margin-bottom: 20px;
  line-height: 18px;
  min-height: 18px;
}
body .navigation-li-title a {
  font-size: 18px;
  font-weight: bold;
  color: #d50000;
  line-height: 18px;
}
.navigation-li a {
  color: #666666;
  font-size: 14px;
  float: left;
  line-height: 14px;
}
.navigation-li .marting-right-no {
  margin-right: 0px;
}
.navigation-li a:hover {
  color: #d50000;
}
.marting-top {
  margin-top: 10px;
}
.nav-park,
.nav-policy,
.nav-land,
.nav-fact-dep,
.nav-office,
.nav-land,
.nav-item,
.nav-quxian,
.nav-news,
.nav-business {
  overflow: hidden;
}
body .navigation-li-big {
  width: 162px;
}
.navigation-li-div {
  margin-bottom: 18px;
  overflow: hidden;
}
.navigation-li .marting-right-flot {
  float: right;
}
.nav-news .marting-right-flot {
  margin-right: 29px;
}
.nav-news .marting-right-flot.marting-right-no {
  margin-right: 0px;
}
.nav-item.marting-top {
  margin-top: 16px;
}
.code-qr {
}
.last-navigation-li.navigation-li {
  border: none;
  width: 166px;
}
.code-qr-cloud img {
  width: 100px;
  height: 100px;
  display: block;
  margin: 0 auto;
}
.cloud-title {
  font-size: 14px;
  font-weight: bold;
  color: #666666;
  margin-top: 9px;
  text-align: center;
  line-height: 14px;
}
.cloud-content {
  margin-top: 8px;
  font-size: 14px;
  color: #666666;
  text-align: center;
  line-height: 1;
  white-space: nowrap;
}
.adviser-div {
  overflow: hidden;
  margin-top: 30px;
}
.adviser-div img {
  width: 100px;
  height: 100px;
  display: block;
  margin: 0 auto;
}
.adviser-div-content {
  color: #666666;
  font-size: 14px;
  line-height: 22px;
  margin-top: 4px;
  text-align: center;
}
.index-navigation-img {
  width: 7px;
  height: 5px;
  position: absolute;
  top: 18px;
  left: 62px;
  float: right;
}
.transform-img {
  transform: rotate(180deg);
}
.index-person .index-user-img {
  width: 7px;
  height: 5px;
  position: absolute;
  top: 18px;
  right: 5px;
}
.span-color a {
  color: #999999;
}
.over-hide {
  overflow: hidden;
}
</style>