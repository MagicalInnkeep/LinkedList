#!/usr/bin/env node

/*

    LinkedList class / factory, which will represent the full list.
*/

import {Node} from './Node'

class LinkedList {
    constructor(){
        this.headNode=null;
        this.tailNode=null;
        this.length=0;
    }

    /*
    append(value) adds a new node containing value to the end of the list
    */
    append(value){

    }
    /*
    prepend(value) adds a new node containing value to the start of the list
    */
    prepend(value){

    }
    /*
    size returns the total number of nodes in the list
    */
    size(){
        return this.length;
    }
    /*
    head returns the first node in the list
    */
    head(){
        return this.headNode;
    }
    /*
    tail returns the last node in the list
    */
    tail(){
        return this.tailNode
    }
    /*   
    at(index) returns the node at the given index
    */
    at(index){

    }
    /*
    pop removes the last element from the list
    */
    pop(){

    }
    /*
    contains(value) returns true if the passed in value is in the list and otherwise returns false.
    */
    contains(value){

    }
    /*
    find(value) returns the index of the node containing value, or null if not found.
    */
    find(value){

    }
    /*
    toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    */
    toString(){

    }
    /*
    insertAt(value, index) that inserts a new node with the provided value at the given index.
    */
    insertAt(value,index){

    }
    /*
    removeAt(index) that removes the node at the given index.
    */
    removeAt(index){
        
    }

}