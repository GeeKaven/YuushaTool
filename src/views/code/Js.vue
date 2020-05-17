<template>
  <section class="container is-fluid">
    <div>
      <h1>
        JavaScript
        <small>美化 / 净化 / 混淆</small>
      </h1>
    </div>
    <div id="codemirror">
      <textarea ref="myeditor" v-model="code"/>
    </div>
    <div>
      <b-button type="is-info" @click="beautify">美化</b-button>
      <b-button type="is-info" @click="cleanUp">净化</b-button>
      <b-button type="is-info" @click="mangle">混淆</b-button>
      <b-button type="is-info" @click="mangleAndCompress">混淆并压缩</b-button>
    </div>
  </section>
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
