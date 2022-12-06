<template>
  <div v-if="movie" class="component d-flex justify-content-center p-5"
    :style="`background-image: url(${movie.backdrop})`">
    <div class="content">
      <img :src="movie.poster" alt="">
      <h1>{{ movie.name }}</h1>
      <p class="bg-dark text-light p-3">{{ movie.overview }}</p>
      <div class="progress bg-dark border border-primary">
        <div class="progress-bar bg-primary" role="progressbar" :style="`width: ${movie.score}%;`" aria-valuenow="25"
          aria-valuemin="0" aria-valuemax="100">{{ movie.score }}</div>
      </div>
    </div>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { moviesService } from '../services/MoviesService.js';
import { useRoute } from 'vue-router';
export default {
  setup() {
    // NOTE this gives us access to our current router location in the app
    const route = useRoute()
    // Rule 3 of vue, pages are responsible for getting api data or getting the data they rely on displaying
    onMounted(() => {
      getMovieById()
    })
    async function getMovieById() {
      try {
        // NOTE get id out of the page url
        logger.log('route', route.params.id)
        await moviesService.getMovieById(route.params.id)
      } catch (error) {
        logger.error(error)
        Pop.error(error)
      }
    }
    return {
      movie: computed(() => AppState.activeMovie)
    }
  }
};
</script>


<style lang="scss" scoped>
img {
  height: 30vh;
}

.content {
  transform: translateY(10vh);
}

.component {
  background-position: center;
  background-size: cover;
  // filter: blur(5px);
}
</style>
