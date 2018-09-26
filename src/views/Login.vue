<template>
    <div class="login_page clearfix">
        <div id="Animation" class="pull-left"></div>
        <div class="input pull-left">
            <div class="input_box">
                <mu-linear-progress v-show="loading" class="progress" />
                <div class="logo"></div>
                <mu-text-field label="账号" v-model="user_email" @input="inputEmail" hintText="账号" type="email" fullWidth labelFloat/>
                <br/>
                <mu-text-field label="密码" v-model="password" @input="inputContent" hintText="密码" type="password" fullWidth labelFloat/>
                <mu-raised-button class="demo-raised-button" label="登录" @click="loginRequest" primary fullWidth/>
            </div>
        </div>
    </div>
</template>

<script>
	import LoginAnimation from '../static/LoginAnimation';
	import {mapMutations, mapState, mapActions} from 'vuex';

	export default {
		name: 'login_page',
		props: ['id'],
		data () {
			return {
				open: true
			}
		},
		mounted: function () {
			LoginAnimation()
		},
		computed: {
			...mapState({
				user_email: state => state.LoginRegistration.user_email,
				password: state => state.LoginRegistration.password,
				loading: state => state.LoginRegistration.loading,

			}),
		},
		methods: {
			...mapMutations({
				inputContent: 'inputContent',
				inputEmail: 'INPUTEMAIL'
			}),
			...mapActions({
                loginRequest: 'loginRequest'
			})
		}
	}
</script>

<style lang="less" scoped>
    .login_page {
        background-color: #f8d135;
        height: 100%;
        #Animation {
            width: 50%;
        }
        .input {
            width: 50%;
            .input_box {
                position: relative;
                width: 360px;
                margin: 16% auto 0 auto;
                padding: 30px 20px 60px 20px;
                .progress {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                }
                .logo {
                    background: url("../imgs/logo_lage.png") 0 0 no-repeat;
                    background-size: 120px;
                    width: 120px;
                    height: 29px;
                    margin-bottom: 20px;
                }
                .demo-raised-button {
                    margin-top: 20px;
                }
                background-color: #ffffff;
            }
        }
    }
</style>
