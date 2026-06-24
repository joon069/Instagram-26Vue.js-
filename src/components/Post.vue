<template>
  <div class="post">
    <div class="post-header">
      <div class="profile" :style="{ backgroundImage: `url(${post.userImage})` }"></div>
      <span class="profile-name">{{ post.name }}</span>
    </div>
    <div class="post-body">
      <div
        class="post-image"
        :class="post.filter"
        :style="{ backgroundImage: `url(${post.postImage})` }"
        @click="좋아요토글(index)"
      ></div>
    </div>
    <div class="post-content">
      <p>{{ post.likes }} Likes</p>
      <p>
        <strong>{{ post.name }}</strong>
        {{ post.content }}
      </p>
      <p class="date">{{ post.date }}</p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Post',
  props: {
    post: Object,
    index: Number,
  },
  methods: {
    ...mapMutations(['좋아요토글']),
  },
};
</script>