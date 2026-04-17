//Container.vue
<template>
    <div class="container">
        <div v-if="step==0">
            <Post v-for="(post, index) in posts" :key="index" :postlist="post" />
        </div>

        <!-- 필터선택페이지 -->
        <div v-if="step==1">
        <div class="upload-image"
        :style="{ backgroundImage: `url(${image})` }"
        ></div>
        
        <div class="filters">
            <div class="filter-1"></div>
            <div class="filter-1"></div>
            <div class="filter-1"></div>
            <div class="filter-1"></div>
            <div class="filter-1"></div>
        </div>
        </div>

        <!-- 글작성페이지 -->
        <div v-if="step==2">
        <div class="upload-image"
        :style="{ backgroundImage: `url(${image})` }"
        ></div>
        <div class="write">
            <textarea class="write-box">write!</textarea>
        </div>
        </div>
    </div>
</template>

<script>
import Post from './Post.vue';

export default {
    name: 'Container',
    components: { Post },
    props: {
        step: Number,
        posts: Array,
        image: String,
    }
};
</script>