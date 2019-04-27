<template>
<div>
        <fdtest></fdtest>
        <!-- <property></property> --><!-- <list></list> --><!-- <timestamp></timestamp> --><!-- <liquidfill></liquidfill> -->
        <linec></linec>
        <!-- <calendarGraph></calendarGraph> -->
        <sunburst></sunburst>

        <!-- <test></test> -->


    </div>
</template>

<script>

import linec from './components/viewGraph/view.vue'
import calendarGraph from './components/calendarGraph/calendarGraph.vue'
import fdtest from './components/fdGraph/fd.vue'
import sunburst from './components/sunburst/test.vue'

import test from './components/others/test.vue'




import './assets/css/bootstrap.min.css'

export default {
    name:'app',
    components:{
        // property,list,timestamp,liquidfill
        linec,
        calendarGraph,
        fdtest,
        sunburst,
        test
    }
}
</script>