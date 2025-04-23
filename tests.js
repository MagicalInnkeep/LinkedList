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