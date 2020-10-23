<template>
    <div class="container">
        <div class="log-in">
            <form >

            </form>
        </div>
    </div>
</template>

<script>

import { stateMapping } from '@store'

export default {
    data(){
        return {
            user: {
                
            }
        }
    },
    computed: {
        ...stateMapping(['currentUser'])
    },
    methods: {
        onSubmit(){

        }
    }

}
</script>