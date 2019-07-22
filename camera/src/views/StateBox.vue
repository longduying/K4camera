<template>
    <keep-alive>
        <component :is="state"></component>
    </keep-alive>
</template>

<script>
    import StateLi from './../components/StateLi'
    import State1 from './../components/State1'
    import State2 from './../components/State2'
    import State3 from './../components/State3'
    import State4 from './../components/State4'

    export default {
        name: "StateBox",
        components:{
            StateLi,
            State1,
            State2,
            State3,
            State4,
        },
        data:function () {
            return {
                state:'State4'
            }
        }
    }
</script>

<style scoped>

</style>