#!/usr/bin/env node

/*

    LinkedList class / factory, which will represent the full list.
*/

import {Node} from './Node.js'

export class LinkedList {
    constructor(){
        this.headNode=null;
        this.tailNode=null;
        this.length=0;
    }

    /*
    append(value) adds a new node containing value to the end of the list
    */
    append(value){
        const newNode = new Node(value);
        this.length++;
        if(this.headNode=== null){
            this.headNode=newNode;
        }
        if(this.tailNode=== null){}
        else{
            this.tailNode.setNextNode(newNode);
        }
        this.tailNode=newNode;
    }
    /*
    prepend(value) adds a new node containing value to the start of the list
    */
    prepend(value){
        let newNode;
        this.length++;
        if(this.headNode===null){ 
            newNode= new Node(value);
        }
        else{
           newNode = new Node(value, this.headNode);
        }
        this.headNode = newNode;
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
        if (index>=this.length || !Number.isInteger(index)){
            return null;
        }
        else{
            let currNode = this.headNode;
            for(let i=0;i<index;i++){
                currNode = currNode.getNextNode();
            }
            return currNode;
        }
    }
    /*
    pop removes the last element from the list
    */
    pop(){
        if(this.size()==0){
            return null;
        }
        else{
            this.length--;
            let popNode=this.tailNode;
            this.tailNode = this.at(this.size()-1);
            this.tailNode.setNextNode();

            return popNode;
        }
    }
    /*
    contains(value) returns true if the passed in value is in the list and otherwise returns false.
    */
    contains(value){
        let currNode = this.headNode;

        while(currNode.getValue()!==value &&  currNode.getNextNode()!==null){
            currNode = currNode.getNextNode();
        }
        if(currNode.getValue() ===value){
            return true;
        }
        else{
            return false;
        }
    }
    /*
    find(value) returns the index of the node containing value, or null if not found.
    */
    find(value){
        let currNode = this.headNode;
        let index = 0;

        while(currNode.getValue()!==value &&  currNode.getNextNode()!==null){
            currNode = currNode.getNextNode();
            index++;
        }
        if(currNode.getValue() ===value){
            return index;
        }
        else{
            return null;
        }
    }
    /*
    toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    */
    toString(){
        let returnString=null;
        let currNode = this.headNode;

        for(let i=0; i<this.size();i++){
            let currValue = currNode.getValue();
            if(returnString!==null && currValue!==null){
                returnString = returnString + '( '+currValue+' )  -> ';
            }
            else{
                returnString = '( '+currValue+' ) -> ';
            }
            currNode = currNode.getNextNode();
        }   
        if(returnString!==null){returnString = returnString + 'null'};
        return returnString;
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