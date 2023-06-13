<template>
    <div>
        <NavbarIndex></NavbarIndex>
    </div>
</template>

<script setup lang="ts">
definePageMeta({ auth: false, middleware: "guest", colorMode: "light" });
</script>