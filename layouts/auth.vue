<template>
    <div class="min-h-screen flex flex-col items-center justify-center w-full">
        <div class="flex flex-col gap-4 p-4 w-full sm:max-w-xs">

            <slot></slot>

            <n-card size="small">
                <NuxtLink to="/">
                    <n-button text block>
                        <template #icon>
                            <NaiveIcon name="ph:house"></NaiveIcon>
                        </template>
                        Back home
                    </n-button>
                </NuxtLink>
            </n-card>

        </div>
    </div>
</template>