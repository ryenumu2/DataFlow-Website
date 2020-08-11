import React from 'react';
import Navigation from '../Navigation';
import './learn.css'
import { NavLink, Link } from 'react-router-dom';
import singlelist1 from './images/singlyList/singleLinkedlist1.png'
import singlelist2 from './images/singlyList/singleLinkedlist2.png'
import singlelist3 from './images/singlyList/singlylist3.png'
import step1 from './images/singlyList/singlyliststep1.png'
import step2 from './images/singlyList/singlyliststep2.png'
import step3 from './images/singlyList/singlyliststep3.png'

import step1a from './images/singlyList/singlyliststep1a.png'
import step2a from './images/singlyList/singlyliststep2a.png'
import step3a from './images/singlyList/singlyliststep3a.png'

import step3b from './images/singlyList/singlyliststep3b.png'

import Tooltip from '@material-ui/core/Tooltip';
//import Button from 'material-ui/Button';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Footer2 from '../Footer2'

const theme = createMuiTheme({
    overrides: {
      // Style sheet name ⚛️
      MuiButton: {
        // Name of the rule
        root: {
          // Some CSS
          font: "Roboto",
        },
      },
    },
  });

function SingleList(){

    const reference1 = `A reference means that the node will point to the *address* of the object in the list, and NOT the object itself: 
    the pointers in each node represent the addresses of the objects that they are pointing to; the first node is 
    pointing to the address of LAX and the address of the next node, both of which have unique addresses in memory.`;

    const HtmlTooltip = withStyles((theme) => ({
        tooltip: {
          backgroundColor: '#f5f5f9',
          color: 'rgba(0, 0, 0, 0.87)',
          maxWidth: 220,
          fontSize: theme.typography.pxToRem(12),
          border: '1px solid #dadde9',
        },
      }))(Tooltip);




    return (
        <div id="page-container">
        <Navigation />
        <div className="learn-container">
        <div className="learn-containerChild">

    
    <div className="TitleFormat">
        Singly Linked Lists
    </div>


    <div className="learn-body">

    The head of a singly-linked list is the very first node. The tail is the very last node of the list.  

    <p></p>

    <img className="image2" src={singlelist2} alt="singlelist2"/>
    </div>
    
    <div className="learn-body">

    What is a node? A node is made up of two blocks as shown in the image above: the first block is a 
    {/*<Tooltip title={reference1}>*/}
    <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">So what's a reference?</Typography>
            <em>{"A reference means that the node will point to the"}</em> <b>{'address'}</b> <em>of the 
                object in the list, and</em> <u>{'NOT'}</u>
            <em>{" the object itself: the pointers in each node represent the addresses of the objects that they are pointing to. For example, the first node in the picture above is pointing to the"}</em> 
            <b> {"address"} </b> <em> {"of LAX  and the"}</em> <b> {"address"} </b> 
            <em>{"of the next node, both of which have unique addresses in memory."}</em>
            <p></p>
            <em>{"So, when I say something along the lines of 'the first block of a node points to the city of Atlantis', I'm equivalently saying that the "}</em><b>{"address"}</b> <em>{"of Atlantis is being stored in the first block of that node, not Atlantis itself."}</em>
          </React.Fragment>
        }
      >

    <Button>reference</Button>

    </HtmlTooltip>
    {/*</Tooltip>*/}
    (or pointer) to an object that is an element of that specific linked-list node, and the second block is a reference to the 
    first block of the next node in the list. In the image below, there are 4 different nodes. <p></p>
    
    <img className="image1" src={singlelist1} alt="singlelist1"/>
    </div>
    <div className="learn-body">

Note the characteristics that differ between the head node, body nodes, and tail nodes. You'll be considering these 
characteristics while creating and re-structuring linked lists:

</div>
<div className="learn-body-bold">
Head Node
</div>
<div className="learn-body">
has no arrow that points to its node. This is because the head node is the very first node in our singly-linked list. 
You gotta start somewhere! In the singly-linked list example above, the head node is node 1.
</div>
<div className="learn-body-bold">
Body Nodes
</div>
<div className="learn-body">
all nodes in the body have arrows pointing to them and arrows pointing to the next node. The arrow for the 'next node' 
is always non-null, meaning the 'next node' of a body node ALWAYS exists. In the singly-linked list example above, the body nodes are node 2 and node 3.
</div>
<div className="learn-body-bold">
Tail Node
</div>
<div className="learn-body">
has an arrow pointing to itself, and an arrow leaving the tail node. What's the difference between this node and a body or tail node? The pointer leaving the tail 
node always points to null. This is because the tail node is the last node in our singly-linked list! In the singly-linked list example above, the tail node is node 4.
</div>
<div className="learn-body">
Now lets see how insertion and deletion of nodes works here:
</div>
<div className="subTitleFormat">
Inserting a node at the head of a singly linked list
</div>

<div className="learn-body">
Let's build an example to resemble this process. Imagine you have three cities, Arlen, Atlantis, and Bedrock, each an object 
that the block of their respective node points to. 

<img className="image2" src={singlelist3} alt="singlelist3"/>


The city that the first block of the head node points to, Arlen, is the 
most powerful and prosperous city in the land. Once its people have all eaten and their resource needs have been met, 
the citizens of that city will pass down the leftover resources to the next city, Atlantis, or the object of the next 
node in the list. This will continue until the tail node, which points to the very last city to receive resources: 
Bedrock. The 

<HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">So why does the tail node keep all the resources they get?</Typography>
            <em>{"the tail node is the very last node in a linked list, and the second block of this tail node points to nothing."}</em>
          </React.Fragment>
        }
      >

    <Button>tail node</Button>

    </HtmlTooltip>

