// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classfiySelect:1,
    length:[],
    left:[
      {
        type:1,
        name:"健身"
      },
      {
        type: 2,
        name: "驾校"
      },
      {
        type: 3,
        name: "考研"
      },
      {
        type: 4,
        name: "小语种"
      },
    ],
    right: [{
      type: 1,
      title: "健身",
      data: [{
        url: "/images/85309.jpg",
        text: "宇动",
        money: 200,
        sum: 20,
        id: 1,
      },
      {
        url: "/images/85309.jpg",
        text: "宇动",
        money: 200,
        sum: 20,
        id: 2,
      },
      {
        url: "/images/85309.jpg",
        text: "宇动",
        money: 200,
        sum: 20,
      },
      ],
    },
    {
      type: 2,
      title: "驾校",
      data: [{
        url: "/images/85309.jpg",
        text: "卡姿兰补水套装",
        money: 200,
        sum: 20,
      },
      {
        url: "/images/85309.jpg",
        text: "卡姿兰补水套装",
        money: 200,
        sum: 20,
      },
      {
        url: "/images/85309.jpg",
        text: "卡姿兰补水套装",
        money: 200,
        sum: 20,
      },
      ],
    },
    {
      type: 3,
      title: "考研",
      data: [{
        url: "/images/85309.jpg",
        text: "卡姿兰补水套装",
        money: 200,
        sum: 20,
      },
      {
        url: "/images/85309.jpg",
        text: "卡姿兰补水套装",
        money: 200,
        sum: 20,
      },
      {
        url: "/images/85309.jpg",
        text: "卡姿兰补水套装",
        money: 200,
        sum: 20,
      },
      ],
    },
    {
      type: 4,
      title: "小语种",
      data: [{
        url: "/images/85309.jpg",
        text: "卡姿兰补水套装",
        money: 200,
        sum: 20,
      },
      {
        url: "/images/85309.jpg",
        text: "卡姿兰补水套装",
        money: 200,
        sum: 20,
      },
      {
        url: "/images/85309.jpg",
        text: "卡姿兰补水套装",
        money: 200,
        sum: 20,
      },
      ],
    },
    

    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.length();

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  selecttype: function (e) { 
    this.setData({
      classfiySelect: e.currentTarget.dataset.type,
    })
    

  },

  length: function (e) {
    
    var that = this;
    var rightData = that.data.right;
    console.log(rightData)
    var length=[];
    for (var i = 0; i < rightData.length; i++) {
      if(i==0){
        console.log(rightData[i].data.length)
        length[i] = rightData[i].data.length *100 + 20;

      }
      else{
        console.log(rightData[i].data.length)
        length[i] = rightData[i].data.length * 100 + 20+length[i-1];
      }
     
    }
    this.setData({
      length:length,
    })
    console.log(length)
  },
  scroll: function (e) {
    var scrollTop = e.detail.scrollTop,
      h = 0,
      classfiySelect;
    var that = this;
    console.log(scrollTop)
    var length=this.data.length;
    for (var i = length.length-1;i>=0;i--){
      if(scrollTop>length[i]){
        console.log(i)
       this.setData({
         classfiySelect:i+2,
       })
        return '';

      }
    }
    // that.data.left.forEach(function (clssfiy, i) {
    //   var _h = 26 + that.length1(clssfiy['id']) * 102;
    //   if (scrollTop >= h) {
    //     classfiySelect = clssfiy['type'];
    //   }
    //   h += _h;
    //   console.log(h);
    // })
    // that.setData({
    //   classfiySelect: classfiySelect,
    // })
  },
})
