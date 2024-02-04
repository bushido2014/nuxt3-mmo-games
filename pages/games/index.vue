<template>
  <div class="container py-5">
    <div class="pb-2">
      <h2 class="page-title">All Games</h2>
    </div>
    <div class="py-4">
      <UInput
        v-model="searchQuery"
        @input="searchGames"
        placeholder="Search Game"
        size="lg"
        class="lg:max-w-[290px] w-full"
      />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card v-for="game in displayedGames" :key="game.id" :game="game" />
    </div>
    <div class="py-6 text-center">
      <vue-awesome-paginate
        :total-items="totalGames"
        :items-per-page="itemsPerPage"
        v-model="currentPage"
        :max-pages-shown="4"
        :on-click="onClickHandler"
        paginate-buttons-class="icon"
        active-page-class="active"
        next-button-class="next"
      />
    </div>
    <div ref="top"></div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import type { Igame } from '~/types';
const currentPage = ref(1);
const itemsPerPage = 24;
const searchQuery = ref('');

const { data: games } = useGames<Igame[]>();

const onClickHandler = (page) => {
  currentPage.value = page;
  scrollToTop();
};

const totalGames = computed(() => {
  if (Array.isArray(games.value)) {
    return games.value.length;
  } else {
    return 0;
  }
});

const displayedGames = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const filteredGames = filterGamesBySearchQuery(
    games.value,
    searchQuery.value
  );
  return Array.isArray(filteredGames)
    ? filteredGames.slice(startIndex, endIndex)
    : [];
});

const filterGamesBySearchQuery = (games, query) => {
  if (!query) {
    return games;
  }
  return games.filter((game) =>
    game.title.toLowerCase().includes(query.toLowerCase())
  );
};

const startIndex = (currentPage.value - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  scrollToTop();
});
useHead({
  title: 'Best Free MMO Games for PC and Browser',
  meta: [
    {
      name: 'description',
      content: 'Get the top 394 free MMO games for PC and Browser',
    },
  ],
});
</script>
