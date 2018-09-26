<template>
    <div class="message_item">
        <div class="clearfix title_box">
            <p class="bliuld">1楼</p>
        </div>
        <ul>
            <li>
                <div class="portrait_box clearfix">
                    <div class="box_image pull-left">
                        <img src="../../imgs/Demo_moudle.jpg" width="120px" />
                    </div>
                    <div class="user pull-left">
                        <p class="name">阿明</p>
                        <p class="date">2017-6-13 23：45
                            <span>回复</span>
                        </p>
                    </div>
                </div>
                <p class="content">
                    换不厌的春秋和一个等不到的人，错乱我的四季。 每段旅程都会有一个你爱的人，就像双手不会主动拒绝温暖的十指紧扣。
                </p>
                <div class="write_box">
                    <label for="write_box"></label>
                    <textarea id="write_box"></textarea>
                    <div class="button clearfix">
                        <span class="tips pull-left">回复的内容不能为空且不能小于2个字符！</span>
                        <span class="call pull-right">回复</span>
                    </div>
                </div>
            </li>
            <li>
                <div class="portrait_box clearfix">
                    <div class="box_image pull-left">
                        <img src="../../imgs/Demo_moudle.jpg" width="120px" />
                    </div>
                    <div class="user pull-left">
                        <p class="name">阿明</p>
                        <p class="date">2017-6-13 23：45
                            <span>回复</span>
                        </p>
                    </div>
                </div>
                <p class="content">
                    换不厌的春秋和一个等不到的人，错乱我的四季。 每段旅程都会有一个你爱的人，就像双手不会主动拒绝温暖的十指紧扣。
                </p>
            </li>
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
    .message_item{
        .write_box{
            max-width: 680px;
            margin: 20px 0;
            textarea{
                width: 676px;
                margin-left: 4px;
                resize: none;
                height: 100px;
                outline: none;
                font-size: 14px;
                padding-top: 8px;
                border: 1px solid @color204;
                color: #223343;
                border-radius: 8px;
                text-indent: .5em;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            }
            .button{
                margin: 10px 0;
                .call{
                    color: @background-color50;
                    border: 1px solid @background-color50;
                    padding: 2px 15px 2px 30px;
                    border-radius: @border-radius6;
                    background: url("../../imgs/icon_paperplane_w.png")10px 4px no-repeat;
                    background-size: 16px;
                    cursor: pointer;
                    transition: all .2s;
                    &:hover{
                        background: url("../../imgs/icon_paperplane_black.png")10px 4px no-repeat;
                        background-size: 16px;
                        background-color: @background-color50;
                        color: #24283b;
                    }
                }
                .tips{
                    margin-left: 4px;
                    margin-top: 2px;
                    padding-left: 20px;
                    background: url("../../imgs/icon_Info_b.png")0 2px no-repeat;
                    background-size: 17px;
                }
            }
        }
        .title_box{
            position: relative;
            .bliuld{
                position: absolute;
                left: -65px;
                top: .3em;
                color: #ff7300;
                font-size: 16px;
            }
            &:before{
                content: "";
                display: block;
                position: absolute;
                left: -32px;
                top: .5em;
                width: 18px;
                height: 18px;
                border-radius: 50%;
                box-sizing: border-box;
                background-color: #fff;
                border: 4px solid #ff7300;
            }
        }
        .title{
            font-size: 22px;
            font-weight: 400;
        }
        ul li{
            font-size: 14px;
            margin-bottom: 25px;
        }
        .portrait_box{
            .box_image{
                width: 46px;
                height: 46px;
                border-radius: 50%;
                overflow: hidden;
            }
            .user{
                margin-left: 15px;
                p{
                    line-height: 1.5em;
                    color: @text100;
                }
                .name{
                    font-size: 16px;
                }
                .date{
                    span{
                        color: @color808;
                        cursor: pointer;
                    }
                }
            }
        }
        .content{
            color: @text100;
            line-height: 1.5em;
            padding: 10px 0 0 4px;
        }
    }
</style>
