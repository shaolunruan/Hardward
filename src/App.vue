<template>
    <div>
        <!-- <property></property> --><!-- <list></list> --><!-- <timestamp></timestamp> --><!-- <liquidfill></liquidfill> -->
        <!-- <calendarGraph></calendarGraph> -->
<treetest></treetest>
    </div>
</template>

<script>

// import property from './components/property.vue'
// import list from './components/list.vue'
// import timestamp from './components/timestamp.vue'
// import liquidfill from './components/liquidfill.vue'

import calendarGraph from './components/calendarGraph/calendarGraph.vue'
import treetest from './components/FDtreeGraph/FDtreeGraph.vue'




import './assets/css/bootstrap.min.css'

export default {
    name:'app',
    components:{
        // property,list,timestamp,liquidfill
        calendarGraph,
        treetest
    }
}
</script>