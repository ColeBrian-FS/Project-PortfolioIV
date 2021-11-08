import React, { useState, useEffect } from 'react';
import Link from "next/link"
const Dashboard = ({ articles }) => {

    console.log(articles)
    articles.map((article) => console.log(article))
    return (
        <section className="dashboard">
            <div className="side-nav">
                <div className="side-nav-content">
                    <div className="side-nav-form">
                        <form>

                            <div className="form-group">
                                <input name="search" placeholder="Search"></input>
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="side-nav-content">
                    <div className="nav-content">
                        <nav className="navbar-side">
                            <h3>Group by:</h3>
                            <ul className="nav-items">
                                <li><button className="btn btn-primary">Equipment</button></li>
                                <li><button className="btn btn-primary"  >Muscle Group</button></li>
                                <li><button className="btn btn-primary">Name</button></li>
                                <li><button className="btn btn-primary">All Workouts</button></li>
                            </ul>
                        </nav>
                    </div>

                </div>


                <div className="side-nav-content">
                    <div className="search-info">
                        <p>No Items have been searched </p>
                    </div>
                </div>

            </div>
            <div className="dashboard-content">
                <h1 className="dashboard-title">Dashboard</h1>
                <main className="dashboard-body">

                    {/* QUERY STRING - nested link */}
                    {/* [id] - represent the article id that being received as props */}
                    {
                        articles.map((article) =>
                            <div className="dashboard-card"> <p>{article.name}</p>

                                <Link href="/equipment/[id]" as={`/equipment/${article.id}`}><a>Get More Info...</a></Link>

                            </div>)
                    }

                </main>

            </div>

        </section>
    );
}

export default Dashboard;
export const getStaticProps = async () => {
    const res = await
        fetch("https://exercisedb.p.rapidapi.com/exercises/equipment/kettlebell", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "exercisedb.p.rapidapi.com",
                "x-rapidapi-key": "ac819a08e2msh6beaecd882152c1p1188e5jsnf15223ffb4db"
            }
        })


    const articles = await res.json()

    return {
        props: {
            articles
        }
    }

}