<template>
    <div>
        <h3 class="text-xl font-semibold my-8">
            {{ title }}
        </h3>
        <div class="grid md:grid-cols-3 gap-4">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{ title: string }>()
</script>