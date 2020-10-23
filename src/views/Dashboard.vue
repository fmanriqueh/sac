<template>
    <div class="container">
        <div class="filters">
            <form @submit.prevent="onSubmit">

            </form>
        </div>
        <div class="table">
            
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data(){
        return {
            invoices: {}
        }
    },
    methods: {
        onSubmit(){

        }
    }
}
</script>