<template>
  <div class="skeleton-grid">
    <div v-for="n in 10" :key="n" class="skeleton-card">
      <div class="skeleton-image"></div>
    </div>
  </div>
</template>
<script setup>
</script>
<style lang='scss' scoped>
@import "../sass/_global";
.skeleton-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  background-color: $main-bg-color;
  gap: 20px;
  padding: 1rem;

  .skeleton-card {
    border-radius: 7px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 5px 10px;
    z-index: 1;
    overflow: hidden;

    .skeleton-image {
      width: 100%;
      padding: 5px 10px;
      height: 150px;

      background: linear-gradient(
        to right,
        $mint-color 0%,
        $main-bg-color 50%,
        $mint-color 100%
      );

      background-size: 200% 100%;

      animation: shimmer 3s ease-in-out infinite;

      @keyframes shimmer {
        0% {
          background-position: -200% 0;
        }
        100% {
          background-position: 200% 0;
        }
      }
    }
  }
}
</style>