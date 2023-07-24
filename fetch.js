
fetch('https://jsonplaceholder.typicode.com/posts')
.then((res)=>{
    console.log(res)
    if(!res.status !== 200){
        throw 'terjadi error'
    }
    return res.json()
})
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log('apa errornya', err)
})