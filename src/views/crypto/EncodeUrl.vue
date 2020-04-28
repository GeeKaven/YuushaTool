<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <h1>
          URL转码
          <small>encodeURI() / encodeURIComponent()</small>
        </h1>
      </v-col>
      <v-col cols="12">
        <v-textarea ref="input" v-model="inputValue" label="转码前" rows="10" no-resize />
      </v-col>
      <v-col cols="12">
        <v-btn v-on:click="encodeValue">
          <v-icon right>expand_more</v-icon>编码
        </v-btn>
        <v-btn v-on:click="decodeValue">
          <v-icon right>expand_less</v-icon>解码
        </v-btn>
        <v-checkbox v-model="checked" label="全部编码" class="d-inline"></v-checkbox>
      </v-col>
      <v-col cols="12">
        <v-textarea ref="output" :value="outputValue" label="转码后" rows="10" no-resize/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'EncodeUrl',
  data() {
    return {
      inputValue: '',
      outputValue: '',
      checked: false,
    };
  },
  methods: {
    encodeValue() {
      if (this.checked) {
        this.outputValue = encodeURIComponent(this.inputValue);
      } else {
        this.outputValue = encodeURI(this.inputValue);
      }
      this.$refs.output.focus();
    },
    decodeValue() {
      if (this.checked) {
        this.inputValue = decodeURIComponent(this.outputValue);
      } else {
        this.inputValue = decodeURI(this.outputValue);
      }
      this.$refs.input.focus();
    },
  },
};
</script>

<style>
</style>
