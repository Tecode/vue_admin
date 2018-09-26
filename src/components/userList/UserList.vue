<template>
    <div>
        <div>
            <user-item></user-item>
            <user-item></user-item>
            <user-item></user-item>
            <user-item></user-item>
            <user-item></user-item>
            <user-item></user-item>
            <user-item></user-item>
            <user-item></user-item>
            <user-item></user-item>
            <user-item></user-item>
        </div>
            <mu-pagination class="user_page" :total="350" :current="12"></mu-pagination>
    </div>
</template>

<script>
    import UserItem from './UserItem.vue'
	export default {
		name: 'comment',
		props: ['id'],
		components: {
			UserItem
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

<style lang="less">
    .user_page{
        justify-content: center;
        padding: 35px 0 20px 0;
    }
</style>
