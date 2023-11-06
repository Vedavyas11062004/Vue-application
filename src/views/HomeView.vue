<script setup>
import NewsCard from '../components/NewsCard.vue'
import Cta from '../components/Cta.vue'
import CategoryList from '../components/CategoryList.vue'
import TitleSection from '../components/TitleSection.vue'
import { ref, computed, watchEffect, onMounted ,defineProps} from 'vue'
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

const CHARACTERS_QUERY = gql`
  query GET_POSTS_FOR_DAY {
    posts(last: 10, where: { dateQuery: { day: 29, month: 9, year: 2023 } }) {
      nodes {
        title
        excerpt
        categories {
          nodes {
            databaseId
            name
            slug
          }
        }
        tags {
          nodes {
            databaseId
            name
            slug
          }
        }
        author {
          node {
            avatar {
              default
              url
            }
            firstName
            databaseId
            nickname
            lastName
            nicename
          }
        }
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`
const { result, loading, error } = useQuery(CHARACTERS_QUERY)
const val = computed(() => {
  const data = result.value
  return data?.posts?.nodes || []
})

const resData = ref('')
const len = ref(0)

watchEffect(() => {
  console.log(val.value)
  resData.value = val.value
  len.value = resData.value.length
  console.log(resData.value.length)
});

// const props = defineProps(['resData']); 

</script>

<template>
  <main v-if="len > 0">
    <NewsCard  :resData="resData"/>
    <NewsCard  :resData="resData"/>
    <Cta />
    <CategoryList />
    <TitleSection />
    <TitleSection />
    <!-- add line and space -->
    <Cta />
    <div class="line_div">
      <img src="@/assets/Line.svg" class="line" />
    </div>
    <TitleSection />
    <TitleSection />
    <Cta />
    <div class="buttomTitle_section">
      <TitleSection />
      <Cta class="lastCta" />
    </div>
  </main>
  <!-- Loading state -->
  <div v-else-if="loading">Loading...</div>

  <!-- Error state -->
  <div v-else-if="error">Error: {{ error.message }}</div>

  <!-- Empty state -->
  <div v-else>No data available</div>
</template>

<style scoped>
.buttomTitle_section {
  background: #d7e5ca;
  padding-top: 1.5rem;
  padding-bottom: 2.5rem;
}

.line {
  margin-block: 2rem;
}

.line_div {
  width: 100%;
  display: flex;
  justify-content: center;
}

.lastCta {
  margin-bottom: 6rem;
}
</style>
