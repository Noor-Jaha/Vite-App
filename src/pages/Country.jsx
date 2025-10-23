import { useEffect, useState, useTransition } from "react";
import { BiLoader } from "react-icons/bi";
import { getCountryData } from "../api/postApi";
import CountryCard from "../components/UI/CountryCard";



 const Country = () => {
  const [isPending,startTransition] = useTransition();
  const [countries,setCountries] = useState([]);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState('all');



  // fetch api data 
  // useEffect(async () => {
  //   const res = await fetch('https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags');
  //   const data = res.json()
  //   setdata(data)
  // }) 

  //  data using axiox

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
        });
  }, []);




  if (isPending) return <BiLoader/>

  console.log(search, filter)

  const searchCountry = (country) => {
  if(search) {
    return country.name.common.toLowerCase().includes(search.toLowerCase());
  }
  return country;
  }

  const filterRegion = (country) => {
    if(filter === 'all') return country;
    return country.region === filter;
  }

  // here js the main logic

  const filterCountries = countries.filter((country) => searchCountry(country) && filterRegion(country));

  return(
    <section className="country-section">
      {/* <SearchFilter
       search={search} setSearch={setSearch} filter={filter} setFilter={setFilter}
      countries={countries} setCountries={setCountries} /> */}

      <ul className="grid grid-four-cols">
        {
        filterCountries.map((curCountry,index) => {
          return <CountryCard country={curCountry} key={index}/>
        })}
      </ul>
    </section>
  ) 
}


export default Country;