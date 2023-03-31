<template>
    <chart-base :options="chartOptions" :height="300"></chart-base>
</template>

<script setup lang="ts">
import dayjs from "dayjs"
import type { Options as HighchartsOptions } from "highcharts";
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

const { listUsers } = useAuthAdmin()

const { data: users } = await useAsyncData(() => listUsers({
    select: {
        createdAt: true,
    },
    orderBy: {
        createdAt: "asc"
    }
}))

const chartOptions = computed<HighchartsOptions>(() => {
    return {
        chart: {
            zooming: {
                type: "x"
            }
        },
        title: {
            text: "",
        },
        yAxis: {
            title: false
        },
        xAxis: {
            type: "datetime",
        },
        series: [{
            type: 'column',
            data: chartData.value,
            marker: {
                enabled: false
            },
        }],
        legend: {
            enabled: false
        },
        tooltip: {
            enabled: false
        }
    }
})

const chartData = computed(() => {
    const counts = users.value?.reduce((acc: Record<string, number>, curr) => {
        const date = dayjs(curr.createdAt).format("DD/MM/YYYY")
        if (!acc[date]) {
            acc[date] = 1;
        } else {
            acc[date]++;
        }
        return acc;
    }, {});

    const data = Object.keys(counts as {}).reduce((acc: number[][], curr) => {
        const x = dayjs(curr, "DD/MM/YYYY").toDate().getTime()
        const y = counts![curr]
        acc.push([x, y])
        return acc
    }, [])

    return data
})
</script>