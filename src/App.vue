<template>
    <div>
        <!-- <property></property> -->
        <!-- <list></list> -->
        <!-- <timestamp></timestamp> -->
        <liquidfill></liquidfill>
    </div>
</template>

<script>

import property from './components/property.vue'
import list from './components/list.vue'
import timestamp from './components/timestamp.vue'
import liquidfill from './components/liquidfill.vue'



import './assets/css/bootstrap.min.css'

export default {
    name:'app',
    components:{
        property,
        list,
        timestamp,
        liquidfill
    }
}
</script>