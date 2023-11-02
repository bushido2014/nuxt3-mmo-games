<template>
  <div class="relative z-1">
    <div class="py-5">
      <h2 class="page-title">
        Top 10 Platform PC <Icon name="fa:windows" class="ml-2" />
      </h2>
    </div>
    <Swiper
      class="platformpc"
      :slides-per-view="5"
      :space-between="20"
      :navigation="true"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: false,
      }"
      :modules="[SwiperGrid, SwiperNavigation]"
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
      <SwiperSlide v-for="(p, index) in pc.slice(0, 10)" :key="index">
        <NuxtLink :to="`/games/${p.id}`">
          <div class="slide-wrapper">
            <img :src="p.thumbnail" class="slide-img" loading="lazy" />
            <div class="slide-bg">
              <h5 class="slide-title">
                {{ p.title }}
              </h5>
            </div>
          </div>
        </NuxtLink>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { Igame } from '~/types';
const { data: pc } = useplPC<Igame[]>();
</script>
