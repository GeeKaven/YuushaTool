<template>
  <section class="container is-fluid">
    <div>
      <h1>
        HTML
        <small>美化 / 压缩</small>
      </h1>
    </div>
    <div id="codemirror">
      <textarea ref="myeditor" v-model="code"/>
    </div>
    <div>
      <b-button type="is-info" @click="beautify">美化</b-button>
      <b-button type="is-info" @click="compress">压缩</b-button>
    </div>
  </section>
</template>

<script>
import CodeMirror from 'codemirror';

const Minimize = require('minimize');
const BeautifyHtml = require('js-beautify').html;

export default {
  name: 'Html',
  data() {
    return {
      code: '这是一段html代码',
    };
  },
  mounted() {
    this.minimize = new Minimize();
    const mime = 'application/xml';
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
      this.editor.setValue(BeautifyHtml(this.editor.getValue(), { indent_inner_html: true }));
    },
    compress() {
      this.editor.setValue(this.minimize.parse(this.editor.getValue()));
    },
  },
};
</script>

<style>
  .CodeMirror {
    height: 450px;
  }
</style>
