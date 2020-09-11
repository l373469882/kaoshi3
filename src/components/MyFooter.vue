<template>
<div class="foot">
    <router-link to="/index" tag="b">关注 </router-link>
    <router-link to="/find" tag="b">发现 </router-link>
    <router-link to="/city" tag="b">同城 </router-link>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.foot {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #999;
}
</style>
