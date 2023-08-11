<template>
  <div>
    <h1>Not Found</h1>
    <router-link to="/">
      <button>Go Home</button>
    </router-link>
  </div>
</template>
<script>
</script>

<style lang='scss' scoped>
@import "../sass/_global";
h1 {
  font-size: 3rem;
  margin-bottom: 2rem;
  font-family: $noto-serif;
  color: $black;
}
button {
  padding: 0.7rem 1rem;
  border-radius: 7px;
  border: 1px solid $primary-color;
  background-color: $primary-color;
  color: $white;
  font-size: 1.1rem;
  font-family: $space-grotesk;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: $secondary-color;
    border: 1px solid $secondary-color;
  }
}
</style>