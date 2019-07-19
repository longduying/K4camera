<template>
    <keep-alive>
        <component :is="rootShowWho"></component>
    </keep-alive>

</template>

<script>

    import Root from './../components/Root'
    import ChangeRoot from '../components/ChangeRoot'

    export default {
        name: "RootBox",
        data:function(){
            return {
                rootShowWho:'Root'
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