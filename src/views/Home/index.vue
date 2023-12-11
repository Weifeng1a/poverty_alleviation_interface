<script setup>
     const images = [
       {
        url:'../../assets/images/login-background.jpg'
       },
       {
        url:'../../assets/images/login-background.jpg'
       },
       {
        url:'../../assets/images/login-background.jpg'
       },
       {
        url:'../../assets/images/login-background.jpg'
       },
       {
        url:'../../assets/images/login-background.jpg'
       },
       {
        url:'../../assets/images/login-background.jpg'
       },
     ]
</script>

<template>
 <div class="container">
    <el-carousel :interval="4000" type="card" height="400px">
    <el-carousel-item v-for="item in 6" :key="item">
      <img src="../../assets/images/login-background.jpg" alt="">
    </el-carousel-item>
    </el-carousel> 
    <div class="content">
      <div class="left">
        <img src="../../assets/images/left.jpg" alt="">
      </div>
       <div class="middle">
        
        <div class="image-content">
            <div class="title">图说扶贫</div>
            <div class="image-box">
            <div class="image" v-for="(item,index) in 6" :key="index">
               <img src="../../assets/images/login-background.jpg" alt="">
               <span>图说扶贫</span>
            </div>
        </div>
        </div>
        <div class="news-content">
            <div class="title">扶贫新闻</div>
            <div class="news-box">
              <div class="item" v-for="(item,index) in 6" :key="index">
                <span class="item-left">Lorem ipsum dolor sit amet consectetur.</span>
                <span class="item-right">作者：Lorem, ipsum dolor.&nbsp;Lorem ipsum dolor sit.</span>
              </div>
            </div>
              
            </div>
        </div>
        
       <div class="right">
         <img src="../../assets/images/right.jpg" alt="">
       </div>
    </div>
   
 </div>
 
 
</template>

<style lang="scss" scoped>
.container{
    background-color: lightblue;
    .content{
      display: flex;
      height: 1300px;
      margin-top: 30px;
      .left{
        width: 300px;
        height: 600px;
        overflow: hidden;
        box-shadow: 0 0 20px #99a9bf;
        img{
          width: 300px;
          height: 600px;
        }
      }
      .middle{
        flex:1;
        background-color: white;
        margin: 0 20px;
        .image-content{
          margin-top: 40px;
          width: 100%;
          .title{
            width: 80%;
            font-size: 30px;
            font-weight: bold;
            text-align: center;
            margin: 0 auto;
          }
          .image-box{
          display: flex;
          justify-content: space-between;
          width: 80%;
          flex-wrap: wrap;
          height: 500px;
          margin: 0 auto;
          margin-top: 20px;
          .image{
            width: 200px;
            height: 200px;
            text-align: center;
            font-size: 16px;
            img{
              width: 200px;
              height: 200px;
            }
          }
        }
        }
        .news-content{
          margin-top: 80px;
          width: 100%;
          .title{
            width: 90%;
            font-size: 30px;
            font-weight: bold;
            text-align: center;
            margin: 0 auto;
          }
          .news-box{
          width: 90%;
          height: 350px;
          margin: 0 auto;
          margin-top: 20px;
          
          .item{
            height: 50px;
            font-size: 16px;
            border-bottom: 1px solid #CCC;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 5px 0;
            &:hover{
               color: pink;
            }
          }
        }
        }
        
      }
      .right{
        width: 300px;
        height: 900px;
        overflow: hidden;
        box-shadow: 0 0 20px #99a9bf;
        img{
          width: 300px;
          height: 900px;
        }
      }
    }
    
}
.el-carousel__item img{
  height: 400px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
