// const penggabunganNama = (firstName, lastName) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const result = `${firstName} ${lastName}`;
//       resolve(result)
//     }, 1000);
//   });
// };


// penggabunganNama('risano', 'akbar')
// .then((res)=>{
//     console.log('nama saya adalah :')
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })



const printSegitiga = (num)=>{
  return new Promise((resolve, reject)=>{
    if(typeof(num) !== 'number'){
      reject('parameter harus number')
    }
    setTimeout(()=>{
      let result = ''
      for(let i = 0; i <= num;  i++){
        for(let j = 0; j<= i; j++){
          result += '*';
        }
        result += '\n'
      }
      resolve(result)
    },1000)
  })
  
 
}

// printSegitiga('lima')
// .then((res)=>{
//   console.log(res)
// })
// .catch((err)=>{
//   console.log(err)
// })


const getFistname = (fullname)=>{

  return new Promise((resolve, reject)=>{
  
    if(typeof(fullname) !== 'string'){
      reject('parameter harus string')
      return 
    }
    setTimeout(()=>{
      const firsname = fullname.split(' ')[0]
      resolve(firsname)
    }, 5000)
  })


}

// getFistname(8)
// .then((res)=>{
//   console.log('berhasil')
//   console.log(res)
// })
// .catch((err)=>{
//   console.log('rejected')
//   console.log(err)
// })

async function startApp (){
  try{
    console.log('perintah 1')
    const result = await getFistname(8)
    console.log(result)
  //  if(!result){
  //    throw 'ada erorr bro...'
  //  }
    
    console.log('perintah 3')


  }catch(err){
    console.log('error pertama')
    console.log(err)
  }
}

const mulaiApp = async()=>{
  const result = await printSegitiga(5)
  console.log(result)
}


startApp()
// mulaiApp()