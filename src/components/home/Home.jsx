import {useEffect, useState} from 'react'

function Home() {
const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/';
const pokeData = localStorage.getItem('pokeInfo') || "[]";
const [data, setData] = useState(JSON.parse(pokeData));

useEffect(async () => {
    fetch(pokeUrl)
        .then((response) => {
            response.json().then((data) => {
                setData(data.results);
                localStorage.setItem('pokeInfo', JSON.stringify(data.results))
            })
        })
    // let response = await fetch(pokeUrl);
    // let data = await response.json();
    // setData(  );
    // localStorage.setItem('pokeInfo', JSON.stringify(data.results))

}, []);
function delObj(obj) {
    data.filter((item) => {
        return item.name !== obj.name;
    })
    data.filter(item => item.name !== obj.name)
    let filteredPoke = data.filter((item) => (item.name !== obj.name));
    setData(filteredPoke)
    localStorage.setItem('pokeInfo', JSON.stringify(filteredPoke))
}
return (
    <div>
        {
            (data.length > 0) && data.map((obj, index) => (
                <div key={index}>
                    <span>{obj.name}</span> 
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`}/>
                    <button onClick={() => delObj(obj)}>Delete</button>
                </div>
            ))
        }
        {/* {
            data.length === 0 && <img src={img}/>
        } */}
    </div>
)
}
export default Home