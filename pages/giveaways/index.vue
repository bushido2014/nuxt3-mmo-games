<template>
  <div class="container py-5">
    <div class="pb-4">
      <h2 class="page-title">
        <Icon name="fa-solid:gift" class="pr-2" />Giveaways
      </h2>
      <p>
        All giveaways are first come, first served, so join now and claim your
        loot! It's free!
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="g in giveaways" :key="g.id">
        <UCard>
          <img :src="g.main_image" :alt="g.title" class="w-full" />
          <div class="h-14 my-4">
            <h3 class="text-xl uppercase">{{ g.title }}</h3>
          </div>
          <div>
            <div class="progress">
              <div
                :class="{
                  'bg-orange-400': parseInt(g.keys_left, 10) < 50,
                  'bg-sky-500': parseInt(g.keys_left, 10) >= 50,
                }"
                :style="{ width: g.keys_left }"
                class="progress-bar"
                role="progressbar"
                :aria-valuenow="g.keys_left"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <span class="pr-4">Key Left</span>
            <span class="text-lg font-bold">{{ g.keys_left }}</span>
          </div>
          <div v-html="g.short_description" class="py-4"></div>

          <a :href="g.giveaway_url" target="_blank" class="button-link">
            Source Link <Icon name="fa6-solid:link" class="ml-1" size="16"
          /></a>
        </UCard>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const { data: giveaways } = useGiveawais();

useHead({
  title: 'MMO &amp; MMORPG Keys, Codes &amp; Giveaways! ',
  meta: [
    {
      name: 'description',
      content:
        'Get free beta keys, gift codes, in-game rewards, starter packs, free cash shop items, and lots of other freebies',
    },
  ],
});
</script>
<style scoped>
.progress {
  @apply mb-2 h-2.5 rounded bg-gray-100;
}
.progress-bar {
  @apply overflow-hidden h-2;
}
</style>
