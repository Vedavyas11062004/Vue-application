<script setup>
import Cards from '../components/Cards.vue'
import Cta from '../components/Cta.vue';
</script>
<template>
  <div class="category_page">
    <h1>Catégory A</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi
    </p>
    <div class="category_cards">
      <Cards class="category_card" />
      <Cards class="category_card" />
      <Cards class="category_card" />
      <Cards class="category_card" />
      <Cards class="category_card" />
      <Cards class="category_card" />
      <Cards class="category_card" />
      <Cards class="category_card" />
      <Cards class="category_card" />
    </div>
    <nav class="paginaton_nav">
      <ul class="category_pagination">
        <li class="category_page-item">
          <a class="category_page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="category_page-item"><a class="page-link" href="#">1</a></li>
        <li class="category_page-item"><a class="page-link" href="#">2</a></li>
        <li class="category_page-item"><a class="page-link" href="#">3</a></li>
        <li class="category_page-item">
          <a class="category_page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
    <div class="line_div">
      <img src="@/assets/Line.svg" class="line" />
    </div>
    <div class="cta">
        <Cta/>
    </div>
  </div>
</template>
<style scoped>

.category_cards{
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

.page-link{
    text-decoration: none;
    color: #212B36;
;
}

.category_page-link{
    text-decoration: none;
    color: #212B36;
}

.category_page-item:first-child{
    background: #919EAB;
    border: none;
}
.category_page-item:last-child{
    background: #919EAB;
    border: none;
}
.cta{
    width: 100%;
}
@media(max-width:650px)
{
    .category_cards{
        grid-template-columns: 1fr;
    }
}
</style>
