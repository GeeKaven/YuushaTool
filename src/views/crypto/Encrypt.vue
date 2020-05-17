<template>
  <!-- <div class="mdui-center mdui-col-lg-10 clean-float">
    <div class="mdui-typo">
      <h1>
        加密 / 解密
        <small>AES / DES ...</small>
      </h1>
    </div>
    <div class="mdui-textfield">
      <label class="mdui-textfield-label">明文</label>
      <textarea ref="plain" class="mdui-textfield-input" rows="10" v-model="plaintext"></textarea>
    </div>
    <div class="mdui-textfield">
      <input class="mdui-textfield-input" type="text" placeholder="密钥" v-model="key" />
    </div>
    <div class="row-btn mdui-m-t-2">
      <button class="mdui-btn mdui-btn-raised mdui-ripple" v-on:click="encrypt">
        <i class="mdui-icon mdui-icon-right material-icons">expand_more</i>加密
      </button>
      <button class="mdui-btn mdui-btn-raised mdui-ripple" v-on:click="decrypt">
        <i class="mdui-icon mdui-icon-right material-icons">expand_less</i>解密
      </button>
      <select class="mdui-select" mdui-select v-model="cryptSelected">
        <option
          v-for="option in cryptOptions"
          :key="option.value"
          :value="option.value"
        >{{option.text}}</option>
      </select>
    </div>
    <div class="mdui-textfield">
      <label class="mdui-textfield-label">密文</label>
      <textarea ref="cipher" class="mdui-textfield-input" rows="10" :value="ciphertext"></textarea>
    </div>
  </div>-->
  <section class="container is-fluid">
    <div>
      <h1>
        加密 / 解密
        <small>AES / DES ...</small>
      </h1>
    </div>
    <textarea
      ref="plain"
      class="textarea has-fixed-size"
      rows="10"
      placeholder="明文"
      v-model="plaintext"
    />
    <input class="input" type="text" placeholder="密钥" v-model="key" />
    <div>
      <b-button icon-left="arrow-down" @click="encrypt">加密</b-button>
      <b-button icon-left="arrow-up" @click="decrypt">解密</b-button>
      <b-select placeholder="请选择加密方式" v-model="cryptSelected">
        <option
          v-for="option in cryptOptions"
          :value="option.value"
          :key="option.value"
        >{{ option.text }}</option>
      </b-select>
    </div>
    <textarea
      ref="cipher"
      class="textarea has-fixed-size"
      rows="10"
      placeholder="密文"
      v-model="ciphertext"
    />
  </section>
</template>

<script>
import CryptoJS from 'crypto-js';

export default {
  name: 'Encrypt',
  data() {
    return {
      plaintext: '',
      ciphertext: '',
      key: '',
      cryptSelected: 'aes',
      cryptOptions: [
        { text: 'AES', value: 'aes' },
        { text: 'DES', value: 'des' },
        { text: 'RC4', value: 'rc4' },
        { text: 'Rabbit', value: 'rabbit' },
        { text: 'TripleDes', value: 'triple_des' },
      ],
    };
  },
  methods: {
    encrypt() {
      const { plaintext } = this;
      const { cryptSelected } = this;
      let ciphertext = '';

      if (cryptSelected === 'aes') {
        ciphertext = CryptoJS.AES.encrypt(plaintext, this.key).toString();
      } else if (cryptSelected === 'des') {
        ciphertext = CryptoJS.DES.encrypt(plaintext, this.key).toString();
      } else if (cryptSelected === 'rc4') {
        ciphertext = CryptoJS.RC4.encrypt(plaintext, this.key).toString();
      } else if (cryptSelected === 'rabbit') {
        ciphertext = CryptoJS.Rabbit.encrypt(plaintext, this.key).toString();
      } else if (cryptSelected === 'triple_des') {
        ciphertext = CryptoJS.TripleDES.encrypt(plaintext, this.key).toString();
      }
      this.ciphertext = ciphertext;

      this.$refs.cipher.focus();
    },
    decrypt() {
      const { ciphertext } = this;
      const { cryptSelected } = this;
      let plaintextBytes = '';

      if (cryptSelected === 'aes') {
        plaintextBytes = CryptoJS.AES.decrypt(ciphertext, this.key);
      } else if (cryptSelected === 'des') {
        plaintextBytes = CryptoJS.DES.decrypt(ciphertext, this.key);
      } else if (cryptSelected === 'rc4') {
        plaintextBytes = CryptoJS.RC4.decrypt(ciphertext, this.key);
      } else if (cryptSelected === 'rabbit') {
        plaintextBytes = CryptoJS.Rabbit.decrypt(ciphertext, this.key);
      } else if (cryptSelected === 'triple_des') {
        plaintextBytes = CryptoJS.TripleDES.decrypt(ciphertext, this.key);
      }
      this.plaintext = plaintextBytes.toString(CryptoJS.enc.Utf8);

      this.$refs.plain.focus();
    },
  },
};
</script>

<style>
</style>
