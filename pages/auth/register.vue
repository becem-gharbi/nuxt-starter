<template>
    <div class="flex flex-col gap-4">
        <n-result v-if="success" status="success" title="Email verification is sent" description="Please check your inbox">
        </n-result>

        <n-card v-else>
            <n-form ref="formRef" :model="model" :rules="rules" @submit.prevent="() => onSubmit(handleSubmit)">
                <n-form-item label="First name" path="firstName">
                    <n-input v-model:value="model.firstName"></n-input>
                </n-form-item>

                <n-form-item label="Last name" path="lastName">
                    <n-input v-model:value="model.lastName"></n-input>
                </n-form-item>

                <n-form-item label="Email" path="email">
                    <n-input v-model:value="model.email"></n-input>
                </n-form-item>

                <n-form-item label="Password" path="password">
                    <n-input v-model:value="model.password" type="password" show-password-on="mousedown"></n-input>
                </n-form-item>

                <n-form-item label="Confirm Password" path="passwordConfirm">
                    <n-input v-model:value="model.passwordConfirm" type="password" show-password-on="mousedown"></n-input>
                </n-form-item>

                <n-button type="primary" attr-type="submit" block :disabled="pending" :loading="pending">Register</n-button>
            </n-form>
        </n-card>

        <n-card v-if="!success" class="text-center" size="small">
            Already have account?
            <NuxtLink to="/auth/login" class="no-underline">
                <n-text type="primary">Login </n-text>
            </NuxtLink>
        </n-card>

    </div>
</template>


<script  setup lang="ts">

definePageMeta({
    middleware: "guest",
    auth: false,
    colorMode: "light"
})

const { formRef, pending, rules, onSubmit, apiErrors } = useNaiveForm()
const { register, requestEmailVerify } = useAuth()
const success = ref(false)

apiErrors.value = {
    emailAlreadyExists: false
}

const model = ref({
    email: "",
    password: "",
    passwordConfirm: "",
    firstName: "",
    lastName: ""
});

rules.value = {
    firstName: [
        {
            required: true,
            message: "Please input your first name",
            trigger: "blur",
        },
    ],
    lastName: [
        {
            required: true,
            message: "Please input your last name",
            trigger: "blur",
        },
    ],
    email: [
        {
            required: true,
            message: "Please input your email",
            trigger: "blur",
        },
        {
            validator: () => !apiErrors.value.emailAlreadyExists,
            message: "Email already exists",
            trigger: "input"
        }
    ],
    password: [
        {
            required: true,
            message: "Please input your password",
            trigger: "blur",
        },
        {
            validator: (rule, value) => new RegExp("(?=.*[a-z])(?=.*[0-9])(?=.{6,})").test(value),
            message: "At least 6 characters, 1 lowercase, 1 number",
            trigger: "blur"
        }
    ],
    passwordConfirm: [
        {
            validator: (rule, value) => value === model.value.password,
            message: "Passwords do not match",
            trigger: "blur",
        },
    ],
};

async function handleSubmit() {
    const { error } = await register({
        email: model.value.email,
        password: model.value.password,
        name: model.value.firstName + " " + model.value.lastName
    })

    if (error.value) {
        apiErrors.value.emailAlreadyExists = error.value.data?.message.includes("email-used-with") || false
    }

    else {
        await requestEmailVerify(model.value.email)

        success.value = true
    }
}
</script>
