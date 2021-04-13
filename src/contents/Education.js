import React, {Component} from 'react';

import Widecard from '../components/Widecard.js'

class Education extends Component {
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Bachelor of Arts in Digital Arts & Sciences" where="University of Florida" from="August 2013" to="May 2017"/>
                <Widecard title="Full Stack Developer Certification" where="Gainesville Dev Academy" from="August 2017" to="August 2017"/>
            </div>
        );
    }
}

export default Education;