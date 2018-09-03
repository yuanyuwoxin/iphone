<template>

	<div>
		<ul class="RightList">
		<li 
			v-for='(x,index) in letters' 
			:key='index'
			:ref='x' 
			@click='cl' 
			@touchstart='start1' 
			@touchmove='move1'
			@touchend='end1'
		>
			{{x}}
		</li>
	</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				touchs:false,
				startY:0,
				timer:null
			}	
		},
		updated(){
			this.startY=this.$refs['1'][0].offsetTop 
		},
		computed:{
			letters(){
				const letters=[];
				for(let i=1;i<27;i++){
					letters.push(i)
				}
				return letters
			}
		},
		methods:{
			cl(e){
				this.$emit('change',e.target.innerText)
				
			},
			start1(){
				this.touchs=true
			},
			move1(e){
				if(this.touchs){
					// const startY=this.$refs['1'][0].offsetTop性能优化，写到了updated
				    //获取元素的offsetTop
				    if(this.timer){
				    	clearInterval(this.timer)
				    }
				    this.timer=setTimeout(()=>{  //函数截留，提高性能
				    	const touchY=e.touches[0].clientY-67 //获取手指在屏幕上的Y值，67是距离顶端的距离
				    	const index=Math.floor((touchY-this.startY)/22)
				    	if(index>=0&&index<this.letters.length){
				    		this.$emit('change',this.letters[index])
				    	}
				    },16.7)
				}
			},
			end1(){
				this.touchs=false
			}
		}
	}
</script>
<style scoped lang='scss'>
	
		.RightList{
			position: absolute;
			z-index: 2;
			display: flex;
			flex-direction:column;//处置排列
			justify-content:center;//水平居中
			top: 67px;
			right: 0;
			bottom: 0;
			background: red;
			width: 30px;
			li{
				height: 22px;
				text-align: center;
				font-size: 14px;
			}
		}
</style> 