<template>
    <div>
        <div class="todo__list">
            <list-item
                v-for="item in posts_list"
                :item="item"
                :key="item.id"
                @deletePost="$emit('deletePost', item)"
                @updatePost="$emit('updatePost', item)"
            />
        </div>
    </div>
</template>

<script>
import ListItem from './ListItem.vue'

export default {
  components: { ListItem },
    props: {
        posts_list: {
            type: Array,
            required: true,
        }
    }
}
</script>
<style scoped>
    
</style>