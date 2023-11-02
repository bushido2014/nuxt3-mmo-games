<template>
  <NuxtLink :to="`/games/${game.id}`" class="game-card">
    <UCard>
      <div class="relative overflow-hidden">
        <img :src="game.thumbnail" class="game-card__thumbnail" />
      </div>

      <div class="game-card__body">
        <div class="flex justify-between h-[48px]">
          <div class="game-card__body--title">{{ game.title }}</div>
        </div>

        <div class="py-2 h-28 border-b border-t">
          <p class="game-card__text">
            {{ game.short_description.slice(0, 112) }}
            {{ game.short_description.length > 112 ? '...' : '' }}
          </p>
        </div>
      </div>

      <div class="game-card__footer">
        <span class="game-card__potion">
          <template v-if="game.platform === 'PC (Windows)'">
            <Icon name="fa:windows" />
          </template>
          <template v-else-if="game.platform === 'Web Browser'">
            <Icon name="fa:window-maximize" />
          </template>
        </span>
        <span class="game-card__category">{{ game.genre }}</span>
      </div>
    </UCard>
  </NuxtLink>
</template>
<script setup lang="ts">
import { Igame } from '~/types';

defineProps<{
  game: Igame;
}>();
</script>
<style scoped>
.game-card {
  @apply transition duration-300 hover:shadow-xl;
}
.game-card:hover .game-card__thumbnail {
  @apply hue-rotate-60;
}
.game-card__thumbnail {
  @apply rounded-lg w-full transition duration-300;
}

.game-card__body {
  @apply p-4;
}
.game-card__body--title {
  @apply text-base font-bold;
}
.game-card__text {
  @apply text-sm;
}

.game-card__footer {
  @apply flex justify-between;
}
.game-card__footer span {
  @apply text-sm p-2 rounded-md bg-gray-200  dark:bg-slate-800;
}
.game-card__category {
  @apply text-lg;
}
</style>
