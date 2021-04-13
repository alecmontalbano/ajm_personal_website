import React, {Component} from 'react';

class Social extends Component {
    render() {
        return(
            <div className="social">
                <a href="https://github.com/alecmontalbano" rel="noreferrer" target="_blank">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.instagram.com/alecmontalbano/" rel="noreferrer" target="_blank">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/alec.montalbano/" rel="noreferrer" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.linkedin.com/in/alecmontalbano/" rel="noreferrer" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
        );
    }
}

export default Social;