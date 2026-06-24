import { createStore } from 'vuex'
import postsData from './assets/Post.js'
import axios from 'axios'

const store = createStore({
  state(){
    return {
      name: 'Park',
      age: 20,
      moreCount: 0,
      posts: postsData,
    }
  },
  mutations: {
    증가(){
      this.state.age++
    },
    증가숫자(state, payload){
      state.age += payload
    },
    이름변경(state){
      state.name = 'Lee'
    },
    좋아요토글(state, index){
      const post = state.posts[index]
      if (post.liked) {
        post.likes--
        post.liked = false
      } else {
        post.likes++
        post.liked = true
      }
    },
    게시물추가(state, newPosts){
      state.posts.push(...newPosts)
    },
    더보기카운트증가(state){
      state.moreCount += 1
    },
  },
  actions: {
    more({ commit, state }) {
      const url = `https://qkrwpgus.github.io/vue/more${state.moreCount}.json`;
      axios.get(url).then((result) => {
        commit('게시물추가', result.data);
        commit('더보기카운트증가');
      }).catch((err) => {
        console.error('더보기 실패:', err);
      });
    },
  }
})

export default store