import { useState, useEffect } from 'react';
import Link from "next/link"
import Profile from "../components/profile"
import ReactPaginate from "react-paginate";
const Dashboard = () => {
    const initalState = ''
    const [user, setuser] = useState();
    const [input, setInput] = useState(initalState);
    const [query, setQuery] = useState('https://exercisedb.p.rapidapi.com/exercises')
    const [data, setdata] = useState([]);
    // state of pagination
    const [pages, setPages] = useState(0);

    // pages to display 
    const perPage = 20
    //current pages visit
    const pagesVisit = pages * perPage

    //Displaying pages dynamically
    const displayPages = data.slice(pagesVisit, pagesVisit + perPage).map(data => {
        return (
            <div className="dashboard-card mb-2" key={data.id}>
                <div className="dashboard-card-body">
                    <h5>{data.name}</h5>
                    <h6>{data.target}</h6>
                </div>
                <div className="dashboard-card-footer">
                    <Link href="/equipment/[id]" as={`/equipment/${data.id}`}><a className="btn btn-primary btn-lg mb-2">Get More Info...</a></Link>
                </div>
            </div>
        )


    })
    // round up a decimal place
    const pageCount = Math.ceil(data.length / perPage)
    const changePage = ({ selected }) => {

        setPages(selected)

    }


    useEffect(() => {
        fetch(`${query}`, {
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



    const handleSubmit = async e => {
        e.preventDefault()
        setQuery(`https://exercisedb.p.rapidapi.com/exercises/equipment/${input}`)
        setInput(initalState)
    }


    //  Display different Sortation based on Click Event 

    return (
        <section className="dashboard">
            <div className="side-nav">
                <div className="side-nav-content">
                    <div className="side-nav-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-title"><h2>Search by equipment</h2></div>
                            <div className="form-group">
                                <select name="search" value={input} onChange={e => setInput(e.target.value)} required>
                                    <option value=""></option>
                                    <option value="assisted">assisted</option>
                                    <option value="band">band</option>
                                    <option value="barbell">barbell</option>
                                    <option value="body weight">body weight</option>
                                    <option value="bosu ball">bosu ball</option>
                                    <option value="cable">cable </option>
                                    <option value="dumbbell">dumbbell</option>
                                    <option value="elliptical machine">elliptical machine</option>
                                    <option value="ez barbell">ez barbell</option>
                                    <option value="hammer">hammer</option>
                                    <option value="kettlebell">kettlebell</option>
                                    <option value="leverage machine">leverage machine</option>
                                    <option value="medicine ball"> medicine ball</option>
                                    <option value="olympic barbell">olympic barbell</option>
                                    <option value="resistance band">resistance band </option>
                                    <option value="roller">roller</option>
                                    <option value="rope">rope</option>
                                    <option value="skierg machine">skierg machine</option>
                                    <option value="sled machine">sled machine</option>
                                    <option value="smith machine">smith machine</option>
                                    <option value="stability ball">stability ball</option>
                                    <option value="stationary bike">stationary bike</option>
                                    <option value="stepmill machine">stepmill machine</option>
                                    <option value="tire">tire</option>
                                    <option value="trap bar">trap bar</option>
                                    <option value="upper body ergometer">upper body ergometer</option>
                                    <option value="weighted">weighted</option>
                                    <option value="wheel roller">wheel roller</option>
                                </select>
                                {/* <input name="search" value={input} onChange={e => setInput(e.target.value)} placeholder="Search"></input> */}
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
                                <li><button className="btn btn-primary" onClick={() => setQuery('https://exercisedb.p.rapidapi.com/exercises/equipment/trap bar')} >Equipment</button></li>
                                <li><button className="btn btn-primary" onClick={() => setQuery('https://exercisedb.p.rapidapi.com/exercises/target/biceps')} >Muscle Group</button></li>
                                <li><button className="btn btn-primary" onClick={() => setQuery('https://exercisedb.p.rapidapi.com/exercises/name/barbell')}>Exercise Name</button></li>
                                <li><button className="btn btn-primary" onClick={() => setQuery('https://exercisedb.p.rapidapi.com/exercises')} >All Workouts</button></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="dashboard-content">

                <h1 className="dashboard-title">Dashboard</h1>
                <p>{`Number of Results: ${data.length} `}</p>

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
                    pageLinkClassName={"page-link"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName='pagination justify-content-center pagination-md'
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
