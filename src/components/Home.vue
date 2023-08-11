<template>
  <div class="home">
    <h1>Search Images</h1>
    <form class="search" @submit.prevent="searchImages">
      <input
        type="text"
        placeholder="Search..."
        v-model="searchTerm"
        required
      />
      <button v-if="!loading" type="submit">Search</button>
      <img v-if="loading" src="../assets/loader.gif" alt="" />
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const searchTerm = ref("");
const loading = ref(false);
const store = useStore();
const router = useRouter();

async function searchImages() {
  loading.value = true;
  router.push(`/results/${searchTerm.value}`);
  loading.value = false;
}
</script>
<style lang='scss' scoped>
@import "../sass/_global";
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: $main-bg-color;
  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
    font-family: $noto-serif;
    color: $black;
  }
  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    input {
      width: 40%;
      min-width: 200px;
      border-radius: 7px;
      border: 1px solid $primary-color;
      padding: 0.7rem 1rem;
      font-size: 1.1rem;
      font-family: $space-grotesk;

      &:focus {
        outline: none;
        border: 1px solid $secondary-color;
      }

      &::placeholder {
        color: $primary-color;
        font-style: italic;
      }
    }
    button {
      padding: 0.7rem 1rem;
      border-radius: 0 0.5rem 0.5rem 0;
      border: 1px solid $primary-color;
      background-color: $primary-color;
      color: $white;
      font-size: 1rem;
      font-family: $noto-serif;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      margin-left: -0.5rem;
      &:hover {
        background-color: $primary-color;
        color: $black;
      }
    }
    img {
      width: 2rem;
      margin-left: -1rem;
      padding: 0.45rem 2rem;
      background-color: $primary-color;
      border-radius: 0 0.5rem 0.5rem 0;
    }
  }
}
</style>