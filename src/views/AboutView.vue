<template>
  <div class="about">
    <div class="top_part">
      <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h1>
      <div class="category"><span>CATEGORY</span> par <span>Lorem Ipsum</span></div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi
      </p>
    </div>
    <div class="image_container">
      <img src="@/assets/Picture.svg" alt="img2.."/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</template>

<style scoped>
.top_part {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  margin-inline: auto;
  gap: 0.5rem;
  margin-block: 2rem;
}
.top_part > h1 {
  text-align: center;
  font-weight: 700;
  font-size: 2rem;
  line-height: 27px;
}
.top_part > p {
  text-align: center;
  font-size: 1.25rem;
}
.category span {
  font-weight: 700;
}

.image_container{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.image_container > img {
  width: 90%;
  margin-inline: auto;
}
.image_container > p{
  width: 90%;
  font-size: 1rem;
  font-family: 'Libre Baskerville', serif;
}
</style>
