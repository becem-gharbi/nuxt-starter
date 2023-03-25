<template>
    <div class="md:w-1/2 md:mx-auto my-4 mx-3 flex flex-col gap-4">
        <n-card title="Summary" segmented size="small">
            <ManagementSummary />
        </n-card>

        <n-card title="Registrations" segmented size="small">
            <ManagementRegistration />
        </n-card>

        <n-card title="Latest users" segmented size="small">
            <ManagementLatestUsers />
        </n-card>
    </div>
</template>