<template>
    <div>
        <!-- <property></property> --><!-- <list></list> --><!-- <timestamp></timestamp> --><!-- <liquidfill></liquidfill> -->
        <!-- <calendarGraph></calendarGraph> -->
<!-- <treetest></treetest> -->
<!-- <fdtest></fdtest> -->
<!-- <sunburst></sunburst> -->
<linec></linec>

    </div>
</template>

<script>

import linec from './components/viewGraph/view.vue'
import calendarGraph from './components/calendarGraph/calendarGraph.vue'
// import treetest from './components/FDtreeGraph/FDtreeGraph.vue'
import fdtest from './components/fdGraph/fd.vue'
import sunburst from './components/sunburst/test.vue'




import './assets/css/bootstrap.min.css'

export default {
    name:'app',
    components:{
        // property,list,timestamp,liquidfill
        linec,
        calendarGraph,
        // treetest,
        fdtest,
        sunburst
    }
}
</script>