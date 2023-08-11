<template>
  <footer>
    <div class="name">
      Langat Emmanuel <span>Have a great {{ fullDay }}</span>
    </div>
    <div class="social-links">
      <a href="https://x.com/Manuelkl_" target="_blank">
        <img src="../assets/twitter_x_logo.png" alt="x_icon" />
      </a>
      <a href="https://github.com/manuel-kl/" target="_blank">
        <img src="../assets/github_icon.png" alt="github_icon" /> </a
      ><a href="https://www.linkedin.com/in/elangat/" target="_blank">
        <img src="../assets/linkedIn_logo.png" alt="linkedIn_icon" />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=254743520021&text=Hello%20Manuel..."
        target="_blank"
      >
        <img src="../assets/whatsapp_icon.png" alt="whatsapp_icon" />
      </a>
    </div>
  </footer>
</template>
<script setup>
import { computed } from "vue";

const now = new Date();
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayIndex = now.getDay();
const fullDay = computed(() => daysOfWeek[dayIndex]);
</script>

<style lang='scss' scoped>
@import "../sass/_global";

footer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 20px;
  background-color: $main-bg-color;
  border-top: 1px solid $primary-color;
  .name {
    font-size: 1.5rem;
    font-weight: 700;
    font-family: $space-grotesk;
    padding: 1rem;

    span {
      font-size: 1rem;
      padding: 0.5rem;
      border-left: 2px solid $primary-color;
      font-weight: 400;
      font-family: $space-grotesk;
      font-style: italic;
      color: $primary-color;
    }
  }
  .social-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    img {
      width: 45px;
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.1);
        transition: all 0.3s ease;
        background-color: $primary-color;
        border-radius: 20%;
      }
    }
  }
}
</style>