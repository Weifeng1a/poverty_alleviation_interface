<script setup>
  
</script>

<template>
   <div class="image">
   </div>
   <div class="content">
      <h1 class="title">Lorem ipsum dolor sit, amet consectetur adipisicing.</h1>
      <div class="author">
         <span>Lorem ipsum dolor sit amet.</span>
      </div>
      <div class="main-image"></div>
      <div class="main-content">
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laudantium a doloremque eum ullam neque molestias porro esse perferendis ex?</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus est ipsum atque sit nostrum fugiat accusamus enim at, distinctio eius non molestiae, consequatur delectus aliquam voluptatibus laboriosam rem asperiores. Molestias fugit, ut ducimus qui perferendis iste ullam! Modi veniam vero voluptatem voluptates molestias sint debitis molestiae. Delectus nulla cum hic. Dolores illo quia iusto maiores est aliquid mollitia illum quae alias nam cum necessitatibus id porro sunt commodi, odio minima, sit recusandae quas vero autem quos exercitationem explicabo. Velit blanditiis perferendis qui fugiat quasi repudiandae quo. Doloribus, sunt officiis. Cum aliquid molestias nostrum iusto omnis non incidunt facilis! Voluptatibus, laborum?</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quo quaerat itaque facere explicabo fugiat provident fugit vel tempora cupiditate modi impedit suscipit necessitatibus, adipisci aliquid nesciunt rem, possimus nisi.</p>
      </div>
   </div>
</template>

<style scoped>
   .image{
      height: 400px;
      background-image: url('../../assets/images/login-background.jpg');
      background-repeat: no-repeat;
      background-size: cover;
   }

   .content{
      margin-top: 40px;
      margin-bottom: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .title{
         font-size: 35px;
         color: black;
         
      }
      .author{
         margin-top: 15px;
         font-size: 18px;
      }
      .main-image{
         margin: 15px 0;
         width: 600px;
         height: 450px;
         background-color: red;
      }
      .main-content{
         margin-top: 30px;
         width: 50%;
         font-size: 20px;
         & p:nth-child(2){
            margin: 15px 0;
         }
      }
   }
</style>
