<template>
    <article>
        <div class="top">
            <a target="_blank" v-for="link in links" v-bind:key="link.url" :href="link.url"><img  class="icon type" :src="link.img"></a>
        </div>
        <a :href="url" target="_blank">
            <div class="img">
                <img v-if="img" :src="img" v-on:load="resizeGridItem">
            </div>
            <div class="content" onclick="">
                <h1>{{title}}</h1>
                <p v-for="d in desc" v-bind:key="d">{{d}}</p>
            </div>
        </a>
        <div class="bottom">
            <p v-for="keyword in keywords" v-bind:key="keyword" class="keyword">{{keyword}}</p>
        </div>
    </article>
</template>

<script>
export default {
    name: "Card",
    props: {
        category: String,
        title: String,
        desc: Array,
        img: String,
        url: String,
        keywords: Array,
        links: Array,
    },
    methods: {
        resizeGridItem(){
            let item = this.$el;
            let grid = document.getElementById("feed-grid");
            let rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
            let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
            let rowSpan = Math.ceil((Array.from(item.children).reduce((a,b)=>a+b.getBoundingClientRect().height,0)+rowGap)/(rowHeight+rowGap));
            item.style.gridRowEnd = "span "+rowSpan;
        }
    },
};
</script>

<style scoped lang="scss">
article {
    position: relative;
    box-shadow: 1px 1px 1px 1px #eee;
    background: #fff;
    color: #424241;
    box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.3);
    .top {
        border-bottom: 1px solid #a2a1a1;
        padding: 10px;
        display: flex;
        justify-content: space-around;
        & p {
            font-size: 1em;
        }
        & * {
            display: inline-block;
            vertical-align: middle;
        }
    }

    & .img img {
        padding: 10px;
        max-width: 100%;
    }

    & .content {
        padding: 10px;

        & h1 {
            padding-bottom: 10px;
            font-size: 1.3em;
        }
    }

    .icon {
        height: 25px;
        &.upvote {
            height: 15px;
        }
    }

    .bottom {
        display: flex;
        flex-wrap: wrap;
        color: #6f6f6f;
        padding: 5px;
        position: absolute;
        width: 100%;
        bottom: 0;
        border-top: 1px solid #a2a1a1;
        justify-content: center;
        & .keyword {
            flex: 1;
            flex-grow: 0.4;
            border: 1px solid #a2a1a1;;
            border-radius: 5px;
            padding: 5px;
            margin: 5px;
            white-space: pre;
        }
    }
}
</style>
