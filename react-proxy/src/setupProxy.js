const proxy = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        proxy('/api1',{ // 遇見/api1前綴的請求，就會觸發該代理配置
            // 請求轉發給誰
            target:'http://localhost:6002', 
            
            // 控制服務器收到的響應頭Host字段的值(改變原始的來源)
            // 為ture時會用target6002，為false時則使用客戶端原始的端口3000
            changeOrigin:true,  

            // 重寫請求路徑    
            pathRewrite:{'^/api1':''}
        }),
        proxy('/api2',{
            target:'http://localhost:6001',
            changeOrigin:true,
            pathRewrite:{'^/api2':''}
        })
    )
}