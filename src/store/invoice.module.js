import ApiService from '@/services/api.service';

// action types
export const FETCH_INVOICES = 'fetchInvoices';

// mutations types
export const SET_INVOICES = 'setInvoices';
export const SET_ERROR = 'setError';

const state = {
    invoices: [
        {
            code: 'CODE01',
            date: '2020-08-30',
            remittance: 'REMESA01',
            status: 'En espera'
        },
        {
            code: 'CODE01',
            date: '2020-08-30',
            remittance: 'REMESA01',
            status: 'En espera'
        },
        {
            code: 'CODE01',
            date: '2020-08-30',
            remittance: 'REMESA01',
            status: 'En espera'
        },
        {
            code: 'CODE01',
            date: '2020-08-30',
            remittance: 'REMESA01',
            status: 'En espera'
        },
        {
            code: 'CODE01',
            date: '2020-08-30',
            remittance: 'REMESA01',
            status: 'En espera'
        },
        {
            code: 'CODE01',
            date: '2020-08-30',
            remittance: 'REMESA01',
            status: 'En espera'
        },
        {
            code: 'CODE01',
            date: '2020-08-30',
            remittance: 'REMESA01',
            status: 'En espera'
        },
        {
            code: 'CODE01',
            date: '2020-08-30',
            remittance: 'REMESA01',
            status: 'En espera'
        },
        {
            code: 'CODE01',
            date: '2020-08-30',
            remittance: 'REMESA01',
            status: 'En espera'
        },
        {
            code: 'CODE01',
            date: '2020-08-30',
            remittance: 'REMESA01',
            status: 'En espera'
        },
        {
            code: 'CODE01',
            date: '2020-08-30',
            remittance: 'REMESA01',
            status: 'En espera'
        },
        {
            code: 'CODE01',
            date: '2020-08-30',
            remittance: 'REMESA01',
            status: 'En espera'
        },
        {
            code: 'CODE01',
            date: '2020-08-30',
            remittance: 'REMESA01',
            status: 'En espera'
        }
    ],
    invoiceErrors: null
}

const getters = {
    getInvoices(state){
        return state.invoices;
    }
}

const actions = {
    [FETCH_INVOICES](context, params){
        return new Promise( resolve => {
            ApiService.get('remesas', params)
            .then( ({ data }) => {
                context.commit(SET_INVOICES, data);
                resolve(data);
            })
            .catch( ({ error }) => {
                context.commit(SET_ERROR, error);
            })
        })
    }
}

const mutations = {
    [SET_ERROR](state, error){
        state.invoiceErrors = error;
    },
    [SET_INVOICES](state, invoices){
        state.invoices = invoices;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}