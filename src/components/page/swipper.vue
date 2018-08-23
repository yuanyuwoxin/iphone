<template>
	<div class="wrapper">
		<swiper :options="swiperOption" class="box">
		    <!-- slides -->
		    <swiper-slide class="banner" v-for="(x,index) in swiperSlides" :key="index">{{x}}</swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>  <!-- 这个是小圆点 -->
		    <div class="swiper-button-prev" slot="button-prev"></div>
		    <div class="swiper-button-next" slot="button-next"></div>
		   <!--  <div class="swiper-scrollbar"   slot="scrollbar"></div> -->  <!-- 滚动条 -->
		  </swiper>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				swiperOption:{
					pagination: {
			            el: '.swiper-pagination'
			        },
					loop:true,
					autoplay:{
						delay: 1500,
						disableOnInteraction: false,
					},
					nnotNextTick:true,
					navigation: {
					    nextEl: '.swiper-button-next', //前进按钮的css选择器或HTML元素。
					    prevEl: '.swiper-button-prev', //后退按钮的css选择器或HTML元素。
					    hideOnClick: true, //点击slide时显示/隐藏按钮
					   },
					   cubeEffect: {
					       slideShadows: true, //开启slide阴影。默认 true。
					       shadow: true, //开启投影。默认 true。
					       shadowOffset: 100, //投影距离。默认 20，单位px。
					       shadowScale: 0.6 //投影缩放比例。默认0.94。
					     },
				},
				swiperSlides: [1, 2, 3, 4, 5]

			}	
		}
	}
</script>
<style lang="scss" scoped>

.wrapper /deep/ .swiper-pagination-bullet{
	background: black;
	width: .2rem;
	height: .2rem;
}
.wrapper /deep/ .swiper-pagination-bullet-active{
        background: red;
        width: .2rem;
        height: .2rem;
    }
.wrapper{
	.box{

		line-height: 4rem;
		.banner{
			text-align: center;
			background-color: #dedede;
		}
		.swiper-pagination{
			height: 2.2rem;
		}

	}	
}
	
</style> 