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
import YouTube from 'react-youtube';

import interview1merge1 from './images/singlyListinterview1/interview1merge1.png'
import interview1merge2 from './images/singlyListinterview1/interview1merge2.png'
import interview1merge3 from './images/singlyListinterview1/interview1merge3.png'
import interview1merge4 from './images/singlyListinterview1/interview1merge4.png'
import interview1merge5 from './images/singlyListinterview1/interview1merge5.png'
import interview1merge6 from './images/singlyListinterview1/interview1merge6.png'
//import interview1merge7 from './images/singlyListinterview1/interview1merge7.png'

import L1dummy from './images/singlyListinterview1/L1dummy.png'
import L2dummy from './images/singlyListinterview1/L2dummy.png'

import L14 from './images/singlyListinterview1/L14.png'
import L17 from './images/singlyListinterview1/L17.png'

import L23 from './images/singlyListinterview1/L23.png'
import L26 from './images/singlyListinterview1/L26.png'
import L29 from './images/singlyListinterview1/L29.png'
import L212 from './images/singlyListinterview1/L212.png'

import mergelist1 from './images/singlyListinterview1/mergelist1.png'
import mergelist2 from './images/singlyListinterview1/mergelist2.png'
import mergelist3 from './images/singlyListinterview1/mergelist3.png'
import mergelist4 from './images/singlyListinterview1/mergelist4.png'
import mergelist5 from './images/singlyListinterview1/mergelist5.png'
import mergelist6 from './images/singlyListinterview1/mergelist6.png'

const a = "Now, the next time this for loop is ran, 'if L1.value < L2.value' will be executing 'if 4 < 6' instead of 'if 4 < 3'."
const b = "Note here that L1.value is still 4, because we did not update the value of L1 like we did L2, since we used the else statement instead of the if statement when doing 'if 4 < 3' in the first iteration."
const c = ". Now, let's go into the if statement: is L1.value < L2.value? Yes, because now 4 is less than 6. In this case, we actually go through with the body of the if statement"

