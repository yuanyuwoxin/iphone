<template>
	<div class="list" ref='wrapper'>
		<div>
			<div class="area">
				<div class="title border-Bottom">当前城市</div>
				<div class='cont'>
					<div>上海</div>
					<div>上海</div>
					<div>上海</div>
					<div>上海</div>
					<div>上海</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-Bottom">热门城市</div>
				<div class='cont'>
					<div>上海</div>
					<div>上海</div>
					<div>上海</div>
					<div>上海</div>
					<div>上海</div>
				</div>
			</div>
			<div class="area" v-for='(x,index,key) in 26' :key='index' :ref='x'>
				<div class="title border-Bottom">{{x}}</div>
				
				<div class='item-list'>
					<div class="item">阿拉尔</div>
					<div class="item">阿拉尔</div>
					<div class="item">阿拉尔</div>
					<div class="item">阿拉尔</div>
					<div class="item">阿拉尔</div>
					<div class="item">阿拉尔</div>
					<div class="item">阿拉尔</div>
					<div class="item">阿拉尔</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import BScroll from 'better-scroll'
	export default{
		mounted(){
			this.scroll=new BScroll(this.$refs.wrapper)
		},
		props:{
			name:[String,Number]
		},
		data(){
			return {
				
			}	
		},
		watch:{
			name(val){    //楼层切换，需要绑定在标签父元素绑定ref
				// console.log(typeof val,val)
				if(val){
					console.log(this.$refs[val][0])  //获取DOM节点，因为获取的是个数组所以要加索引
					this.scroll.scrollToElement(this.$refs[val][0]) //better-scroll自带用法，可以滚动到对应位置
				}
			}
		},
		methods:{
			add(){}

		}
	}
</script>
<style scoped lang='scss'>
@import '../css/all.styl';
.border-Bottom{
	border-bottom: 1px solid #ccc;
}
	.list{
		position: absolute;
		top:67px;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: hidden;
		.area{
			.title{
				background: #eee;
				height: 20px;
				line-height: 20px;
				padding-left: 10px;
				font-size: 14px;
			}
			.cont{
				overflow: hidden;
				padding: 10px 24px 10px 10px;
				div{
					width: 30%;
					background: #fff;
					text-align: center;
					float: left;
					margin-right: 6px;
					margin-top: 6px;
					border-radius:3px;
					line-height: 18px;
					border:1px solid #dedede;
				}
			}
			.item-list{
				.item{
					padding: 4px 10px;
					border-bottom:1px solid #dedede;
					color: 	orange;
				}
			}

		}
	}
</style> 