<template>
    <div id="app">
        <tab id="nav" :line-width="2" :animate="false" active-color="#d66a5c" default-color="#39495c" v-model="index">
            <tab-item class="vux-center" :selected="index == 1" v-for="(item, index) in items" :key="index">{{item}}</tab-item>
        </tab>
        <swiper :options="swiperOption" ref="swiper" @slideChange="slideChange" class="swiper">
            <swiper-slide>
                <div class=slideHeader></div>
                <record :isActive="index == 0"></record>
            </swiper-slide>
            <swiper-slide>
                <div class=slideHeader></div>
                <match :isActive="index == 1" type="nba" :pressNum="2"></match>
            </swiper-slide>
            <swiper-slide>
                <div class=slideHeader></div>
                <match :isActive="index == 2" type="csl"></match>
            </swiper-slide>
            <swiper-slide>
                <div class=slideHeader></div>
                <match :isActive="index == 3" type="cba" :pressNum="2"></match>
            </swiper-slide>

        </swiper>
    </div>
</template>

<script>
import info from '@/config/info.js'
import Tab from 'vux/src/components/tab/tab'
import TabItem from 'vux/src/components/tab/tab-item'

import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Scroller from 'vux/src/components/scroller'

import Match from './components/Match.vue'
import Record from './components/Record.vue'

export default {
    components: {
        Tab,
        TabItem,
        swiper,
        swiperSlide,
        Scroller,
        Match,
        Record
    },

    data() {
        return {
            index: 0,
            items: info.TAB_ITEMS,

            swiperOption: {
                initialSlide: 1,
                direction: 'horizontal',
                autoHeight: true,
                touchMoveStopPropagation: false
            }
        }
    },

    computed: {
        swiper: function() {
            return this.$refs.swiper.swiper
        }
    },

    watch: {
        index: function(val) {
            this.swiper.activeIndex = val
        }
    },

    methods: {
        slideChange() {
            this.index = this.swiper.activeIndex
        }
    }
}
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/close.less';

#app {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0 0;
    box-sizing: border-box;
}

#nav {
    width: 100vw;
    position: fixed;
    display: flex;
    z-index: 2;
}

.swiper {
    width: 100vw;
    height: 100vh;
    display: flex;
}

.slideHeader {
    display: flex;
    background-color: #f0eff4;
    height: 44px;
}

.xs-plugin-pulldown-container {
    line-height: 40px;
}

.xs-plugin-pullup-container {
    line-height: 40px;
}

.record {
    height: 100px;
}
</style>
