<template>
    <div class="update_item">
        <div class="clearfix title_box">
            <span class="title active pull-left">1.0.0</span>
            <span class="lable pc pull-left">电脑端</span>
            <span class="lable modify pull-left">修改</span>
            <p class="date">2017-05-12</p>
        </div>
        <ul>
            <li>后台文件新增图片上传功能，上传图片支持jpg、png格式。目前该功能已经上线，赶快体验吧！</li>
            <li>后台文件新增图片上传功能，上传图片支持jpg、png格式。目前该功能已经上线，赶快体验吧！</li>
            <li>后台文件新增图片上传功能，上传图片支持jpg、png格式。目前该功能已经上线，赶快体验吧！</li>
            <li>后台文件新增图片上传功能，上传图片支持jpg、png格式。目前该功能已经上线，赶快体验吧！</li>
        </ul>
    </div>
</template>

<script>
	export default {
		name: 'comment',
		props: ['id'],
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
    @import "../../lib/style/color";
    .update_item{
        .title_box{
            position: relative;
            .date{
                position: absolute;
                left: -127px;
                top: .3em;
                color: #ff7300;
            }
            &:before{
                content: "";
                display: block;
                position: absolute;
                left: -31px;
                top: .5em;
                width: 16px;
                height: 16px;
                border-radius: 50%;
                box-sizing: border-box;
                background-color: #ff7300;
            }
        }
        .title{
            font-size: 22px;
            font-weight: 400;
        }
        .lable{
            font-weight: normal;
            font-size: 14px;
            padding: 1px 8px 1px 8px;
            border-radius: 99px;
            margin: .4em 0 0 8px;
        }
        .active{
            color: #ff7300;
        }
        .pc{
            background-color: #f6baaf;
            color: #f66e54;
        }
        .modify{
            background-color: #e6e6e6;
            cursor: pointer;
        }
        ul li{
            font-size: 14px;
            color: @text110;
            line-height: 1.8;
            &:before{
                content: "";
                width: 4px;
                height: 4px;
                border-radius: 50%;
                margin-bottom: .2em;
                background-color: @text100;
                margin-right: 5px;
                display: inline-block;
                vertical-align: middle;
            }
        }
    }
</style>
