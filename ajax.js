// const url = 'https://jsonplaceholder.typicode.com/posts'

// const ajax = new XMLHttpRequest()
// ajax.open('GET','https://jsonplaceholder.typicode.com/posts')
// ajax.send()

// ajax.onreadystatechange = ()=>{
//     if(ajax.status === 200){
//         const result = JSON.parse(ajax.responseText) 
//         result.map((item)=>{
//             console.log(item.title)
//         })
//     }else{
//         console.log('terjadi error')
//     }
// }

const getDataPost = (method, url)=>{
    const ajax = new XMLHttpRequest()
    ajax.open('GET','https://jsonplaceholder.typicode.com/posts')
    ajax.send()
    
    ajax.onreadystatechange = ()=>{
        if(ajax.status === 200){
            const result = JSON.parse(ajax.responseText) 
            result.map((item)=>{
                console.log(item.title)
            })
        }else{
            console.log('terjadi error')
        }
    }
}

getDataPost('GET', 'https://jsonplaceholder.typicode.com/posts')
.then((res)=>{
    
})
// 1. ubah proses diatas menggunakan promise dan tampilkan semua title 
// 2. ubah proses diatas menggunakan callback dan tampilkan semua title (optional)