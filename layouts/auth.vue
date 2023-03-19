<template>
    <div class="min-h-screen flex flex-col items-center justify-center w-full">
        <div class="flex flex-col gap-4 my-4">

            <slot></slot>

            <NuxtLink to="/" class="mx-auto mt-4">
                <n-button text>
                    <template #icon>
                        <NaiveIcon name="ph:arrow-left"></NaiveIcon>
                    </template>
                    Back home
                </n-button>
            </NuxtLink>
        </div>
    </div>
</template>