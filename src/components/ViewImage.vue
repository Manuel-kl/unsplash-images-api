<template>
  <nav-bar />
  <skeleton-loading v-if="loading" />
  <div v-if="!loading" class="back">
    <button @click="goBack">Go Back</button>
  </div>
  <div class="photo">
    <div v-if="!loading" class="img">
      <img :src="imgUrl.full" :alt="photo.alt_description" />
    </div>
    <div>
      <div class="photo-details" v-if="!loading">
        <div class="image-description">
          <h4>
            Description: <span>{{ photo.description }}</span>
          </h4>
          <h4>
            Downloads: <span>{{ photo.downloads }}</span>
          </h4>
          <h4>
            Likes: <span>{{ photo.likes }}</span>
          </h4>
          <h4>
            Views: <span>{{ photo.views }}</span>
          </h4>
          <h4>
            Created at:
            <span>{{ new Date(photo.created_at) }}</span>
          </h4>
        </div>
        <div class="owner-details">
          <h4>
            Owner: <span>{{ user.first_name }}</span>
          </h4>
          <h4>
            Instagram: <span>{{ user.instagram_username }}</span>
          </h4>
          <h4>
            Location: <span>{{ user.location }}</span>
          </h4>
          <h4 class="portfolio">
            Portfolio link:
            <span>
              <a :href="user.portfolio_url">Visit</a>
            </span>
          </h4>
        </div>
      </div>
      <div class="download">
        <button>
          <a :href="links.download" target="_blank">Download</a>
        </button>
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
const photo = ref({});
const loading = ref(false);
const imgUrl = ref("");
const user = ref("user");
const links = ref({});

function goBack() {
  router.go(-1);
}

async function getPhoto() {
  loading.value = true;
  const id = router.currentRoute.value.params.id;
  await store.dispatch("ImageDetailsModule/fetchPhoto", id);
  photo.value = store.state.ImageDetailsModule.imageDetails;
  imgUrl.value = photo.value.urls;
  user.value = photo.value.user;
  links.value = photo.value.links;
  setTimeout(() => {
    loading.value = false;
  }, 1000);
}

onMounted(() => {
  getPhoto();
});
</script>
<style lang='scss' scoped>
@import "../sass/_global";

.back {
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem 0 0.5rem 2rem;
  background-color: $main-bg-color;

  button {
    padding: 0.5rem 1.5rem;
    background-color: $primary-color;
    border: 1px solid $primary-color;
    border-radius: 5px;
    transition: transform 0.5s ease;
    font-family: $space-grotesk;
    font-size: 1.2rem;
  }

  button:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 0.5s ease;
    border-bottom: 1px solid $secondary-color;
    border-right: 1px solid $secondary-color;
  }

  button:active {
    transform: scale(0.9);
    transition: transform 0.5s ease;
  }
}
.photo {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 1rem;
  padding: 2rem;
  background-color: $main-bg-color;
  min-height: 100vh;

  .img {
    img {
      width: 100%;
      object-fit: contain;
      transition: transform 0.5s ease;
    }

    img:hover {
      cursor: pointer;
    }

    img:active {
      transform: scale(0.9);
      transition: transform 0.5s ease;
    }
  }

  .photo-details {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    background-color: $main-bg-color;
    width: 100%;

    .image-description {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      padding: 1rem;
      border-radius: 7px;

      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 500px) {
        width: 80%;
        margin: auto;
      }
      h4 {
        margin-bottom: 1rem;
        font-family: $space-grotesk;
        font-size: 1.4rem;
        font-weight: 500;
        color: $primary-color;

        span {
          font-weight: 400;
          font-size: 1rem;
          color: $black;
          font-family: $space-grotesk;

          @media (max-width: 768px) {
            font-size: 1rem;
          }
        }
      }
    }

    .owner-details {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      padding: 1rem;
      border-radius: 7px;

      h4 {
        margin-bottom: 1rem;
        font-family: $space-grotesk;
        font-size: 1.4rem;
        font-weight: 500;
        color: $primary-color;

        span {
          font-weight: 400;
          font-size: 1rem;
          color: $black;
          font-family: $space-grotesk;

          a {
            color: blue;
            text-decoration: none;
            font-family: $space-grotesk;
            padding: 0.2rem 0.5rem;
            border: 2px solid $main-bg-color;
            border-bottom: 2px groove $primary-color;
            border-radius: 7px;

            &:hover {
              border: 2px groove $primary-color;
            }
          }
        }
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 500px) {
        width: 80%;
        margin: auto;
      }
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }
    @media (max-width: 500px) {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
  .download {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;

    button {
      padding: 1rem;
      background-color: $primary-color;
      border: 1px solid $primary-color;
      border-radius: 5px;
      transition: transform 0.5s ease;

      @media (max-width: 768px) {
        padding: 0.5rem;
      }
    }

    button:hover {
      cursor: pointer;
      transform: scale(1.1);
      transition: transform 0.5s ease;
      border-bottom: 1px solid $secondary-color;
      border-right: 1px solid $secondary-color;
    }

    button:active {
      transform: scale(0.9);
      transition: transform 0.5s ease;
    }

    a {
      text-decoration: none;
      color: $white;
      font-family: $space-grotesk;
      font-size: 1.2rem;

      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>
