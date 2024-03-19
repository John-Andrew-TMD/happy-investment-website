<template>
  <div class="right-nav">
    <div class="fixed-quick-menu">
      <ul class="fixed-quick-tab">
        <li>
          <el-icon><Link /> </el-icon>
          <div class="tab-content">
            <div class="fixed-quick-header">
              <h3>招商网络招商端</h3>
              <p>扫码认领单位 快速直连企业</p>
            </div>
            <img
              src="https://static.zhaoshang.net/front/images/fixed_invite_qrcode@2x.jpg?2023042501"
              alt="招商网络招商端"
            />
            <div class="fixed-quick-text">
              真实项目每日上新<br />一通电话沟通合作
            </div>
          </div>
        </li>
        <li>
          <el-icon><Memo /></el-icon>
          <div class="tab-content">
            <div class="fixed-quick-header">
              <h3>招商要参公众号</h3>
              <p>抓住招商引资新方向</p>
            </div>
            <img
              src="https://static.zhaoshang.net/front/images/fixed_invite_offical@2x.jpg?2023042501"
              alt="招商要参公众号"
            />
            <div class="fixed-quick-text">前沿招商资讯<br />项目对接交流</div>
          </div>
        </li>
        <li>
          <el-icon><User /></el-icon>
          <div class="tab-content">
            <div class="fixed-quick-header">
              <h3>招商圈子</h3>
              <p>招商人的在线交流互动社区</p>
            </div>
            <img
              src="https://static.zhaoshang.net/front/images/fixed_invite_circle@2x.jpg?2023042501"
              alt="招商圈子"
            />
            <div class="fixed-quick-text">
              扫码申请加入<br /><span>“招商项目对接交流群”</span>
            </div>
          </div>
        </li>
        <li class="feedback" @click="dialogVisible = true">
          <el-icon><Box /></el-icon>
          <div class="tab-content"></div>
        </li>
      </ul>
      <ul class="fixed-quick-content">
        <li style="display: none">
          <div class="fixed-quick-header">
            <h3>招商网络招商端</h3>
            <p>扫码认领单位 快速直连企业</p>
          </div>
          <img
            src="https://static.zhaoshang.net/front/images/fixed_invite_qrcode@2x.jpg?2023042501"
            alt="招商网络招商端"
          />
          <div class="fixed-quick-text">
            真实项目每日上新<br />一通电话沟通合作
          </div>
        </li>
        <li style="display: none">
          <div class="fixed-quick-header">
            <h3>招商要参公众号</h3>
            <p>抓住招商引资新方向</p>
          </div>
          <img
            src="https://static.zhaoshang.net/front/images/fixed_invite_offical@2x.jpg?2023042501"
            alt="招商要参公众号"
          />
          <div class="fixed-quick-text">前沿招商资讯<br />项目对接交流</div>
        </li>
        <li style="display: none">
          <div class="fixed-quick-header">
            <h3>招商圈子</h3>
            <p>招商人的在线交流互动社区</p>
          </div>
          <img
            src="https://static.zhaoshang.net/front/images/fixed_invite_circle@2x.jpg?2023042501"
            alt="招商圈子"
          />
          <div class="fixed-quick-text">
            扫码申请加入<br /><span>“招商项目对接交流群”</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <DynamicDialogForm
    :dialogVisible="dialogVisible"
    :title="title"
    :controls="controls"
    :handleSubmit="handleSubmit"
    :rules="rules"
    @update:dialogVisible="updateDialogVisible"
  />
  <el-backtop
    target=".layout"
    :right="10"
    :bottom="90"
    :visibility-height="100"
  >
  </el-backtop>
</template>

<script setup>
import { Link, Memo, User, Box } from "@element-plus/icons-vue";
const dialogVisible = ref(false);
const title = "自定义表单";
const handleSubmit = (formData) => {
  console.log("提交表单", formData);
};
const updateDialogVisible = (value) => {
  dialogVisible.value = value;
};
const handleUploadSuccess = (response, file, fileList) => {
  console.log("上传成功", response);
};

const handleUploadError = (err, file, fileList) => {
  console.error("上传失败", err);
};
const controls = {
  input: { type: "input" },
  textarea: { type: "textarea" },
  select: {
    type: "select",
    options: [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
    ],
  },
  checkbox: {
    type: "checkbox",
    options: [
      { value: "1", label: "Checkbox 1" },
      { value: "2", label: "Checkbox 2" },
    ],
  },
  date: { type: "date" },
  daterange: { type: "daterange" },
  file: {
    type: "file",
    action: "your-upload-url",
    onSuccess: handleUploadSuccess,
    onError: handleUploadError,
  },
  custom: { type: "CustomComponent" }, // 自定义组件
};
const rules = {
  input: [{ required: true, message: "请输入内容", trigger: "blur" }],
  select: [{ required: true, message: "请选择选项", trigger: "change" }],
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
