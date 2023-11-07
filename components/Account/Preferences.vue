<template>
    <n-form>
        <n-form-item label="Color Mode">
            <n-select v-model:value="preference" :options="colorModeSelectOptions"></n-select>
        </n-form-item>
    </n-form>
</template>


<script setup lang="ts">
import type { SelectOption } from "naive-ui"

const { colorModePreference } = useNaiveColorMode()
const preference = ref(colorModePreference.get())

watch(preference, (value: any) => colorModePreference.set(value))

const colorModeSelectOptions = ref<SelectOption[]>([
    {
        label: "Light",
        value: "light"
    },
    {
        label: "Dark",
        value: "dark"
    }, {
        label: "System",
        value: "system"
    }
])
</script>