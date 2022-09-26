<template >
  <div>
    <form @submit.prevent>
      <div class="add__form">
        <input
          type="text"
          placeholder="NamePost"
          v-model="post.title"
        >
        <button
          @click="addPost"
        >
          AddPost
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
    data() {
      return {
        post: {
          title: '',
          status: false,
        },
      }
    },
    methods: {
      addPost() {
        this.post.id = Date.now()
        console.log(this.post)
        this.$emit('create', this.post)
        this.post = {
          title: '',
          status: false,
        }
    },
    },
}
</script>
<style scoped>
    
</style>