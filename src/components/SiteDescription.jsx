import React from 'react';
import '../siteDescription.css';
import Footer from './Footer';

function SiteDescription() {
    return (
        <div>
            <div className="site__description">
                <h1>Welcome to 'Not' Hulu!</h1>

                <p>This project was inspired by the popular movie and television streaming app, Hulu. This project features movies and television shows provided by the IMTB API and is regularly updated to feature relevant titles that viewers may be familiar with. Please browse the varios genres and discover new shows and movies!</p>

                <p><strong>Technologies: </strong>React, HTML, CSS, Javascipt, Firebase, Axios, Material-UI</p>

                <p><strong>Challenges: </strong>Conditionally-rendering data pulled from the API is a challenge. For example: outputting data to a page can be a very simple task, but adding a functional navigation bar was relatively tricky. This was resolved by leveraging setState globally in the App-level file and passing "setGenre" as an argument to the Navigation component. Once clicked, setGenre is updated.</p>

                <p><strong>Moving Forward: </strong>I plan to make all buttons functional and potentially developing the back end in the near future, thus allowing for personalized content and themes to enhance the user experience. I also intend to display a playable trailer for each movie selection, once clicked. Please stay tuned as these additional features roll out and I look forward to sharing updates!</p>

                <p>Thank you,</p>

                <p>Aaron Zaragoza</p>
            </div>
            <Footer />
        </div>


    )
}

export default SiteDescription;