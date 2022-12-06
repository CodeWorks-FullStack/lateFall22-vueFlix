<template>
  <div class="row">
    <!-- NOTE ----------------------------- .prevent prevents the default event action from happening -->
    <form action="" class="input-group" @submit.prevent="searchMovie">
      <!-- <input type="text" class="form-control" v-model="search"> -->
      <input type="text" class="form-control" v-model="search.query">
      <button class="btn btn-info w-25"><i class="mdi mdi-magnify"></i></button>
    </form>

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { moviesService } from '../services/MoviesService.js';
import { useRouter } from 'vue-router';
export default {
  setup() {
    // const search = ref('')
    const search = reactive({
      query: ''
    })
    return {
      search,
      async searchMovie() {
        try {
          await moviesService.searchMovies(search)
        } catch (error) {
          logger.error(error)
          Pop.error(error)
        }
      }
    }
  }
};
</script>


<style lang="scss" scoped>

</style>
