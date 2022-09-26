<template>
  <div class="list__item">
    <div class="todo__item"> 
        <div class="item__name"><strong>{{ item.title }}</strong>
          <div class="status">
            <div class="status__item" v-if="item.status" style="color: green">
              Выполнено
            </div>
            <div class="status__item" v-else style="color: red">
              Выполняется
            </div>
          </div>
        </div>
        <div class="btns">
          <button
            class="btn__delete"
            @click="$emit('deletePost', item)"
          >
            Delete
          </button>
          <button
            class="btn"
            @click="$emit('updatePost', item)"
          >
            Update
          </button>
        </div>
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
.item__name{
  padding: 5px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
}
.list__item{
  padding: 5px;
  margin: 10px;
  border: 2px solid rgb(35, 136, 37);
}
.todo__item{
  display: flex;
  flex-direction: column;
}
.status{
  width: 150px;
  font-size: 18px;
  margin-left: 10px;
  padding: 0px 10px;
  color: white;
  border: 2px solid black;
  border-radius: 10px;
  align-self: flex-end;
}
.btns{
  align-self: flex-end;
}
.btn{
  width: 82px;
  padding: 10px;
  margin: 5px;
  flex-direction: row;
  background-color: none;
  border-radius: 10px;
  color: green;
}
.btn__delete{
  width: 82px;
  padding: 10px;
  margin: 5px;
  flex-direction: row;
  background-color: none;
  border-radius: 10px;
  color: red;
}
.status__item{
  text-align: center;
}
</style>
