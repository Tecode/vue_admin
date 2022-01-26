// https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6

export const notification = () => (
    {
        functional: true,
        props: ['level'],
        render(createElement, { props, data, children }) {
            return createElement(`h${props.level}`, [
                "标签", [
                    createElement('h3', {
                        attrs: {
                            id: 'foo'
                        },
                        style: {
                            color: 'red',
                            fontSize: '14px'
                        },
                        domProps: {
                            innerHTML: '<p style="font-size: 30px">45</p>'
                        }
                    }),
                    createElement('h3', {
                        attrs: {
                            id: 'foo'
                        },
                        style: {
                            color: 'red',
                            fontSize: '14px'
                        },
                        domProps: {
                            innerHTML: '<p style="font-size: 30px">45</p>'
                        }
                    })
                ]])
        }
    }
)