import React, { useState, useEffect } from 'react';
import Link from "next/link"
import ReactPaginate from "react-paginate";
const Dashboard = () => {
    const initalState = ''
    const [input, setInput] = useState(initalState);
    const [query, setQuery] = useState('kettlebell')
    const [data, setdata] = useState([]);
    // state of pagination
    const [pages, setPages] = useState(0);

    // pages to display 
    const perPage = 20
    //current pages visit
    const pagesVisit = pages * perPage

    //displaying pages dynamically
    const displayPages = data.slice(pagesVisit, pagesVisit + perPage).map(data => {
        return (<div className="dashboard-card m-3" key={data.id}>
            <div className="dashboard-card-body">
                <h5 >{data.name}</h5>
                <h6>{data.target}</h6>
            </div>
            <div className="dashboard-card-footer">
                <Link href="/equipment/[id]" as={`/equipment/${data.id}`}><a className="btn btn-primary btn-lg mb-2">Get More Info...</a></Link>
            </div>
        </div>)


    })
    // round up a decimal place
    const pageCount = Math.ceil(data.length / perPage)
    const changePage = ({ selected }) => {

        setPages(selected)

    }


    useEffect(() => {
        fetch(`https://exercisedb.p.rapidapi.com/exercises/equipment/${query}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "exercisedb.p.rapidapi.com",
                "x-rapidapi-key": "ac819a08e2msh6beaecd882152c1p1188e5jsnf15223ffb4db"
            }
        })
            .then(res => res.json())
            .then(json => {
                setdata(json)

                console.log(json)
            }
            )
            .catch(err => {
                console.error(err);
            });

    }, [query]);




    const handleSubmit = e => {
        e.preventDefault()

        setQuery(input)

        setInput(initalState)
    }



    return (
        <section className="dashboard">
            <div className="side-nav">
                <div className="side-nav-content">
                    <div className="side-nav-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-title"><h2>Search Equipment</h2></div>
                            <div className="form-group">
                                <input name="search" value={input} onChange={e => setInput(e.target.value)} placeholder="Search"></input>
                                <button className="btn btn-primary" type='submit' >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="side-nav-content">
                    <div className="nav-content">
                        <nav className="navbar-side">
                            <h3>Group by:</h3>
                            <ul className="nav-items">
                                <li><Link href="/equipment" as={'/equipment'} className="btn btn-primary"><a>Equipment</a></Link></li>
                                <li><Link href="/musclegroup" as={'/musclegroup'} className="btn btn-primary"  >Muscle Group</Link></li>
                                <li><Link href="/name" as={'/name'} className="btn btn-primary">Exercise Name</Link></li>
                                <li><Link href="/workout" as={'/workout'} className="btn btn-primary">All Workouts</Link></li>
                            </ul>
                        </nav>
                    </div>

                </div>


                <div className="side-nav-content">
                    <div className="search-info">
                        <ul>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="dashboard-content">

                <h1 className="dashboard-title">Dashboard</h1>


                <main className="dashboard-body">

                    {/* QUERY STRING - nested link */}
                    {/* [id] - represent the article id that being received as props */}
                    {displayPages.length === 0 ? <p>Loading...</p> : displayPages}

                </main>
                <ReactPaginate
                    previousLabel={<span>&laquo;</span>}
                    nextLabel={<span>&raquo;</span>}
                    breakLabel={'...'}
                    breakClassName={'page-link'}
                    pageLinkClassName="page-link"
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName='pagination justify-content-center pagination-lg'
                    previousLinkClassName={'page-link'}
                    nextLinkClassName={'page-link'}
                    disableClassName={'page-item disable'}
                    activeClassName={'page-item active'}
                />
            </div>

        </section>
    );
}

export default Dashboard;
