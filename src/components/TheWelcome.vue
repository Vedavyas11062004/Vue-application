<script setup>
import { ref } from 'vue'
const popUp = ref(true)
const removePopUp = () => {
  popUp.value = false
};
</script>

<template>
  <div v-if="popUp" class="popUp">
    <p>Website openning, lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
    <div class="remove">
      <img src="@/assets/cross.svg" alt="crosssvg.." @click="removePopUp" class="crossBtn" />
    </div>
  </div>
</template>

<style>
.popUp {
  width: 100%;
  /* height: 70px; */
  background: #ff5703;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-block: 1rem;
}
.popUp > p{
    text-align: center;
    width: 95%;
    margin-bottom: 0;
}
.remove {
  position: absolute;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 2.5%;
  top: 5%;
}
.remove:hover{
    cursor: pointer;
}
.crossBtn{
    width: 10px;
    height: 12px;
}
</style>
