<template>
  <div class="list__item">
    <div class="todo__item"> 
        <div class="item__name"><strong>{{ item.title }}</strong></div>
        <div class="status">{{ item.status }}</div>
        <button
          @click="$emit('deletePost', item)"
        >
          Delete
        </button>
        <button
          @click="$emit('updatePost', item)"
        >Update</button>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
</style>
