<template>
    <n-form>
        <n-form-item label="Color Mode">
            <n-select v-model:value="colorModePreference" :options="colorModeSelectOptions"></n-select>
        </n-form-item>
    </n-form>
</template>


<script setup lang="ts">
import { SelectOption } from "naive-ui"

const { colorModePreference } = useNaiveColorMode()

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