city will be able to keep all the resources given to them, albeit not as plentiful as what 
the head node had.  (If you asked me how I thought of this, I watched the movie 'Platform' on netflix last night. 
Don't watch it if you're  squeamish). 

<p></p>

Now imagine a scenario where the city agrees that an additional node be built before the existing head node that points to Arlen: one that can produce more resources than the old head node can. They decide to make a node whose first block points to Hogsmeade. Now, the first block of this new head node should point to the object Hogsmeade, and the second block of this new head node will point to what was the former head node: the node whose first block points to object Arlen. Here's how you'd add this new head to the existing singly-linked list:
<div className="learn-body-bold">Step 1:</div>
<p></p>
Create a new node right before the old head node. The object that this new node points to is empty, (which means that no city is assigned to this node yet)and the node that this node points to also doesn't exist (it doesn't point to the node that contains Arlen, just yet). Just draw a free floating node that’s made up of two empty blocks; it's not a part of our city chain yet, which means it cannot currently pass resources down. We have to edit this empty node to make it useful. Also note that at this stage, the head of the singly-linked list is still pointing to the node that points to Arlen, Texas. We have to change where the head of the list will point to as well. 
<img className="image2" src={step1} alt="step1"/>

<div className="learn-body-bold">Step 2:</div>
<p></p>
For the first block in our empty node, have it point to Hogsmeade. This is the element that this node points to. For the second block of our empty node, have it point to the next node: the node whose first block points to Arlen.
<img className="image2" src={step2} alt="step2"/>
<div className="learn-body-bold">Step 3:</div>
<p></p>
At this point, we have a newly instantiated node whose first block points to Hogsmeade, and whose second block points to the node whose first block points to Arlen. But, at this point, the list's head is still pointing at the node that contains Arlen. How to fix this? Move that list head so that it now points to the node that contains Hogsmeade! And we're done: we've inserted an element to the head of the singly linked list.
<img className="image2" src={step3} alt="step3"/>
</div>

<div className="subTitleFormat">
Inserting a node at the tail of a singly linked list
</div>

<div className="learn-body">
Now, say that we choose to make this an Orwellian dystopia and say 'actually, since we need a new city to house the additional people our country has, why don't we add a city to the very end of our city resource train, and produce the same amount of resources we've always been producing. Now, bedrock, the previous tail node
of our city train that was already struggling to forage resources that Atlantis was giving them, will be handing its resources to the last pitstop: Gotham city. Here's how you'd add this new tail to the existing singly-linked list:
<div className="learn-body-bold">Step 1:</div>
<p></p>
Create a new node right after the old tail node(the node whose first block is pointing to object Bedrock and whose second block is pointing to null). The new node you just made is currently not a part of the city chain. Assign the first block of your new node to point to object 'Gotham city'. Now, assign the second block of your new node to point to NULL, because this new node you just created now points to the city that doesn't pass its resources down anymore. 
<img className="image2" src={step1a} alt="step1a"/>
<div className="learn-body-bold">Step 2:</div>
<p></p>
Now, look at the old tail node: the node whose first block points to Bedrock. Looking at its second block, which currently points to NULL, change it so that this second block now points to the first block of your newly created node that points to Gotham city. 
<img className="image2" src={step2a} alt="step2a"/>
<div className="learn-body-bold">Step 3:</div>
<p></p>
Finally, update the list tail so that it no longer points to the node that points to Bedrock: update the list tail to point to the node that has Gotham city instead. Make sure you do this last, after you've successfully connected the node that points to Gotham city after the node that points to Bedrock.
<img className="image2" src={step3a} alt="step3a"/>
</div>

<div className="subTitleFormat">
Removing a node from the head of a singly linked list
</div>

<div className="learn-body">
Ok, now say we see that the people who live in this city chain are discontent with conditions and want to overthrow the head node that points to the city of Alren. In other words, how do we remove a node (or element) from the head of a singly linked list?
<img className="image2" src={step3} alt="step3"/>
</div>
<div className="learn-body">
The process of doing this is easier than the previous operations we discussed. Remember how we had to change where the list head officially was in order to successfully add the head node? Well now, you just have to move that list head to point to the node that the second block of the previously defined head node pointed to: the node that points to Arlen. 
<img className="image2" src={step2} alt="step2"/>
</div>
<p></p>
<div className="learn-body">
Once you define a new place for the list head, the original head node is linked out, or in other words, officially removed from the linked list! 
<img className="image2" src={step3b} alt="step3b"/>
</div>

<div className="learn-body">
What next?
<p></p>
<em>We'll now be putting what we learned about singly linked lists <u><Link to='/singleimplement'>into code</Link></u>. </em>
<div className="learn-body-end">
</div>
</div>

    </div>
    </div>
    <p></p>
    <Footer2/>
    </div>
    
    )
}

export default SingleList;