export default {

    // tab items
    TITLE: "赛事",

    TAB_ITEMS: ["战绩", "中超", "CBA"],

    SPORTS_NAME: {
        csl: "中超",
        cba: "CBA",
        nba: "NBA",
        epl: "英超",
        laliga: "西甲",
        seriea: "意甲"
    },

    MATCH_STATE: ['未开奖', '已开奖'],

    TRANS_STATE: ['上链中', '上链成功', '上链失败'],

    RULE: [
        "1.每场比赛参与次数不限。额度参看选项。截止竞猜时间为本场开赛前十分钟。",
        "2.猜中比赛结果则赢得本场竞猜，未猜中则输掉OC，赢家按照占比赢取输家OC。",
        "3.派奖公式: （玩家参与oc数/猜中玩家参与总额）x （未猜中玩家参与总额 x 99.9%）保留0.1%作为平台运营费用。",
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

    ERR_NETWORK: '网络错误,稍后再试!',
    ERR_INNER: '系统内部错误'
}
