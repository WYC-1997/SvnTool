<template>
  <div>
    <a-modal
      :title="title"
      :visible="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
      :footer="null"
      :width="width"
      :bodyStyle="bodyStyle"
      :class="name"
    >
      <slot></slot>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: "Modalslot",
  props: {
    title: {
      type: String,
      default: "Title",
    },
    visible: {
      type: Boolean,
      default: false,
    },
    confirmLoading: {
      type: Boolean,
      default: false,
    },
    width:{
       type:Number,
       default: 520,
    },
    bodyStyle:{},
    name:{
        type: String,
    }
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {
    handleOk() {
        this.$emit('handleOk')
    },
    handleCancel() {
        this.$emit('handleCancel')
    },
  },
};
</script>

<style lang="less" scoped>
</style>