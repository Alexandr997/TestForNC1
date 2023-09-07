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
            return {
                usersPerPage: 5,
                pageNumber: 1
            }
        },
        computed: {
            pages() {
                return Math.ceil(this.users_data.length / 5);
            },
            paginatedUsers() {
                let from = (this.pageNumber - 1) * this.usersPerPage;
                let to = from + this.usersPerPage
                return this.users_data.slice(from, to);
            }
        },
        methods: {
            pageClick(page) {
                this.pageNumber = page;
            },
            sortByName() {
                this.users_data.sort((a,b) => a.name.localeCompare(b.name))
            }
        }
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
                v-for="row in paginatedUsers"
                :key="row.id"
                :row_data="row"
            />
        </div>
        <div class="v-table_pagination">
            <div class="page"
                 v-for="page in pages"
                 :key="page"
                 :class="{'page_selected': page === pageNumber}"
                 @click="pageClick(page)"
            >{{page}}</div>
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
    .v-table_pagination{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 30px;
    }
    .page {
        padding: 8px;
        border: solid 1px #e7e7e7;
        margin-right: 10px;
    }
    .page:hover {
        background: #aeaeae;
        cursor: pointer;
        color: #ffffff;
    }
    .page_selected{
        background: #aeaeae;
        cursor: pointer;
        color: #ffffff;
    }
</style>
