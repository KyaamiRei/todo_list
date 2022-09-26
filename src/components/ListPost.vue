<template>
    <div>
        <div 
            class="todo__list"
            v-if="posts_list.length > 0"
        >
            <strong class="text__">Список дел:</strong>
            <list-item
                v-for="item in posts_list"
                :item="item"
                :key="item.id"
                @deletePost="$emit('deletePost', item)"
                @updatePost="$emit('updatePost', item)"
            />
        </div>
        <div
            class="empty__list"
            v-else
        >
            Записей нет
        </div>
    </div>
</template>

<script>
import ListItem from './ListItem.vue'

export default {
  components: { 
    ListItem 
  },
    props: {
        posts_list: {
            type: Array,
            required: true,
        }
    }
}
</script>
<style scoped>
.text__{
    font-size: 25px;
}
.todo__list{
    padding: 10px;
    margin: 15px;
}
.empty__list{
    padding: 10px;
    color:red;
    font-size: 20px;
}
</style>