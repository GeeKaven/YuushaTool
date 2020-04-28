<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <h1>
          Data URL
          <small>图片 ⇔ Base64</small>
        </h1>
      </v-col>
      <v-col cols="12">
        <v-tabs v-model="tab">
          <v-tab>图片 => URL</v-tab>
          <v-tab>URL => 图片</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-file-input
              ref="imageInput"
              type="file"
              accept="image/*"
              label="选择图片"
              @change="uploadImg"
            ></v-file-input>
            <v-img
              v-show="imgSelected"
              :src="imgUrl"
              max-height="200px"
              max-width="400"
              class="mt-2"
            />
            <v-btn @click="imgToBase64" :disabled="!imgSelected">
              <v-icon right>expand_more</v-icon>转换
            </v-btn>
            <v-textarea :value="imgBase64" label="data:url" rows="10" no-resize readonly />
          </v-tab-item>
          <v-tab-item>
            <v-textarea
              v-model="d2iBase64Url"
              label="Data URL"
              placeholder="data:image/.."
              rows="10"
              no-resize
            />
            <v-btn @click="base64ToImg">
              <v-icon right>expand_more</v-icon>转换
            </v-btn>
            <v-img
              v-show="d2iImgSelected"
              :src="d2iImgUrl"
              class="mt-2"
            />
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
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
      tab: null,
    };
  },
  methods: {
    uploadImg(e) {
      console.log(e);
      this.imgSelected = true;
      this.imgUrl = window.URL.createObjectURL(e);
      this.imgFile = e;
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
