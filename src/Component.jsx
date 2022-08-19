import React, { createContext, useState, useEffect } from "react";
import B from "./B";
import A from "./A";
import './style.css'

const firstname = createContext();
function Component() {

  const [use, usefunction] = useState([])

  // for api
  const getcoviddata = async () => {

    let res = await fetch('https://corona.lmao.ninja/v2/countries');
    let actualdata = await res.json();
    usefunction(actualdata);
  }

  // first time refresh then it reload
  useEffect(() => {
    getcoviddata();
  }, []);

  return (

    <>
      <table className="table caption-top ">
        <caption className="top "><h3>covid19india Cases By Love Singh</h3></caption>
        <thead>
          <tr className="title sticky-sm-top">
            <th scope="col">#</th>
            <th className="countries" scope="col">Countries</th>
            <th className="img" scope="col">Flag</th>
            <th className="cases" scope="col">Cases</th>
            <th className="recovered" scope="col">Recovered</th>
            <th className="deaths" scope="col">Deaths</th>
            <th className="active" scope="col">Active</th>
            <th className="last" scope="col">Last Updated Time</th>
          </tr>
        </thead>
         
        <tbody>
          {use.map((current, item) => {


            return (<>

              <tr key={item}>
                <th scope="row">{item+1}</th>
                <td className="countries">{current.country}</td>
                <img className="img" src={current.countryInfo.flag}></img>
                <td className="cases">{current.cases}</td>
                <td className="recovered">{current.recovered}</td>
                <td className="deaths">{current.deaths}</td>
                <td className="active">{current.active}</td>
                <td className="last">{(new Date(current.updated)).toLocaleString()}</td>


              </tr>

            </>)
          })}

        </tbody>
      </table>

    </>
  )
}



export default Component;
export { firstname };