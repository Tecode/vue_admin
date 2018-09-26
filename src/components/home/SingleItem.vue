<template>
    <div class="single_content_box">
        <div class="single_content">
            <div class="clearfix">
                <div class="image_box pull-left">
                    <div class="image_data_time text-center">
                        <h3>25</h3>
                        <p>oct</p>
                    </div>
                </div>
                <div class="text_content pull-left">
                    <h3>
                        <span>三月，醉一场青春的流年</span>
                        <span class="lable">美文分享</span>
                        <span class="lable">文章</span>
                    </h3>
                    <p>青春，如三月的春光，安暖向阳。在美丽的青春年华，我们手牵手，肩并肩，跨过岁月山河，跨过锦瑟流年，跨过天涯海角，在三月的春光里沐浴金色的光泽。三月的春光，让青春的我们看到希望，看到自己有一颗年轻跳动的心，看到蓝天白云，看到明媚的灿烂。三月的春光，温暖无比，就像我们的青春，有着长辈的呵护，有着老师的循循教导，它们就像春光，照耀着我们年轻的心。</p>
                </div>
            </div>
            <div class="comment_view">
                <div class="clearfix">
                    <i class="icon_comment"></i>
                    <span>10</span>
                    <i class="icon_view"></i>
                    <span>20</span>
                </div>
            </div>
            <div class="date_time">今天08:30</div>
        </div>
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

<style lang="less">
    @import "../../lib/style/color";
    .single_content_box{
        padding: 5px 0 10px 0;
        border-bottom: 1px solid @color810;
        .single_content{
            background-color: @white;
            box-shadow: @box-shadow26;
            margin: 10px 15px;
            padding: 15px;
            position: relative;
            .image_box{
                background-image: url("../../imgs/demo_image.jpg");
                background-size: cover;
                background-position: center center;
                width: 106px;
                height: 106px;
                margin-right: 15px;
                position: relative;
                .image_data_time{
                    position: absolute;
                    width: 60px;
                    height: 60px;
                    border: 2px solid @white;
                    top: 20px;
                    left: 50%;
                    margin-left: -30px;
                    border-radius: 999px;
                    color: @white;
                    h3{
                        font-size: 24px;
                        font-weight: normal;
                        margin-top: 2px;
                    }
                    p{
                        margin-top: -6px;
                        font-size: 18px;
                        text-transform: capitalize;
                    }
                }
            }
            .text_content{
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                width: 84%;
                height: 5.3em;
                overflow: hidden;
                text-overflow: ellipsis;

                transition: all 0.4s;
                transition-timing-function: ease-out;
                h3{
                    font-size: 16px;
                    font-weight: normal;
                    color: @color557;
                    .lable{
                        font-size: 12px;
                        color: @color556;
                        border: 1px solid @color556;
                        padding: 0 8px 1px 8px;
                        margin: 0 5px;
                        border-radius: 999px;
                    }
                }
                p{
                    padding-top: 5px;
                    font-size: 14px;
                    color: @color808;
                }
            }
            .date_time{
                position: absolute;
                top: 12px;
                right: 15px;
                font-size: 14px;
                color: @color808;
            }
            .comment_view{
                position: absolute;
                bottom: 15px;
                right: 15px;
                color: @color400;
                i{
                    margin-left: 8px;
                }
                i,span{
                    float: left;
                }
                .icon_comment{
                    display: block;
                    width: 18px;
                    height: 20px;
                    background: url("../../imgs/icon_comment.png")0 5px no-repeat;
                    background-size: 16px;
                }
                .icon_view{
                    display: block;
                    width: 20px;
                    height: 20px;
                    background: url("../../imgs/icon_view.png")0 5px no-repeat;
                    background-size: 19px;
                }
            }
            @media (max-width: 862px) {
                .text_content {
                    width: 77%;
                }
            }
            @media (min-width: 992px) {
                .text_content {
                    width: 75%;
                }
            }
            @media (min-width: 1279px) {
                .text_content {
                    width: 85%;
                }
            }
        }
    }
</style>
