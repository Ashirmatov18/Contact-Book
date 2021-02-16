import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { contactContext } from '../../contexts/ContactContext';

const AddContact = () => {
    const[inpName, setInpName] = useState('')
    const[inpSurname, setInpSurname] = useState('')
    const[inpPhone, setInpPhone] = useState('')
    const[inpDetails, setInpDetails] = useState('')
    const{addContact} = useContext(contactContext)
    

    function handleClick (){
        let newObj = {
            contact: inpName,
            surname: inpSurname,
            phone: inpPhone,
            details: inpDetails
        }
        addContact(newObj)
        setInpName('')
        setInpSurname('')
        setInpPhone('')
        setInpDetails('')
    }
    return (
        <div >
            <h1 className="title">Add Contact</h1>
            <div className="block">
                <input value={inpName} onChange={(e) => setInpName(e.target.value)} type="text" placeholder="Name"/>
                <input value={inpSurname} onChange={(e) => setInpSurname(e.target.value)} type="text" placeholder="Surname"/>
                <input value={inpPhone} onChange={(e) => setInpPhone(e.target.value)} type="number" placeholder="Number"/>
                <input value ={inpDetails} onChange ={(e)=> setInpDetails(e.target.value)} type="text" placeholder ="Details" />
                <button onClick={handleClick}>Add contact</button>
            </div>
        </div>
    );
};

export default AddContact;  