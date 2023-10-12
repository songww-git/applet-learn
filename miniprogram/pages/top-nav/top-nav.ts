// pages/top-nav/top-nav.ts
Component({
  options: {
    virtualHost: true,
    multipleSlots: true // 在组件定义时的选项中启用多 slot 支持
  },
  externalClasses: ['class'], // 可以将 class 设为 externalClasses
  /**
   * 组件的属性列表
   */
  properties: {
    navData: {   //navbarData   由父页面传递的数据，变量名字自命名
      type: Object,
      value: {},
      observer:  (newVal, oldVal) =>{
        console.log(newVal,oldVal)
      }
    },
    style:{
      type:String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */

  methods: {
    backPage(){
      console.log(11111111111)
        wx.navigateBack({delta: 1})
    }, 
  }
})
