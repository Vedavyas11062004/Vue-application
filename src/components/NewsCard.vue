<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const { resData } = defineProps(['resData'])
console.log(resData)

const getImageUrl = (featuredImage) => {
  return featuredImage?.node?.mediaItemUrl || ''
}

const getCategoryName = (category) => {
  return category?.name || 'Uncategorized'
}

const getCategoryLink = (id) => {
  router.push({
    name: 'category',
    params: { id }
  })
};

const goToAuthorsPage = (id) => {
  router.push({
    name: 'author',
    params: { id }
  })
}

const redirectToSinglePage = (id) => {
  router.push({
    name: 'about',
    params: { id }
  })
};
</script>

<template>
  <div class="newscard_container" v-for="data in resData" :key="data.title">
    <div class="top_part" @click="redirectToSinglePage(data.databaseId)">
      <img :src="getImageUrl(data.featuredImage)" alt="Image" />
    </div>
    <div class="bottom_part">
      <div class="category">
        <span @click = 'getCategoryLink(data.categories.nodes[0]?.databaseId)'>
          {{
            getCategoryName(data.categories.nodes[0])
          }}</span
        >
        par <span
        @click="goToAuthorsPage(data?.author.node.databaseId)"
>{{ data.author.node.firstName }} {{ data.author.node.lastName }}</span>
      </div>
      <h2 @click="redirectToSinglePage(data.databaseId)">
        {{ data?.title }}
      </h2>
      <p v-html="data.excerpt" @click="redirectToSinglePage(data.databaseId)">
      </p>
    </div>
    <div>
      <img src="@/assets/Line.svg" alt="line.." class="line" />
    </div>
  </div>
</template>

<style scoped>
.newscard_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.top_part {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-block: 1.5rem;
}
.top_part > img {
  width: 90%;
  margin-inline: auto;
}
.bottom_part {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  margin-inline: auto;
  gap: 0.5rem;
}
.bottom_part > h2 {
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 27px;
}
.bottom_part > h2 > a {
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 27px;
  color: black;
  text-decoration: none;
}
.bottom_part > h2 > a:hover {
  color: rgb(3, 3, 173);
  text-decoration: underline;
}
.bottom_part > p {
  text-align: center;
  font-family: 'Libre Baskerville', serif;
  line-height: 1.5rem;
}
.category span {
  font-weight: 700;
}

.category span a {
  font-weight: 700;
  color: black;
  text-decoration: none;
}
.category span a:hover {
  color: rgb(3, 3, 173);
  text-decoration: underline;
}
</style>
