//App.vue
<template>
  <div>
    <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li @click="step++">Next</li>
      </ul>
      <img src="./assets/logo.svg" class="logo" />
    </div>

    <Container :posts="posts" :step="step" :image="image" />
    <button @click="more">더보기</button>

    <div class="footer">
      <ul class="footer-button-plus">
        <input @change="upload" type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>
  </div>
</template>

<script>
import Container from './components/Container.vue';
import axios from 'axios';
import "./assets/main.css"

export default {
  name: 'App',
  components: {
    Container

  },
  data() {
    return {
      step:0,
      moreCount: 0,
      posts: [],
      image:'',
    };
  },
  mounted() {
    this.more();
  },
  methods: {
    more() {
      const url = `https://qkrwpgus.github.io/vue/more${this.moreCount}.json`;
      axios.get(url).then((result) => {
        this.posts.push(...result.data);
        this.moreCount += 1;
      });
    },
    upload(e){
      let 파일 = e.target.files;
      console.log(파일);
      console.log(파일[0]);
      let url = URL.createObjectURL(파일[0]);
      this.image = url;
      this.step = 1;
      console.log(url);
    }
  }
};
</script>