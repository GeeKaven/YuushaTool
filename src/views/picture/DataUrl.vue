<template>
  <section class="container is-fluid">
    <div>
      <h1>
        Data URL
        <small>图片 ⇔ Base64</small>
      </h1>
    </div>
    <b-tabs v-model="activeTab">
      <b-tab-item label="图片 => UR">
        <b-field class="file">
          <b-upload ref="imageInput" v-model="imgFile" @input="uploadImg">
            <a class="button is-primary">
              <b-icon icon="upload"></b-icon>
              <span>选择图片</span>
            </a>
          </b-upload>
          <span class="file-name" v-if="imgFile">{{ imgFile.name }}</span>
        </b-field>
        <img v-show="imgSelected" :src="imgUrl" style="max-height:200px" />
        <div>
          <b-button icon-left="arrow-down" @click="imgToBase64" :disabled="!imgSelected">转换</b-button>
        </div>
        <textarea
          class="textarea has-fixed-size"
          rows="12"
          placeholder="data:url"
          :value="imgBase64"
        />
      </b-tab-item>

      <b-tab-item label="URL => 图片">
        <textarea
          class="textarea has-fixed-size"
          rows="12"
          placeholder="data:image/.."
          v-model="d2iBase64Url"
        />
        <div>
          <b-button icon-left="arrow-down" @click="base64ToImg" :disabled="!imgSelected">转换</b-button>
        </div>
        <img v-show="d2iImgSelected" :src="d2iImgUrl" style="max-height:400px" />
      </b-tab-item>
    </b-tabs>
  </section>
</template>

<script>
export default {
  name: 'DataUrl',
  data() {
    return {
      activeTab: 0,
      imgSelected: false,
      imgUrl: '',
      imgBase64: '',
      imgFile: null,
      d2iImgSelected: false,
      d2iImgUrl: '',
      d2iBase64Url: '',
    };
  },
  methods: {
    uploadImg() {
      this.imgSelected = true;
      this.imgUrl = window.URL.createObjectURL(this.imgFile);
    },
    imgToBase64() {
      const reader = new FileReader();
      reader.readAsDataURL(this.imgFile);
      reader.onload = () => {
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
