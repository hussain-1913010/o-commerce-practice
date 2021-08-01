import React from 'react';

const About = () => {
    return (
        <div>
            <div className="container">
                <h2 className="">Hello dear !</h2>
                <h3 className="">Hope you are here. I want to share the tools i used for this website...</h3>
                <p className="lead">I have used an local api to load all the data. then used context api for spreading the data across the site, then again used context api for the cart component to receive data from homepage, then used useReducer , js reduce method and useEffect, to calculate the data, and used react router for all types of routing, and react-bootstrap, and font-awesome for styling the components</p>
                <h4>Thank You !</h4>
            </div>
        </div>
    );
};

export default About;