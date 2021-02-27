const express = require('express')
const app = express()

app.use((request,response,next)=>{
	console.log('有人請求服務器1了');
	console.log('請求來自於',request.get('Host'));
	console.log('請求的地址',request.url);
	next()
})

app.get('/students',(request,response)=>{
	const students = [
		{id:'001',name:'tom',age:18},
		{id:'002',name:'jerry',age:19},
		{id:'003',name:'tony',age:120},
	]
	response.send(students)
})

app.listen(6002,(err)=>{	
	if(!err) console.log('服務器1啟動成功了，請求學生信息地址為：http://localhost:6002/students');
})
