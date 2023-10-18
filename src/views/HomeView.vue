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
    <Cta />
    <TitleSection />
    <TitleSection />
    <Cta />
    <div class="buttomTitle_section">
      <TitleSection />
      <Cta />
    </div>
  </main>
</template>

<style scoped>
.buttomTitle_section {
  background: #d7e5ca;
  padding-top: 1.5rem;
  padding-bottom: 2.5rem;
}
</style>
