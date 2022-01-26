export const notification = () => (
    {
        functional: true,
        props: ['level'],
        render(h, { props, data, children }) {
            return h(`h${props.level}`, data, children)
        }
    }
)