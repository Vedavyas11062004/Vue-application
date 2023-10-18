<script setup></script>

<template>
  <div class="newscard_container">
    <div class="top_part">
      <img src="@/assets/Picture.svg" alt="img.." />
    </div>
    <div class="bottom_part">
      <div class="category"><span>CATEGORY</span> par <span>Lorem Ipsum</span></div>
      <h2><RouterLink to="/about" style="text-decoration: none;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</RouterLink></h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    <div>
        <img src="@/assets/Line.svg" alt="line.." class="line"/>
    </div>
  </div>
</template>

<style scoped>
.newscard_container{
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
.bottom_part > h2 > a{
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 27px;
  color: black;
}
.bottom_part > p {
  text-align: center;
  font-family: 'Libre Baskerville', serif;
}
.category span {
  font-weight: 700;
}
</style>
