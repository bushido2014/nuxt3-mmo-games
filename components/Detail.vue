<template>
  <div class="container py-5" v-if="game">
    <div class="game-wrapper">
      <div class="game-image">
        <div class="sticky top-0">
          <img :src="game.thumbnail" class="w-full game-thumbnail" />

          <div class="py-4 mt-8">
            <NuxtLink :to="`${game.game_url}`" class="game-url">
              <span class="text-lg font-medium">
                Play Now <Icon name="fa-solid:sign-in-alt" class="ml-1"
              /></span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="game-details">
        <div class="flex justify-between items-center mb-4">
          <h3>About {{ game.title }}</h3>
          <span class="game-details__status">{{ game.status }}</span>
        </div>

        <div class="game-details__text" v-html="game.description"></div>
        <h3>Additional Information</h3>
        <hr class="py-4" />
        <div class="game-details__list">
          <div>
            <p>Title</p>
            <span>{{ game.title }}</span>
          </div>

          <div>
            <p>Developer</p>
            <span>{{ game.developer }}</span>
          </div>
          <div>
            <p>Publisher</p>
            <span>{{ game.publisher }}</span>
          </div>
          <div>
            <p>Release Date</p>
            <span>{{ game.release_date }}</span>
          </div>
          <div>
            <p>Genre</p>
            <span>{{ game.genre }}</span>
          </div>
          <div>
            <p>Platform</p>

            <template v-if="game.platform === 'Windows'">
              <Icon name="fa:windows" /> - Windows
            </template>
            <template v-else-if="game.platform === 'Web Browser'">
              <Icon name="fa:window-maximize" /> - Web Browser
            </template>
          </div>
        </div>
        <div class="game-details__screenshots py-4">
          <h3>{{ game.title }} Screenshots</h3>
          <hr class="py-4" />
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 py-4">
            <div v-for="screenshot in game.screenshots" :key="screenshot.id">
              <img
                :src="screenshot.image"
                class="screenshot cursor-pointer"
                @click="openModal(screenshot.image)"
              />
            </div>
          </div>
          <UModal v-model="isOpen">
            <img :src="modalImage" alt="" />
          </UModal>
        </div>
        <div
          class="game-details__system"
          v-if="game.minimum_system_requirements"
        >
          <h3>Minimum System Requirements</h3>
          <hr class="py-4" />
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <p>Operational System - SO</p>
              <span>{{ game.minimum_system_requirements.os }}</span>
            </div>
            <div>
              <p>Processor</p>
              <span>{{ game.minimum_system_requirements.processor }}</span>
            </div>
            <div>
              <p>Memory</p>
              <span>{{ game.minimum_system_requirements.memory }}</span>
            </div>
            <div>
              <p>Graphics</p>
              <span>{{ game.minimum_system_requirements.graphics }}</span>
            </div>
            <div>
              <p>Storage</p>
              <span>{{ game.minimum_system_requirements.storage }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps(['game']);
const isOpen = ref(false);
const modalImage = ref('');

const openModal = (image) => {
  modalImage.value = image;
  isOpen.value = true;
};
</script>
<style scoped>
.game-wrapper {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-6;
}
.game-wrapper h3 {
  @apply text-2xl mb-3;
}
.game-image {
  @apply relative;
}
.game-details__list {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
}
.game-details__list div {
  @apply p-4;
}
.game-details__status {
  @apply bg-amber-300 text-white font-semibold rounded-md px-4 py-2;
}
.game-details__text {
  @apply mb-5;
}
.game-details__list p,
.game-details__system p {
  @apply mb-2 text-lg text-slate-500;
}
</style>
