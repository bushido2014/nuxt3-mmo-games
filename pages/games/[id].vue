<template>
  <div class="container py-5" v-if="game">
    <Head>
      <Title> {{ game.title }} | Game Detail </Title>
      <Meta
        name="description"
        :content="
          game.description.replace(/<\/?p[^>]*>/g, '').split('.')[0] + '.'
        "
      />
    </Head>
    <Detail :game="game" />
  </div>
</template>
<script setup lang="ts">
import type { Igame } from '~/types';

const route = useRoute();

const { data: game } = useGame<Igame[]>(route.params.id);
</script>
