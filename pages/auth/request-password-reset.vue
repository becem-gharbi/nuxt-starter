<template>
    <div>
        <n-result v-if="success" status="success" title="Done"
            description="We've sent you a secure link to reset your password">
            <template #footer>
                <nuxt-link to="/auth/login" class="no-underline">
                    <n-button type="primary">Go back to login</n-button>
                </nuxt-link>
            </template>
        </n-result>

        <div v-else>
            <n-form ref="formRef" :rules="rules" :model="model" @submit.prevent="() => onSubmit(handleSubmit)">
                <n-form-item label="Email" path="email" :show-require-mark="false">
                    <n-input v-model:value="model.email" :input-props="{ autocomplete: 'username' }"></n-input>
                </n-form-item>

                <n-button block attr-type="submit" :loading="pending" type="primary">
                    <template #icon>
                        <naive-icon name="ph:arrows-counter-clockwise-duotone"></naive-icon>
                    </template>
                    Reset password
                </n-button>
            </n-form>
        </div>
    </div>
</template>

<script setup lang="ts">

definePageMeta({
    middleware: "guest",
    layout: "auth",
    auth: false,
    colorMode: "light"
})

const { formRef, rules, pending, onSubmit } = useNaiveForm()
const { requestPasswordReset } = useAuth()

const success = ref(false)

const model = ref({
    email: "",
});

rules.value = {
    email: [
        {
            required: true,
            message: "Please input your email",
            trigger: "input",
        },
        {
            type: "email",
            message: "Please enter a valid email",
            trigger: "blur"
        },
    ],
}

async function handleSubmit() {
    const { error } = await requestPasswordReset(model.value.email)

    if (error.value) {
        console.warn(error.value.data?.message)
    }

    else {
        success.value = true
    }
}
</script>