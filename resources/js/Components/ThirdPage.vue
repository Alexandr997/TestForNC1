<template>
    <div>
        <h2>Third page with table</h2>
        <v-table
            :users_data="USERS"
        />
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import vTable from './table/v-table-sort.vue'
export default{
    name: 'app',
    components: {
        vTable
    },
    data: () => {
        return {

        }
    },
    computed: {
        ...mapGetters([
            'USERS'
        ])
    },
    methods: {
        ...mapActions([
            'GET_USERS_FROM_API'
        ])
    },
    mounted() {
        this.GET_USERS_FROM_API()
    }
}

</script>


