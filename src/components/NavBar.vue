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
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    margin-left: 20px;
    a {
      color: $white;
      text-decoration: none;
      font-size: 1.2rem;
      font-family: $space-grotesk;
      font-weight: 600;
      &:hover {
        color: $secondary-color;
      }
    }
  }

  .right {
    margin-right: 20px;
    a {
      color: $white;
      text-decoration: none;
      font-size: 1.2rem;
      font-family: $space-grotesk;
      font-weight: 600;
      margin-right: 1rem;
      &:hover {
        color: $secondary-color;
      }
    }

    .active {
      color: $secondary-color;
    }
  }
}
</style>