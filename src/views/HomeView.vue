<script setup>
import NewsCard from '../components/NewsCard.vue'
import Cta from '../components/Cta.vue'
import CategoryList from '../components/CategoryList.vue'
import TitleSection from '../components/TitleSection.vue'
</script>

<template>
  <main>
    <NewsCard />
    <NewsCard />
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
