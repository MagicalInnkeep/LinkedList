#!/usr/bin/env node

import {LinkedList} from './LinkedList.js';

/**
 * Tests for LinkedList
 */

const list = new LinkedList();

//APPEND TEST
console.log("--Empty list--")
console.log(list.size());
console.log(list.head());
console.log(list.tail());

list.append("dog");

console.log("--Added Dog--")
console.log(list.size());
console.log(list.head());
console.log(list.tail());

list.append("cat");

console.log("--Added Cat--")
console.log(list.size());
console.log(list.head());
console.log(list.tail());

list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.size());
console.log(list.head());
console.log(list.tail());

//PREPEND TEST
list.prepend("shark");
console.log(list.size());
console.log(list.head());
console.log(list.tail());

//AT(index) tests
console.log("list at 1:")
console.log(list.at(1));
console.log("list at 5:")
console.log(list.at(5));
console.log("list at size:")
console.log(list.at(list.size()));
console.log("list at -1:")
console.log(list.at(-1));
console.log("list at string:")
console.log(list.at("string"));
console.log("list at 999:")
console.log(list.at(999));

//pop test
console.log("--pop test")
console.log(list.tail()); 
console.log(list.pop());
console.log(list.tail());
console.log("");

//contains test
console.log("--contains test");
console.log(list.contains("shark")) //true
console.log(list.contains("hamster")) //true
console.log(list.contains(999)); //
console.log(list.contains("Ships")) //false

//find test
console.log("");
console.log("--find test");
console.log(list.find("shark")) //0
console.log(list.find(999)); //null
console.log(list.find("snake")) //5

//toString tests
console.log("");
console.log("--toString test");
console.log(list.toString());
const newList = new LinkedList();
console.log(newList.toString());
newList.append("BestList");
console.log(newList.toString());

//insertAt test
console.log("");
console.log("--insertAt test");
list.insertAt("horse",4);
console.log(list.toString());

//removeAt test
console.log("");
console.log("--removeAt test");
list.removeAt(4);
console.log(list.toString());
