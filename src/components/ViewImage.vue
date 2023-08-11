<template>
  <skeleton-loading v-if="loading" />
  <div class="photo">
    <div v-if="!loading" class="img">
      <img :src="imgUrl.full" :alt="photo.alt_description" />
    </div>
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
        <h4>
          Portfolio link: <span>{{ user.portfolio_url }}</span>
        </h4>
      </div>
      <div class="download">
        <button>
          <a :href="links.download" target="_blank">Download</a>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import SkeletonLoading from "./SkeletonLoading.vue";

const store = useStore();
const router = useRouter();
const photo = ref({});
const loading = ref(false);
const imgUrl = ref("");
const user = ref("user");
const links = ref({});

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
    padding: 0 1rem;
    background-color: $main-bg-color;

    .image-description {
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
        }
      }
    }

    .owner-details {
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
        }
      }
    }

    .download {
      button {
        padding: 1rem;
        background-color: $primary-color;
        border: 1px solid $primary-color;
        border-radius: 5px;
        transition: transform 0.5s ease;
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
      }
    }
  }
}
</style>