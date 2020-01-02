import React, {useState} from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from "react-router-dom";
import './Profile.css';

const thisState  = {
    profile: {
        email:  "homer.simpson@wildcodeschool.fr",
        name:  "Homer",
        lastname:  "Simpson"
    }
}

const Profile = () => {
    return(
    <div className="Profile">
        <List>
            <ListItem>
                 <ListItemText primary="email" secondary="mon email"/>
            </ListItem>
        </List>
        <Link to="/signin">Deconnexion</Link>
        </div>
                )
};

export default Profile;
