const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>showCountries(data))
}

const showCountries = countries =>{
//console.log(countries)
const divContain=document.getElementById('all-country')
for(const country of countries){
    //console.log(country.name.common)

const newDiv=document.createElement('div');
newDiv.classList.add('coun-try')

newDiv.innerHTML=`

<img src="${country.flags.png}">

<h2>Country Name: ${country.name.common} </h2>

<!-- if-else condition -->

<p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>


<button onclick="countryPic('${country.cca2}')">show</button>
`

divContain.appendChild(newDiv)
}
}

const countryPic = code =>{
const url=`https://restcountries.com/v3.1/alpha/${code}`
fetch(url)
.then(res=>res.json())
.then(data=>countryInfo(data[0]))
//console.log(url)
}

const countryInfo = cValue =>{
 const getSec1=document.getElementById('all-country-value')
 getSec1.innerHTML=`
 <h2>Country Name:${cValue.name.common} </h2>
 <p>Capital: ${cValue.capital}</p>
 <img src="${cValue.flags.png}">
 `
}





loadCountries();
