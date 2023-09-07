<script>
    export default {
        name: "v-table-row",
        props: {
            row_data: {
                type: Object,
                default: () => {
                    return {}
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
    <div class='v-table-row'>
        <div class="row row_id">{{row_data.id}}</div>
        <div class="row row_name">{{row_data.name}}</div>
        <div class="row row_age">{{row_data.age}}</div>
        <div class="row row_date">{{row_data.registration_date}}</div>
    </div>
</template>

<style>
    .v-table-row {
        display: flex;
        justify-content: space-around;
    }
    .row {
        flex-basis: 25%;
        padding: 8px 16px;
        text-align: left;
    }
</style>
