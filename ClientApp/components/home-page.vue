<template>
    <div>
        <h1>Find things to do in your city:</h1>
        <p>
            <input type="text" v-model="searchText" />
            <button type="button" @click="onSearchClick">Search</button>
        </p>

        <CityResults></CityResults>
    </div>
</template>

<script>

import CityResults from '../components/city-results'

export default {
    components: {
        CityResults
    },
    data () {
        return {
            searchText: ''
        }
    },
    methods: {
        onSearchClick: function () {
            this.$store.dispatch('setChosenCity', this.searchText);
        }
    }
}
</script>

<style>
</style>
