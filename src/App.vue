<template>
    <div class="container">
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container{
    max-width: 1220px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 12px;
    padding-right: 12px;
}

html{
    font-family: sans-serif;
}

</style>