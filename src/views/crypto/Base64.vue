<template>
  <section class="container is-fluid">
    <div>
      <h1>
        Base64
        <small>编码 / 解码</small>
      </h1>
    </div>
    <textarea class="textarea has-fixed-size" rows="10" placeholder="请输入文本" v-model="inputValue" />
    <div>
      <b-button @click="encodeValue">编码</b-button>
      <b-button @click="decodeValue">解码</b-button>
    </div>
    <textarea
      ref="output"
      class="textarea has-fixed-size"
      rows="10"
      placeholder="Base64 编码/解码结果"
      v-model="outputValue"
      readonly
    />
  </section>
</template>

<script>
import { Base64 } from 'js-base64';

export default {
  name: 'Base64',
  data() {
    return {
      inputValue: '',
      outputValue: '',
    };
  },
  methods: {
    encodeValue() {
      this.outputValue = Base64.encode(this.inputValue);
      this.$refs.output.focus();
    },
    decodeValue() {
      this.outputValue = Base64.decode(this.inputValue);
      this.$refs.output.focus();
    },
  },
};
</script>

<style>
</style>
