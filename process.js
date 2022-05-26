const fs=require('fs');
function file(filename,callback)
{
    if(typeof filename!='string')
    {
        return process.nextTick(callback,new TypeError('be string'));
    }
    fs.stat(filename,(err,data)=>
    {
        if(err)
         throw err;
        callback(null,data.size);
    })
}
file(__filename,(err,size)=>
{
    if (err) throw err;
    console.log("data...");
})
console.log("hii")
console.log("hello")