function SingleInterview1(){

    const HtmlTooltip = withStyles((theme) => ({
        tooltip: {
          backgroundColor: '#f5f5f9',
          color: 'rgba(0, 0, 0, 0.87)',
          maxWidth: 220,
          fontSize: theme.typography.pxToRem(12),
          border: '1px solid #dadde9',
        },
      }))(Tooltip);

    const codeString1 = "class Node:" + "\n\t" + "def __init__ (self, value=None):" + 
    "\n\t\t" + "self.value=value" + "\n\t\t" + "self.nextnode=None" + "\n\n" + 
    "def merge(L1, L2):" + "\n\t" + "dummy_head = curr = Node()" + "\n\t" + 
    "while L1 and L2:" + "\n\t\t" + "if L1.value < L2.value:" + "\n\t\t\t" + 
    "curr.nextnode = L1" + "\n\t\t\t" + "L1 = L1.nextnode" + "\n\t\t" + "else:" + 
    "\n\t\t\t" + "curr.nextnode = L2" + "\n\t\t\t" + "L2 = L2.nextnode" + "\n\t\t"
     + "curr = curr.nextnode" + "\n\t" + "curr.nextnode = L1 or L2" + "\n\t" + "return dummy_head.nextnode"
    const codeString2 = "def merge(L1,L2):"
    const codeString3 = "dummy_head = curr = Node()"
    const codeString4 = "while L1 and L2:"
    const codeString5 = "if L1.value < L2.value:" + "\n\t\t\t" + 
    "curr.nextnode = L1" + "\n\t\t\t" + "L1 = L1.nextnode" + "\n\t\t" + "else:" + 
    "\n\t\t\t" + "curr.nextnode = L2" + "\n\t\t\t" + "L2 = L2.nextnode" + "\n\t\t"
     + "curr = curr.nextnode"
    const codeString5v1 = "curr = curr.nextnode"
    const codeString6 = "if L1.value < L2.value:" + "\n\t" + 
    "curr.nextnode = L1" + "\n\t" + "L1 = L1.nextnode"
    const codeString7 = "curr.nextnode = L1 or L2"
    const opts = {
        height: '390',
        width: '640',

        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        }}

    return(

        <div id="page-container">
        <Navigation />
        <div className="learn-container">
        <div className="learn-containerChild">

    
    <div className="TitleFormat">
    Singly-Linked lists: Interview problem 1: Merge two sorted linked lists
    </div>


    <div className="learn-body">
    <YouTube videoId="CEts40lJPis" opts={opts} />
    
    <em>Like all interview problems on this site, take some time to understand the prompt and implement the data structures yourself if possible.</em>
    <img className="image2" src={interview1merge1} alt="interview1merge1"/>
    </div>
    <div className="learn-body">
    Say we have two already sorted lists like in the image shown above. We need to merge them into one list so that the nodes are appearing in ascending order. A complete function definition for this would like so:
    </div>
    <div className="learn-body">
        <SyntaxHighlighter language="python" style={docco}>
            {codeString1}
        </SyntaxHighlighter>
    </div>
    
    <div className="subsubTitleFormat">
        Breakdown:
    </div>
    
    <div className="learn-body">
    First, let's create an object 'Node' by initializing a Node class that has two attributes we'll be using in our merge function definition: <b>value,</b> the object that the first block of a node is pointing to, and nextnode, the node that the arrow in the second block of a node is pointing to.
    </div>

    <div className="learn-body">
    Next, create the function definition for merging two sorted linked lists together in ascending order. We'll have two function arguments: L1 and L2, each being a linked list of nodes. 
    </div>

    <div className="learn-body">
        <SyntaxHighlighter language="python" style={docco}>
            {codeString2}
        </SyntaxHighlighter>
    </div>

    <div className="learn-body">
    Now, let's instantiate two variables: 'dummy_head' and 'curr', which are both equal to Node(). 'curr' will be used to build up our merged linked list as we loop through the body of the 'merge' function, and <b>'curr.nextnode' will always point to the tail of the merged linked list. </b>After 'merge' has completed running, 'curr' will hold all the nodes in L1 and L2 successfully merged in ascending order.
    </div>
    <div className="learn-body">
        <SyntaxHighlighter language="python" style={docco}>
            {codeString3}
        </SyntaxHighlighter>
    </div>
    
    <div className="learn-body">
    This allows for 'dummy_head' and 'curr' to adopt the '.value' and '.nextnode' attributes assigned to Node(). It also means that <b>curr begins at the node 'dummy_head'</b>. 
    </div>

    <div className="learn-body">
    We use two variables ('dummy_head' and 'curr') instead of one because we cannot simply return 'curr.nextnode' to return the entire merged linked list. 'curr.nextnode' will always be pointing to a node at any given time, and being that it's an iterator for the merged linked list this function definition will eventually create, we cannot return 'curr.nextnode' and expect the entire merged linked list. Rather, returning 'dummy_head.nextnode' means that we'll be returning each and every node that 'curr.nextnode' was changed to as the function executed.
    </div>
    
    <div className="learn-body">
    Read <em>this article</em> to understand why we will use 'dummy_head' in almost all of our linked list data structure implementations.
    </div>

    <div className="learn-body">
        
    </div>
    <div className="learn-body">
        <SyntaxHighlighter language="python" style={docco}>
            {codeString4}
        </SyntaxHighlighter>
    </div>
    <div className="learn-body">
    The while loop exits once L1 or L2 run out of nodes to iterate through. Within this while loop, we will create an if statement that asks if 'L1.value' is less than 'L2.value'. Using the values in the linked list diagram as an example, the while loop will iterate through 'L1' and 'L2' at the same time. So, the first time this while loop runs, it will have 'L1.value' equal to 4 to represent the first node of 'L1', and an 'L2.value' equal to 3 to represent the first node of 'L2'. 
    </div>

    <div className="learn-body">
        <SyntaxHighlighter language="python" style={docco}>
            {codeString5}
        </SyntaxHighlighter>
    </div>

    <div className="learn-body">
    Now, it will compare 4 and 3 to see if 'L1.value' is indeed less than 'L2.value'. 
    </div>

{/*
    <div className="learn-body">
    <img className="image2" src={L14} alt="L14"/>
    <img className="image2" src={L23} alt="L23"/>
    </div>
*/}
    

    <div className="learn-body">
    Since it isn't, it will run the else statement, which sets 'curr.nextnode' equal to L2, because L2.value (which is currently 3) is the smallest number between 3 and 4, and will thus be the first node in our merged linked list.
    </div>

    

    <div className="learn-body">
    This is the meat of our function definition. Since we said 'dummy_head' is equal to 'curr' in the beginning of our function definition, we are making it so that 'curr.nextnode' is L2. In other words, the second block of whichever node 'curr' is on <b>right now</b>, which is the dummy node, will point to L2.
    <img className="image2" src={interview1merge2} alt="interview1merge2"/>
    </div>
    
   
    <div className="subsubsubTitleFormat">
        Wrapping your head around L2 = L2.nextnode
    </div>

    <div className="learn-body">
        <em>
        I'm writing this aside because I struggled a while on understanding what 'L2 = L2.nextnode' meant. I mean, how can L2 be equal to the .nextnode of itself? In order to understand this statement, you have to realize that L2 is being updated to equal the next node in our L2 linked list, which in this case is 6. 
        </em>
    </div>

    <div className="learn-body">
        <em>
        Another way to think of this statement is to realize that L2 within this while loop is still the same node that we passed into 'while L1 and L2', in this case being the node whose first block points to 3. In order to use a different L2 value in the while loop the next time around, namely the next node in the L2 linked list sequence, we must update it somehow. 'L2 = L2.nextnode' does just that.
        </em>
    </div>

    <div className="learn-body">
        <em>
            {a}
            <b>
                {b}
            </b>
        </em>
        

    </div>

{/*
    <div className="learn-body">
    <img className="image2" src={L14} alt="L14"/>
    <img className="image2" src={L26} alt="L26"/>
    </div>
*/}

    <div className="learn-body">
        <em>
        If you didn't have this trouble like me then more power to you, but for the rest of ya'll who struggled to see this statement's true meaning, hopefully that cleared up the confusion :D
        </em>
    </div>

    <div className="learn-body">
    Now that we updated curr.nextnode to equal L2, thus making 3 the value of the first node in our merged linked list, and updated L2 so that we were now looking at the next node in linked list L2, which is 6, we go to the last statement in the while loop:
    </div>



    


    <div className="learn-body">
    <SyntaxHighlighter language="python" style={docco}>
            {codeString5v1}
        </SyntaxHighlighter>
    </div>

    <div className="learn-body">
    Just like how we updated 'L2' to be the node that the second block of 'L2' was  pointing to, we will update 'curr' to be the node that 'curr' was previously to. Now, if our while loop executes again, 'curr.nextnode' will be the newest tail in the merged linked list.
    </div>

{/*
    <div className="learn-body">
        <img className="image2" src={mergelist1} alt="mergelist1"/>
    </div>
*/}

    <div className="learn-body">    
    Now that we finished running through the while loop, we should go back and look at 'while L1 and L2' to see if we can exit or not: are L1 and L2 still true? Yes, because both L1 and L2 are not null: they are both nodes that have values 
    <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit"></Typography>
            <em>{"To clear any confusion, L1 and L2 are 'not null' not because they have their first blocks pointing to values, but because at this point in time they are still existing nodes. L1 or L2 will be 'null' when we've already reached the tail node of a list, in which case we will proceed to exit out of the while loop since 'L1 and L2' no longer holds true."}</em>
          </React.Fragment>
        }
        >
            <Button>4 and 7 respectively</Button>
        </HtmlTooltip>
        {c}
    </div>
    <div className="learn-body">
    <SyntaxHighlighter language="python" style={docco}>
            {codeString6}
        </SyntaxHighlighter>
    </div>
    <div className="learn-body">
    Here, we're making L1 equal to curr.nextnode, meaning that curr, which was on the 'dummy_head' node, is now on the node whose first block is pointing to 3, and whose second block is now pointing to the node whose first block is pointing to 4.
    <img className="image2" src={interview1merge3} alt="interview1merge3"/>
    </div>
    <div className="learn-body">
    Now, make sure to update L1 to equal L1.nextnode, which means L1 went from the node whose first block points to 4 to the node whose first block points to 7. 
    </div>

