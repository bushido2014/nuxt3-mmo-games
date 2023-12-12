<template>
  <header class="header">
    <div class="container">
      <nav class="flex justify-between">
        <div>
          <NuxtLink :to="`/`">
            <div>
              <Icon
                name="game-icons:console-controller"
                size="40"
                class="logo-game"
              />
              <span> MMOBomb</span>
            </div>
          </NuxtLink>
        </div>
        <div class="flex items-center">
          <ul class="nav">
            <li>
              <NuxtLink :to="`/games`" class="nav-link"> Games </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="`/giveaways`" class="nav-link">
                Giveaways
              </NuxtLink>
            </li>
            <li><NuxtLink :to="`/news`" class="nav-link"> News </NuxtLink></li>
          </ul>

          <ClientOnly>
            <UButton
              :icon="
                isDark
                  ? 'i-heroicons-moon-20-solid'
                  : 'i-heroicons-sun-20-solid'
              "
              color="gray"
              variant="ghost"
              aria-label="Theme"
              @click="isDark = !isDark"
            />
            <template #fallback>
              <div class="w-8 h-8" />
            </template>
          </ClientOnly>
          <div class="lg:hidden">
            <Icon
              name="nimbus:menu"
              size="32"
              @click="isOpen = true"
              class="cursor-pointer"
            />
          </div>
        </div>
      </nav>
    </div>
    <USlideover v-model="isOpen">
      <div class="p-5">
        <div class="p-1 text-left">
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="closeMenu"
          />
        </div>

        <ul class="mobile-menu border-t py-4">
          <li>
            <NuxtLink :to="`/`" class="mobile-menu__link"> Home </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="`/games`" class="mobile-menu__link">
              Games
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="`/giveaways`" class="mobile-menu__link">
              Giveaways
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="`/news`" class="mobile-menu__link"> News </NuxtLink>
          </li>
        </ul>
      </div>
    </USlideover>
  </header>
</template>
<script setup>
const isOpen = ref(false);
const closeMenu = () => {
  isOpen.value = false;
};
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  },
});
</script>
<style scoped>
.header {
  @apply py-4 relative border-b;
}
.nav .router-link-exact-active {
  @apply text-sky-500;
}
.nav {
  @apply lg:flex items-center hidden;
}
.nav-link {
  @apply px-3;
}
.mobile-menu li {
  @apply px-2 py-3;
}
.mobile-menu .router-link-exact-active {
  @apply text-sky-500;
}
</style>
