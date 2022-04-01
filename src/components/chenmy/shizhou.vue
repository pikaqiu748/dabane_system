<template>
    <div class="all">

        <el-row :gutter="20">
            <el-col :span="24">
                 <!-- <el-card shadow="hover"> -->
                    <!-- <schart ref="bar" class="schart" canvasId="bar" :options="options"></schart> -->
                    <dv-border-box-2 class="biankuang1"></dv-border-box-2>
                    <div class="linebarmix1">
                        <h5><font color="#FFF">2020年小学大班额分布图</font></h5>
                       <line-bar-mix-1></line-bar-mix-1>
                    </div>
                    
                <!-- </el-card> -->
            </el-col>

        </el-row>
        <el-row :gutter="20">
            <el-col :span="24">
               <!-- <el-card shadow="hover"> -->
                    <!-- <schart ref="bar" class="schart" canvasId="bar" :options="options"></schart> -->
                    <dv-border-box-2 class="biankuang2"></dv-border-box-2>
                    <div class="linebarmix2">
                        <h5><font color="#FFF">2020年小学超大班额分布图</font></h5>
                        <line-bar-mix-2></line-bar-mix-2>
                    </div>
                    
                <!-- </el-card> -->
            </el-col>
            

        </el-row>
        <el-row :gutter="20">
            <el-col :span="12">
                    <dv-border-box-2 class="biankuang3"></dv-border-box-2>
                    <div class="scatter1">
                        <h5><font color="#FFF">2020年小学大班额数量-比例分布图</font></h5>
                        <scatter-1></scatter-1>
                  
                    </div>
            </el-col>
            <el-col :span="12">
                    <dv-border-box-2 class="biankuang4"></dv-border-box-2>
                    <div class="scatter2">
                        <h5><font color="#FFF">2020年小学超大班额数量-比例分布图</font></h5>
                        <scatter-2></scatter-2>
                  
                    </div>
            </el-col>

        </el-row>
        <el-row :gutter="20">
            <el-col :span="12">
                    <dv-border-box-2 class="biankuang5"></dv-border-box-2>
                    <div class="nb1">
                        <h5><font color="#FFF">2020年小学大班额消除比例分布图</font></h5>
                        <ne-bar-chart-1></ne-bar-chart-1>
                        
                  
                    </div>
            </el-col>
            <el-col :span="12">
                    <dv-border-box-2 class="biankuang6"></dv-border-box-2>
                    <div class="nb2">
                        <h5><font color="#FFF">2020年小学超大班额消除比例分布图</font></h5>
                        <ne-bar-chart-2></ne-bar-chart-2>
                        
                  
                    </div>
            </el-col>

        </el-row>
        <dv-decoration-3 class="fenjiexian" style="width:1200px;height:30px;" />
        <el-row :gutter="20">
            <el-col :span="24">
                 <!-- <el-card shadow="hover"> -->
                    <!-- <schart ref="bar" class="schart" canvasId="bar" :options="options"></schart> -->
                    <dv-border-box-2 class="biankuang7"></dv-border-box-2>
                    <div class="linebarmix3">
                        <h5><font color="#FFF">2020年初中大班额分布图</font></h5>
                        <line-bar-mix-3></line-bar-mix-3>
                    </div>
                    
                <!-- </el-card> -->
            </el-col>

        </el-row>
        <el-row :gutter="20">
            <el-col :span="24">
                 <!-- <el-card shadow="hover"> -->
                    <!-- <schart ref="bar" class="schart" canvasId="bar" :options="options"></schart> -->
                    <dv-border-box-2 class="biankuang8"></dv-border-box-2>
                    <div class="linebarmix4">
                        <h5><font color="#FFF">2020年初中超大班额分布图</font></h5>
                        <line-bar-mix-4></line-bar-mix-4>

                    </div>
                    
                <!-- </el-card> -->
            </el-col>

        </el-row>
        <el-row :gutter="20">
            <el-col :span="12">
                    <dv-border-box-2 class="biankuang9"></dv-border-box-2>
                    <div class="scatter3">
                        <h5><font color="#FFF">2020年初中大班额数量-比例分布图</font></h5>
                        <scatter-3></scatter-3>
                  
                    </div>
            </el-col>
            <el-col :span="12">
                    <dv-border-box-2 class="biankuang10"></dv-border-box-2>
                    <div class="scatter4">
                        <h5><font color="#FFF">2020年初中超大班额数量-比例分布图</font></h5>
                        <scatter-4></scatter-4>

                  
                    </div>
            </el-col>

        </el-row>
        <el-row :gutter="20">
            <el-col :span="12">
                    <dv-border-box-2 class="biankuang11"></dv-border-box-2>
                    <div class="nb3">
                        <h5><font color="#FFF">2020年初中大班额消除比例分布图</font></h5>
                        <ne-bar-chart-3></ne-bar-chart-3>
                        
                  
                    </div>
            </el-col>
            <el-col :span="12">
                    <dv-border-box-2 class="biankuang12"></dv-border-box-2>
                    <div class="nb4">
                        <h5><font color="#FFF">2020年初中超大班额消除比例分布图</font></h5>
                        <ne-bar-chart-4></ne-bar-chart-4>
                        
                  
                    </div>
            </el-col>

        </el-row>

    </div>
