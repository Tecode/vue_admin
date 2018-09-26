<template>
    <div class="echar_statistic">
        <h3 class="title">访问统计 | Access statistics</h3>
        <div class="box" id="Echars_statistics"></div>
    </div>
</template>

<script>
    import EcharsStatistics from '../../static/EcharsStatistics'
	export default {
		name: 'echar_statistic',
		computed: {},
		methods: {},
		mounted: function () {
			EcharsStatistics({
              echars_box: 'Echars_statistics'
            });
		},
	}
</script>

<style lang="less" scoped>
    @import "../../lib/style/color";
    .echar_statistic{
        .title{
            font-weight: normal;
            color: @manager_color04;
            padding: 0 0 25px 0;
            text-transform: capitalize;
            font-size: 16px;
        }
        .box{
            width: 100%;
            height: 560px;
            border-radius: @border-radius6;
            border: 1px solid @manager_color05;
            padding-bottom: 30px;
        }
    }
</style>
