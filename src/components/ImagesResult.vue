<template>
  <NavBar />
  <skeleton-loading v-if="loading" />
  <div v-if="!loading" class="results">
    <div class="image-grid">
      <div
        v-for="photo in photos"
        :key="photo.id"
        class="image-card"
        @click="showImage(photo.id)"
      >
        <img :src="photo.urls.small" :alt="photo.alt_description" />
        <p>Click to view details</p>
      </div>
    </div>
  </div>
  <footer-component />
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import FooterComponent from "./FooterComponent.vue";
import NavBar from "./NavBar.vue";
import SkeletonLoading from "./SkeletonLoading.vue";

const store = useStore();
const router = useRouter();
const searchTerm = router.currentRoute.value.params.query;
const photos = ref([]);
const loading = ref(false);

const payload = {
  query: searchTerm,
};

onMounted(() => {
  searchPhotos();
});

async function searchPhotos() {
  loading.value = true;
  await store.dispatch("searchPhotosModule/fetchPhotos", payload);
  photos.value = store.state.searchPhotosModule.photos;
  loading.value = false;
}

function showImage(id) {
  router.push(`/photo/${id}`);
}
</script>

<style lang="scss" scoped>
@import "../sass/_global";
.results {
  background-color: $main-bg-color;
  padding: 20px;
  min-height: 100vh;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;

  .image-card {
    border-radius: 7px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: all 0.3s ease-out;
    padding: 5px 10px;
    position: relative;
    z-index: 1;

    &:hover {
      transform: scale(1.05);
      background-color: $mint-color;
      transition: all 0.3s ease-in;

      img {
        opacity: 0.5;
      }

      p {
        opacity: 1;
      }
    }

    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      border-radius: 7px;
      position: relative;
      transition: all 0.5s ease-in;
      z-index: 2;
    }

    p {
      position: relative;
      opacity: 0;
      font-family: $space-grotesk;
      font-size: 16px;
      color: $white;
      background-color: $primary-color;
      width: fit-content;
      margin: auto;
      padding: 5px 10px;
      border-radius: 7px;
      text-align: center;
      z-index: 3;
      top: -50%;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