{/*
    <div className="learn-body">
        <img className="image2" src={L17} alt="L17"/>
        <img className="image2" src={L26} alt="L26"/>
    </div>
*/}

    <div className="learn-body">
    Also update the 'curr' node to be on the node whose first block has a value of 4, and update curr.next node to be on the node whose first block has a value of 6, the new tail node of the merged list.
    <img className="image2" src={interview1merge4} alt="interview1merge4"/>
    {/*
    <img className="image2" src={mergelist2} alt="mergelist2"/>
    */}
    </div>

    <div className="learn-body">
    Now, go back to the while loop and run the iterations all over again. Is 'while L1 and L2' still true? L1 is a node whose first block points to 7, and L2 is a node whose first block points to 6, so it's still true. 6 is less than 7, so we run the if statement block again. 
    {/*
    <img className="image2" src={L17} alt="L17"/>
    <img className="image2" src={L29} alt="L29"/>
    */}
    <img className="image2" src={interview1merge5} alt="interview1merge5"/>
    {/*
    <img className="image2" src={mergelist3} alt="mergelist3"/>
    */}

    </div>

    <div className="learn-body">
    Now we iterate again. Is 'while L1 and L2' still true? Finally, it isn't, because we no 
    longer have any nodes to iterate through in L1! L1's tail node had a value of 6, and we already added that node to 
    our merged linked list. This means we can now exit the while loop and
    <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Where exactly is the next statement to execute?</Typography>
            <em>{"Note that 'curr = curr.nextnode' is still within the while loop, so we won't be executing this statement either. Any statements with the same tab indentations or less that come after the while loop are considered statements we execute outside of the while loop. In this function definition, that would be 'curr.nextnode = L1 or L2' and 'return dummy_head.nextnode"}</em>
          </React.Fragment>
        }
        >
            <Button>go on to the next statement.</Button>
        </HtmlTooltip>
    </div>
    <div className="learn-body">
    Look at the next line of code outside of the while loop:
    </div>
    <div className="learn-body">
    <SyntaxHighlighter language="python" style={docco}>
            {codeString7}
        </SyntaxHighlighter>
    </div>
    <div className="learn-body">
    In order to execute this statement, we need to analyze 'L1 or L2'. 
    <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Why Again??</Typography>
            <em>{"Because L1.nextnode of the last node in the list, the one whose first block points to 6, is null, meaning that when we updated L1 to be L1.nextnode after passing 6 into L1.value in the while loop, ('L1 = L1.nextnode'), we basically set L1 to be null."}</em>
          </React.Fragment>
        }
        >
            <Button>We find that L1 is false,</Button>
        </HtmlTooltip>
     but we also find that L2 is still true, since L2 is currently equal to the node whose first block points to 9. 
    </div>
    <div className="learn-body">
    As a result, 'curr.nextnode' will be equal to the rest of the nodes in L2: 9 and 12. This means that curr, which is currently the node whose first block points to 7, will have its second block point to the node whose first block points to 9, whose second block will point to the first block that points to 12.
    <img className="image2" src={interview1merge6} alt="interview1merge6"/>
    {/*
    <img className="image2" src={mergelist6} alt="mergelist6"/>
    */}
    </div>


    <div className="learn-body">
    Now, we can return 'dummy_head.nextnode' to get the merged linked list we created above, since dummy_head was set equal to curr in the beginning of our merge function definition.
    </div>
    <div className="learn-body">
    And we did it!
    </div>
    <div className="learn-body"></div>
    <div className="learn-body"></div>









    <div className="learn-body-end"></div>
    </div>
    </div>
    <p></p>
    <Footer2/>
    </div>
    
    )

}
export default SingleInterview1;