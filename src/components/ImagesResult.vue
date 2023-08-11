<template>
  <header class="navigation">
    <h1 class="logo">Unsplash Images</h1>
    <nav class="nav-links">
      <a href="#" class="nav-link">Home</a>
      <a href="#" class="nav-link">About</a>
      <a href="#" class="nav-link">Contact</a>
    </nav>
  </header>
  <div class="results">
    <div class="image-grid">
      <div v-for="photo in photos" :key="photo.id" class="image-card">
        <img :src="photo.urls.small" :alt="photo.alt_description" />
        <p>Click to view details</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const { photos, totalPhotos, totalPages } = store.state.searchPhotosModule;
</script>

<style lang="scss" scoped>
@import "../sass/_global";
.results {
  background-color: $main-bg-color;
  padding: 20px;
}
.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
      height: 100%;
      object-fit: contain;
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
.navigation {
  background-color: $primary-color;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: $noto-serif;
  font-size: 24px;
  color: $white;
  margin-left: 20px;
}

.nav-links {
  display: flex;
  gap: 20px;
  margin-right: 20px;
}

.nav-link {
  font-family: $space-grotesk;
  font-size: 16px;
  color: $white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
