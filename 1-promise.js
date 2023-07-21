const getDataAjax = (method, url)=>{
    return new Promise((resolve, reject)=>{
        const ajax = new XMLHttpRequest()
        ajax.open(method,url)
        ajax.send()
        
        ajax.onreadystatechange = ()=>{
            if(ajax.status === 200){
                const result = JSON.parse(ajax.responseText) 
                resolve(result)
            }else{
               const err = 'terjadi error'
               reject(err)
            }
        }
    })
}


getDataAjax('GET', 'https://jsonplaceholder.typicode.com/posts')
.then((res)=>{
    const result = res
    result.map((item)=>{
        console.log(`title : ${item.title}`)
    })
})
.catch((err)=>{
    console.log(err)
})









