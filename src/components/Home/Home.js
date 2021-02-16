import React from 'react';
import { Link } from 'react-router-dom';
import AddContact from '../AddContact/AddContact';
import ContactList from '../ContactList/ContactList';
import Details from '../Details/Details.js'

const Home = () => {
    return (
        <div>
            <AddContact/>
            <ContactList/>
            {/* <Details/> */}
        </div>
    );
};

export default Home;