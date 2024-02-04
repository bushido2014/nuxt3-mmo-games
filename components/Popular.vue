<template>
  <div class="relative py-4">
    <Swiper
      class="popular"
      :slides-per-view="5"
      :space-between="20"
      :loop="true"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: false,
      }"
      :modules="[SwiperAutoplay, SwiperGrid]"
      :breakpoints="{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
          grid: {
            rows: 1,
          },
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
          grid: {
            rows: 1,
          },
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 10,
          grid: {
            rows: 1,
          },
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 15,
          grid: {
            rows: 1,
            fill: 'row',
          },
        },
        1024: {
          slidesPerView: 5,
          grid: {
            rows: 1,
            fill: 'row',
          },
        },
      }"
      :grid="{
        rows: 1,
        fill: 'row',
      }"
    >
      <SwiperSlide v-for="p in popularity" :key="p.id">
        <NuxtLink :to="`/games/${p.id}`">
          <div class="slide-wrapper overflow-hidden">
            <img :src="p.thumbnail" class="slide-img" loading="lazy" />
            <div class="slide-bg">
              <h5 class="slide-title">
                {{ p.title }}
              </h5>
              <hr class="mt-3 mb-1 border-gray-500" />
              <div class="flex justify-between">
                <span class="text-white text-sm">{{ p.genre }}</span
                ><span class="text-white text-sm">{{ p.platform }}</span>
              </div>
            </div>
          </div>
        </NuxtLink>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { Igame } from '~/types';
const { data: popularity } = usePopular<Igame[]>();
</script>
<style scoped></style>
