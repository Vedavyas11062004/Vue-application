<script setup>
import { ref, computed, watchEffect } from 'vue'
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

const POST_QUERY = gql`
query Category {
  posts(first: 4,where: { categoryIn: "6" }) {
    nodes {
      title
      excerpt
      categories {
        nodes {
          name
          slug
          databaseId
          categoryId
        }
      }
      tags {
        nodes {
          name
          databaseId
          slug
        }
      }
      featuredImage {
        node {
          sourceUrl(size: LARGE)
        }
      }
    }
  }
}
`;

const { result, loading, error } = useQuery(POST_QUERY)
const resData = ref('')

const val = computed(() => {
  const data = result.value
  return data?.posts?.nodes || []
})

watchEffect(() => {
  console.log(val.value)
  resData.value = val.value
});

</script>
<template>
  <div v-if="result" class="category_container">
    <h2>CATEGORY SHORTS</h2>
    <div v-for="ele in resData">
      <h3><span>CATEGORY</span> par <span>{{ ele?.categories?.nodes[0]?.name}}</span></h3>
      <p v-html="ele.excerpt">  
      </p>
    </div>
    <!-- <div>
      <h3><span>CATEGORY</span> par <span>Lorem Ipsum</span></h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      </p>
    </div>
    <div>
      <h3><span>CATEGORY</span> par <span>Lorem Ipsum</span></h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      </p>
    </div>
    <div>
      <h3><span>CATEGORY</span> par <span>Lorem Ipsum</span></h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      </p>
    </div> -->
    <div class="btn_border">
      <button class="Btn">READ MORE</button>
    </div>
  </div>
  <div v-else-if="loading">loading...</div>
  <div v-else>error</div>
  <div class="line_div">
    <img src="@/assets/Line.svg" class="line"/>
  </div>
</template>
<style scoped>
.category_container {
  background: #003c57;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  width: 90%;
  margin-inline: auto;
  padding: 1rem;
  gap: 1rem;
}
.category_container > h2 {
  font-weight: 700;
  font-size: 1.25rem;
}
.category_container > div > h3 > span {
  font-weight: 700;
}

.Btn {
  background: #ffffff;
  border: none;
  padding-block: 0.75rem;
  padding-inline: 1.5rem;
  margin-block: 1rem;
  font-weight: 600;
  font-size: 1rem;
}
.btn_border {
  padding-block: 0.15rem;
  padding-inline: 1rem;
  /* border: 1px dashed #9747ff; */
  border-radius: 0.25rem;
}

.line{
    margin-block: 2rem;
}

.line_div{
    width: 100%;
    display: flex;
    justify-content: center;
}

.category_container > div>p{
  font-family: 'Libre Baskerville', serif;
}
</style>
