<template>
	<div>
		<div class="recommned-title">
			热销推荐
		</div>
		<ul>
			<li class="item" v-for="(x,index) in 5" :key="index">
				<img  class="item-img" src="http://img1.qunarzz.com/sight/p0/1507/42/8b8f2389acf66fda0ff77c0d9f3344bf.water.jpg_200x200_cd62cab2.jpg">
				<div class="item-right">
					<p class="item-right-title">中西合璧，现代和传统各有各的精彩</p>
					<p class="item-right-text">上海必游TOP10</p>
					<button>查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				
			}	
		}
	}
</script>
<style lang='scss' scoped>
	.recommned-title{
		margin-top: .2rem;
		line-height: 40px;
		background: #dedede;
		text-indent: .2rem;
	}
	.item{
		display: flex;
		height: 1.9rem;
		overflow: hidden;
		.item-img{
			width: 1.7rem;
			height: 1.7rem;
			padding: .1rem;
		}
		.item-right{
			flex:1;
			padding: .1rem;
			.item-right-title{
				line-height: .54rem;
				font-size: .34rem;
			}
			.item-right-text{
				line-height: .54rem;
				font-size: .34rem;
				color: #dedede;
			}
			button{
				width: 100px;
				padding: 0 1px;
			}
		}
	}
</style> 