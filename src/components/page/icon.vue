<template>
	<div class="box-icon">
		<swiper>
			<swiper-slide v-for='(page,index) in pages' :key='index'>
				<div class="box-img" v-for='x in page' :key='x.id'>
					<div class="box-pic">
						<img :src="x.img" alt="">
					</div>
					<p>{{x.text}}</p>
				</div>
			</swiper-slide>
		</swiper>
		<div></div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				imgList:[{
					id:'01',
					img:"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
					text:'景点门票'
				},{
					id:'02',
					img:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
					text:'一日游'
				},
				{
					id:'03',
					img:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
					text:'上海必游'
				},
				{
					id:'04',
					img:"http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
					text:'游乐场'
				},
				{
					id:'05',
					img:"http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png",
					text:'夏日玩水'
				},
				{
					id:'06',
					img:"http://img1.qunarzz.com/piao/fusion/1805/57/1e29afd06f881102.png",
					text:'普陀山'
				},
				{
					id:'07',
					img:"http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png",
					text:'上海欢乐谷'
				},
				{
					id:'08',
					img:"http://img1.qunarzz.com/piao/fusion/1804/95/8d02011d149bdb02.png",
					text:'汽车票'
				},
				{
					id:'09',
					img:'http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png',
					text:'上海迪士尼'
				}]
			}	
		},
		computed:{
			pages(){
				const pages=[];
				this.imgList.forEach((item,index)=>{
					const page=Math.floor(index/8)
					if(!pages[page]){
						pages[page]=[]
					}
					pages[page].push(item)
				})
				return pages
			}
		}
	}
</script>
<style lang='scss' scoped>
@import '../css/all.styl';
.box-icon /deep/ .swiper-container{
	height: 0;
	padding-bottom: 50%;
}
	.box-icon{

		.box-img{
			float: left;
			width: 25%;
			height: 0;
			padding-bottom: 25%;
			position: relative;
			.box-pic{
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: .44rem;
				background: #fff;
				padding: .1rem;
				img{
					display: block;
					margin:0 auto;
					height: 100%;
				}
			}
			p{
				position: absolute;
				color: #000;
				bottom: 0;
				left: 0;
				right: 0;
				height: .44rem;
				line-height: .44rem;
				text-align: center;
				@extend %ellipsis;
			}
		}
	}
</style> 