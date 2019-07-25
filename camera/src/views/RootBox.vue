<template>
    <div>
        <ChangeRoot v-if="!rootShowWho"></ChangeRoot>
        <Root v-show="rootShowWho"></Root>
    </div>
</template>

<script>

    import Root from './../components/Root'
    import ChangeRoot from '../components/ChangeRoot'

    export default {
        name: "RootBox",
        data:function(){
            return {
                rootShowWho:true,
                userData:''
            }
        },
        components:{
            Root,
            ChangeRoot
        }
    }
</script>

<style scoped>

</style>