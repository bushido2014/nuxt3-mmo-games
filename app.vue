<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage
      :transition="{
        name: 'fade',
        mode: 'out-in',
      }"
    />
  </NuxtLayout>
</template>
