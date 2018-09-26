<template>
    <div class="update_log">
        <div class="container">
            <div class="row">
                <ul class="col-md-7 col-md-offset-3 time-line">
                    <li>
                        <update-log-item></update-log-item>
                    </li>
                    <li>
                        <update-log-item></update-log-item>
                    </li>
                </ul>
            </div>
        </div>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
    import UpdateLogItem from '../components/updateLog/UpdateLogItem.vue'
    import NavFooter from '../components/common/Footer.vue'
	export default {
		name: 'update_log',
		props: ['id'],
			components:{
			UpdateLogItem,
			NavFooter
        },
		data () {
			return {
				open: true
			}
		},
		computed: {},
		methods: {}
	}
</script>

<style lang="less" scoped>
    @import "../lib/style/color";
    .update_log{
        background-color: @white100;
        width: 100%;
        height: 100%;
        .time-line{
            position: relative;
            &:before{
                content: "";
                width: 1px;
                height: 100%;
                position: absolute;
                left: -23px;
                top: 2.2em;
                background-color: #dedede;
            }
        }
        .time-line li{
            margin-top: 1.5em;
        }
    }
</style>
