import React, {Component} from 'react';

class Skills extends Component {
    constructor(props) {
        super(props);

        this.state={
            'myskills': ['Javascript', 'PHP', 'C#', 'Java', 'Python', 'SQL', 'NoSQL', 'HTML', 'Sass', 'XML']
        };
    }

    render() {
        return(
            <div className="condiv skills">
                <h1 className="subtopic">My Skills</h1>
                <ul>
                    {this.state.myskills.map((value, key)=>{
                        return <li key={key}>{value}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Skills 