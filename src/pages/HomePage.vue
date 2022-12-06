<template>
  <div class="container-fluid">

    <section class="row justify-content-center">
      <div class="col-8">
        <SearchBar />
      </div>
    </section>

    <section class="row py-3">

      <!-- <div v-for="m in movies" class="col-6 col-md-2 mb-2">
        <div class="rounded elevation-2 bg-light darken-30">
          <img class="img-fluid rounded-top" :src="m.poster" alt="">
          <div class="p-2">
            <h5 class="fw-bold text-center">{{ m.title }}</h5>
            <h6>{{ m.releaseDate }}</h6>
            <h6>{{ m.score }}</h6>
          </div>
        </div>
      </div> -->
      <!-- <MovieCard v-for="m in movies" :banana="'🦧'" /> -->
      <!-- NOTE props example, prop name is movie, m is the data passed -->
      <MovieCard v-for="m in movies" :movie="m" />

    </section>
    <!-- NOTE previous and next buttons -->
    <section class="row justify-content-between">
      <button class="col-4 btn btn-outline-primary" v-if="(currentPage > 1)" @click="changePage(currentPage - 1)">
        previous</button>
      <button class="col-4 btn btn-outline-danger" v-else disabled>
        previous</button>
      <div class=" col-2 text-center">{{ currentPage }}/{{ maxPage }}
      </div>
      <button class="col-4 btn btn-outline-primary" :disabled="(currentPage == maxPage)"
        @click="changePage(currentPage + 1)">next</button>
    </section>
  </div>
</template>

<script>
import { moviesService } from '../services/MoviesService.js';
import { onMounted, computed } from 'vue'
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';

export default {
  setup() {
    onMounted(() => {
      getMovies()
    })
    // NOTE when waiting functions, try to keep the async part out of on mounted
    async function getMovies() {
      try {
        await moviesService.getMovies()
      } catch (error) {
        logger.error(error)
        Pop.error(error)
      }
    }
    return {
      movies: computed(() => AppState.movies),
      currentPage: computed(() => AppState.page),
      // NOTE you can operate on these computed to some times get slight variation of the data
      maxPage: computed(() => AppState.maxPage > 10 ? 10 : AppState.maxPage),
      async changePage(number) {
        try {
          // await moviesService.getMovies(number)
          await moviesService.changePage(number)
        } catch (error) {
          logger.error(error)
          Pop.error(error)
        }

      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
