const penggabunganNama = (firstName, lastName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = `${firstName} ${lastName}`;
      resolve(result)
    }, 1000);
  });
};


penggabunganNama('risano', 'akbar')
.then((res)=>{
    console.log('nama saya adalah :')
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})