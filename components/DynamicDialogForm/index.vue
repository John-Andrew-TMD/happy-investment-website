<template>
  <el-dialog
    :model-value="dialogVisible"
    :title="title"
    @update:modelValue="updateDialogVisible"
  >
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <template v-for="(config, label) in controls" :key="label">
        <el-form-item :label="label">
          <template v-if="config.type === 'input'">
            <el-input v-model="form[label]" />
          </template>
          <template v-else-if="config.type === 'textarea'">
            <el-input type="textarea" v-model="form[label]" />
          </template>
          <template v-else-if="config.type === 'select'">
            <el-select v-model="form[label]">
              <el-option
                v-for="item in config.options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </template>
          <template v-else-if="config.type === 'checkbox'">
            <el-checkbox-group v-model="form[label]">
              <el-checkbox
                v-for="(option, index) in config.options"
                :key="index"
                :label="option.value"
                >{{ option.label }}</el-checkbox
              >
            </el-checkbox-group>
          </template>
          <template v-else-if="config.type === 'date'">
            <el-date-picker
              v-model="form[label]"
              type="date"
              placeholder="选择日期"
            />
          </template>
          <template v-else-if="config.type === 'daterange'">
            <el-date-picker
              v-model="form[label]"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
          </template>
          <template v-else-if="config.type === 'file'">
            <el-upload
              v-model="form[label]"
              :action="config.action"
              :before-upload="config.beforeUpload"
              :on-success="config.onSuccess"
              :on-error="config.onError"
              :file-list="form[label]"
              list-type="text"
            >
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </template>
          <template v-else>
            <component :is="config.type" v-model="form[label]" />
          </template>
          <!-- 可根据需要添加其他类型的控件 -->
        </el-form-item>
      </template>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script setup>
import { defineProps, ref, defineEmits } from "vue";
const emit = defineEmits(["update:dialogVisible"]);
const updateDialogVisible = (value) => {
  // Emit an 'update:visible' event to update the prop value in the parent
  // This will ensure two-way binding behavior similar to v-model
  emit("update:dialogVisible", value);
};
// Props
const props = defineProps({
  dialogVisible: Boolean,
  title: String,
  controls: Object,
  handleSubmit: Function, // 提交表单的函数回调
  rules: Object, // 表单验证规则
});

// Data
const form = ref({});

// Methods
const handleSubmit = () => {
  // 首先进行表单验证
  $refs.form.validate((valid) => {
    if (valid) {
      // 表单验证通过，调用父组件传递的提交函数
      props.handleSubmit(form.value);
    } else {
      // 表单验证失败，给出提示
      console.log("表单验证失败，请检查输入");
    }
  });
};
</script>
