<template>
   <!-- <keep-alive>
        <component :is="state"></component>
    </keep-alive>-->
    <div>
        <!--列表显示框-->
        <StateLi v-show="starJson.starLi" ref="starDataLi"></StateLi>
        <!--处理框-->
        <State1 v-if="starJson.star1"></State1>
        <!--拒绝-->
        <State2 v-if="starJson.star2"></State2>
        <!--维修框-->
        <State3 v-if="starJson.star3"></State3>
        <!--完成框-->
        <State4 v-if="starJson.star4"></State4>
        <!--送修中-->
        <State5 v-if="starJson.star5"></State5>
        <!--返回中-->
        <State6 v-if="starJson.star6"></State6>
    </div>
</template>

<script>
    import StateLi from './../components/StateLi'
    import State1 from './../components/State1'
    import State2 from './../components/State2'
    import State3 from './../components/State3'
    import State4 from '../components/State4'
    import State5 from '../components/State5'
    import State6 from '../components/State6'

    export default {
        name: "StateBox",
        components:{
            StateLi,
            State1,
            State2,
            State3,
            State4,
            State5,
            State6,
        },
        data:function () {
            return {
                //组件的数据
                starBoxData:{},
                //数据的角标
                starBoxDataLength:0,
                //当前登录用户
                bossUser:{},


            //组件的显示隐藏
                starJson:{
                    starLi:true,
                    star1:false,
                    star2:false,
                    star3:false,
                    star4:false,
                    star5:false,
                    star6:false,
                }
            }
        },
        methods:{
            //组件中返回按钮的时间
            starBackBtn(){
                for (let key in this.starJson) {
                    this.starJson[key]=false;
                }
                this.starJson.starLi=true;
            }
        },

    }
</script>

<style scoped>

</style>