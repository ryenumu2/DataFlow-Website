import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Navigation from '../Navigation';
import './learn.css'
import Footer2 from '../Footer2';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';

import outoldnew2 from './images/reactjs/outoldnew2.jpg'
import functionoutput from './images/reactjs/functionoutput.jpg'
import classoutput from './images/reactjs/classoutput.jpg'
function FuncvsComp(){

    const codeString = "function Welcome(props) {" + "\n" + "    return <h1>Hello, {props.name}</h1>;" + "\n" + "}" 
    const codeString2 = "class Welcome extends React.Component {" + "\n" + "    render() {" + "\n" + "        return <h1>Hello, {this.props.name}</h1>;" + "\n" + "    }" + "\n" + "}"
    const codeString3 = "function checkout_dis_function(){" + "\n" + "    return <h1> This is output for a function </h1>" + "\n" + "}" + "\n\n" + "const checkout_dis_constant = () => {" + "\n" + "    return <h1> This is output for a constant function </h1>" + "\n" + "}" + "\n\n" + "function ParentComponent(){" + "\n" + "    return <h1> Hello this test works! <checkout_dis_function/> </h1>" + "\n" + "}" + "\n\n" + "export default ParentComponent;"
    const codeString4 = "import ParentComponent from './components/screens/Learn.js'" + "\n\n" + "const Routes = () => {" + "\n" + "return (" + "\n" + "    <Router history={history}>" + "\n" + "    <div className='App'>" + "\n\t" + "<Switch>" + "\n\t" + "    <Route path='/learn' component = {ParentComponent}/>" + "\n\t" + "</Switch>" + "\n" + "    </div>" + "\n" + "    </Router>" + "\n" + "    );" + "\n" + "}" + "\n\n" + "export default Routes;"
    const codeString45 = "class ChildClass extends React.Component {" + "\nrender(){" + "\n    return <h1> This is output for a CLASS </h1>" + "\n    }" + "\n}"
    const codeString5 = "class ParentComponent extends React.Component {" + "\nrender(){" + "\n    return <h1> Hello test works!" + "\n<ChildClass/>" + "\n</h1>" + "\n    }" + "\n}" + "\nexport default ParentComponent;"

    return(

        <div id="page-container">
        <Navigation />
        <div className="learn-container">
        <div className="learn-containerChild">

    
    <div className="TitleFormat">
    The War of Functional vs Class Components: why Functional is better
    </div>
{/*
    <div className="learn-body-bold">
        Some background
    </div>
*/}
    

    <div className="learn-body">
    React is an extremely popular modern framework that is part of the new wave of component-based development. Just like being eco-friendly in the real-world is a good thing and should be something we all do, the programming standard has told us we all should also re-use code we write. 
    </div>
    <div className="learn-body">
    <img className="image2" src={outoldnew2} alt="outWithTheOldInWithTheNew"/>
    </div>
    <div className="learn-body">
    Writing 50 different functions that do almost identical things is not just tiring on the eyes, but is also significantly harder to maintain as you scale your application more and more. Instead, you want to make tiny pieces of code (components), that you can refer back to when you need their help. For example, you don't need to code a new header for a new page on your website, when that header is identical to the header you wrote on a different page. Just make a component that describes your header, and use it for every page on your site :)
    </div>
    <div className="learn-body">
    So what exactly do react components look like in React? They come in two flavors: functional and class.
    </div>
    
    <div className="subsubTitleFormat">
    Functional Components:
    </div>

    <div className="learn-body">
    Here is a simple functional component in action, according to React's docs:
    </div>

    <div className="learn-body">
        <SyntaxHighlighter language="javascript" style={docco}>
            {codeString}
        </SyntaxHighlighter>
        </div>
    <div className="learn-body">
        <em>Related article:</em><i><Link to='/props'> what are props? </Link></i>
    </div>
    <div className="learn-body">
    So why is this a functional component? Because it returns a React element. This is a valid react component that can be used with the React library.
    </div>
    <div className="subsubTitleFormat">
    Class Components:
    </div>
    <div className="learn-body">
    This is the class component equivalent of the functional component example shown above, also derived from React's docs:
    </div>

    <div className="learn-body">
        <SyntaxHighlighter language="javascript" style={docco}>
            {codeString2}
        </SyntaxHighlighter>
    </div>

    <div className="subsubTitleFormat">
    So wus the deal?
    </div>

    <div className="learn-body">
    Before sometime around April of 2019, people were using class components for states and lifestyle hooks in their code, because functional components couldn't use them. That was until the React 16.8 Hooks update, which allowed you to use hooks such as useState and useEffect, that would use states and lifecycle events in your functional components.
    </div>
    <div className="learn-body">
    Functional components also beat class components in:
    </div>

    <div className="learn-body">
    1. Being much easier to read and test
    </div>
    <div className="learn-body">
    2. Is best practice and gives an edge when writing code for a tech company
    </div>
    <div className="learn-body">
    3. Is more concise
    </div>
    <div className="learn-body">
    4. Will have a performance boost with current and upcoming React versions to come
    </div>
    
    <div className="learn-body">
    Let's see how functions and consts are implemented, and see them in action within a 
simple react script.
    </div>
    <div className="learn-body">
    Remember while looking at this example, that functions and consts are part of the 'function components' of react, and that const 'checkout_dis_constant' is now the name of the function with '=>' being shorthand notation for the 'function' keyword:
    </div>

    <div className="learn-body">

    </div>
    <div className="learn-body">
    <SyntaxHighlighter language="javascript" style={docco}>
            {codeString3}
        </SyntaxHighlighter>
    </div>

    <div className="learn-body">
    this script will output 'This is output for a constant', assuming that:
    </div>

    <div className="learn-body">
    <SyntaxHighlighter language="javascript" style={docco}>
            {codeString4}
        </SyntaxHighlighter>
    </div>
    
    <div className="learn-body">
    is added to a separate .js file, and we're looking up localhost/learn. The following screen will show after running the blurbs of code from the two files above:
    </div>
    <div className="learn-body">
    <img className="image2" src={functionoutput} alt="functionoutput"/>
    </div>

    <div className="learn-body">Now let's write a 'class component':</div>


    <div className="learn-body">
        <SyntaxHighlighter language="javascript" style={docco}>
            {codeString45}
        </SyntaxHighlighter>
    </div>

    <div className="learn-body">and we will reference it in here:</div>

    <div className="learn-body">
        <SyntaxHighlighter language="javascript" style={docco}>
            {codeString5}
        </SyntaxHighlighter>
    </div>

    <div className="learn-body">
        This will output the following screen:
    </div>

    <div className="learn-body">
    <img className="image2" src={classoutput} alt="classoutput"/>
    </div>

    <div className="learn-body">So why use class components if functional components exist? The answer was straightforward a year ago: because *states* and *lifecycle hooks* could only work in class components… till functional components pulled up and made functional components the premier choice. Don't lose sight on classes though, because lots of React documentation will still use classes, so understanding how class components work  and how they look is still a good skill to have.</div>

    <div className="learn-body-end"></div>
    </div>
    </div>
    <Footer2/>
    </div>
    )
}

export default FuncvsComp;