import React from 'react'
import Banner from '../components/Banner';
import Promotions from '../components/Promotions';
import SiteDescription from '../components/SiteDescription';
import Footer from '../components/Footer';

function Home() {
    return (
        <div>
            <Banner />
            <Promotions />
            <SiteDescription />
        </div>
    )
}

export default Home;
