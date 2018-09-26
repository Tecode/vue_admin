<template>
    <div class="page_title clearfix">
        <div class="pull-left title_label">
            <div class="line"></div>
            {{nav_title}}

        </div>
        <div class="input_box pull-left" v-if="placeholder_text">
            <label for="input"></label>
            <input id="input" :placeholder="placeholder_text"/>
        </div>
        <div class="button pull-left">
            <span v-if="butonOne">{{butonOne}}</span>
            <span v-if="butonOne">{{butonTwo}}</span>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'nav-title',
		props: [
			'nav_title',
			'placeholder_text',
			'butonOne',
			'butonTwo'
		],
		mounted: function () {

		},
	}
</script>

<style lang="less">
    @import "../../lib/style/color";

    .page_title {
        padding-top: 35px;
        .title_label {
            font-size: 22px;
            color: @manager_color06;
            position: relative;
            padding-left: 15px;
        }
        .line {
            position: absolute;
            top: 5px;
            left: 3px;
            width: 4px;
            height: 24px;
            background-color: @background-color50;
        }
        .input_box {
            input {
                outline: none;
                border: 1px solid @manager_color07;
                height: 26px;
                margin: 5px 15px 0 15px;
                padding-bottom: 2px;
                border-radius: 999px;
                text-indent: 2em;
                width: 188px;
                background: url("../../imgs/manager_search_default.png") 8px 4px no-repeat;
                background-size: 17px;
                transition: all .4s;
                color: @text110;
                &:focus {
                    background: url("../../imgs/manager_search_hover.png") 8px 4px no-repeat;
                    background-size: 17px;
                    border: 1px solid @background-color50;
                }
            }
        }
        .button {
            span {
                padding: 3px 14px;
                line-height: 2.6em;
                margin-right: 15px;
                border-radius: 999px;
                cursor: pointer;
                color: @background-color50;
                border: 1px solid @background-color50;
                transition: all .4s;
                &:hover {
                    background-color: @background-color50;
                    color: @color557;
                }
            }
        }
    }
</style>
