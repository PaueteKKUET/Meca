
import React from "react";
import './languageCard.css';

class LanguageCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: props.image,
            name: props.name,
            description: props.description,

            mouseOverTicks: 0
        }
    }

    handleMouseOver() {
        this.setState({mouseOverTicks: this.state.mouseOverTicks + 1});
    }

    render() {
        return (
            <div
                className="languageCard"
                id={this.state.name}
                onMouseOver={() => this.handleMouseOver()}
            >
                <img src={this.state.image} alt={this.state.name} />
                <strong>{this.state.name}</strong>
                <p>{this.state.description}</p>
            </div>
        )
    }

}

LanguageCard.defaultProps = {
    image: 'https://via.placeholder.com/150',
    name: 'Dead language',
    description: 'This language is dead, so it is not displayed (probably Java).'
}

let languages = [
    {
        name: 'JavaScript',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
        description: 'JavaScript is a high-level, dynamic, untyped, and interpreted programming language.'
    },
    {
        name: 'React',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
        description: 'React is a JavaScript library for building user interfaces. React can be used as a base in the development of single-page or mobile applications.'
    },
    {
        name: 'Java',
        image: 'https://cdn-icons-png.flaticon.com/512/226/226777.png',
        description: 'Java is a programming language and a platform that enables the creation of secure, robust, and efficient software.'
    },
    {
        name: 'Rust',
        image: 'http://rust-lang.org/logos/rust-logo-256x256-blk.png',
        description: 'Rust is a systems programming language that is designed to be fast, safe, and memory-efficient.'
    },
    {
        name: 'PostgreSQL',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png',
        description: 'PostgreSQL is a powerful, open source object-relational database system.'
    },
    {
        name: 'PowerShell',
        image: 'https://4.bp.blogspot.com/-VnHaVPAfOms/XDepW52T1BI/AAAAAAAAGQo/ZzujNs2KPkEmmtF1Astea01BkZ6RGStswCLcBGAs/s1600/powershell.png',
        description: 'PowerShell is a powerful, open source, cross-platform, command-line interface (CLI) for Microsoft Windows, Linux, and macOS.'
    },
    {
        name: 'C#',
        image: 'https://raw.githubusercontent.com/learnbr/csharp/master/csharp-logo.png',
        description: 'C# is a programming language that is used to create applications for Microsoft Windows, Linux, and macOS.'
    },
    {
        name: 'Python',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
        description: 'Python is a programming language that is used to create applications for Windows, Linux, and macOS.'
    },
    {
        name: 'C++',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/640px-ISO_C%2B%2B_Logo.svg.png' ,
        description: 'C++ is a programming language that is used to create applications for Windows, Linux, and macOS.'
    }
]


export const propsAndState = (function() {
    let languageCards = [];
    languages.forEach(language => {
        languageCards.push(
            <LanguageCard
                name={language.name}
                image={language.image}
                description={language.description}
            />
        )
    });

    console.log(languageCards);

    return (
        <div id="languageCardWrapper">
            <h1>Props and State</h1>
            {languageCards}
        </div>
    )
});