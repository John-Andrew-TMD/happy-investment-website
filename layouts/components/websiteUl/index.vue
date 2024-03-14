<template>
  <div class="website-ul" :style="`display: ${!isShow ? 'none' : 'block'}`">
    <div class="min">
      <div class="website-li">
        <p>全国</p>
        <div class="website-ab">
          <a
            class="current-site"
            href="https://www.zhaoshang.net"
            target="_blank"
            title="全国"
          >
            <span>全国</span>
          </a>
          <a href="https://jjj.zhaoshang.net" target="_blank" title="京津冀">
            <span>京津冀</span>
          </a>
        </div>
      </div>
      <div class="website-li">
        <p>直辖市</p>
        <div class="website-ab">
          <a href="https://bj.zhaoshang.net" target="_blank" title="北京">
            <span>北京</span>
          </a>
          <a href="https://sh.zhaoshang.net" target="_blank" title="上海">
            <span>上海</span>
          </a>
          <a href="https://tj.zhaoshang.net" target="_blank" title="天津">
            <span>天津</span>
          </a>
          <a href="https://cq.zhaoshang.net" target="_blank" title="重庆">
            <span>重庆</span>
          </a>
        </div>
      </div>
      <div class="website-li">
        <p>华东</p>
        <div class="website-ab">
          <a href="https://sd.zhaoshang.net" target="_blank" title="山东">
            <span>山东</span>
          </a>
          <a href="https://js.zhaoshang.net" target="_blank" title="江苏">
            <span>江苏</span>
            <img
              src="https://static.zhaoshang.net/front/images/concise_index/hot_tag@2x.png"
              alt="HOT"
            />
          </a>
          <a href="https://zj.zhaoshang.net" target="_blank" title="浙江">
            <span>浙江</span>
          </a>
          <a href="https://ah.zhaoshang.net" target="_blank" title="安徽">
            <span>安徽</span>
          </a>
        </div>
      </div>
      <div class="website-li">
        <p>华南</p>
        <div class="website-ab">
          <a href="https://gd.zhaoshang.net" target="_blank" title="广东">
            <span>广东</span>
          </a>
          <a href="https://gx.zhaoshang.net" target="_blank" title="广西">
            <span>广西</span>
          </a>
          <a href="https://fj.zhaoshang.net" target="_blank" title="福建">
            <span>福建</span>
          </a>
          <a href="https://hainan.zhaoshang.net" target="_blank" title="海南">
            <span>海南</span>
          </a>
        </div>
      </div>
      <div class="website-li">
        <p>华中</p>
        <div class="website-ab">
          <a href="https://hubei.zhaoshang.net" target="_blank" title="湖北">
            <span>湖北</span>
          </a>
          <a href="https://hunan.zhaoshang.net" target="_blank" title="湖南">
            <span>湖南</span>
          </a>
          <a href="https://jx.zhaoshang.net" target="_blank" title="江西">
            <span>江西</span>
          </a>
          <a href="https://henan.zhaoshang.net" target="_blank" title="河南">
            <span>河南</span>
          </a>
        </div>
      </div>
      <div class="website-li">
        <p>华北</p>
        <div class="website-ab">
          <a href="https://hebei.zhaoshang.net" target="_blank" title="河北">
            <span>河北</span>
          </a>
          <a href="https://sx.zhaoshang.net" target="_blank" title="山西">
            <span>山西</span>
          </a>
          <a href="https://nm.zhaoshang.net" target="_blank" title="内蒙古">
            <span>内蒙古</span>
          </a>
        </div>
      </div>
      <div class="website-li">
        <p>东北</p>
        <div class="website-ab">
          <a href="https://ln.zhaoshang.net" target="_blank" title="辽宁">
            <span>辽宁</span>
          </a>
          <a href="https://jl.zhaoshang.net" target="_blank" title="吉林">
            <span>吉林</span>
          </a>
          <a href="https://hlj.zhaoshang.net" target="_blank" title="黑龙江">
            <span>黑龙江</span>
          </a>
        </div>
      </div>
      <div class="website-li">
        <p>西南</p>
        <div class="website-ab">
          <a href="https://sc.zhaoshang.net" target="_blank" title="四川">
            <span>四川</span>
          </a>
          <a href="https://yn.zhaoshang.net" target="_blank" title="云南">
            <span>云南</span>
          </a>
          <a href="https://gz.zhaoshang.net" target="_blank" title="贵州">
            <span>贵州</span>
          </a>
          <a href="https://xz.zhaoshang.net" target="_blank" title="西藏">
            <span>西藏</span>
          </a>
        </div>
      </div>
      <div class="website-li">
        <p>西北</p>
        <div class="website-ab">
          <a href="https://shanxi.zhaoshang.net" target="_blank" title="陕西">
            <span>陕西</span>
          </a>
          <a href="https://xj.zhaoshang.net" target="_blank" title="新疆">
            <span>新疆</span>
          </a>
          <a href="https://qh.zhaoshang.net" target="_blank" title="青海">
            <span>青海</span>
          </a>
          <a href="https://nx.zhaoshang.net" target="_blank" title="宁夏">
            <span>宁夏</span>
          </a>
          <a href="https://gs.zhaoshang.net" target="_blank" title="甘肃">
            <span>甘肃</span>
          </a>
        </div>
      </div>
      <div class="website-li">
        <p>港澳台</p>
        <div class="website-ab">
          <a href="https://tw.zhaoshang.net" target="_blank" title="台湾">
            <span>台湾</span>
          </a>
          <a href="https://xg.zhaoshang.net" target="_blank" title="香港">
            <span>香港</span>
          </a>
          <a href="https://aomen.zhaoshang.net" target="_blank" title="澳门">
            <span>澳门</span>
          </a>
        </div>
      </div>
      <div class="website-li">
        <p>一带一路</p>
        <div class="website-ab">
          <a href="https://yuenan.zhaoshang.net" target="_blank" title="越南">
            <span>越南</span>
          </a>
          <a href="https://laowo.zhaoshang.net" target="_blank" title="老挝">
            <span>老挝</span>
          </a>
          <a href="https://taiguo.zhaoshang.net" target="_blank" title="泰国">
            <span>泰国</span>
          </a>
          <a href="https://mlxy.zhaoshang.net" target="_blank" title="马来西亚">
            <span>马来西亚</span>
          </a>
          <a href="https://miandian.zhaoshang.net" target="_blank" title="缅甸">
            <span>缅甸</span>
          </a>
          <a href="https://jpz.zhaoshang.net" target="_blank" title="柬埔寨">
            <span>柬埔寨</span>
          </a>
        </div>
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
@import "./index.scss";
</style>