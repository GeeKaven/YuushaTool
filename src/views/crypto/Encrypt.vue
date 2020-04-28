<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <h1>
        加密 / 解密
        <small>AES / DES ...</small>
      </h1>
      </v-col>
      <v-col cols="12">
        <v-textarea ref="plain" v-model="plaintext" label="明文" rows="8" no-resize />
      </v-col>
      <v-col cols="12">
        <v-text-field v-model="key" label="密钥"/>
      </v-col>
      <v-col cols="12">
        <v-btn v-on:click="encrypt">
          <v-icon right>expand_more</v-icon>加密
        </v-btn>
        <v-btn v-on:click="decrypt">
          <v-icon right>expand_less</v-icon>解密
        </v-btn>
        <v-select
          v-model="cryptSelected"
          :items="cryptOptions"
        ></v-select>
      </v-col>
      <v-col cols="12">
        <v-textarea ref="cipher" :value="ciphertext" label="密文" rows="8" no-resize/>
      </v-col>
    </v-row>
  </v-container>
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
