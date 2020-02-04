<<<<<<< HEAD
const fs= require('fs');
fs.readFile('./challenge.txt',(error,data)=>{
console.time('challenged');	
if(error){
	console.log(error);
}else{
	 const total =data.toString();
	const totalArray =total.split('');
	let val =0;
	const result =totalArray.map((item,i)=>{
		if(item ==='('){
			return  val += 1;

		//console.log('first',val,i);	
		}else if(item ===')'){
		 return val -= 1;
			//console.log('second',val,i);
		}
		console.timeEnd('challenged');	
		if(val === -1){
			return val;
			console.log('minus',val,i);
		}
		
		
	});
	}
});
/*ans two:what makes santa get to basement i.e -1

if(val === -1){
	console.log('minus',val +1,i);
}



const express = require('express');

app.use((response,request,next)=>{
	console.log('middleware');
	next();
});
app.get('/',(req,res)=>{
	res.send("hello")
});
app.post();
app.delete();
const app =express();
app.listen(3000);

/* const c= a+ b;
setTimeout(()=>{
	console.log(c);
},4000)
console.log(c);
=======
const fs= require('fs');
fs.readFile('./challenge.txt',(error,data)=>{
console.time('challenged');	
if(error){
	console.log(error);
}else{
	 const total =data.toString();
	const totalArray =total.split('');
	let val =0;
	const result =totalArray.map((item,i)=>{
		if(item ==='('){
			return  val += 1;

		//console.log('first',val,i);	
		}else if(item ===')'){
		 return val -= 1;
			//console.log('second',val,i);
		}
		console.timeEnd('challenged');	
		if(val === -1){
			return val;
			console.log('minus',val,i);
		}
		
		
	});
	}
});
/*ans two:what makes santa get to basement i.e -1

if(val === -1){
	console.log('minus',val +1,i);
}



const express = require('express');

app.use((response,request,next)=>{
	console.log('middleware');
	next();
});
app.get('/',(req,res)=>{
	res.send("hello")
});
app.post();
app.delete();
const app =express();
app.listen(3000);

/* const c= a+ b;
setTimeout(()=>{
	console.log(c);
},4000)
console.log(c);
>>>>>>> e805302d1a3dca5ddecf979d11ee7f4f89b39521
console.log(__dirname); */