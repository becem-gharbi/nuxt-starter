<template>
    <div :style="{ width: `${width}px`, height: `${height}px` }">
        <ClientOnly>
            <Chart :options="highchartsOptions"></Chart>
        </ClientOnly>
    </div>
</template>

<script setup lang="ts">
import { Chart } from 'highcharts-vue'
import { defu } from 'defu'
import type { Options as HighchartsOptions } from "highcharts";

const props = defineProps<{
    options: HighchartsOptions,
    height?: number,
    width?: number
}>()

const naiveTheme = useNaiveTheme()

const highchartsOptions = computed<HighchartsOptions>(() => defu(
    props.options,
    {
        chart: {
            height: props.height,
            width: props.width,
            backgroundColor: naiveTheme.value.common?.bodyColor,
            plotBackgroundColor: naiveTheme.value.common?.bodyColor,
            style: {
                fontFamily: naiveTheme.value.common?.fontFamily,
            },
        },

        accessibility: {
            enabled: true
        },

        title: {
            style: {
                color: naiveTheme.value?.common?.textColor1
            }
        },

        xAxis: {
            lineColor: "#EDEDED82",
            title: {
                style: {
                    color: naiveTheme.value?.common?.textColor2,
                    fontSize: naiveTheme.value?.common?.fontSizeSmall,
                }
            },
            labels: {
                style: {
                    color: naiveTheme.value?.common?.textColor2,
                    fontSize: naiveTheme.value?.common?.fontSizeMini,
                }
            },
        },

        yAxis: {
            gridLineColor: "#DBDBDB51",
            title: {
                style: {
                    color: naiveTheme.value?.common?.textColor2,
                    fontSize: naiveTheme.value?.common?.fontSizeSmall,
                }
            },
            labels: {
                style: {
                    color: naiveTheme.value?.common?.textColor2,
                    fontSize: naiveTheme.value?.common?.fontSizeMini,
                }
            },
        },

        legend: {
            itemStyle: {
                color: naiveTheme.value?.common?.textColor2
            }
        },

        credits: {
            style: {
                fontSize: naiveTheme.value?.common?.fontSizeSmall,
            }
        }
    }))

</script>

