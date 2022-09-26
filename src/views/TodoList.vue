<template>

<div>
  <post-form 
    @create="addPost"
  />

  <list-post 
    :posts_list="posts_list"
    @deletePost="deletePost"
    @updatePost="updatePost"
  />
</div>
  
</template>

<script>
import PostForm from '../components/PostForm.vue'
import ListPost from '../components/ListPost.vue'

export default {
  components: { 
    ListPost,
    PostForm,
  },
  data() {
    return {
      post: {
        title: '',
        status: false,
      },
      posts_list: [],
      title: '',
    }
  },
  methods: {
    addPost(post) {
      this.posts_list.push(post)
    },
    updatePost(post) {
      post.status = !post.status
    },
    deletePost(post) {
      this.posts_list = this.posts_list.filter(p => p.id !== post.id)
    }
  },
}
</script>
