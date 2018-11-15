<template>
        <scroller 
        use-pulldown :pulldown-config="pulldownDefaultConfig" ref="scroller" @on-pulldown-loading="refresh" lock-x enableHorizontalSwiping height="-44">
        <div class="match-csl">
            <div class="csl-item" v-for="(item, index) in list" :key=item.match_id>
                <div class="csl-header">
                    <p style="width:45vw;">本场已投注 {{item.total_oc | ocFormat}}</p>
                    <div class="bet">
                        <p>主胜:{{item.win_oc | ocFormat}}</p>
                        <p v-if="pressNum == 3">平:{{item.draw_oc | ocFormat}}</p>
                        <p>客胜:{{item.lose_oc | ocFormat}}</p>
                    </div>
                </div>
                <div class="csl-info">
                    <div class="team">
                        <img :src="item.home_club_logo" class="logo" />
                        <p>{{item.home_club_name}}</p>
                    </div>
                    <div class="vs"> 
                        <p class="round">第{{item.round}}轮</p>
                        <p v-if="item.match_state == 0">VS</p> 
                        <p v-else>{{item.home_score}} : {{item.guest_score}}</p>
                        <p class="time">{{item.match_time|dateFormat}}</p>
                    </div>
                    <div class="team">
                        <img :src="item.guest_club_logo" class="logo" />
                        <p>{{item.guest_club_name}}</p>
                    </div>
                </div>
                <div class="csl-quiz">
                    <button-tab class="csl-btn">
                        <button-tab-item @on-item-click="tapItem(index, $event)" v-for="tab in pressTabs" :key="tab.index">{{tab}}</button-tab-item>
                    </button-tab>
                </div>
            </div>
            <div v-transfer-dom>
                <popup class="mask" v-model="isShow" is-transparent>
                    <div class="pay">
                        <div class="payHeader" :class="{payWin: !isDrawn}">
                            <div class="payTeam" :class="{right: isDrawn}">
                                <p v-if="isDrawn" class="teamName" style="text-align:right;">{{win_name}}</p>
                                <img :src="win_logo" class="logo"/>
                                <p v-if="!isDrawn" class="teamName">{{win_name}}</p>
                            </div>
                            <p v-if="isDrawn" class="drawn">平</p>
                            <div class="payTeam" :class="{ payDrawn: isDrawn }" v-if="isDrawn">
                                <img :src="lose_logo" class="logo"/>
                                <p class="teamName">{{lose_name}}</p>
                            </div>
                        </div>
                        <div class="payContent">
                            <x-button class="payBtn" type="default" @click.native="pay(1, itemIndex, tabIndex)">1 <span class="money">oc</span></x-button>
                            <x-button class="payBtn" type="default" @click.native="pay(5, itemIndex, tabIndex)">5 <span class="money">oc</span></x-button>
                            <x-button class="payBtn" type="default" @click.native="pay(10, itemIndex, tabIndex)">10 <span class="money">oc</span></x-button>
                            <x-button class="payBtn" type="default" @click.native="pay(20, itemIndex, tabIndex)">20 <span class="money">oc</span></x-button>
                            <x-button class="payBtn" type="default" @click.native="pay(50, itemIndex, tabIndex)">50 <span class="money">oc</span></x-button>
                            <x-button class="payBtn" type="default" @click.native="pay(100, itemIndex, tabIndex)">100 <span class="money">oc</span></x-button>
                            <x-button class="payBtn" type="default" @click.native="pay(500, itemIndex, tabIndex)">500 <span class="money">oc</span></x-button>
                            <x-button class="payBtn" type="default" @click.native="pay(888, itemIndex, tabIndex)">888 <span class="money">oc</span></x-button>
                        </div>
                        <div class="rule" @click="tapRule">
                            <x-icon type="ios-help-outline" size="16" style="fill:#666;"></x-icon>
                            <p>竞猜规则</p>
                        </div>
                    </div>
                </popup>
            </div>
            <div v-transfer-dom>
                <alert v-model="alertShow" title="竞猜规则" button-text="同意">
                <p class="ruleContent">{{info.RULE[0]}}</p>
                <p class="ruleContent">{{info.RULE[1]}}</p>
                <p class="ruleContent">{{info.RULE[2]}}</p>
                <p class="ruleContent">{{info.RULE[3]}}</p>
                <p class="ruleContent">{{info.RULE[4]}}</p>
                </alert>
            </div>
        </div>
        </scroller>
