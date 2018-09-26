<template>
    <ul class="update-logedite">
        <li class="version">
            <div class="number">版本号（例如：1.0.0）</div>
            <div class="input">
                <label>
                    <input type="text" placeholder="版本号（例如：1.0.0）"/>
                </label>
            </div>
        </li>
        <li class="device">
            <div class="type">更新设备（默认选中电脑端）</div>
            <div class="span_box">
                <span>电脑端</span>
                <span>移动端</span>
                <span>小程序</span>
                <span>APP客户端</span>
                <span>PC客户端</span>
                <span>后台</span>
            </div>
        </li>
        <li class="content">
            <div class="title">更新内容</div>
            <div>
                <label>
                    <input type="text" placeholder="描述"/>
                    <span class="delete">删除</span>
                </label>
            </div>
            <div>
                <label>
                    <input type="text" placeholder="描述"/>
                    <span class="delete">删除</span>
                </label>
            </div>
        </li>
        <li class="tips clearfix">
            <p>提示：编辑完成后记得保存</p>
            <p class="save">保存</p>
            <p class="add-tips">新增更新说明</p>
        </li>
    </ul>
</template>

<script>
	import AticalTitle from '../common/Title.vue'
	export default {
		name: 'comment',
		props: ['id'],
		components: {
			AticalTitle
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
    @import "../../lib/style/color";

    .update-logedite {
        position: relative;
        padding-left: 25px;
            &:before{
                content: "";
                display: block;
                position: absolute;
                left: 5px;
                top: 4px;
                width: 1px;
                height: 100%;
                background-color: @background-color50;
            }
        li{
            margin-bottom: 20px;
            position: relative;
            &:before{
                content: "";
                display: block;
                position: absolute;
                left: -26px;
                top: .3em;
                width: 14px;
                height: 14px;
                border-radius: 50%;
                box-sizing: border-box;
                background-color: #ff7300;
                border: 3px solid @background-color50;
            }
        }
        input {
            width: 720px;
            height: 34px;
            outline: none;
            text-indent: .5em;
            margin: 10px 0;
        }
        .version {
            .number {
                font-size: 16px;
                color: @manager_color15;
            }
        }
        .device {
            .span_box {
                margin: 10px 0;
            }
            .type {
                font-size: 16px;
                color: @manager_color15;
            }
            span {
                padding: 4px 10px;
                border: 1px solid @background-color50;
                margin: 0 15px 0 0;
                color: @background-color50;
            }
        }
        .content {
            .title {
                font-size: 16px;
                color: @manager_color15;
            }
            label {
                position: relative;
            }
            .delete {
                position: absolute;
                top: -7px;
                right: 0;
                width: 50px;
                height: 34px;
                background-color: @background-color50;
                text-align: center;
                line-height: 2.4em;
                transition: all .4s;
                cursor: pointer;
                &:hover {
                    background-color: @background-color350;
                }
            }
        }
        .tips {
            width: 720px;
            p {
                float: right;
                cursor: pointer;
                color: @color808;
                &:first-child {
                    float: left;
                    padding-top: 5px;
                }
            }
            .save{
                padding: 5px 16px;
                background-color: @manager_color16;
                color: @white;
            }
            .add-tips{
                padding: 5px 16px;
                background-color: @background-color50;
                color: @text100;
                margin: 0 25px 0 0;
            }
        }
    }
</style>
