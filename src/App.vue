<template>
<div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-4">
                <fdtest></fdtest>
            </div>
            <div class="col-lg-8">
                <linec></linec>
            </div>

        </div>
    </div>
        
        
        <!-- <property></property> --><!-- <list></list> --><!-- <timestamp></timestamp> --><!-- <liquidfill></liquidfill> -->
        <!-- <calendarGraph></calendarGraph> -->
        <!-- <sunburst></sunburst> -->
        <!-- <hist></hist> -->

        <!-- <test></test> -->


    </div>
</template>

<script>

import linec from './components/viewGraph/view.vue'
import calendarGraph from './components/calendarGraph/calendarGraph.vue'
import fdtest from './components/fdGraph/fd.vue'
import sunburst from './components/sunburst/test.vue'

import test from './components/others/test.vue'
import hist from './components/histGraph/histGraph.vue'

import './assets/css/bootstrap.min.css'

export default {
    name:'app',
    components:{
        // property,list,timestamp,liquidfill
        linec,
        calendarGraph,
        fdtest,
        sunburst,
        test,
        hist
    }
}
</script>
