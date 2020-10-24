<template>
    <div class="container">
        <div class="card" style="min-width:450px;margin-top:35px">
            <div class="card-header">
                <div class="d-flex justify-content-between">
                    <h2>
                        Revisión de estado de facturas
                    </h2>
                    <button class="btn btn-danger" @click="logout()">
                        Salir
                    </button>
                </div>
                <h3>Usuario: {{ getCurrentUser.code }}</h3>
                <br>
                <div class="filters">
                    <form @submit.prevent="onSubmit">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Desde</span>
                            </div>
                            <input type="date" class="form-control" style="margin-right:5px" :max="params.endDate" v-model="params.beginDate">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Hasta</span>
                            </div>
                            <input type="date" class="form-control"  :min="params.beginDate" v-model="params.endDate">
                        </div>
                        <br>
                        <div class="input-group">
                            <input type="text" class="form-control" style="margin-right:5px" placeholder="Código" v-model="params.invoiceCode">
                            <input type="text" class="form-control" placeholder="Remesa" v-model="params.remittanceCode">
                        </div>
                    </form>
                </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table id="ivoices-table" 
                    class="table table-striped "
                    data-pagination="true" cellspacing="0" width="100%"
                    data-page-list="[10, 25, 50, 100, all]"
                    >
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col"> # </th>
                                <th scope="col">Factura

                                </th>
                                <th scope="col">Fecha

                                </th>
                                <th scope="col">Remesa

                                </th>
                                <th scope="col">Estado

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(invoice, index) in getInvoices " :key="invoice.code">
                                <th scope="col"> {{ index }}

                                </th>
                                <th scope="col"> {{ invoice.code }}

                                </th>
                                <th scope="col"> {{ invoice.date }}

                                </th>
                                <th scope="col"> {{ invoice.remittance }}

                                </th>
                                <th scope="col"> {{ invoice.status }}

                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { FETCH_INVOICES } from '@/store/invoice.module';
import { LOGOUT } from '@/store/auth.module'

export default {
    data(){
        return {
            params: {
                beginDate: new Date().toISOString().slice(0,10),
                endDate: new Date().toISOString().slice(0,10),
                invoiceCode: null,
                remittanceCode: null
            },
            invoices: {}
        }
    },
    computed: {
        ...mapGetters(['getInvoices', 'getCurrentUser'])
    },
    methods: {
        onSubmit(){
            this.$store.dispatch(FETCH_INVOICES, this.params);
        },
        logout(){
            this.$store.dispatch(LOGOUT);
            this.$router.push("/");
        }
    }
}
</script>
