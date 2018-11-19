<template>
    <scroller 
        use-pullup :pullup-config="pullupDefaultConfig" @on-pullup-loading="loadMore"
        use-pulldown :pulldown-config="pulldownDefaultConfig" @on-pulldown-loading="refresh" ref="scroller" lock-x enableHorizontalSwiping height="-44" :scroll-bottom-offset="120">
        <div id="mine">
            <div class="record" @click="tapItem(index)" v-for="(item, index) in records" :key=item.id>
                <div class="header">
                    <div class="match">
                        <p class="time">{{item.match_time|dateFormat}}</p>
                        <p class="matchType">{{item.match_type | matchType}}</p>
                        <p class="matchState" :class="[item.match_state == 0 ? playing : played]">| {{item.match_state | matchState}}</p>
                    </div>
                    <p class="income" :class="[item.income == 0 ? lose : win]" v-if="item.match_state == 1">{{item.income == 0 ? '未猜中' : '+' + item.income + ' OC'}} </p>
                </div>
                <div class="content">
                    <div class="team home">
                        <p>{{item.home_club_name}}</p>
                        <img :src="item.home_club_logo" class="logo" />
                    </div>
                    <div class="vs"> 
                        <p v-if="item.match_state == 0">VS</p> 
                        <p v-else>{{item.home_score}} : {{item.guest_score}}</p>
                    </div>
                    <div class="team">
                        <img :src="item.guest_club_logo" class="logo" />
                        <p>{{item.guest_club_name}}</p>
                    </div>
                </div>
                <div class="footer">
                    <p>{{item.bet | betTeam(item)}} {{item.stake}} OC <span :class="[item.trans_state == 0 ? notplay : (item.trans_state == 1 ? playing : played)]">{{info.TRANS_STATE[item.trans_state]}}</span></p>
                    <p>{{item.bet_time | dateFormat}} 参与的竞猜</p>
                </div>
            </div>
            <p class="nobet" v-if="nobet">{{info.BET_EMPTY}}</p>
            <p class="noMore" v-if="nomore">没有更多了</p>
        </div>
    </scroller>
</template>

<script>
import info from '@/config/info.js'
import Scroller from 'vux/src/components/scroller'
import DateFormat from 'vux/src/tools/date/format.js'
import throttle from 'vux/src/tools/throttle'

export default {
    name: 'Record',
    components: {
        Scroller
    },

    props: {
        isActive: {
            type: Boolean,
            default: false
        },

        loadTipsInterval: {
            type: Number,
            default: 500
        }
    },

    data() {
        return {
            isLoading: false,
            total: 0,
            page: 1,
            pageSize: 4,
            records: [],
            notplay: 'notplay',
            playing: 'playing',
            played: 'played',
            lose: 'lose',
            win: 'win',
            nomore: false,
            nobet: false,
            info,
            pulldownDefaultConfig: info.pulldownDefaultConfig,
            pullupDefaultConfig: info.pullupDefaultConfig
        }
    },

    mounted() {
        this.$nextTick(() => {
            this.$refs.scroller.reset({top: 0})
        })
    },

    watch: {
        isActive: function(val) {
            if (val && this.records.length == 0 && !this.isLoading) {
                this.$refs.scroller.disablePullup()

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

        matchState(state) {
            return info.MATCH_STATE[state]
        },

        matchType(type) {
            return info.SPORTS_NAME[type]
        },

        betTeam(bet) {
            return bet == 0 ? '主队胜: ' :
                (bet == 2 ? '客队胜: ' : '两队平: ')
        }
    },

    methods: {
        getRecords: function(cb) {
            this.$http.get('/matchinfo/mine', {
                params: {
                    addr: this.$user.addr,
                    page: this.page - 1,
                    limit: this.pageSize
                }
            })
            .then(({data}) => cb(data))
            .catch(err => cb('', err))
        },


        tapItem: throttle(function(index) {
            console.log(this.records[index])
            this.$wechat.miniProgram.navigateTo({
                url: '/pages/detail/detail?tokenid=1&source=sports&transid=' + this.records[index].trans_id
            })

        }, 1500, { 'trailing': false }),

        refresh: function() {
            if (this.isLoading) return
            this.page = 1
            this.nomore = false
            this.nobet = false
            this.isLoading = true

            this.getRecords((data, err) => {
                if(err) {
                    this.$toast(info.ERR_NETWORK, () => {
                        this.$refs.scroller.donePulldown()
                        this.isLoading = false
                    })

                    return
                }

                console.log(data)

                setTimeout(() => {
                    this.total = data.count
                    if (data.matches.length != 0) {
                        this.records = data.matches

                        this.$nextTick(() => {
                            this.$refs.scroller.reset({top: 0}, 500)
                        })
                    } else {
                        this.nobet = true
                    }

                    this.$refs.scroller.donePulldown()

                    if(this.total > this.pageSize) {
                        this.$refs.scroller.enablePullup()
                    }

                    this.isLoading = false
                }, this.loadTipsInterval)
            })
        },

        loadMore: function() {
            if (this.isLoading) return 
            ++this.page

            if(this.page > Math.ceil(this.total / this.pageSize))  {
                this.$refs.scroller.donePullup()
                this.$refs.scroller.disablePullup()
                this.isLoading = false
                this.nomore = true

                return
            }

            this.isLoading = true

            this.getRecords((data, err) => {
                if(err) {
                    console.log(err)
                    this.$toast(info.ERR_NETWORK, () => {
                        this.$refs.scroller.donePullup()
                        this.isLoading = false
                    })

                    return
                }
                console.log(data)

                setTimeout(() => {
                    if (data.matches.length != 0) {
                        this.records =  this.records.concat(data.matches)

                        this.$nextTick(() => {
                            this.$refs.scroller.reset()
                        })
                    } else {
                        this.nomore = true
                        this.$refs.scroller.disablePullup()
                    }

                    this.$refs.scroller.donePullup()
                    this.isLoading = false
                }, this.loadTipsInterval)
            })
        }
    }
}

</script>

<style scoped>
#mine {
    display: flex;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    padding-top: 1vh;
}

.record {
    width: 96vw;
    height: 23vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    border-radius: 5px;
    background-color: white;
    margin-bottom: 2vh;
    padding-bottom: 2vh;
}

.record:first-child {
    margin-top: 1.3vh;
}

.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 5px 5px 0 5px;
    flex-grow: 1;
}

.match {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}

.income {
    width: 50%;
    display: flex;
    justify-content: flex-end;
}

.win {
    color: red;
    font-size: 1.8rem;
}

.lose {
    width: auto;
    height: 20px;
    color: #aaa;
    transform:rotate(40deg);
    -webkit-transform:rotate(40deg);
    margin-top:8px;
    margin-right: -6px;
    font-size: 1.8rem;
}

.notplay {
    color: #c38b36 !important;
}

.playing {
    color: green !important;
}

.played {
    color: red !important;
}

.content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
}

.team {
    width: 40vw;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: #39495c;
}

.home {
    justify-content: flex-end;
}

.team > p {
    font-size: 1.6rem;
}

.vs {
    width: 10vw;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.logo {
    width: 8vw;
    height: auto;
    margin: 5px;
}

.time, .matchState, .matchType {
    font-size: 1.2rem;
    color: #999;
    margin-right: 5px;
}

.matchType {
    color: #666;
}

.footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0 5px 5px 5px;
    font-size: 1.2rem;
    color: #888;
    flex-grow: 1;
}

.noMore {
    color: #666;
    margin-bottom: 2vh;
}

.nobet {
    width: 100vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #666;
    font-size: 2rem;
}

.state {
    color: red;
}

</style>
