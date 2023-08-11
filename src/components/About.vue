<template>
  <nav-bar />
  <div class="about-wrapper">
    <div class="about">
      <h2>About Unsplash Vue App</h2>
      <p>
        Welcome to the Unsplash Vue App, your gateway to stunning, high-quality
        images from Unsplash. The website harnesses the power of the Unsplash
        API to bring you a diverse collection of images that can inspire and
        enhance your creative projects.
      </p>

      <h3>Technologies Used</h3>
      <p>This app was built using the following technologies and libraries:</p>
      <ul>
        <li>
          <span>Vue.js: </span>A progressive JavaScript framework for building
          user interfaces.
        </li>
        <li>
          <span>Vuex: </span>State management pattern and library for Vue.js
          applications.
        </li>
        <li>
          <span>Vue Router: </span>Official router for Vue.js applications.
        </li>
        <li>
          <span>Axios:</span> A promise-based HTTP client for making API
          requests.
        </li>
        <li>
          <span>SCSS:</span> Syntactically Awesome Style Sheets for enhanced
          styling.
        </li>
      </ul>

      <h3>About Me</h3>
      <p>
        I'm Langat Emmanuel, the creator of this Unsplash Vue website. I'm a
        passionate web developer with a keen interest in creating meaningful and
        visually appealing applications. My goal with this app is to provide you
        with a beautiful and user-friendly way to explore and discover the vast
        world of Unsplash images. If you have any feedback or suggestions, feel
        free to
        <span><router-link to="/contact"> get in touch! </router-link></span>
      </p>

      <p>Thank you for using Unsplash Vue App and happy exploring!</p>
    </div>
  </div>
  <footer-component />
</template>

<script setup>
import FooterComponent from "./FooterComponent.vue";
import NavBar from "./NavBar.vue";
</script>

<style lang="scss" scoped>
@import "../sass/_global";
.about-wrapper {
  background-color: $main-bg-color;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  .about {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    margin: auto;

    h2,
    h3 {
      width: fit-content;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      font-size: 1.5rem;
      padding: 0.5rem 1rem;
      border-radius: 7px;
      margin-bottom: 1.5rem;
      font-family: $noto-serif;
      color: $primary-color;
    }
    h3 {
      margin-top: 2rem;
    }

    p {
      font-size: 1.1rem;
      margin-bottom: 1rem;
      font-family: $noto-serif;
      max-width: 800px;

      span {
        padding: 0.1rem 0.7rem 0.1rem 0.5rem;
        border-radius: 7px;
        border-bottom: 2px groove $primary-color;

        a {
          color: $black;
          text-decoration: none;
        }
      }
    }

    ul {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      font-family: $noto-serif;
      color: $black;
      padding: 1rem;
      border-radius: 7px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }

    li {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      font-family: $noto-serif;
      color: $black;
      list-style: none;
      margin-left: 1rem;

      span {
        font-weight: bold;
      }
    }

    a {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      font-family: $noto-serif;
      color: $black;
    }
  }
}
</style>
