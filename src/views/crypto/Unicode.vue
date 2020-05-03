<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <h1>
          Unicode
          <small>HTML实体编解码</small>
        </h1>
      </v-col>
      <v-col cols="12">
        <v-textarea
          v-model="inputValue"
          label="编码前"
          rows="10"
          placeholder="foo © bar ≠ baz 𝌆 qux"
          no-resize
        />
      </v-col>
      <v-col cols="12">
        <v-btn v-on:click="encodeValue">
          <v-icon right>expand_more</v-icon>编码
        </v-btn>
        <v-btn v-on:click="decodeValue">
          <v-icon right>expand_less</v-icon>解码
        </v-btn>
      </v-col>
      <v-col cols="12">
        <v-textarea ref="output" :value="outputValue" label="编码后" rows="10" no-resize readonly />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import he from 'he';

export default {
  name: 'Unicode',
  data() {
    return {
      inputValue: '测试文本\nfoo © bar ≠ baz 𝌆 qux',
      outputValue: '',
    };
  },
  methods: {
    encodeValue() {
      this.outputValue = he.encode(this.inputValue);
    },
    decodeValue() {
      this.inputValue = he.decode(this.outputValue);
    },
  },
};
</script>

<style>
</style>
