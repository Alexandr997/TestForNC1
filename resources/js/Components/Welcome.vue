<template>
    <div class="page-wrapper chiller-theme toggled">
        <a id="show-sidebar" class="btn btn-sm btn-dark" href="#" @click="openmenu">
            <i class="fa fa-close"></i>
        </a>
        <addheader></addheader>

        <main class="page-content">

            <router-view/>
        </main>
        <addfooter></addfooter>
        <!-- page-content" -->
    </div>
    <!-- page-wrapper -->
</template>


<script setup>
</script>
