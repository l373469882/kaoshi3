<template>
<div class="find">
    <header>
        <MyFooter />
    </header>
    <main></main>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.find {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    header {
        height: 50px;
    }

    main {
        flex: 1;
        overflow: auto;
    }
}
</style>
