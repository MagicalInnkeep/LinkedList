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
console.log(list.contains(999)); //
console.log(list.contains("Ships")) //false