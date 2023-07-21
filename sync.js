// contoh sync

// console.log('perintah 1')

// console.log('perintah 2')

// console.log('perintah 3')


// aync


// console.log('perintah 1')

// setTimeout(()=>{
//     console.log('perintah 2')
// }, 1000)

// console.log('perintah 3')



// contoh handle async

// function penjumlahan (val1, val2, callback){
//     setTimeout(()=>{
//         const result = val1 + val2
//         callback(result)
//     },1000)
// }

function penjumlahan (val1, val2){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof(val1) !== 'number' || typeof(val2) !== 'number'){
                reject('parameter harus number')
            }
            const result = val1 + val2
            resolve(result)
        }, 1000)
    })
 
}

// const result = penjumlahan(10, 20)
// console.log(result)

const hasilPenjumalah = penjumlahan(10, 'helo')

hasilPenjumalah
.then((res)=>{
    console.log(`hasil dari penjumalah adalah ${res}`)
})
.catch((err)=>{
    console.log('errornya adalah :', err)
})











// function pengurangan(val1, val2, callback){
//     setTimeout(()=>{
//         const result = val1 - val2
//         callback(result)
//     },1000)
// }
// penjumlahan(40, 50, function(hasil){
//     pengurangan(hasil, 30, function(hasil){
//         const total = hasil
//         console.log(`total dari penjumlahan dan pengurangan adalah ${total}`)
//         pembagian(total, 2, function(hasil){

//         })
//     })
// })
