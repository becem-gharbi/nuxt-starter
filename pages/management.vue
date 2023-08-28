<template>
    <div class="md:w-1/2 md:mx-auto flex flex-col gap-4">
        <n-card title="Summary" segmented size="small">
            <ManagementSummary />
        </n-card>

        <n-card title="Latest users" segmented size="small">
            <ManagementLatestUsers />
        </n-card>
    </div>
</template>
