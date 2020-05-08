<template>
  <div class="mdui-center mdui-col-lg-10 clean-float">
    <div class="mdui-typo">
      <h1>
        URL转码
        <small>encodeURI() / encodeURIComponent()</small>
      </h1>
    </div>
    <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">转码前</label>
      <textarea ref="input" class="mdui-textfield-input" rows="10" v-model="inputValue"></textarea>
    </div>
    <div class="row-btn mdui-m-t-2">
      <button class="mdui-btn mdui-btn-raised mdui-ripple" v-on:click="encodeValue">
        <i class="mdui-icon mdui-icon-right material-icons">expand_more</i>编码
      </button>
      <button class="mdui-btn mdui-btn-raised mdui-ripple" v-on:click="decodeValue">
        <i class="mdui-icon mdui-icon-right material-icons">expand_less</i>解码
      </button>
      <label class="mdui-radio">
        <input type="radio" name="encode" value="normal" v-model="picked"/>
        <i class="mdui-radio-icon"></i>
        encodeURI
      </label>
      <label class="mdui-radio">
        <input type="radio" name="encode" value="component" v-model="picked"/>
        <i class="mdui-radio-icon"></i>
        encodeURIComponent
      </label>
    </div>
    <div class="mdui-textfield">
      <label class="mdui-textfield-label">转码后</label>
      <textarea ref="output" class="mdui-textfield-input"
                rows="10" :value="outputValue" readonly></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EncodeUrl',
  data() {
    return {
      inputValue: '',
      outputValue: '',
      picked: 'normal',
    };
  },
  methods: {
    encodeValue() {
      if (this.picked === 'normal') {
        this.outputValue = encodeURI(this.inputValue);
      } else if (this.picked === 'component') {
        this.outputValue = encodeURIComponent(this.inputValue);
      }
      this.$refs.output.focus();
    },
    decodeValue() {
      if (this.picked === 'normal') {
        this.inputValue = decodeURI(this.outputValue);
      } else if (this.picked === 'component') {
        this.inputValue = decodeURIComponent(this.outputValue);
      }
      this.$refs.input.focus();
    },
  },
};
</script>

<style>
</style>
