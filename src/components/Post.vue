//Post.vue
<template>
  <div v-if="postlist" class="post">
    <div class="post-header">
      <div
        class="profile"
        :style="{ backgroundImage: `url(${postlist.userImage})` }"
      ></div>
      <span class="profile-name">{{ postlist.name }}</span>
    </div>

    <div
      class="post-body"
      :class="postlist.filter"
      :style="{ backgroundImage: `url(${postlist.postImage})` }"
    ></div>

    <div class="post-content">
      <p>{{ postlist.likes }} Likes</p>
      <p>
        <strong>{{ postlist.name }}</strong> {{ postlist.content }}
      </p>
      <p class="date">{{ postlist.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    postlist: Object,
  }
}
</script>