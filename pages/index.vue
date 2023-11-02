<template>
  <div class="container py-5">
    <div class="pb-4">
      <h2 class="page-title">Popular Games</h2>
    </div>
    <Popular />
    <PlatformPC />
    <PlatformBrowser />
  </div>
</template>
<script setup lang="ts">
useHead({
  title: 'MMO Popular Games, Top 10 PC Platform, Top 10 Platform Web Browser',
  meta: [
    {
      name: 'description',
      content:
        'Your best source for MMOs, MMORPG Games and Multiplayer Online Games. Get exclusive coverage, giveaways, news and more',
    },
  ],
});
</script>
