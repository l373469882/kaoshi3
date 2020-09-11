<template>
<dl>
    <dt>
        <img :src="item.url" alt="">
    </dt>
    <dd>
        <p>{{item.title}} </p>
    </dd>
</dl>
</template>

<script>
export default {
    props: {
        item: Object
    }

}
</script>

<style lang="scss">
dl {
    width: 200px;
    height: 350px;
    float: left;
}
</style>
