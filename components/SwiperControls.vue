<script setup lang="ts">
const swiper = useSwiper();
</script>

<template>
  <div class="swiper-controls-container py-2">
    <div class="swiper-controls">
      <button @click="swiper.slidePrev()" class="slide-prev">
        <Icon name="fa-solid:chevron-left" />
      </button>
      <button @click="swiper.slideNext()" class="slide-next">
        <Icon name="fa-solid:chevron-right" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.swiper-controls {
  @apply flex;
}
.slide-next,
.slide-prev {
  @apply !w-10 !h-10 
  rounded-full bg-sky-500
  flex justify-center 
  items-center
  transition-colors 
  delay-200 hover:bg-sky-700 mx-1;
}
</style>
