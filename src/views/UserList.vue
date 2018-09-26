<template>
    <div class="userlist_box">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <nav-title
                            nav_title="用户管理"
                            placeholder_text="账号名称或账号，回车">
                    </nav-title>
                </div>
                <user-list class="col-md-12"></user-list>
            </div>
        </div>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
    import NavTitle from '../components/common/Title.vue'
    import UserList from '../components/userList/UserList.vue'
    import NavFooter from '../components/common/Footer.vue'
	export default {
		name: 'comment',
			components: {
                NavTitle,
				UserList,
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

<style lang="less">
    @import "../lib/style/color";
    .userlist_box{
        .item_box{
            background-color: @white100;
            padding: 10px 0;
            margin: 20px 0;
            border-radius: @border-radius6;
        }
    }
</style>
