<template>
  <div class="mdui-center mdui-col-lg-10">
    <div class="mdui-typo">
      <h1>
        Data URL
        <small>图片 ⇔ Base64</small>
      </h1>
    </div>
    <div class="mdui-tab" mdui-tab>
      <a href="#i2d" class="mdui-ripple">图片 => URL</a>
      <a href="#d2i" class="mdui-ripple">URL => 图片</a>
    </div>
    <div id="i2d" class="mdui-p-a-2">
      <div class="row-btn mdui-m-t-2">
        <label for="img-select" class="mdui-btn mdui-btn-raised mdui-ripple">选择图片</label>
        <input
          id="img-select"
          ref="imageInput"
          type="file"
          accept="image/*"
          @change="uploadImg"
          class="mdui-hidden"
        />
      </div>
      <img v-show="imgSelected" :src="imgUrl" style="max-height:200px" class="mdui-m-t-2" />
      <div class="row-btn mdui-m-t-2">
        <button
          class="mdui-btn mdui-btn-raised mdui-ripple"
          @click="imgToBase64"
          :disabled="!imgSelected"
        >
          <i class="mdui-icon mdui-icon-right material-icons">expand_more</i>
          转换
        </button>
      </div>
      <div class="mdui-textfield">
        <label class="mdui-textfield-label">data:url</label>
        <textarea class="mdui-textfield-input" rows="12" placeholder :value="imgBase64"></textarea>
      </div>
    </div>
    <div id="d2i" class="mdui-p-a-2">
      <div class="mdui-textfield">
        <label class="mdui-textfield-label">Data URL</label>
        <textarea
          class="mdui-textfield-input"
          rows="12"
          placeholder="data:image/.."
          v-model="d2iBase64Url"
        ></textarea>
      </div>
      <div class="row-btn mdui-m-t-2">
        <button class="mdui-btn mdui-btn-raised mdui-ripple" @click="base64ToImg">
          <i class="mdui-icon mdui-icon-right material-icons">expand_more</i>
          转换
        </button>
      </div>
      <img v-show="d2iImgSelected" :src="d2iImgUrl" style="max-height:400px" class="mdui-m-t-2"/>
    </div>
    <div></div>
  </div>
</template>

<script>
import mdui from 'mdui';

export default {
  name: 'DataUrl',
  data() {
    return {
      imgSelected: false,
      imgUrl: '',
      imgBase64: '',
      imgFile: null,
      d2iImgSelected: false,
      d2iImgUrl: '',
      d2iBase64Url: '',
    };
  },
  mounted() {
    mdui.mutation();
  },
  methods: {
    uploadImg(e) {
      const file = e.target.files[0];
      this.imgSelected = true;
      this.imgUrl = window.URL.createObjectURL(file);
      this.imgFile = file;
    },
    imgToBase64() {
      const reader = new FileReader();
      reader.readAsDataURL(this.imgFile);
      reader.onload = () => {
        console.log(reader.result);
        this.imgBase64 = reader.result;
      };
    },
    base64ToImg() {
      this.d2iImgUrl = this.d2iBase64Url;
      this.d2iImgSelected = true;
    },
  },
};
</script>

<style>
</style>
