<template >
  <div>
    <form @submit.prevent>
      <div class="add__form">
        <strong class="name__">Добавление записи:</strong>
        <input
          class="input__text"
          type="text"
          placeholder="NamePost"
          v-model="post.title"
          
        >
        <button
          @click="addPost"
          class="btn"
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
.add__form{
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
}
.name__{
  font-size: 20px;
}
.input__text{
  margin: 10px;
  padding: 8px;
}
.btn{
  align-self: flex-end;
  margin: 10px;
  padding: 10px;
  color: green;
  background-color: none;
  border-radius: 10px;
}
</style>