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

import singlelist3 from './images/singlyList/singlylist3.png'

function SingleImplement(){
    const HtmlTooltip = withStyles((theme) => ({
        tooltip: {
          backgroundColor: '#f5f5f9',
          color: 'rgba(0, 0, 0, 0.87)',
          maxWidth: 220,
          fontSize: theme.typography.pxToRem(12),
          border: '1px solid #dadde9',
        },
      }))(Tooltip);

    const codeString = 'class Node(object):' + '\n\n' + 'def __init__(self,value):' + '\n\t' + 'self.value = value' + '\n\t' + 'self.nextnode = None'

    const codeString2 = "node1 = Node('Arlen')" + '\n' + "node2 = Node('Atlantis')" + '\n' + "node3 = Node('Bedrock')"
    
    const codeString3 = "node1.nextnode = node2" + "\n" + "node2.nextnode = node3"

    const codeString4 = "% node1.value #will output Arlen"

    const codeString5 = "% node1.nextnode #will output the address of node 2"

    const codeString6 = "% node1.nextnode.value #will output Atlantis"

    const codeString7 = "% node1.nextnode.nextnode.value #will output Bedrock"

    const codeString8 = "class Node(object):" + "\n\n\t" + "def insert_after(node, new_node):" + "\n\t\t" + "new_node.nextnode = node.nextnode" + "\n\t\t" + "node.nextnode = new_node"

    const codeString9 = "new_node.nextnode = node.nextnode"

    const codeString10 = "node.nextnode = new_node"

    const codeString11 = "node4 = Node('San Jose')"

    const codeString12 = "% Node" + ".insert_after(node2,node4)"

    const codeString13 = "% node2.nextnode.value"

    const codeString14 = "class Node(object):" + "\n\t" + "def delete_after(node):" + "\n\t\t" + "node.nextnode = node.nextnode.nextnode"

    const codeString15 = "node.nextnode = node.nextnode.nextnode"

    const codeString16 = "% Node.delete_after(node1) #equivalent to Node.delete_after(Node('Arlen'))"

    const codeString17 = "% node1.nextnode.value #should output 'Bedrock'"
        
    const codeString18 = "def search(node, key):" + "\n\t" + "while node and node.value != key:" + "\n\t\t" + "node = node.nextnode" + "\n\t" + "return node"

    const codeString19 = "% Node.search(node3, 'Bedrock') #return <__main__.Node at 0x10cc8dfd0>"

    const codeString20 = "while node and node.value != key:" + "\n\t" + "node = node.nextnode" + "\n" + "return node"

    const codeString21 = "class Node(object):" + "\n\t" + "def __init__(self,value):" + "\n\t\t" + "self.value = value" + "\n\t\t" + "self.nextnode = None" + "\n\n\t" + "def insert_after(node, new_node):" + "\n\t\t" + "new_node.nextnode = node.nextnode" + "\n\t\t" + "node.nextnode = new_node" + "\n\n\t" + "def delete_after(node):" + "\n\t\t" + "node.nextnode = node.nextnode.nextnode" + "\n\n\t" + "def search(node, key):" + "\n\t\t" + " while node and node.value != key:" + "\n\t\t\t" + "node = node.nextnode" + "\n\t\t" + "return node" + "\n\n" + "node1 = Node('Arlen')" + "\n" + "node2 = Node('Atlantis')" + "\n" + "node3 = Node('Bedrock')" + "\n" + "node4 = Node('San Jose')" + "\n\n" + "node1.nextnode = node2" + "\n" + "node2.nextnode = node3" + "\n" 


    return(
        <div id="page-container">
            <Navigation/>

        <div className="learn-container">
        <div className="learn-containerChild">
        <div className="TitleFormat">
            Singly Linked List Implementation
        </div>
        <div className="learn-body">
        <em>This article is a continuation of the concepts we discussed from singly-linked lists. Read the overview on <u><Link to='/singlylist'>singly linked lists</Link></u> to get a better idea of the concepts we cover before implementing code for singly-linked lists.</em>
        <img className="image2" src={singlelist3} alt="singlelist3"/>
        Let's write some code to represent this singly-linked list:
     
        <div className="learn-body">
        <SyntaxHighlighter language="python" style={docco}>
            {codeString}
        </SyntaxHighlighter>
        </div>
        <div className="learn-body">
        To begin, we should create a class 'Node'  and define the components of 'Node'. Namely, we must create  variables 'value' and 'nextnode' and make them permanent members of the 'Node' object by defining them via 'self.value' and 'self.nextnode'. we will make 'self.value = 'value', and pass 'value' as an argument to 'def __init__' . This will allow us to create instances of the Node class by passing the value (or object) that each node's first block points to, i.e Arlen, Atlantis, or Bedrock, like so:
        </div>
        <div className="learn-body">
        <SyntaxHighlighter language="python" style={docco}>
            {codeString2}
        </SyntaxHighlighter>   
        </div>
        <div className="learn-body">
        Passing in the values to the class 'Node' we just created, we have now defined node1, node2, and node3 to be nodes, except that we've forgotten to define where the second blocks of each of these nodes will point to:
        </div>
        <div className="learn-body">
        <SyntaxHighlighter language="python" style={docco}>
            {codeString3}
        </SyntaxHighlighter>
        </div>
        <div className="learn-body">
        And we're done! We've been able to define what the first block of each node will point to (value), and have been able to define what the second block of each node will point to (nextnode). We can now run some tests to see if we get the values we expect:
        </div>
        <div className="learn-body-no-bot">
        <SyntaxHighlighter language="python" style={docco}>
            {codeString4}
        </SyntaxHighlighter>
        </div>
        <div>
        <SyntaxHighlighter language="python" style={docco}>
            {codeString5}
        </SyntaxHighlighter>
        </div>
        <div>
        <SyntaxHighlighter language="python" style={docco}>
            {codeString6}
        </SyntaxHighlighter>
        </div>
        <div>
        <SyntaxHighlighter language="python" style={docco}>
            {codeString7}
        </SyntaxHighlighter>
        </div>
        <div className="learn-body">
        Now, let's try implementing a couple functions that do some of the operations we previously discussed, like inserting a new node and deleting a node. 
        </div>
        <div className="subTitleFormat">
        Inserting a new node
        </div>
        <div className="learn-body">
        Given
        <img className="image2" src={singlelist3} alt="singlelist3"/>
        </div>
        <div className="learn-body">
        First, write a function definition that inserts a new node by passing in two values, the new node and the node that it's inserted after. Then,
        <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Why use functions when we can add on to our existing implementation?</Typography>
            <em>{"Note that we could just erase node2.nextnode = node3 and say node2.nextnode = Node('San Jose'), to insert the node with 'San Jose' between the nodes with 'Atlantis' and 'Bedrock' , but we want to implement functions for each of these processes instead, since this is usually how you'd implement it in an interview setting."}</em>
          </React.Fragment>
        }
        >
            <Button>use this function</Button>
        </HtmlTooltip>
        
        to insert node 'San Jose' in between Atlantis and Bedrock. 
        </div>
        <div className="learn-body">
        <SyntaxHighlighter language="python" style={docco}>
            {codeString8}
        </SyntaxHighlighter>
        </div>
        <div className="subsubTitleFormat">
            Breakdown:
        </div>
        <div className="learn-body">
        Write definition 'insert_after()' under the Node class, and have it take in two parameters: 'node', the node to the left of the new node you will insert into your singly linked list, and 'new_node'. For example, if we added the node whose first block points to 'San Jose' in between the nodes whose first blocks point to Atlantis and Bedrock, then Node('Atlantis') would be 'node', and Node('San Jose') would be 'new_node'.
        <p></p>
        The logic behind our implementation is as follows. First, make it so that the arrow being pointed to the first block of Node('Bedrock') is coming from the second block of the new node we inserted in between Node('Atlantis') and Node('Bedrock'): Node('San Jose'), and not the second block of Node('Atlantis).
        <p></p>
            Inserting Node('San Jose') in between Node('Atlantis') and Node('Bedrock') means making Node('San Jose').nextnode equal to 'Bedrock' instead of Node('Atlantis') being equal to 'Bedrock'.
        <p></p>
        Thus,
        </div>
        <div className="learn-body">
        <SyntaxHighlighter language="python" style={docco}>
            {codeString9}
        </SyntaxHighlighter>
        </div>
        <div className="learn-body">
        Finally, make it so that the second block of Node('Atlantis') is pointing to Node('San Jose'):
        </div>
        <div className="learn-body">
        <SyntaxHighlighter language="python" style={docco}>
            {codeString10}
        </SyntaxHighlighter>
        </div>



        <div className="subsubTitleFormat">
            Final steps to inserting a new node:
        </div>
        <div className="learn-body">
        Next, we should probably define Node('San Jose') like we did for Node('Arlen'), Node('Atlantis'), and Node('Bedrock'):
        </div>
        <div className="learn-body">
        <SyntaxHighlighter language="python" style={docco}>
            {codeString11}
        </SyntaxHighlighter>
        </div>
        <div className="learn-body">
        So we can call our insert_after function like so:
        </div>
        <div className="learn-body">
        <SyntaxHighlighter language="python" style={docco}>
            {codeString12}
        </SyntaxHighlighter>
        </div>
        <div className = "learn-body">
        To test if the newly created function works, we can do:
        </div>

        <div className="learn-body">
        <SyntaxHighlighter language="python" style={docco}>
            {codeString13}
        </SyntaxHighlighter>
        </div>
        <div className = "learn-body">
        And it should return 'San Jose' instead of 'Bedrock'!
        </div>
        <div className = "subTitleFormat">
            Deleting a node
        </div>
        <div className="learn-body">
            Given
        </div>
        <img className="image2" src={singlelist3} alt="singlelist3"/>
        <div className="learn-body">
        Remove the node whose first block points to Atlantis from the linked list using a function definition.
        </div>
        <div className="learn-body">
        <SyntaxHighlighter language="python" style={docco}>
            {codeString14}
        </SyntaxHighlighter>
        </div>
        <div className="learn-body">
        This function definition looks super straight forward because it is!
        </div>
        <div className="subsubTitleFormat">
            Breakdown:
        </div>
        <div className="learn-body">
        Passing a node into delete_after() will remove the node that comes after it. For example, if we want to remove the node whose first block points to Atlantis, we must pass in the node whose first block points to Arlen. This is because of 
        </div>
        <div className="learn-body">
        <SyntaxHighlighter language="python" style={docco}>
            {codeString15}
        </SyntaxHighlighter>
        </div>
        <div className="learn-body">
        In this statement, assuming node is equal to Node('Arlen'), we're changing the arrow in the second block of 'Arlen' so that it points to the first block of Node('Bedrock') instead of the first block of Node('Atlantis'). This effectively 'links-out' Node('Atlantis'), removing it from the singly-linked list sequence. 
        </div>
        <div className="learn-body">
        To run the function definition delete_after and remove Node('Atlantis'), do:
        </div>
        <div className="learn-body">
        <SyntaxHighlighter language="python" style={docco}>
            {codeString16}
        </SyntaxHighlighter>
        </div>
        <div className = "learn-body">
        Now, to check that the node whose first block points to 'Atlantis' has been successfully removed, do:
        </div>
        <div className="learn-body">
        <SyntaxHighlighter language="python" style={docco}>
            {codeString17}
        </SyntaxHighlighter>
        </div>
        <div className = "learn-body">
        And we did it! 
        </div>

        <div className = "subTitleFormat">
            Searching for a node and its value
        </div>
        <div className = "learn-body">
        Now say we want to search through our singly-linked list for a particular node and the object that their first block points to, using a function definition. We could do this like so:
        </div>
        <div className = "learn-body">
        <SyntaxHighlighter language="python" style={docco}>
            {codeString18}
        </SyntaxHighlighter>
        </div>
        <div className = "learn-body">
        Say we want to see if there exists a 'node3' with a 
        <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">What is key in this case?</Typography>
            <em>{"In this case, it's the object that node3's first block is pointing to"}</em>
          </React.Fragment>
        }
        >
            <Button>key.</Button>
        </HtmlTooltip>
        
         We would pass these values into this function definition like so:
        </div>
        <div className="learn-body">
        <SyntaxHighlighter language="python" style={docco}>
            {codeString19}
        </SyntaxHighlighter>
        </div>
        <div className="subsubTitleFormat">
            Breakdown:
        </div>
        <div className = "learn-body">
        Say for example we want to search for whether a node called 'node3' with a key of 'Bedrock' exists in the linked list. Upon successfully finding a node that meets these conditions, the function definition will return Node('Bedrock'), which is the address in which 'Bedrock' is located. If we iterate through the linked list and fail to find the node and value we passed in, this function definition will return nothing.
        </div>
        <div className = "learn-body">
        <SyntaxHighlighter language="python" style={docco}>
            {codeString20}
        </SyntaxHighlighter>
        </div>
        <div className = "learn-body">
        We create a while loop that ends only when 'node' and 'node.value' are equal to key. The while loop begins with the first node of our linked list: Node('Arlen') and 'Arlen', and asks if any of these two values are equal to 'Bedrock' (the key value we passed into 'def search()'). After seeing that it's not equivalent, def search will execute 'node = node.nextnode', which makes the new node value the next node in the linked list, which is Node('Atlantis'). node.value is now 'Atlantis', which is not equal to 'Bedrock', so 'node = node.nextnode' will execute again. Now, node is equal to Node('Bedrock'), and node.value is equal to 'Bedrock'. Since node.value and key are now both equal to 'Bedrock', the while loop will exit and return the node whose value matches key, Node('Bedrock').
        </div>
        <div className="subsubTitleFormat">
            Wrapping it all up:
        </div>
        <div className = "learn-body">
        Thus, our final code should look like this:
        </div>
        <p></p>
        <div classname = "learn-body">
        <SyntaxHighlighter language="python" style={docco}>
            {codeString21}
        </SyntaxHighlighter>
        </div>
        <div classname="learn-body">
        <em>Now let's go try out some singly linked list interview problems!</em>
        </div>
        <div className="learn-body-end">
        </div>
        </div>



        
        </div>
        </div>
        <Footer2/>
        </div>

    )
}

export default SingleImplement;