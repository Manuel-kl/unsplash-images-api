<template>
  <nav-bar />
  <div class="contact-page">
    <h2>Get in touch</h2>
    <div class="contact-container">
      <h4>Let's work together</h4>
      <div class="c-links">
        <a
          href="https://wa.me/+254743520021/?text=Hello%20Emmanuel..."
          target="_blank"
          id="my-button"
          ><img src="../assets/whatsapp_icon.png" alt="whatsapp" />Whatsapp</a
        >
        <a href="https://twitter.com/Manuelkl_" target="_blank" id="my-button"
          ><img src="../assets/twitter_x_logo.png" alt="twitter" />X.com</a
        >
        <a href="https://linkedin.com/in/elangat" target="_blank" id="my-button"
          ><img src="../assets/linkedIn_logo.png" alt="linkedin" />LinkedIn</a
        >
        <a href="https://manuel-kl.netlify.app/" target="_blank" id="my-button"
          ><img src="../assets/portfolio-icon.png" alt="linkedin" />Portfolio</a
        >
      </div>
      <form @submit.prevent="post" class="message">
        <div class="inp">
          <label for="name">Your Name</label>
          <input
            v-model="form.name"
            type="text"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div class="inp">
          <label for="email">Email</label>
          <input
            v-model="form.email"
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="inp">
          <label for="message">Message</label>
          <textarea
            v-model="form.message"
            name="message"
            id="message"
            cols="10"
            rows="7"
            placeholder="Type your message"
            required
          ></textarea>
        </div>
        <div class="button">
          <button type="submit" :disabled="loading">
            <template v-if="loading"> Sending... </template>
            <template v-else> SEND </template>
          </button>
        </div>
        <div class="response-wrapper">
          <p class="response" v-if="message">{{ message }}</p>
          <p class="response-error" v-else-if="error">
            Failed to send, please try again
          </p>
        </div>
      </form>
    </div>
  </div>
  <footer-component />
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";
import FooterComponent from "../components/FooterComponent.vue";
import NavBar from "../components/NavBar.vue";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const message = ref("");
const loading = ref(false);
const error = ref(null);

const post = async () => {
  loading.value = true;
  try {
    await axios.post("https://formspree.io/f/xvojkwqq", form.value);
    message.value = "Message sent successfully";
    form.value = {
      name: "",
      email: "",
      message: "",
    };
  } catch (error) {
    error.value = error;
  } finally {
    loading.value = false;
    setTimeout(() => {
      message.value = "";
    }, 5000);
  }
};
</script>
  <style lang="scss">
@import "../sass/_global";

.contact-page {
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: $main-bg-color;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }

  h2 {
    font-family: $space-grotesk;
    font-size: 2.5rem;
    color: $black;
    margin-bottom: 2rem;
    border-bottom: 1px groove $primary-color;
    border-radius: 7px;
    padding: 0 0.5rem;
  }

  .contact-container {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: $main-bg-color;
    padding: 2rem;
    border-radius: 10px;

    @media (max-width: 768px) {
      padding: 1.5rem;
    }

    h4 {
      font-family: $noto-serif;
      font-size: 1.5rem;
      color: $black;
      margin-bottom: 2rem;
    }

    .c-links {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 2rem;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      padding: 1rem;
      gap: 1rem;

      @media (max-width: 768px) {
        justify-content: flex-start;
        align-items: flex-start;
        padding: 1rem 0;
      }

      a {
        display: flex;
        flex-direction: row;
        align-items: center;
        text-decoration: none;
        color: $black;
        font-family: $noto-serif;
        font-size: 1.2rem;
        margin: 0 1rem;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        border: 1px groove $main-bg-color;
        transition: all 0.3s ease-in-out;
        width: 125px;

        &:hover {
          border: 1px groove $primary-color;
        }

        img {
          width: 1.5rem;
          height: 1.5rem;
          margin-right: 0.5rem;
        }
      }
    }

    form {
      width: 100%;
      max-width: 350px;
      display: flex;
      flex-direction: column;
      // align-items: center;
      justify-content: center;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      padding: 2rem;

      @media (max-width: 768px) {
        padding: 2rem 1rem;
        width: 85%;
      }
      .inp {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin-bottom: 1rem;

        @media (max-width: 768px) {
          width: 85%;
        }

        label {
          font-family: $space-grotesk;
          font-size: 1.2rem;
          color: $black;
          margin-bottom: 0.5rem;
        }

        input,
        textarea {
          width: 85%;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          border: 1px solid $primary-color;
          font-family: $space-grotesk;
          font-size: 1.2rem;
          color: $black;
          outline: none;
          transition: all 0.3s ease-in-out;

          @media (max-width: 768px) {
            width: 100%;
          }

          &::placeholder {
            font-family: $space-grotesk;
            font-size: 1rem;
            font-weight: 100;
            font-style: italic;
          }

          &:focus {
            border: 1px solid $secondary-color;
          }
        }
      }

      .button {
        margin: 1rem auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        button {
          width: 100%;
          padding: 0.5rem 2rem;
          border-radius: 5px;
          border: 1px solid $primary-color;
          background-color: $primary-color;
          font-family: $space-grotesk;
          font-size: 1.2rem;
          font-weight: 700;
          color: $black;
          outline: none;
          transition: all 0.3s ease;
          cursor: pointer;

          &:hover {
            background-color: $primary-color;
            border-bottom: 2px solid $secondary-color;
            color: $white;
            transition: all 0.3s ease;
          }
        }
      }
    }

    .response-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .response {
        font-family: $space-grotesk;
        font-size: 1.2rem;
        color: $primary-color;
        margin-bottom: 1rem;
      }

      .response-error {
        font-family: $space-grotesk;
        font-size: 1.2rem;
        color: $red;
        margin-bottom: 1rem;
      }
    }
  }
}
</style>