</template>

<script>
// import Schart from 'vue-schart';
import bus from '../common/bus';


import LineBarMix1 from '../echats/LineBarMix1.vue';
import LineBarMix2 from '../echats/LineBarMix2.vue';
import LineBarMix3 from '../echats/LineBarMix3.vue';
import LineBarMix4 from '../echats/LineBarMix4.vue';
import NeBarChart1 from '../echats/NeBarChart1.vue';
import NeBarChart2 from '../echats/NeBarChart2.vue';
import NeBarChart3 from '../echats/NeBarChart3.vue';
import NeBarChart4 from '../echats/NeBarChart4.vue';
import Scatter1 from '../echats/scatter1.vue';
import Scatter2 from '../echats/scatter2.vue';
import Scatter3 from '../echats/scatter3.vue';
import Scatter4 from '../echats/scatter4.vue';







export default {
    name: 'zhengti',
    components: {
        LineBarMix1,
        LineBarMix2,
        Scatter1,
        Scatter2,
        NeBarChart1,
        NeBarChart2,
        LineBarMix3,
        LineBarMix4,
        Scatter4,
        Scatter3,
        NeBarChart3,
        NeBarChart4,

        // Schart,
 
       
     
       
       

  


    },



};
</script>


<style scoped>
.all{
    /* background-image: url('~@/assets/img/bg-1.png'); */
    background:rgb(50, 65, 87);
    height: 3400px;

}
.fenjiexian{
    position: relative;
    top: 1610px;
    left: -15px;
}
.el-row {
    margin-bottom: 20px;
}
.biankuang1{
    position: absolute;
    top: 30px;
    left: 30px;
    height: 400px;
    width: 1087px;

}
.biankuang2{
    position: absolute;
    top: 420px;
    left: 30px;
    height: 400px;
    width: 1087px;  
}
.biankuang3{
    position: absolute;
    top: 815px;
    left: 30px;
    height: 400px;
    width: 537px;

}
.biankuang4{
    position: absolute;
    top: 815px;
    left: 580px;
    height: 400px;
    width: 537px;

}
.biankuang5{
    position: absolute;
    top: 1213px;
    left: 30px;
    height: 400px;
    width: 537px;

}
.biankuang6{
    position: absolute;
    top: 1213px;
    left: 580px;
    height: 400px;
    width: 537px;

}
.biankuang7{
    position: absolute;
    top: 1620px;
    left: 30px;
    height: 400px;
    width: 1087px;

}
.biankuang8{
    position: absolute;
    top: 2010px;
    left: 30px;
    height: 400px;
    width: 1087px;

}
.biankuang9{
    position: absolute;
    top: 2400px;
    left: 30px;
    height: 400px;
    width: 537px;

}
.biankuang10{
    position: absolute;
    top: 2400px;
    left: 580px;
    height: 400px;
    width: 537px;

}
.biankuang11{
    position: absolute;
    top: 2790px;
    left: 30px;
    height: 400px;
    width: 537px;

}
.biankuang12{
    position: absolute;
    top: 2790px;
    left: 580px;
    height: 400px;
    width: 537px;

}
.linebarmix1{
    position: absolute;
    margin-left: 39px;
    margin-top: 36px;
}
.linebarmix2{
    position: absolute;
    margin-left: 39px;
    margin-top: 433px;

}
.linebarmix3{
    position: absolute;
    margin-left: 39px;
    margin-top: 1629px;

}
.linebarmix4{
    position: absolute;
    margin-left: 39px;
    margin-top: 2020px;

}
.scatter1{
    position: absolute;
    margin-left: 38px;
    margin-top: 828px
}
.scatter2{
    position: absolute;
    margin-left: 588px;
    margin-top: 828px
}
.scatter3{
    position: absolute;
    margin-left: 38px;
    margin-top: 2410px
}
.scatter4{
    position: absolute;
    margin-left: 588px;
    margin-top: 2410px
}
.nb1{
    position: absolute;
    margin-left: 38px;
    margin-top: 1223px
}
.nb2{
    position: absolute;
    margin-left: 588px;
    margin-top: 1223px
}
.nb3{
    position: absolute;
    margin-left: 38px;
    margin-top: 2800px
}
.nb4{
    position: absolute;
    margin-left: 588px;
    margin-top: 2800px
}
</style>
