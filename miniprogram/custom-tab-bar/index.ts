// custom-tab-bar/index.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    "selected": 0,//当前下标
    "list": [{
      "pagePath": "/pages/home/home",
      "text": "首页"
    }, {
      "pagePath": "/pages/my/my",
      "text": "我的"
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab:function(e: { currentTarget: { dataset: { path: any; }; }; }){
      console.log(e);
      
      let url = e.currentTarget.dataset.path;
      console.log(url);
      
      wx.switchTab({
        url:url
      })
  }
  }
})
