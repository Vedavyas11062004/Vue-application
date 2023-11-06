<script setup></script>
<template>
  <span class="title">TITLE SECTION LIGHT</span>
  <div class="tittleSection_container">
    <div class="newscard_container">
      <div class="top_part">
        <img src="@/assets/Picture.svg" alt="img.." />
      </div>
      <div class="bottom_part">
        <div class="category">
          <span> <RouterLink to="/category">CATEGORY</RouterLink></span> par
          <span>Lorem Ipsum</span>
        </div>
        <h2>
          <RouterLink to="/about/625"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</RouterLink
          >
        </h2>
      </div>
    </div>
    <div class="newsContainer_div">
      <div class="news_preveiw">
        <img src="@/assets/image.svg" alt="img.." />
        <div class="rightPart">
          <div class="category"><span> <RouterLink to="/category">CATEGORY</RouterLink></span> par <span>Lorem Ipsum</span></div>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h2>
        </div>
      </div>
      <div class="news_preveiw">
        <img src="@/assets/image.svg" alt="img.." />
        <div class="rightPart">
          <div class="category"><span> <RouterLink to="/category">CATEGORY</RouterLink></span>par <span>Lorem Ipsum</span></div>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h2>
        </div>
      </div>
      <div class="news_preveiw">
        <img src="@/assets/image.svg" alt="img.." />
        <div class="rightPart">
          <div class="category"><span> <RouterLink to="/category">CATEGORY</RouterLink></span> par <span>Lorem Ipsum</span></div>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h2>
        </div>
      </div>
    </div>

    <!-- btn -->
  </div>
  <div class="btn_container">
    <button class="Btn">READ MORE</button>
  </div>
  <div class="line_div">
    <img src="@/assets/Line.svg" class="line" />
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
  text-decoration: none;
}

.bottom_part > h2 > a:hover {
  color: rgb(3, 3, 173);
  text-decoration: underline;
}
.bottom_part > p {
  text-align: center;
}
.category span a{
  font-weight: 700;
  color: black;
  text-decoration: none;
}
.category span a:hover{
  color: rgb(3, 3, 173);
  text-decoration: underline;
}

.category span{
  font-weight: 700;
}

.news_preveiw {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-inline: auto;
  gap: 1rem;
}
.rightPart {
  margin-block: 1rem;
}
.rightPart h2 {
  font-size: 1.1rem;
  font-weight: 600;
}

.Btn {
  background: #003c57;
  color: white;
  border: none;
  padding-block: 0.75rem;
  padding-inline: 1.5rem;
  margin-block: 1rem;
  font-weight: 600;
  font-size: 1rem;
}

.line_div {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-block: 1rem;
}

.btn_container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-block: 1rem;
}
.title {
  display: block;
  width: 90%;
  margin-inline: auto;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
}

.newsContainer_div {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

@media (min-width: 650px) {
  .tittleSection_container {
    width: 95%;
    margin-inline: auto;
    display: flex;
    align-items: flex-start;
  }
  .news_preveiw {
    align-items: flex-start;
  }

  .rightPart {
    margin-block: 0px;
    width: 200px;
  }

  .news_preveiw {
    height: 103px;
    overflow: hidden;
  }
}
</style>
