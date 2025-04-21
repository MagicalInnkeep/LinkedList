#!/usr/bin/env node

/*
 Node class / factory, containing a value property and a nextNode property, set both as null by default.
*/

class Node {
    constructor(value, nextNode=null){
        this.value=value;
        this.nextNode=nextNode;
    }

    getValue(){
        return this.value;
    }

    setValue(value){
        this.value=value;
    }

    getNextNode(){
        return this.nextNode;
    }

    setNextNode(nextNode){
        this.nextNode=nextNode
    }
}