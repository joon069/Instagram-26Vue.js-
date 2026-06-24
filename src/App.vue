<template>
  <div>
    <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li v-if="step == 1" @click="step++">Next</li>
        <li v-if="step == 2" @click="publish">발행</li>
      </ul>
      <img src="./assets/logo.svg" class="logo" />
    </div>

    <h4> 안녕 {{ age }}</h4>
    <button @click="증가">버튼</button>

    <input v-model.number="추가할숫자" type="number" />
    <button @click="증가숫자(추가할숫자)">버튼2</button>

    <Container :step="step" :image="image" />

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
import { mapState, mapMutations, mapActions } from 'vuex';
import Container from './components/Container.vue';

export default {
  name: 'App',
  components: {
    Container,
  },
  data() {
    return {
      step: 0,
      image: '',
      작성한글: '',
      선택한필터: '',
      추가할숫자: 0,
    };
  },
  computed: {
    ...mapState(['age', 'posts']),
  },
  mounted() {
    this.emitter.on('write-text', (data) => {
      this.작성한글 = data;
    });

    this.emitter.on('select-filter', (data) => {
      this.선택한필터 = data;
    });
  },
  methods: {
    ...mapMutations(['증가', '증가숫자']),
    ...mapActions(['more']),
    upload(e) {
      const 파일 = e.target.files;
      const url = URL.createObjectURL(파일[0]);
      this.image = url;
      this.step++;
    },
    publish() {
      const 내게시물 = {
        name: 'Kim Hyun',
        userImage: 'https://picsum.photos/100?random=3',
        postImage: this.image,
        likes: 36,
        date: 'May 15',
        liked: false,
        content: this.작성한글,
        filter: this.선택한필터,
      };
      this.posts.unshift(내게시물);

      this.step = 0;
      this.image = '';
      this.작성한글 = '';
      this.선택한필터 = '';
    },
  },
};
</script>