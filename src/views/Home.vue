<template>
  <section class="container is-fluid">
    <div v-for="(box, index) in toolBox" class="tool" :key="index">
      <div class="tool-title">{{box.text}}</div>
      <div class="columns is-multiline">
        <div v-for="(tool, subIndex) in box.children" class="column is-one-quarter" :key="subIndex">
          <div class="tool-content">
            <router-link :to="tool.url">{{tool.text}}</router-link>
            <p>{{tool.desc}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    toolBox() {
      return [
        {
          icon: 'code',
          text: '代码辅助',
          children: [
            {
              text: 'HTML',
              desc: '美化 / 压缩',
              url: '/code/html',
            },
            {
              text: 'CSS',
              desc: '美化 / 优化 / 压缩',
              url: '/code/css',
            },
            {
              text: 'JavaScript',
              desc: '美化 / 净化 / 混淆',
              url: '/code/js',
            },
          ],
        },
        {
          icon: 'image',
          text: '图片处理',
          children: [
            {
              text: 'Data URL',
              desc: '图片 ⇔ Base64',
              url: '/image/dataurl',
            },
          ],
        },
        {
          icon: 'lock_outline',
          text: '信息编解码',
          children: [
            {
              text: 'Base64',
              desc: '编码 / 解码',
              url: '/crypto/base64',
            },
            {
              text: 'URL转码',
              desc: 'encodeURI()',
              url: '/crypto/encodeurl',
            },
            {
              text: '加密解密',
              desc: 'AES / DES ...',
              url: '/crypto/encrypt',
            },
            {
              text: 'Unicode',
              desc: 'HTML实体编解码',
              url: '/crypto/unicode',
            },
          ],
        },
      ];
    },
  },
};
</script>

<style>
.tool {
  position: relative;
  background-color: blueviolet;
  margin: 1.5rem 0;
  padding: 1.45rem 1.5rem;
  border-radius: 0.25rem;
}
.tool-content {
  padding: 0.5rem;
  text-align: center;
  background-color: blanchedalmond;
  border-radius: 0.25rem;
}
.tool-content a {
  font-size: 1.25rem;
}
.tool-content p {
  font-size: 0.75rem;
}
.tool-title {
  position: absolute;
  background-color: aqua;
  left: 1.875rem;
  top: -1rem;
  border-radius: 0.25rem;
  padding: 0.25rem;
  font-weight: bold;
}
</style>
