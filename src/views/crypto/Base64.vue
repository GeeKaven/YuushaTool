<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <h1>
          Base64
          <small>编码 / 解码</small>
        </h1>
      </v-col>
      <v-col cols="12">
        <v-textarea v-model="inputValue" label="请输入文本" rows="10" no-resize />
      </v-col>
      <v-col cols="12">
        <v-btn v-on:click="encodeValue">编码</v-btn>
        <v-btn v-on:click="decodeValue">解码</v-btn>
      </v-col>
      <v-col cols="12">
        <v-textarea
          ref="output"
          :value="outputValue"
          label="Base64 编码/解码结果"
          rows="10"
          no-resize
          readonly
        />
      </v-col>
    </v-row>
  </v-container>
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
