<template>
    <div class="all">
        <!-- <el-row :gutter="20">
          <el-col :span="24">
            
              <BASETABLE></BASETABLE>
           
           </el-col> 
        </el-row>  -->
        <el-row :gutter="20">
            <el-col :span="12">
                 <!-- <el-card shadow="hover"> -->
                    <!-- <schart ref="bar" class="schart" canvasId="bar" :options="options"></schart> -->
                    <dv-border-box-2 class="biankuang1"></dv-border-box-2>
                    <div class="barcharts1">
                        <h5><font color="#FFF">近三年小学大（超）班额数量情况</font></h5>
                        <BARCHARTS1></BARCHARTS1>
                    </div>
                    
                <!-- </el-card> -->
            </el-col>
           <el-col :span="12">
                <!-- <el-card shadow="hover"> -->
                    <dv-border-box-2 class="biankuang2"></dv-border-box-2>
                    <div class="barcharts2">
                        <h5><font color="#FFF">近三年小学大（超）班额比例情况</font></h5>
                        <BARCHARTS2></BARCHARTS2>
                    </div>
                <!-- </el-card> -->
            </el-col>
        </el-row>
                <el-row :gutter="20">
            <el-col :span="12">
               <!-- <el-card shadow="hover"> -->
                    <!-- <schart ref="bar" class="schart" canvasId="bar" :options="options"></schart> -->
                    <dv-border-box-2 class="biankuang3"></dv-border-box-2>
                    <div class="barcharts3">
                        <h5><font color="#FFF">近三年初中大（超）班额数量情况</font></h5>
                        <bar-chart-s-3></bar-chart-s-3>
                    </div>
                    
                <!-- </el-card> -->
            </el-col>
           <el-col :span="12">
                <!-- <el-card shadow="hover"> -->
                    <dv-border-box-2 class="biankuang4"></dv-border-box-2>
                    <div class="barcharts4">
                        <h5><font color="#FFF">近三年初中大（超）班额比例情况</font></h5>
                        <bar-chart-s-4></bar-chart-s-4>
                    </div>
                <!-- </el-card> -->
            </el-col>
        </el-row>

    </div>
</template>

<script>
// import Schart from 'vue-schart';
import bus from '../common/bus';
import BASETABLE from 'components/common/BaseTable';
import BARCHARTS1 from 'components/echats/BarChartS1';
import BARCHARTS2 from 'components/echats/BarChartS2';
import BARCHARTS3 from 'components/echats/BarChartS3';
import BARCHARTS4 from 'components/echats/BarChartS4';
import { fetchData } from '../../api/index';
import BarChartS3 from '../echats/BarChartS3.vue';
import BarChartS4 from '../echats/BarChartS4.vue';

export default {
    name: 'zhengti',
    components: {
        // Schart,
        BASETABLE,
        BARCHARTS1,
        BARCHARTS2,
        BarChartS3,
        BarChartS4
  


    },



};
</script>


<style scoped>
.all{
    /* background-image: url('~@/assets/img/bg-1.png'); */
    background:rgb(50, 65, 87);
    height: 1000px;

}
.el-row {
    margin-bottom: 20px;
}
.biankuang1{
    position: absolute;
    top: 30px;
    left: 60px;
    height: 400px;
    width: 440px;

}
.biankuang2{
    position: absolute;
    top: 30px;
    left: 570px;
    height: 400px;
    width: 440px;

}
.barcharts1{
    position: absolute;
    margin-left: 69px;
    margin-top: 36px;
}
.barcharts2{
    position: absolute;
    margin-left: 580px;
    margin-top: 36px;
}
.biankuang3{
    position: absolute;
    top: 450px;
    left: 60px;
    height: 400px;
    width: 440px;

}
.biankuang4{
    position: absolute;
    top: 450px;
    left: 570px;
    height: 400px;
    width: 440px;

}
.barcharts3{
    position: absolute;
    margin-left: 69px;
    margin-top: 456px;
}
.barcharts4{
    position: absolute;
    margin-left: 580px;
    margin-top: 456px;
}
</style>
