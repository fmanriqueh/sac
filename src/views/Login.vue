<template>
    <div class="container" style="height:80vh">
        <div class="row align-items-center h-100">
            <div class="col-8 mx-auto">
                <img src="/logo/200x75xne.png" alt="Logo Bless" class="mx-auto">
                <div class="card h-100 justify-content-center">
                    <div class="card-header">
                        <h6>
                            Verificar estado de factura
                        </h6>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="onSubmit">
                            <input type="text" class="form-control" placeholder="Código" v-model="user.code">
                            <br>
                            <div>
                                <button type="submit" class="btn btn-primary btn-block ">Entrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { LOGIN, LOGOUT } from '@/store/auth.module';

export default {
    data(){
        return {
            user: {
                code: null
            }
        }
    },
    methods: {
        onSubmit(){
            this.$store.dispatch( LOGIN,  this.user.code );
        }
    }
}
</script>