</template>

<script>
import info from '@/config/info.js'
import Scroller from 'vux/src/components/scroller'
import DateFormat from 'vux/src/tools/date/format.js'
import ButtonTab from 'vux/src/components/button-tab/button-tab'
import ButtonTabItem from 'vux/src/components/button-tab/button-tab-item'
import Divider from 'vux/src/components/divider'
import Popup from 'vux/src/components/popup'
import TransferDom from 'vux/src/directives/transfer-dom'
import XButton from 'vux/src/components/x-button'
import throttle from 'vux/src/tools/throttle'
import alert from 'vux/src/components/alert'

export default {
    name: 'Match',

    components: {
        Scroller,
        ButtonTab,
        ButtonTabItem,
        Divider,
        Popup,
        XButton,
        alert
    },

    directives: {
        TransferDom
    },

    props: {
        type: {
            type: String,
            default: "csl"
        },

        pressNum: {
            type: Number,
            default: 3
        },

        isActive: {
            type: Boolean,
            default: false
        },

        loadTipsInterval: {
            type: Number,
            default: 500
        },

        deadline: {
            type: Number,
            default: 600
        }
    },

    data() {
        return {
            pulldownDefaultConfig: info.pulldownDefaultConfig,
            pressTabs:[],
            isLoading: false,
            list: [],
            isShow: false,
            win_logo: "",
            win_name: "",
            lose_logo: "",
            lose_name: "",
            isDrawn: false,
            itemIndex: 0,
            tabIndex: 0,
            alertShow: false,
            info
        }
    },

    mounted() {
        this.$nextTick(() => {
            this.$refs.scroller.reset({top: 0})
        })
    },

    watch: {
        isActive: function(val) {
            if (val && this.list.length == 0 && !this.isLoading) {
                this.pressTabs = this.pressNum == 3 ? ["主胜", "平", "客胜"] : ["主胜", "客胜"]

                this.$nextTick(() => {
                    this.$refs.scroller.pulldown._changeStatus("loading")
                    this.$refs.scroller.reset({top: -44}, 500)
                })

                this.refresh()
            }
        }
    },

    filters: {
        dateFormat: function(time) {
            return DateFormat(new Date(time * 1000), 'MM月DD日 HH:mm')
        },

        ocFormat: function(num) {
            if (num < 10000) return num

            let n = (num / 10000).toString()
            return n.substr(n.indexOf('.') + 1, 1) == 0 ?
                n.substr(0, n.indexOf('.')) + 'w' : n.substring(0, n.indexOf('.') + 2) + 'w'
        }
    },

    methods: {
        getList: function(cb) {
            this.$http.get('/matchinfo/' + this.type)
                .then(({data}) => {
                    cb(data)
                })
                .catch(err => cb('', err)) 
        },

        refresh: function() {
            if (this.isLoading) return
            this.isLoading = true

            this.getList((data, err) => {
                if(err) {
                    console.log(err)
                    this.$toast(info.ERR_NETWORK, () => {
                        this.$refs.scroller.donePulldown()
                        this.isLoading = false
                    })

                    return
                }

                setTimeout(() => {
                    this.list = data

                    this.$nextTick(() => {
                        this.$refs.scroller.reset({top: 0}, 500)
                    })

                    this.$refs.scroller.donePulldown()
                    this.isLoading = false
                }, this.loadTipsInterval)
            })
        },

        tapItem: throttle(function(itemIndex, tabIndex) {
            //if(Math.ceil(new Date().getTime() / 1000) + this.deadline >= this.list[itemIndex].match_time) {
            //    this.$toast('竞猜已截止!')
            //    return
            //}

            this.itemIndex = itemIndex
            this.tabIndex = tabIndex
            this.isShow = true
            this.isDrawn = false

            if(tabIndex == 1 && this.pressNum == 3) {
                this.isDrawn = true
                this.win_logo = this.list[itemIndex].home_club_logo
                this.win_name = this.list[itemIndex].home_club_name
                this.lose_logo = this.list[itemIndex].guest_club_logo
                this.lose_name = this.list[itemIndex].guest_club_name
                return
            }

            this.win_logo = tabIndex == 0 ? this.list[itemIndex].home_club_logo : this.list[itemIndex].guest_club_logo
            this.win_name = tabIndex == 0 ? this.list[itemIndex].home_club_name : this.list[itemIndex].guest_club_name
        }, 800, { 'trailing': false }),

        tapRule: function() {
            this.alertShow = true
        },

        pay: throttle(function(num, itemIndex, tabIndex) {
            let team = this.list[itemIndex]
            let desc = info.SPORTS_NAME[this.type]  + DateFormat(new Date(team.match_time * 1000), 'YYYY') + "赛季第" + team.round + "轮 "  + "\n"
            switch (tabIndex) {
                case 0:
                    desc += team.home_club_name + ', 胜!\n投注 ' + num + ' OC'
                    break;
                case 1:
                    desc += team.home_club_name + ' 平 ' + team.guest_club_name + '\n投注 ' + num + ' OC'
                    break;
                case 2:
                    desc += team.guest_club_name + ', 胜!\n投注 ' + num + ' OC'
                    break;
            }

            this.$http.post('/bet', {
                address: this.$user.addr,
                match_id: team.match_id,
                bet: tabIndex,
                stake: num,
                match_type: this.type
            }).then(res => {
                setTimeout(() => {
                    this.isShow = false
                }, 500)
                this.$wechat.miniProgram.navigateTo({
                    url: '/pages/transfer/transfer?symbol=OC&tokenid=1&source=sports&addr=0xc748a16a533431ba8a3b7794cbac7a016f81fc6c&desc=' + desc + '&org_transid=' + res.data.org_trans_id + '&price=' + num
                })
            }).catch(err => this.$toast(err.response ? info.ERR_INNER: info.ERR_NETWORK))

        }, 1500, { 'trailing': false })
    }
}

