// app.ts
App({
  globalData: {},
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res)
        if(res.code){
            this.commonRequestAjax('/digihub/api/weChatAction/getWechatMemberInfoByCode',
            {code:res.code},
            this.setHeaderType('json'),
            (result:any)=>{
                console.log(result);
            },)
        }
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },

  //公共请求 ajax请求
  // requestAjax: function (url, value, callback, is_header = true, method = 'POST'):void {
    
  // },
  commonRequestAjax:(url:any,data:any,header:any,callback:any,
    method?: "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT" | undefined,)=>{

      let requestMethod=method?method:'POST';
      let host:any = 'https://webhub-test.cndhl.com'; //开发环境请求域名
      console.log(url);
      console.log(data);
      console.log(header);
      console.log(requestMethod);
      wx.request({
        url:host+url,
        data:data,
        method:requestMethod,
        header:header,
        success:(res)=>{
              callback(res)
        },
        fail: function () {

        },
        complete: function () {
            // complete
        },
      })
  },

  /***
   * 设置请求头
   * **/
  setHeaderType:(type:any,isNeedToken?:boolean):any=>{
      let token = wx.getStorageSync('token');
      if(type=='json'){
        return {
          'Content-Type': 'application/json;charset=UTF-8',
          'dhlAuthorization': isNeedToken?'Bearer ' + token :'',
        }
      }
      if(type=='default'){
        return {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
          'dhlAuthorization': isNeedToken?'Bearer ' + token :'',
        }
      }
      

  }
})