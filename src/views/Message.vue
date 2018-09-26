<template>
    <div class="mesege_box">
        <div class="container">
            <div class="row">
                <ul class="col-md-7 col-md-offset-3 line">
                    <li>
                        <message-item></message-item>
                    </li>
                    <li>
                        <message-item></message-item>
                    </li>
                </ul>
            </div>
            <div class="page-pagination text-center">
                <el-pagination
                        layout="prev, pager, next"
                        :total="50">
                </el-pagination>
            </div>
        </div>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
	import MessageItem from '../components/message/MessageItem.vue'
	import NavFooter from '../components/common/Footer.vue'
	export default {
		name: 'comment',
		components: {
			MessageItem,
			NavFooter
		},
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
    @import "../lib/style/color";

    .mesege_box {
        background-color: @white100;
        .page-pagination {
            padding: 60px 0 0 0;
        }
        .line {
            position: relative;
            margin-top: 40px;
            &:before {
                content: "";
                width: 1px;
                height: 100%;
                position: absolute;
                left: -23px;
                top: 1em;
                background-color: #dedede;
            }
        }

    }
</style>
