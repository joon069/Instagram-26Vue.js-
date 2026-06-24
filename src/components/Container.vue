<template>
  <div class="container">
    <div v-if="step == 0">
      <Post v-for="(post, index) in posts" :key="index" :post="post" :index="index" />
    </div>

    <div v-if="step == 1">
      <div
        class="upload-image"
        :class="선택한필터"
        :style="{ backgroundImage: `url(${image})` }"
      ></div>
      <div class="filters">
        <FilterBox
          :image="image"
          v-for="(filter, index) in 필터들"
          :key="index"
          :filter="filter"
        />
      </div>
    </div>

    <div v-if="step == 2">
      <div
        class="upload-image"
        :class="선택한필터"
        :style="{ backgroundImage: `url(${image})` }"
      ></div>
      <div class="write">
        <textarea
          class="write-box"
          @input="writeText($event.target.value)"
        >write!</textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Post from './Post.vue';
import FilterBox from './FilterBox.vue';

export default {
  name: 'Container',
  components: {
    Post,
    FilterBox,
  },
  props: {
    step: Number,
    image: String,
  },
  data() {
    return {
      선택한필터: '',
      필터들: [
        'aden','_1977','brannan','brooklyn','clarendon','earlybird','gingham',
        'hudson','inkwell','kelvin','lark','lofi','maven','mayfair','moon',
        'nashville','perpetua','reyes','rise','slumber','stinson','toaster',
        'valencia','walden','willow','xpro2',
      ],
    };
  },
  computed: {
    ...mapState(['posts']),
  },
  mounted() {
    this.emitter.on('select-filter', (filter) => {
      this.선택한필터 = filter;
    });
  },
  methods: {
    writeText(text) {
      this.emitter.emit('write-text', text);
    },
  },
};
</script>