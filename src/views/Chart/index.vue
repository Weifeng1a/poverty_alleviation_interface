<script setup>
import * as echarts from 'echarts';
import axios from 'axios';
import {onMounted} from 'vue'
import {getLocation} from '@/api/location'

const init =async ()=>{   
    const myChart = echarts.init(document.getElementById('map-wrap'))
    const geoJson = await axios.get('https://geo.datav.aliyun.com/areas_v3/bound/440000_full.json')
    let mydata = []
    const result = await getLocation()
    mydata = result.data.data
    const option = {
    title:{
        text:'广东省贫困村分布图',
        x:'center',
    },
    tooltip:{
        trigger:'item'
    },
    series: [{
        name: '贫困村数量', // series名称
        type: 'map', // series图表类型
        map: '广东',
        coordinateSystem: 'geo', // series坐标系类型
        data:mydata// series数据内容
    }],
    visualMap: {  
        min: 0,  
        max: 350,  
        left: 'left',  
        top: 'bottom',  
        text: ['高','低'],           // 文本，默认为数值文本 
        realtime: false,
        calculable: true,
        inRange:{
            color: ['lightskyblue', 'yellow', 'orangered']
        }
    }
    };
    myChart.hideLoading()
    echarts.registerMap('广东', geoJson.data)
    myChart.setOption(option)
}

onMounted(()=>{
    init()
})
</script>

<template>
   <div id="map-wrap" style="height: 600px;"></div>
</template>

<style scoped>
   #map-wrap{
      margin-top: 30px;
      margin-left: 20px;
   }
</style>
