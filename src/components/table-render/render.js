export default {
  functional: true,
  props: {
    row: Object,
    column: Object,
    index: Number,
    render: Function
  },
  render: function(h, context) {
    const params = {
      row: context.props.row,
      column: context.props.column,
      index: context.props.index
    }

    return context.props.render(h, params)
  }
}
