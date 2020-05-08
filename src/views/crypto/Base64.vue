<template>
  <div class="mdui-center mdui-col-lg-10 clean-float">
    <div class="mdui-typo">
      <h1>
        Base64
        <small>编码 / 解码</small>
      </h1>
    </div>
    <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">请输入文本</label>
      <textarea class="mdui-textfield-input" rows="10" v-model="inputValue"></textarea>
    </div>
    <div class="row-btn mdui-m-t-2">
      <button class="mdui-btn mdui-btn-raised mdui-ripple" v-on:click="encodeValue">编码</button>
      <button class="mdui-btn mdui-btn-raised mdui-ripple" v-on:click="decodeValue">解码</button>
    </div>
    <div class="mdui-textfield">
      <label class="mdui-textfield-label">Base64 编码/解码结果</label>
      <textarea ref="output" class="mdui-textfield-input"
          rows="10" :value="outputValue" readonly></textarea>
    </div>
  </div>
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
