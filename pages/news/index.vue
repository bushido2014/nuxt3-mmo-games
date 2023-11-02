<template>
  <div class="container py-5">
    <div class="pb-4">
      <h2 class="page-title">Latest News</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="n in displayedNews" :key="n.id">
        <UCard>
          <div>
            <img :src="n.thumbnail" class="article-thumbnail" />
          </div>
          <div class="h-28">
            <h3 class="article-title">
              {{ n.title.slice(0, 65) }}
              {{ n.title.length > 65 ? '...' : '' }}
            </h3>
          </div>
          <UButton label="Read More" @click="openModal(n.article_content)" />
          <UModal v-model="isOpen">
            <div class="p-5">
              <div class="p-1 text-right">
                <UButton
                  color="gray"
                  variant="ghost"
                  icon="i-heroicons-x-mark-20-solid"
                  class="-my-1"
                  @click="closeModal"
                />
              </div>
              <div v-html="modalArticle" class="modal-article"></div>
            </div>
          </UModal>
        </UCard>
      </div>
    </div>
    <div class="py-6 text-center">
      <vue-awesome-paginate
        :total-items="totalNews"
        :items-per-page="itemsPerPage"
        v-model="currentPage"
        :max-pages-shown="3"
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

const currentPage = ref(1);
const itemsPerPage = 12;

const { data: news } = useLastNews();

const modalArticle = ref('');
const isOpen = ref(false);

const openModal = (article_content) => {
  modalArticle.value = article_content;
  isOpen.value = true;
};

const closeModal = () => {
  isOpen.value = false;
};

const onClickHandler = (page) => {
  currentPage.value = page;
  scrollToTop();
};

const totalNews = computed(() => {
  if (Array.isArray(news.value)) {
    return news.value.length;
  } else {
    return 0;
  }
});

const displayedNews = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return Array.isArray(news.value)
    ? news.value.slice(startIndex, endIndex)
    : [];
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  scrollToTop();
});

useHead({
  title: 'MMO News',
  meta: [
    {
      name: 'description',
      content:
        'Breaking MMO and MMORPG news, exclusives, updates and all the latest top stories in MMO Gaming and Multiplayer Online Games',
    },
  ],
});
</script>
<style scoped>
.article-thumbnail {
  @apply rounded shadow my-3 w-full;
}
.article-title {
  @apply py-5 text-sm font-bold;
}
</style>
