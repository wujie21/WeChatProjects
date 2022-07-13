Component({
  pageLifetimes: {
    show() {
      console.log(this.getTabBar())
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 1
        })
      }
    }
  }
})