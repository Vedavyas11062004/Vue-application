<script setup>
import NewsContainer from './NewsContainer.vue'
import { ref, computed, watchEffect } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

const searchVal = ref('')
const searchValue = ref('');

const getVariables = () => ({ search: searchValue.value });
const { result, loading, error } = useQuery(
  gql`
    query Search($search: String!) {
      posts(where: { search: $search }) {
        nodes {
          databaseId
          id
          title
          content
        }
      }
    }
  `,
  getVariables
)

const data = ref([])

const search = () => {
  searchValue.value = searchVal.value;
  const val = computed(() => {
    const data = result.value
    return data?.posts?.nodes || []
  });
  data.value = val.value;
}

watchEffect(() => {
  console.log(data.value)
})
const { isVisible } = defineProps(['isVisible'])
const emits = defineEmits()
const handleClose = () => {
  console.log(isVisible)
  emits('changeProp', false)
};
</script>

<Cards v-for="card in resData" :key="card.title" class="category_card" :data = "card" :imgUrl="card?.featuredImage?.node?.mediaItemUrl" :id = "card?.databaseId"/>

<template>
  <div class="searchPopUp" v-if="result">
    <h3>Search</h3>
    <div class="searchBar">
      <input v-model="searchVal" type="text" placeholder="search a post ..." />
      <button @click="search()">search</button>
    </div>
    <button @click="handleClose()" class="crossBtn">X</button>
    <NewsContainer v-for="ele in data" :key="ele.id" :data = "ele"/>
  </div>
  <div class="searchPopUp" v-else-if="loading">loading...</div>
  <div class="searchPopUp" v-else>error</div>
</template>
<style scoped>
.searchPopUp {
  position: relative;
  width: 100%;
  height: 90vh;
  background-color: white;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  overflow-y: scroll;
}

.crossBtn {
  position: absolute;
  right: 10%;
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid black;
  background-color: white;
}

.searchBar {
  width: 80vw;
  /* align-self: center; */
  display: flex;
  align-self: center;
  justify-content: center;
  gap: 0.25rem;
}
.searchBar > input {
  width: 70%;
  height: 1.8rem;
  background-color: rgb(240, 239, 239);
  border: 1px solid black;
  padding-inline: 1rem;
}
</style>
