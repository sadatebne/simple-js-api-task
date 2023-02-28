const getApi=()=>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res=>res.json())
    .then(data=>myData(data))
}

const myData =getValue =>{
    //console.log(getValue.results[0].gender)
    const gTag= document.getElementById('gender')
    gTag.innerHTML=getValue.results[0].gender

    const gName=document.getElementById('name')

    gName.innerHTML=getValue.results[0].name.title+' '+getValue.results[0].name.first+' '+getValue.results[0].name.last
    //console.log(getValue.results[0].name)

    //Api img Show
    const gImg=document.getElementById('pic')
    const imgVal=getValue.results[0].picture.large
    gImg.src=`${imgVal}`
    

}

getApi();