<!DOCTYPE html>
<html style="height: 90%">
<head>
<meta charset="utf-8">
<title>自定义市县地图 | 带点击事件 | 地图颜色内容及样式控制 | </title>
</head>
<body style="width: 60%;height: 100%;margin-left: calc(20% - 2px);padding: 10px;border: 1px solid #e3e3e3;-webkit-border-radius: 4px;-moz-border-radius: 4px;border-radius: 4px;-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);-moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);">
    <div id="main" style="height: 100%"></div>
    <script type="text/javascript" src="echarts.js"></script><!-- 引用echarts 3.0版本 -->
    <script type="text/javascript" src="beijing.js"></script><!-- 引用自定义市县地图 -->
    <script type="text/javascript">
        //初始化ECharts实例
        var myChart = echarts.init(document.getElementById('main'));
        var option = {
            title: {
                text: '北京',
                link: 'http://echarts.baidu.com/',
                subtext: '各区、县地图'
            },
            tooltip: {
                trigger: 'item',
				formatter:function (params) {
				    var res = '';
					res+=params['data'].name+'</br>';
					res+='用户数' +' : '+params['data'].value2+'</br>';			
					return res;
				}
                //formatter: '{b}<br/>{c}'
            },//鼠标放在地图上时，显示的内容及样式控制
			visualMap: {
				show: false,//色系条是否显示
				min: 0,
				max: 45000,//取其区间值就代表色系inRange中的一种颜色
				left: 'left',
				top: 'bottom',
				text: ['高', '低'], // 文本，默认为数值文本
				calculable: true,
				inRange:{
					color: ['#42a8be','#00a69c', '#95ea95'],//上色范围
				}
			},//给地图上色
            series: [{
                name: '北京市',
                type: 'map',
                mapType: 'beijing',
                selectedMode : 'single',
                label: {
                    normal: {show: true},
                    emphasis: {show: true}
                },
				itemStyle: {
					normal: {
						borderColor: '#fff',
						areaColor: '#fff',
						borderWidth: 2,
					},//正常样式
					emphasis: {
						areaColor: 'red',
						borderWidth: 1,
						borderColor: 'yellow',
					}//鼠标事件区块样式
				},
                data:[
                {name: '怀柔区', value: 40500,value2:1024},
                {name: '延庆区', value: 23000,value2:1024},
                {name: '顺义区', value: 22500,value2:1024},
                {name: '通州区', value: 40500,value2:1024},
                {name: '朝阳区', value: 45000,value2:1024},
                {name: '昌平区', value: 37000,value2:1024},
                {name: '门头沟区', value: 40500,value2:1024},
                {name: '石景山区', value: 0,value2:1024},
                {name: '海淀区', value: 11161,value2:1024},
                {name: '丰台区', value: 15000,value2:1024},
				{name: '房山区', value: 20000,value2:1024},
				{name: '密云区', value: 25000,value2:1024},
				{name: '平谷区', value: 30000,value2:1024},
				{name: '西城区', value: 35000,value2:1024},
				{name: '东城区', value: 36000,value2:1024},
				{name: '大兴区', value: 45000,value2:1024},
				],//value的值是上面visualMap属性中设置的颜色色系区间的值，即0~45000
				label: {
					normal: {
						show: true,
						formatter:function(val){
							var area_content =  '{a|' + val.name + '}' + '-' + '{b|' + val.data.value2 + '}';
							return area_content.split("-").join("\n");
						},//让series 中的文字进行换行
						rich: {
							a: {
								color: 'black'
							},
							b: {
								color: 'yellow',
								fontFamily: 'Microsoft YaHei',
								fontSize: 14,
							}
						},//富文本样式,就是上面的formatter中'{a|'和'{b|'
					},
					emphasis: {show: true}
				},//地图中文字内容及样式控制
            }]
        };
		myChart.setOption(option, true);
		myChart.on('click', function(params){
			alert(1);
			console.log(params);//此处写点击事件内容
		});//点击事件，此事件还可以用到柱状图等其他地图
    </script>
</body>
</html>
