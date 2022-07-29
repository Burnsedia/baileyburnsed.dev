<template>
  <div class="text-gray-700 bg-gray-200">

    <!-- Header & Navigation -->
    <header class="bg-black p-6 flex flex-col md:flex-row items-center justify-between text-center">
      <strong>
        <g-link to="/" class="text-2xl">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="flex gap-x-4 text-white-700">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/blog/">Blog</g-link>
        <g-link class="nav__link" to="/services/">Services</g-link>
      </nav>
    </header>

    <!-- Page Content -->
    <main class="p-6 ">
      <slot/>
    </main>
    <footer class='bg-black p-6 flex flex-col md:flex-row items-center justify-between text-center'> Test Test</footer>

  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style scoped>
/* Add any Global Styles Here */

.active--exact { /* Active Nav Link */
  @apply text-gray-500;
}
</style>
