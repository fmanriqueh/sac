<template>
    <div class="container">
        <div class="login-form">
            <form @submit.prevent="onSubmit">
                <input type="text" placeholder="Codigo">
                <button type="submit" class="btn btn-light">Entrar</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            user: {}
        }
    },
    methods: {
        onSubmit(){
            this.$store.dispatch();
        }
    }
}
</script>