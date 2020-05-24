<template>
    <div>
        <price-dec></price-dec>
        <service-bar></service-bar>
    </div>
</template>
<script>
import ServiceBar from '../components/ServiceBar'
import PriceDec  from '../components/PriceDec'
export default {
    data () {
        return{

        }
    },
    components: {
        ServiceBar,
        PriceDec
    }
}
</script>
<style lang="scss" scoped>


</style>