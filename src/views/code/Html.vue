<template>
  <div class="mdui-center mdui-col-lg-10">
    <div class="mdui-typo">
      <h1>
        HTML
        <small>压缩 / 格式化</small>
      </h1>
    </div>
    <div id="codemirror" class="mdui-shadow-3 mdui-m-b-4">
      <textarea ref="myeditor" v-model="code"/>
    </div>
    <div>
      <button class="btn mdui-btn mdui-btn-raised mdui-ripple" v-on:click="compress">Button</button>
      <button class="btn mdui-btn mdui-btn-raised mdui-ripple">Button</button>
    </div>
  </div>
</template>

<script>
import 'codemirror/lib/codemirror.css';

const CodeMirror = require('codemirror/lib/codemirror');
const Minimize = require('minimize');

require('codemirror/mode/xml/xml');

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
  .btn {
    margin-right: 10px;
  }
</style>
