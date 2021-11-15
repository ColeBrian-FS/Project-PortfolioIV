import React from 'react';
import Badge from 'react-bootstrap/Badge'
const Prices = () => {
    return (<>
        <h1 className="prices-title">Prices</h1>

        <div className="prices-container">

            <div className="card">
                <h2 className="card-title">Basic</h2>
                <div className="card-body">
                    <p className="card-text">Starter Workout Plan</p>
                    <ul className="card-list">
                        <li>Feature - 1</li>
                        <li>Feature - 2</li>
                        <li>Feature - 3</li>
                    </ul>
                </div>
                <h3 className="price">$15</h3>
                <div className="price-card-footer">

                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>

            <div className="card">
                <div className="d-flex align-items-center" ><h2 className="card-title">Pro </h2><Badge className="bg-secondary bg-lg">Best Value</Badge></div>

                <div className="card-body">
                    <p className="card-text">Starter Workout Plan</p>
                    <ul className="card-list">
                        <li>Feature - 1</li>
                        <li>Feature - 2</li>
                        <li>Feature - 3</li>
                    </ul>
                </div>
                <h3 className="price">$39</h3>
                <div className="price-card-footer">

                    <button className="btn btn-primary btn-lg">Buy Now</button>
                </div>
            </div>

            <div className="card">
                <h2 className="card-title">Premium</h2>
                <div className="card-body">
                    <p className="card-text">Starter Workout Plan</p>
                    <ul className="card-list">
                        <li>Feature - 1</li>
                        <li>Feature - 2</li>
                        <li>Feature - 3</li>
                    </ul>
                </div>
                <h3 className="price">$99</h3>
                <div className="price-card-footer">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </>);
}

export default Prices;