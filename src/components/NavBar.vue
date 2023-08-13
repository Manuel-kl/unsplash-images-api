<template>
  <nav class="navigation">
    <div class="left">
      <router-link to="/" active-class="active">Home</router-link>
    </div>
    <div class="right">
      <router-link to="/about" active-class="active">About</router-link>
      <router-link to="/contact" active-class="active">Contact</router-link>
    </div>
  </nav>
</template>
<script setup>
</script>

<style lang='scss' scoped>
@import "../sass/_global";

.navigation {
  background-color: $primary-color;
  padding: 10px 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  .left {
    margin-left: 20px;
    a {
      color: $white;
      text-decoration: none;
      font-size: 1.2rem;
      font-family: $space-grotesk;
      font-weight: 600;
      border-radius: 7px;
      padding: 0.3rem 0.7rem;
      &:hover {
        border-bottom: 1px groove $secondary-color;
        border-radius: 7px;
      }

      @media (max-width: 500px) {
        font-size: 1rem;
      }
    }
  }

  .right {
    display: flex;
    gap: 1rem;
    a {
      color: $white;
      text-decoration: none;
      font-size: 1.2rem;
      font-family: $space-grotesk;
      font-weight: 600;
      border-radius: 7px;
      padding: 0.3rem 0.7rem;
      &:hover {
        border-bottom: 1px groove blue;
      }

      @media (max-width: 500px) {
        font-size: 1rem;
        margin-right: 0;
      }

      @media (max-width: 400px) {
        margin-right: 0;
        padding: 0.3rem 0.5rem;
      }
    }

    .active {
      border-bottom: 1px groove $secondary-color;
    }
  }

  @media (max-width: 350px) {
    padding: 10px 0.2rem;
  }
}
</style>