const getDatacb = (method, url, callback)=>{
    const ajax = new XMLHttpRequest()
    ajax.open(method,url)
    ajax.send()
    
    ajax.onreadystatechange = ()=>{
        if(ajax.status === 200){
            const result = JSON.parse(ajax.responseText) 
            callback(null, result)
        }else{
            const err = 'terjadi erorr'
            callback(err, null)
        }
    }
}



getDatacb('GET', 'https://jsonplaceholder.typicode.com/postszzz', (err, result)=>{
    if(err){
        console.log(err)
        return
    }

    result.map((item)=>{
        console.log(`title : ${item.title}`)
    })


})