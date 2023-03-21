<template>
    <div class="min-h-screen flex flex-col items-center justify-center w-full">
        <div class="flex flex-col gap-4 my-4">

            <slot></slot>

            <n-card size="small">
                <NuxtLink to="/">
                    <n-button text block>
                        Back home
                    </n-button>
                </NuxtLink>
            </n-card>

        </div>
    </div>
</template>