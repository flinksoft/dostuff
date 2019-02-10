<template>

<div id="city-results">
    <h2>Results for {{ this.getChosenCity }}</h2>
    <p>...</p>
</div>

</template>


<script>

import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'getChosenCity'
        ])
    }
}

</script>

<style lang="scss">
</style>