</script>

<style scoped>

.match-csl {
    display: flex;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    padding-top: 1vh;
}

.csl-item {
    width: 95vw;
    height: 26vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    margin-bottom: 2vh;
    background-color: white;
}

.csl-item:first-child {
    margin-top: 1.3vh;
}

.csl-info {
    margin-top: 1.2vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.csl-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 5px 5px 0 5px;
    color: #999;
    font-size: 1.2rem;
}

.team {
    width: 35vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #39495c;
}

.team > p {
    margin-top: 5px;
    font-size: 1.4rem;
}

.vs {
    width: 30vw;
    height: 12vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.round {
    font-size: 1rem;
    color: #999;
}

.time {
    font-size: 1rem;
    color: #999;
}

.logo {
    width: 15vw;
    height: auto;
}

.csl-quiz {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 1.5vh 0;
}

.csl-btn {
    width: 90vw;
}

.mask {
    height: 220px;
}

.pay {
    width: 100vw;
    height: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding-top: 10px;
}

.payContent {
    width: 95vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 10px;
}

.payHeader {
    width: 100vw;
    height: 6vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.drawn {
    height: 6vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    color: #3b4959;
    margin: 0 10px;
}

.payBtn {
    width: 80px;
    height: 60px;
    color: #3b4959;
    margin-top: 0 !important;
    margin-bottom: 15px;
}

.money {
    font-size: 0.8rem;
}

.payTeam {
    width: 45vw;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    color: #39495c;
}

.payTeam > .logo {
    width: 9vw;
    height: auto;
}

.payWin {
    width: 96vw;
    justify-content: flex-start;
    align-items: flex-start;
}

.teamName {
    margin: 0 10px;
    font-size: 1.8rem;
}

.right {
    justify-content: flex-end;
}

.help {
    align-self: flex-end;
    margin: 5px 8px 0 0;
}

.rule {
    width: 95vw;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #666;
    font-size: 1.4rem;
    /*align-self: flex-start; */
    margin-bottom: 8px;
}

.rule > p {
    margin-left: 3px;
}

.bet {
    width: 55vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-grow: 1;
}

.bet p {
    flex-grow: 1;
}

.ruleContent {
    color: #3b4959;
    text-align: left;
    margin-bottom: 10px;
}

</style>
