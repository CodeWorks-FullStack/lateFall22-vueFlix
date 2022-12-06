<template>
  <div class="col-6 col-md-2 mb-2">
    <router-link :to="{ name: 'MovieDetails', params: { id: movie.id } }" class="selectable">
      <div class="rounded elevation-2 bg-light darken-30">
        <img class="img-fluid rounded-top" :src="movie.poster" alt="">
        <div class="p-2">
          <h5 class="fw-bold text-center movie-title">{{ movie.title }}</h5>
          <h6>{{ movie.releaseDate }}</h6>
          <h6>{{ movie.score }}</h6>
          <!-- <div>{{ banana }}</div> -->
        </div>
      </div>
    </router-link>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Movie } from '../models/Movie.js';
export default {
  // props: { banana: String },
  // NOTE props, defined to receive movie
  props: { movie: Movie },
  setup() {
    return {
      // NOTE can't pull in the single movies data from the appstate, cause which sigle movie (marker) would it grab?
      // m: computed(() => AppState.movies)
    }
  }
};
</script>


<style lang="scss" scoped>
// .movie-title {
//   word-break: break-all;
// }
</style>
