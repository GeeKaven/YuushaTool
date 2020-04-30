<template>
  <v-container>
    <v-col>
      <h1 class=".title">
        JavaScript
        <small class=".subtitle-2">美化 / 净化 / 混淆</small>
      </h1>
      <div id="codemirror" class="elevation-3">
        <textarea ref="myeditor" v-model="code" />
      </div>
      <div class="mt-8">
        <v-btn v-on:click="beautify">美化</v-btn>
        <v-btn v-on:click="cleanUp">净化</v-btn>
        <v-btn v-on:click="mangle">混淆</v-btn>
        <v-btn v-on:click="mangleAndCompress">混淆并压缩</v-btn>
      </div>
    </v-col>
  </v-container>
</template>

<script>
import CodeMirror from 'codemirror';
import Terser from 'terser';

const BeautifyJS = require('js-beautify');

export default {
  name: 'Js',
  data() {
    return {
      code: '这是一段JavaScript代码',
    };
  },
  mounted() {
    const mime = 'text/javascript';
    this.editor = CodeMirror.fromTextArea(this.$refs.myeditor, {
      mode: mime,
      lineNumbers: true,
      smartIndent: true,
      lineWrapping: true,
      tabSize: 4,
    });
  },
  methods: {
    beautify() {
      this.editor.setValue(BeautifyJS(this.editor.getValue()));
    },
    cleanUp() {
      const options = { compress: false, mangle: false };
      this.editor.setValue(Terser.minify(this.editor.getValue(), options).code);
    },
    mangle() {
      const options = { compress: false };
      this.editor.setValue(Terser.minify(this.editor.getValue(), options).code);
    },
    mangleAndCompress() {
      this.editor.setValue(Terser.minify(this.editor.getValue()).code);
    },
  },
};
</script>

<style>
  .CodeMirror {
    height: 450px;
  }
</style>
