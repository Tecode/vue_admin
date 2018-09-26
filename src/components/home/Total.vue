<template>
    <div class="total">
        <h3 class="title">统计信息 | Statistic information</h3>
        <div class="total_box clearfix">
            <section class="user">
                <div class="user_image"></div>
                <h3>150</h3>
                <p>用户数量</p>
            </section>
            <section class="mesage">
                <div class="mesage_image"></div>
                <h3>150</h3>
                <p>留言总数</p>
            </section>
            <section class="views">
                <div class="view_image"></div>
                <h3>150</h3>
                <p>访问总数</p>
            </section>
            <section class="resource">
                <div class="resource_image"></div>
                <h3>150</h3>
                <p>资源总数</p>
            </section>
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

<style lang="less" scoped>
    @import "../../lib/style/color";
    .total{
        position: relative;
        margin: 20px 0 20px 0;
        padding: 20px 0;
        .title{
            font-weight: normal;
            color: @manager_color04;
            padding: 0 0 25px 0;
            text-transform: capitalize;
            font-size: 16px;
        }
        .total_box{
            section{
                width: 24%;
                background-color: @white;
                float: left;
                border-radius: @border-radius6;
                border: 1px solid @manager_color05;
                text-align: center;
                p{
                    padding-bottom: 20px;
                    padding-top: 5px;
                    color: @manager_color04;
                }
            }
            .user{
                div{
                    width: 50px;
                    height: 50px;
                    background: url("../../imgs/icon_manager_user.png")0 0 no-repeat;
                    background-size: 50px;
                    margin: 20px auto 15px auto;
                }
            }
            .mesage{
                div{
                    width: 50px;
                    height: 50px;
                    background: url("../../imgs/icon_manager_msg.png")0 0 no-repeat;
                    background-size: 50px;
                    margin: 20px auto 15px auto;
                }
            }
            .views{
                div{
                    width: 50px;
                    height: 50px;
                    background: url("../../imgs/icon_maneger_view.png")0 0 no-repeat;
                    background-size: 50px;
                    margin: 20px auto 15px auto;
                }
            }
            .resource{
                div{
                    width: 50px;
                    height: 50px;
                    background: url("../../imgs/icon_manerge_resouce.png")0 0 no-repeat;
                    background-size: 50px;
                    margin: 20px auto 15px auto;
                }
            }
            .mesage{
                margin: 0 1%;
            }
            .views{
                margin-right: 1%;
            }
            @media (max-width: 860px) {
                section {
                    width: 49%;
                }
                .mesage{
                    margin-right: 0;
                }
                .views{
                    margin-left: 0;
                    margin-top: 20px;
                }
                .resource{
                    margin-top: 20px;
                }
            }
        }
    }
</style>
