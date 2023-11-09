<script setup>
import Cards from '../components/Cards.vue'
import Cta from '../components/Cta.vue'
import { ref, computed, watchEffect } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

// Define your reactive variables
const posts = ref([]);
const store = ref([]);
const first = ref(10);
const after = ref(null);
const before = ref(null);
const last = ref(null);
const page = ref(1);

// Define a function to get the variables for the GraphQL query
const getVariables = () => ({ first: first.value, last: last.value, after: after.value, before: before.value });

// Define your GraphQL query
const { result, loading, error } = useQuery(gql`
  query GET_PAGINATED_POSTS($first: Int, $last: Int, $after: String, $before: String) {
    posts(first: $first, last: $last, after: $after, before: $before) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          id
          postId
          title
          featuredImage {
            node {
              sourceUrl(size: LARGE)
            }
          }
        }
      }
    }
  }
`, getVariables)

// Define a computed property to handle the result data
const val = computed(() => {
  const data = result.value;
  store.value = data?.posts?.edges;
  return data?.posts?.edges.map((edge) => edge.node) || [];
})

// Define a function to load the next page
const loadNextPage = () => {
  if (result.value?.posts?.pageInfo.hasNextPage) {
    after.value = result.value.posts.pageInfo.endCursor;
    first.value = 10;
    last.value = null;
    before.value = null;
    page.value = page.value+1;
  }
}

// Define a function to load the previous page
const loadPreviousPage = () => {
  if (result.value?.posts?.pageInfo.hasPreviousPage && store.value) {
    console.log(result.value.posts.pageInfo.startCursor);
    before.value = result.value.posts.pageInfo.startCursor;
    last.value = 10;
    first.value = null;
    after.value = null;
    page.value = page.value -1;
  }
}

// Watch for changes in the val computed property and update posts.value accordingly
watchEffect(() => {
  posts.value = val.value;
});
</script>


<template>
  <div class="category_page" v-if="result">
    <h1>{{ posts[0]?.cursor }}</h1>
    <div class="category_cards">
      <Cards
        v-for="card in posts"
        :key="card.id"
        class="category_card"
        :data="card"
        :imgUrl="card.featuredImage?.node?.sourceUrl"
        :id="card.postId"
      />
    </div>
    <nav class="paginaton_nav">
      <!-- <button
        class="pagination_button"
        @click="loadPreviousPage"
        :disabled="!result.posts.pageInfo.hasPreviousPage"
      >
        Previous
      </button>
      <button
        class="pagination_button"
        @click="loadNextPage"
        :disabled="!result.posts.pageInfo.hasNextPage"
      >
        Next
      </button> -->
      <ul class="category_pagination">
        <li class="category_page-item" @click="loadPreviousPage()">
          <a class="category_page-link" href="#" aria-label="Previous" v-if="result.posts.pageInfo.hasPreviousPage" >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="category_page-item">
          <a class="page-link" href="#">{{page}}</a>
        </li>
        <li class="category_page-item" @click="loadNextPage()">
          <a class="category_page-link" href="#" aria-label="Next" v-if="result.posts.pageInfo.hasNextPage"  :disabled="!result?.value?.posts?.pageInfo?.hasNextPage" >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
    <div class="line_div">
      <img src="@/assets/Line.svg" class="line" />
    </div>
    <div class="cta">
      <Cta />
    </div>
  </div>
  <div v-else-if="loading">Loading...</div>
  <div v-else-if="error">Error: {{ error.message }}</div>
  <div v-else>No data available</div>
</template>

<style scoped>
.category_cards {
  margin-top: 2rem;
}
.category_page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-block: 1rem;
  margin-bottom: 5rem;
}
.category_page > p {
  width: 95%;
  font-family: 'Libre Baskerville';
}

.category_page > h1 {
  width: 95%;
  margin-inline: auto;
  align-self: flex-start;
  padding-bottom: 1rem;
}
.line {
  margin-block: 2.5rem;
}

.line_div {
  width: 100%;
  display: flex;
  justify-content: center;
}

.category_cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  width: 98%;
  margin-inline: auto;
}

.category_card {
  flex: 1;
}

.category_pagination {
  list-style: none;
  display: flex;
  gap: 0.5rem;
  padding-left: 0%;
}

.paginaton_nav {
  margin-top: 3rem;
}

.category_page-item {
  width: 2rem;
  height: 2rem;
  border: 1px solid #003c57;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
}

.page-link {
  text-decoration: none;
  color: #212b36;
}

.category_page-link {
  text-decoration: none;
  color: #212b36;
}

.category_page-item:first-child {
  background: #919eab;
  border: none;
}
.category_page-item:last-child {
  background: #919eab;
  border: none;
}
.cta {
  width: 100%;
}
@media (max-width: 650px) {
  .category_cards {
    grid-template-columns: 1fr;
  }
}
</style>
