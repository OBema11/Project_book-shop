import { Paper } from '@material-ui/core';
import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <Paper style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundSize: "cover!important",
                backgroundPosition: "center!important"
            }}>
                <img style={{
                    width: '1404px',
                    height: '700px',
                }} src="https://wallpaper.dog/large/238738.png"></img>
            </Paper>
            <Paper elevation={3} style={{
                marginTop: '-530px',
                position: 'absolute',
                zIndex: '2',
                width: '1200px',
                marginLeft: '105px',
                backgroundColor: 'transparent'
            }}>
                <h1 style={{
                    fontSize: '50px',
                    fontWeight: 700,
                    marginLeft: '20px',
                    color: 'white',
                    display: 'flex'
                }}>Contacts</h1>
                <p style={{
                    color: 'white',
                    fontSize: '35px',
                    fontWeight: 550,
                    marginLeft: '20px',
                }}>Thanks for reaching out to Bookshop. In order to ensure you receive a quick reply, please fill out our Contact Us form.
                    For UK media enquiries, please contact Anna.Zanetti@midaspr.co.uk.

                    For partnerships, promotional opportunities, and advertising enquiries, please email ukpromotions@bookshop.org.</p>
            </Paper>
        </div>
    );
};

export default ContactUs;