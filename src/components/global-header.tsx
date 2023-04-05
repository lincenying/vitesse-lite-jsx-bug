export default defineComponent({
  name: 'GlobalHeader',
  props: {
    page: {
      type: String,
      default: '',
    },
    classes: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    // 父子组件通讯 ===>
    const { page, classes } = $(toRefs(props))
    // 父子组件通讯 <===
    return () => (

      <div class="item">
          <div class="line-1">
              <div class="rank-name">
                  <div class={`rank rank-${classes}`}>{page}</div>
                  <div class="name">
                  </div>
              </div>
          </div>
          <div class="line-2">
          </div>
      </div>
    )
  },
})
