<template>
<div class="index">
    <header>
        <MyFooter />
    </header>
    <main>
        <ListItem v-for="(item,index) in list" :key="index" :item="item" />
    </main>
</div>
</template>

<script>
import axios from 'axios';
import ListItem from '@/components/ListItem';

export default {
    components: {
        ListItem
    },
    created() {
        axios.get("/api/list").then(result => {
            console.log(result.data)
            this.list = result.data
        })
    },
    data() {
        return {
            list: {}
        }
    },
}
</script>

<style lang="scss">
.index {
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
