<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    min-width: 1400px;
}
* {
    margin: 0;
    padding: 0;
}
::-webkit-scrollbar-track-piece {
    background-color: #f8f8f8;
}
::-webkit-scrollbar {
    width: 4px;
    height: 4px;
}
::-webkit-scrollbar-thumb {
    background-color: #dddddd;
    background-clip: padding-box;
    min-height: 28px;
}
</style>
