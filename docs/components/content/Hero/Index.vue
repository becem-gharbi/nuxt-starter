<template>
  <div class="wrapper">
    <div>
      <p class="title">
        Nuxt starter
      </p>

      <p class="description">
        Quickly get started on your Nuxt project
      </p>

      <slot name="extra" />

      <div class="actions">
        <button-link
          href="https://nuxt-starter-app.bg.tn"
          color="blue"
        >
          Demo
        </button-link>

        <nuxt-link
          to="/intro"
          class="py-px mt-px font-medium text-gray-800 border-b-2 border-transparent dark:text-gray-100 hover:border-gray-800 dark:hover:border-gray-100"
        >
          Documentation
        </nuxt-link>
      </div>
    </div>

    <div class="graphic">
      <graphic />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 2rem 0px;
    flex-wrap: wrap-reverse;
    gap: 2rem;
}

.actions {
    display: flex;
    gap: 2rem;
    align-items: center;
    margin-top: 2rem;
}

.title {
    display: flex;
    gap: 1rem;
    font-size: x-large;
    font-weight: 500;
    margin-bottom: 0.5rem;
}

.description {
    font-size: large;
    color: gray;
    margin-bottom: 2rem;
    font-weight: 600;
}

@media screen and (max-width: 768px) {
    .wrapper {
        margin: 2rem 0px;
    }

    .title {
        font-size: large;
    }

    .description {
        font-size: medium;
    }

    /* .graphic {
        display: none;
    } */
}
</style>
