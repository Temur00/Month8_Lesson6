"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CountryTypes } from "@/types/Country.types";

const Countries: React.FC = () => {
  const [countryData, setCountryData] = useState<CountryTypes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountryData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-28 xl:pl-20 xl:pr-20 md:pl-2 md:pr-2 pl-2 pr-2  ">
      <div className="flex flex-wrap justify-between items-baseline mb-11">
        <input
          type="search"
          placeholder="Search for a country..."
          className="w-80  md:w-96 p-4 rounded-lg bg-slate-50 dark:text-white dark:bg-slate-700 border-slate-500 border-2 outline-none"
        />
        <select
          name="all"
          id="all"
          className="mt-5 p-3 rounded-lg border-slate-500 bg-slate-50 dark:bg-slate-700 dark:text-white border-2 outline-none"
        >
          <option value="all">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-16 justify-center border-spacing-1 ">
        {countryData.slice(0, 8).map((country: any, index) => (
          <div
            key={index}
            className="dark:text-white bg-slate-100 dark:bg-slate-700 rounded-lg outline-none overflow-hidden hover:scale-105 transition duration-500 cursor-pointer object-cover hover:shadow-2xl dark:hover:shadow-slate-600 border-2"
            style={{ width: "17em", height: "23em" }}
          >
            <img
              className="transition duration-300 ease-in-out hover:scale-110"
              style={{ width: "100%", height: "11em" }}
              src={country.flags.svg}
              alt={country.name?.common}
            />
            <div className="texts p-5">
              <p className="font-bold size-5">{country.name?.common}</p>
              <p className="pt-5">Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Capital: {country.capital}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { CountryTypes } from "@/types/Country.types";

// const Countries: React.FC = () => {
//   const [countryData, setCountryData] = useState<CountryTypes[]>([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedRegion, setSelectedRegion] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://restcountries.com/v3.1/all");
//         setCountryData(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSearchInputChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleRegionSelectChange = (
//     event: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     setSelectedRegion(event.target.value);
//   };

//   const filteredCountries = countryData.filter((country) => {
//     const matchesSearch = country.name?.common
//       .toLowerCase()
//       .includes(searchQuery.toLowerCase());
//     const matchesRegion =
//       selectedRegion === "all" || country.region === selectedRegion;
//     return matchesSearch && matchesRegion;
//   });

//   return (
//     <div className="container mx-auto mt-28 xl:pl-20 xl:pr-20 md:pl-2 md:pr-2 pl-2 pr-2">
//       <div className="flex flex-wrap justify-between items-baseline mb-11">
//         <input
//           type="search"
//           placeholder="Search for a country..."
//           className="w-80 md:w-96 p-4 rounded-lg bg-slate-50 dark:text-white dark:bg-slate-700 border-slate-500 border-2 outline-none"
//           value={searchQuery}
//           onChange={handleSearchInputChange}
//         />
//         <select
//           name="region"
//           id="region"
//           className="mt-5 p-3 rounded-lg border-slate-500 bg-slate-50 dark:bg-slate-700 dark:text-white border-2 outline-none"
//           value={selectedRegion}
//           onChange={handleRegionSelectChange}
//         >
//           <option value="all">Filter by Region</option>
//           <option value="africa">Africa</option>
//           <option value="america">America</option>
//           <option value="asia">Asia</option>
//           <option value="europe">Europe</option>
//           <option value="oceania">Oceania</option>
//         </select>
//       </div>
//       <div className="flex flex-wrap gap-16 justify-center border-spacing-1">
//         {filteredCountries.slice(0, 8).map((country: any, index) => (
//           <div
//             key={index}
//             className="dark:text-white bg-slate-100 dark:bg-slate-700 rounded-lg outline-none overflow-hidden hover:scale-105 transition duration-500 cursor-pointer object-cover hover:shadow-2xl dark:hover:shadow-slate-600 border-2"
//             style={{ width: "17em", height: "23em" }}
//           >
//             <img
//               className="transition duration-300 ease-in-out hover:scale-110"
//               style={{ width: "100%", height: "11em" }}
//               src={country.flags.svg}
//               alt={country.name?.common}
//             />
//             <div className="texts p-5">
//               <p className="font-bold size-5">{country.name?.common}</p>
//               <p className="pt-5">Population: {country.population}</p>
//               <p>Region: {country.region}</p>
//               <p>Capital: {country.capital}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Countries;
