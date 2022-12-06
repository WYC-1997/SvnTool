<template>
  <div class="sign--box">
    <a-upload
      v-decorator="['sign']"
      list-type="picture-card"
      :customRequest="onCustomRequest"
      :file-list="getFileList()"
      @preview="handlePreview"
      @change="remove"
      :before-upload="beforeUpload"
    >
      <a-button> <a-icon type="upload" />点击上传</a-button>
      <div class="upload--word--box">
        <span class="upload--word">支持格式:jpg/png</span>
        <span class="upload--word">支持大小:小于300kb</span>
      </div>
    </a-upload>
    <a-modal
      :visible="previewVisible"
      :footer="null"
      @cancel="previewVisible = false"
    >
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>

<script>
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
export default {
  name: "Myupload",
  props: {
    sign: {
      type: String,
    },
  },
  data() {
    return {
      previewVisible: false,
      previewImage: "",
    };
  },

  mounted() {},

  methods: {
    beforeUpload(file) {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        this.$message.error("上传格式错误!");
      }
      const isLt2M = file.size / 1024 < 300;
      if (!isLt2M) {
        this.$message.error("图片大小超过最大限制!");
      }
      return isJpgOrPng && isLt2M;
    },

    //自定义上传
    async onCustomRequest(info) {
      console.log("info", info);
      const data = new FormData();
      data.append(info.filename, info.file);
      const request = new Request("/api/upload", {
        method: "POST",
        body: data,
      });
      console.log("data", data);
      const resp = await fetch(request).then((res) => res.json());
      if (resp.status === "ok") {
        this.$emit("on-change", resp.data);
        this.$message.success("上传成功!");
      } else {
        this.$message.error(`上传失败,${resp.msg}`);
      }
      console.log(resp.data);
    },

    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },

    getFileList() {
      let result = null;
      console.log("this.sign", this.sign);
      if (this.sign) {
        result = [
          {
            uid: Math.random().toString(36).slice(-6),
            name: Math.random().toString(36).slice(-6),
            url: this.sign,
          },
        ];
      } else {
        result = [];
      }
      console.log("FileList", result);
      return result;
    },

    remove(data) {
      console.log(data);
      if(data.fileList.length == 0){
          this.$emit("on-change", "");
      }
      
    },
  },
};
</script>

<style scoped>
.upload--word--box {
  display: flex;
  flex-direction: column;
}
.upload--word {
  font-size: 12px;
  text-align: left;
}
</style>