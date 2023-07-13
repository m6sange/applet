# 小程序开发过程中注意事项
1. 直接修改data的数据,不会引起页面刷新.这一点与react相同,与vue不同.这里需要用this.setData()去修改data.