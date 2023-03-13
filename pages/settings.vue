<template>
    <div class="md:w-1/2 md:mx-auto my-4 mx-3">
        <n-card title="Settings" segmented>
            <n-form>
                <n-form-item label="Color Mode">
                    <n-select v-model:value="colorMode" :options="colorModeSelectOptions"></n-select>
                </n-form-item>
            </n-form>
        </n-card>
    </div>
</template>

<script setup lang="ts">
import { SelectOption } from "naive-ui"

const { colorMode } = useNaiveColorMode()

const colorModeSelectOptions = ref<SelectOption[]>([
    {
        label: "Light",
        value: "light"
    },
    {
        label: "Dark",
        value: "dark"
    }
])
</script>