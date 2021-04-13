import React, {Component} from 'react';

import ReactTypingEffect from 'react-typing-effect';

import profilepic from '../img/headshot.jpeg';

import Social from '../components/Social';

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img alt="" src={profilepic} className="profilepic"></img>
                <ReactTypingEffect className="typingeffect" text={['I am Alec Montalbano', 'I am a Full Stack Engineer']} speed={100} eraseDelay={700}></ReactTypingEffect>
                <Social/>
            </div>
        );
    }
}

export default Home;