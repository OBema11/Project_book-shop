import { Paper } from '@material-ui/core';
import React from 'react';

const AboutUs = () => {
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
                    height: '1220px',
                }} src="https://wallpaper.dog/large/238738.png"></img>
            </Paper>
            <Paper elevation={3} style={{
                marginTop: '-1151px',
                position: 'absolute',
                zIndex: '2',
                width: '100%',
                // marginLeft: '105px',
                backgroundColor: 'transparent'
            }}>
                <h1 style={{
                    fontSize: '50px',
                    fontWeight: 700,
                    marginLeft: '20px',
                    color: 'white',
                    display: 'flex'
                }}>Welcome to Bookshop!</h1>
                <p style={{
                    color: 'white',
                    fontSize: '35px',
                    fontWeight: 400,
                    marginLeft: '20px',
                }}>Bookshop.org is an online bookshop with a mission to financially support local, independent bookshops.
                    We believe that bookshops are essential to a healthy culture. They’re where authors can connect with readers, where we discover new writers, where children get hooked on the thrill of reading that can last a lifetime. They’re also anchors for our high streets and communities.
                    As more and more people buy their books online, we wanted to create an easy, convenient way for you to get your books and support bookshops at the same time.
                    If you want to find a specific local bookshop to support, find them on our map and they’ll receive the full profit from your order. Otherwise, your order will contribute to an earnings pool that will be evenly distributed among independent bookshops.
                    We also support anyone who advocates for books through our affiliate programme, which pays a 10% commission on every sale, and gives a matching 10% to independent bookshops. If you are an author, a website or magazine, have a bookclub, an organisation that wants to recommend books, or even just a book-lover with an Instagram feed, you can sign up to be an affiliate, start your own shop, and be rewarded for your advocacy of books. Bookshop.org wants to give back to everyone who promotes books, authors, and independent bookshops!
                    By design, we give away over 75% of our profit margin to stores, publications, authors and others who make up the thriving, inspirational culture around books!
                    We hope that Bookshop.org can help strengthen the fragile ecosystem and margins around bookselling and keep local bookshops an integral part of our culture and communities.
                    Bookshop is a B-Corp - a corporation dedicated to the public good.
                </p>
            </Paper>
        </div>
    );
};

export default AboutUs;