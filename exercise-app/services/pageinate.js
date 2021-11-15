import React, { useState } from "react";
// state of pagination
const [pages, setPages] = useState(0);

// pages to display 
const perPage = 20
//current pages visit
const pagesVisit = pages * perPage

//displaying pages dynamically
const displayPages = data.slice(pagesVisit, pagesVisit + perPage).map(data => {
    return (<div className="dashboard-card" key={data.id}> <p >{data.name}</p>
        <Link href="/equipment/[id]" as={`/equipment/${data.id}`}><a>Get More Info...</a></Link>
    </div>)


})
// round up a decimal place
const pageCount = Math.ceil(data.length / perPage)
const changePage = ({ selected }) => {

    setPages(selected)

}