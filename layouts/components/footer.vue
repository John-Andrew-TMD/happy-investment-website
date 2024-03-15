<template>
  <footer>
    <div class="box">
      <div class="classify" v-for="(item, index) in classifyList" :key="index">
        <div v-if="item.visible">
          <div class="title">{{ item.title }}</div>
          <ul>
            <li v-for="(_item, _index) in item.list" :key="_index">
              <span class="cur-click" :href="_item.link">{{
                _item.label
              }}</span>
              <!-- <span
                  v-else-if="item.jumpTo == 'service'"
                  class="cur-click"
                  @click="jumpToService(_item)"
                  >{{ _item }}</span
                >
                <span v-else>{{ _item }}</span> -->
            </li>
          </ul>
        </div>
      </div>
      <div class="common-footer">
        <div class="footer-link">
          <template v-for="(_item, _index) in linkList" :key="_index">
            <span v-if="_index !== 0">•</span>
            <a :href="_item.link" target="_blank">{{ _item.label }}</a>
          </template>
        </div>
        <div class="footer-police">
          招商咨询热线：<span class="zhaoshang_topic">400-168-6016</span>
        </div>
        <div class="footer-police">
          天津谷川科技有限公司（招商网络）版权所有
        </div>
        <div class="footer-police">
          举报邮箱：jubao@zhaoshang.net
          <img
            class="investment-risk"
            src="https://static.zhaoshang.net/front/images/investment_risk@2x.png"
            alt=""
          />
        </div>
        <div class="footer-police">
          <a href="http://beian.miit.gov.cn" target="_blank" class="icpLink"
            >津ICP备12005532号-2</a
          >
          <a href="https://tsm.miit.gov.cn/dxxzsp/" target="_blank"
            >增值电信业务经营许可证津B2-20200211</a
          >
          <a
            target="_blank"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=12011102000338"
          >
            <img
              :style="{ display: 'inline-block' }"
              alt="谷川联行"
              src="https://static.zhaoshang.net/front/images/index_footer_police@2x.png"
            />
            津公网安备 12011102000338号</a
          >
          <a target="_blank" href="http://www.12377.cn/"
            >中央网信办互联网违法和不良信息举报中心</a
          >
        </div>
        <div class="footer-police-brand">
          © 2013 Tanikawa . All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const classifyList = ref([
  {
    title: "全国分站",
    list: [
      { label: "北京", link: "http://example.com/beijing" },
      { label: "天津", link: "http://example.com/tianjin" },
      { label: "河北", link: "http://example.com/hebei" },
      // 其他省份...
      { label: "京津冀", link: "http://example.com/jingjinji" },
    ],
    visible: true,
  },
  {
    title: "海外分站",
    list: [
      { label: "越南", link: "http://example.com/vietnam" },
      { label: "老挝", link: "http://example.com/laos" },
      { label: "泰国", link: "http://example.com/thailand" },
      // 其他国家...
      { label: "缅甸", link: "http://example.com/myanmar" },
    ],
    visible: true,
  },
  {
    title: "厂房出租",
    list: [
      { label: "北京厂房出租", link: "http://example.com/beijing-rent" },
      { label: "天津厂房出租", link: "http://example.com/tianjin-rent" },
      { label: "上海厂房出租", link: "http://example.com/shanghai-rent" },
      // 其他城市...
      { label: "苏州厂房出租", link: "http://example.com/suzhou-rent" },
    ],
    visible: true,
  },
  {
    title: "友情链接",
    list: [
      { label: "谷川联行", link: "http://example.com/guchuan" },
      { label: "选哪儿", link: "http://example.com/xuannaer" },
      { label: "聪招网", link: "http://example.com/congzhao" },
      // 其他链接...
      { label: "满商公司网", link: "http://example.com/manshang" },
    ],
    visible: true,
  },
]);
const linkList = ref([
  { label: "关于我们", link: "http://example.com/beijing" },
  { label: "方案定制", link: "http://example.com/tianjin" },
  { label: "品牌合作", link: "http://example.com/hebei" },
  { label: "园区", link: "http://example.com/jingjinji" },
]);
</script>
<style lang="scss" scoped>
footer {
  width: 100%;
  background: rgb(38, 39, 39);
  padding-bottom: 30px;
  margin-top: 47px;

  .box {
    max-width: 1200px;
    padding-top: 10px;
    margin: 0 auto;

    .classify {
      color: #ffffff;

      .title {
        line-height: 30px;
        font-size: 14px;
        font-family: SourceHanSansCN, SourceHanSansCN-Medium;
        font-weight: 500;
        text-align: left;
        color: #999;
      }

      ul {
        list-style: none;
        padding: 0;

        li + li {
          margin-left: 10px;
        }

        li {
          display: inline-block;
          font-family: SourceHanSansCN, SourceHanSansCN-Normal;
          font-weight: normal;
          text-align: left;
          color: #ffffff;
          zoom: 1;
          height: 24px;
          line-height: 24px;
          word-break: break-all;
          font-size: 14px;
          color: #666;
          .cur-click {
            cursor: pointer;
          }
        }
        li:hover {
          color: #ffffff;
        }
      }

      img {
        width: 128px;
        height: 128px;
      }
    }
  }
  .common-footer {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .footer-link {
    text-align: center;
    overflow: hidden;
    margin-top: 12px;
    line-height: 30px;
    font-size: 14px;
    color: #333;
    height: 30px;
    margin-bottom: 5px;
    a {
      color: #999;
    }
    a:hover {
      color: #ffffff;
    }
  }
  .footer-top-link {
    height: 1px;
    background: #ededed;
    position: relative;
    top: 10px;
    margin-bottom: 9px;
    margin-top: 4px;
  }

  .footer-link span {
    font-size: 14px;
    color: #cecece;
    vertical-align: middle;
    padding: 0 7px;
    position: relative;
    top: -2px;
    left: -1px;
  }
  .footer-police {
    text-align: center;
    overflow: hidden;
    line-height: 24px;
    height: 24px;
    font-size: 12px;
    color: #666;
  }
  .footer-police a {
    color: #666;
  }
  .footer-police a + a {
    margin-left: 6px;
  }
  .footer-police img {
    width: 13px;
    height: 14px;
    vertical-align: middle;
    /* margin-left: 12px; */
    margin-right: 2px;
    margin-top: -2px;
  }
  .footer-police .investment-risk {
    width: 133px;
    height: 14px;
  }
  .footer-police .park-tips {
    width: 600px;
    height: 20px;
    margin: 0;
    margin-top: -2px;
  }
  .footer-police-brand {
    text-align: center;
    overflow: hidden;
    line-height: 20px;
    height: 20px;
    font-size: 12px;
    color: #999;
  }
  .footer-pics {
    overflow: hidden;
    text-align: center;
    margin-top: 17px;
    font-size: 0;
  }
  .footer-pics img {
    width: 120px;
    height: 50px;
    margin-right: 7px;
  }
}
</style>
