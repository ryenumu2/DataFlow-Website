import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Navigation from '../Navigation';
import './learn.css'
import Footer2 from '../Footer2';

import double1 from './images/doublyList/double1.png'


function DoubleList(){
    return(
        <div id="page-container">
        <Navigation />
        

    <div className="learn-container">
    <div className="learn-containerChild">
    <div className="TitleFormat">
    Doubly Linked Lists
    </div>
    <div className="learn-body">
    <em>This article is a continuation of the concepts we discussed from singly-linked lists. Read the overview on <u><Link to='/singlylist'>singly linked lists</Link></u> to get a better idea of the concepts we cover in this doubly-linked lists.</em>
    </div>
    <div className="learn-body">
    A doubly-linked list is a linked-list whose body nodes (nodes that are not the head node or the tail node) have arrows pointing to the next node (like singly-linked lists) and arrows pointing to the previous node (a feature exclusive to doubly-linked lists):
    <img className="image2" src={double1} alt="double1"/>
    </div>
    <div className="learn-body">
    Notice that a node in the doubly-linked list has three blocks instead of two. 
<p></p>
The first block of a body node in a doubly-linked list has a 'previous' pointer that points to the third block of the previous node. 
The second (or middle) block of a body node points to an object. 
The third block of a body node has a 'next' pointer that points to the first block of the next node. 
<p></p>
We call the first node of a doubly-linked list the 'header node', and the last node of a doubly-linked list the 'trailer node'. These nodes are dummy nodes, because they don't hold any references to objects, and are there to ensure the doubly-linked list always has a first and last node, as we begin removing/adding nodes to this doubly-linked list. 
<p></p>
Note that the header node's first block and second block don't have pointers, while the trailer node's second and third block don't have pointers. This is an important distinction we should make between them and the body nodes. 
<p></p>
<div className="learn-body-end">
</div>

    </div>
    </div>
    </div>
    <Footer2/>
    </div>);
}

export default DoubleList;