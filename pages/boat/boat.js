// pages/class/class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classfiySelect: "",
    leftText: [{
      id: "01",
      text1: "美妆专区",
    },
    {
      id: "02",
      text1: "面部清洁",
    },
    {
      id: "03",
      text1: "洗护专区",
    },
    {
      id: "04",
      text1: "面膜",
    },
   
    

    ],
    rightData: [{
      id: "01",
      title: "美妆专区",
      frist: [{
        url: "/images/85309.jpg",
        text: "卡姿兰补水套装",
        money: 200,
        sum: 20,
        id: 1,
      },
      {
        url: "/images/85309.jpg",
        text: "卡姿兰补水套装",
        money: 200,
        sum: 20,
        id: 2,
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
      id: "02",
      title: "面部清洁",
      frist: [{
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
      id: "03",
      title: "洗护专区",
      frist: [{
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
      id: "04",
      title: "面膜",
      frist: [{
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
      id: "05",
      title: "口红",
      frist: [{
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
      id: "06",
      title: "美妆专区",
      frist: [{
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
    this.setData({
      classfiySelect: this.data.leftText[0].id
    })
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
  //滚动触发
  scroll: function (e) {
    var scrollTop = e.detail.scrollTop,
      h = 0,
      classfiySelect;
    var that = this;
    that.data.leftText.forEach(function (clssfiy, i) {
      var _h = 26 + that.length(clssfiy['id']) * 102;
      if (scrollTop >= h) {
        classfiySelect = clssfiy['id'];
      }
      h += _h;
      console.log(h);
    })
    that.setData({
      classfiySelect: classfiySelect,
    })
  },
  //求每一栏高度
  length: function (e) {
    var that = this;
    var rightData = that.data.rightData;
    for (var i = 0; i < rightData.length; i++) {
      if (rightData[i]['id'] == e) {
        return rightData[i]['frist'].length;

      }
    }
  },
  //点击左边事件
  left_list: function (e) {
    var that = this;
    var l_id = e.currentTarget.dataset.id;
    that.setData({
      rigId: l_id,
    })
  },
  //跳转详情界面
  particulars: function (e) {

  }
})