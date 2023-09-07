<script>
import vTableRow from './v-table-row'
export default {
    name: "v-table",
    components: {
        vTableRow
    },
    props: {
        users_data: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data() {
        return {}
    },
    computed: {}
}
</script>

<template>
    <div class='v-table'>
        <div class="v-table_header">
            <p>User ID</p>
            <p>Name</p>
            <p>Age</p>
            <p>Registration date</p>
        </div>
        <div class="v-table_body">
            <v-table-row
                v-for="row in users_data"
                :key="row.id"
                :row_data="row"
            />
        </div>
    </div>
</template>

<style>
.v-table{
    max-width: 900px;
    margin: 0 auto;
}
.v-table_header{
    display: flex;
    justify-content: space-around;
    border-bottom: solid 1px #e7e7e7;
}
.v-table_header p {
    flex-basis: 25%;
    text-align: left;
}
</style>
