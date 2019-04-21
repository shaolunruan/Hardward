<template>
    <div>
        <!-- <property></property> --><!-- <list></list> --><!-- <timestamp></timestamp> --><!-- <liquidfill></liquidfill> -->
        <!-- <calendarGraph></calendarGraph> -->
<!-- <treetest></treetest> -->
<!-- <fdtest></fdtest> -->
<sbtest></sbtest>
    </div>
</template>

<script>

import calendarGraph from './components/calendarGraph/calendarGraph.vue'
// import treetest from './components/FDtreeGraph/FDtreeGraph.vue'
import fdtest from './components/fdGraph/fd.vue'
import sbtest from './components/sunburst/test.vue'




import './assets/css/bootstrap.min.css'

export default {
    name:'app',
    components:{
        // property,list,timestamp,liquidfill
        calendarGraph,
        // treetest,
        fdtest,
        sbtest
    }
}
</script>