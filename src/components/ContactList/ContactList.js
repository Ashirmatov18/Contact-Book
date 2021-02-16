import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { contactContext } from '../../contexts/ContactContext';
import './ContactList.css';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }));


const ContactList = (props) => {
    const {contacts, getContactsData, deleteContact, editContact, contactDetails} = useContext(contactContext)
    useEffect(() => {
        getContactsData()
    }, [])
    let history = useHistory()
    return (
        <div>
            <h1 className="title" >Contacts</h1>
            {contacts.map(item => (
                <ul className="contact-item" key={item.id}>
                <li>
                    name: {item.contact}
                </li>    

                <li key={item.id}>
                    surname: {item.surname}
                </li> 

                <li>
                    phone number: {item.phone}
                </li>
                <button onClick={() => deleteContact(item.id)} >DELETE</button>
                <button onClick={() => editContact(item.id, history)} >EDIT</button>
                <Link to='/details'>
                <button onClick={()=> contactDetails(item.id,history)}>DETAILS</button>
                </Link>
                </ul>
            ))}
        </div>
    );
};

export default ContactList;