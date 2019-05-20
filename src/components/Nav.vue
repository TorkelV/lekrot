<template>
    <header>
        <h1>Lek & Rot</h1>
    </header>
</template>

<script>
export default {
    name: "",
    props: {},
    data() {
        return {};
    },
    components: {}
};
</script>

<style scoped lang="scss">
header {
    width: 100%;
    padding: 0 30px;
    background-color: #ea4d59;
    color: #FFF;
    h1{
        padding: 5px;
        font-size: 25px;
    }
    nav {
        height: 55px;
        display: flex;
        padding: 10px;
        ul{
            list-style-type: none;
            li{
                margin: 0 5px;
                display: inline-block;
                padding: 5px;
                border-radius: 5px;
                font-weight: 600;
                border: 2px solid #FFF;
            }
        }
    }
}
</style>
