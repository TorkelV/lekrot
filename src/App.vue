<template>
    <div id="app">
      <Nav/>
      <div id="feed-grid" v-resize="resizeGrid" v-resize.initial="resizeGrid">
        <Card class="card" v-for="p in projects" v-bind:key="p.title" :title="p.title" :desc="p.desc" :img="p.img" :url="p.url" :keywords="p.keywords" :category="''" :links="p.links"/>
      </div>
    </div>
</template>

<script>
import Card from "./components/Card.vue";
import Nav from "./components/Nav.vue";
import resize from "vue-resize-directive";
import {PROJECTS} from "./const/projects.js"

export default {
    name: "app",
    components: {
        Card,
        Nav
    },
    directives: {
        resize
    },
    methods: {
      resizeGrid(){
            Array.from(document.getElementsByClassName("card")).forEach(this.resizeGridItem);
        },
        resizeGridItem(item){
            let grid = document.getElementById("feed-grid");
            let rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
            let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
            let rowSpan = Math.ceil((Array.from(item.children).reduce((a,b)=>a+b.getBoundingClientRect().height,0)+rowGap)/(rowHeight+rowGap));
            item.style.gridRowEnd = "span "+rowSpan;
        }
    },
    data(){
      return {
        projects: PROJECTS
      }
    }
};
</script>

<style lang="scss">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #f6f6f6;
}
#feed-grid {
    padding: 10px;
    margin: 10px;
    display: grid;
    grid-gap: 10px;
    grid-auto-rows: 20px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
</style>
