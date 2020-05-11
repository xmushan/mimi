<template>
    <div>
        <navHeader></navHeader>
        <router-view></router-view>
        <navFooter></navFooter>
    </div>
</template>
<script>
import navHeader from '../components/NavHeader'
import navFooter from '../components/NavFooter'
export default {
    data () {
        return {}
    },
    components: {
        navHeader,
        navFooter
    }
}
</script>

<style lang="scss" scoped>

</style>