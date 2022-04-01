<template>
  <div>
 
    
    <shizhou></shizhou>
    <shizhou-01></shizhou-01>
    <shizhou-02></shizhou-02>
    <shizhou-03></shizhou-03>
    
    
  </div>
</template>

<script>

import Shizhou from '../Enda/shizhou.vue'
import Shizhou01 from '../Enda/shizhou01.vue'
import Shizhou02 from '../Enda/shizhou02.vue'
import Shizhou03 from '../Enda/shizhou03.vue'

// import {getToschoolallyears} from 'api/request'

export default {
  name: "ToSchoolYearshizhou",
  components: {
  
    Shizhou,
    Shizhou01,
    Shizhou02,
    Shizhou03,  
    
  },
   
  
}

</script>

<style scoped>
.bgp {
    background-image: url('../../assets/img/a16.png');
    opacity: 1;
}
* {
    margin: 0;
}
</style>