<template>
  <section class="container is-fluid">
    <div>
      <h1>
        URL转码
        <small>encodeURI() / encodeURIComponent()</small>
      </h1>
    </div>
    <textarea
      ref="input"
      class="textarea has-fixed-size"
      rows="10"
      placeholder="转码前"
      v-model="inputValue"
    />
    <div>
      <b-button icon-left="arrow-down" @click="encodeValue">编码</b-button>
      <b-button icon-left="arrow-up" @click="decodeValue">解码</b-button>
      <b-radio v-model="picked" name="method" native-value="normal">encodeURI</b-radio>
      <b-radio v-model="picked" name="method" native-value="component">encodeURIComponent</b-radio>
    </div>
    <textarea
      ref="output"
      class="textarea has-fixed-size"
      rows="10"
      placeholder="转码后"
      v-model="outputValue"
    />
  </section>
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
