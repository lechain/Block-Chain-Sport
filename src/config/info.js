export default {

    // tab items
    TITLE: "赛事",

    TAB_ITEMS: ["战绩","英超","NBA"],

    SPORTS_NAME: {
        csl: "中超",
        cba: "CBA",
        nba: "NBA",
        epl: "英超",
        afc: "亚洲杯",
        laliga: "西甲",
        seriea: "意甲"
    },

    MATCH_STATE: ['未开奖', '已开奖'],

    TRANS_STATE: ['上链中', '上链成功', '上链失败'],

    BTN_2: ["主胜", "客胜"],
    BTN_3: ["主胜", "平", "客胜"],

    RULE: [
        "1.每场比赛参与竞猜次数不限。每场比赛投注OC额度请参考投注选项。截止竞猜时间为本场比赛开始前十分钟。",
        "2.如用户猜中比赛结果则赢得本场竞猜，如未猜中比赛结果则参与本场比赛投注的全部OC不予返还；赢家按照比例获得输家投注的OC。",
        "3.派奖计算公式：（猜中用户参与投注OC数/猜中用户参与投注总OC数）*（未猜中用户投注总OC数*99%）。保留1%作为平台运营费用。派奖OC数已包含猜中用户投注OC数。派奖时间：比赛结束后的24小时内返还至投注荷包内。",
        "4.若比赛取消或因特殊情况未能确定比赛结果, 全部退回。",
        "5.为公平起见，对于恶意破坏竞猜规则的用户，进行查证并取消资格，OC 均不退还。"
    ],

    pulldownDefaultConfig: {
        content: '下拉刷新',
        height: 40,
        autoRefresh: false,
        downContent: '下拉刷新',
        upContent: '释放后刷新',
        loadingContent: '正在刷新...',
        clsPrefix: 'xs-plugin-pulldown-'
    },

    pullupDefaultConfig: {
        content: '加载中...',
        pullUpHeight: 60,
        height: 40,
        autoRefresh: false,
        downContent: '加载中...',
        upContent: '加载中...',
        loadingContent: '加载中...',
        clsPrefix: 'xs-plugin-pullup-'
    },

    BET_EMPTY: '您还未参与竞猜!',
    BET_FINISHED: '竞猜已截止',

    ERR_NETWORK: '网络错误,稍后再试!',
    ERR_INNER: '系统内部错误'
}
