<script setup></script>
<template>
  <div class="footer">
    <div class="img_container">
      <RouterLink to="/"><img src="@/assets/home.svg" alt="img_home" /></RouterLink>
      <img src="@/assets/Allposts.svg" alt="img_allposts" />
      <img src="@/assets/Account.svg" alt="img_account" />
      <img src="@/assets/search.svg" alt="img_search" />
    </div>
  </div>
</template>
<style scoped>
.footer {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-block: 0.5rem;
  border-top: 1px solid #003c57;
  position: fixed;
  bottom: 0;
  background-color: white;
}
.img_container {
  display: flex;
}
</style>
