<script setup></script>
<template>
  <div class="newscard_container">
    <div class="top_part">
      <img src="@/assets/Picture.svg" alt="img.." />
    </div>
    <div class="bottom_part">
      <div class="category"><span>CATEGORY</span> par <span>Lorem Ipsum</span></div>
      <h2>
        <RouterLink to="/about" style="text-decoration: none"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</RouterLink
        >
      </h2>
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
  margin-bottom: 1.5rem;
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
}
.bottom_part > p {
  text-align: center;
}
</style>
