''''
https://leetcode.com/problems/design-hashmap/description/

Design HashMap

Design a HashMap without using any built-in hash table libraries.

Implement the MyHashMap class:

MyHashMap() initializes the object with an empty map.
void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.

Example 1:

Input
["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
[[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
Output
[null, null, null, 1, -1, null, 1, null, -1]

Explanation
MyHashMap myHashMap = new MyHashMap();
myHashMap.put(1, 1); // The map is now [[1,1]]
myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
myHashMap.get(1);    // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3);    // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
myHashMap.get(2);    // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
myHashMap.get(2);    // return -1 (i.e., not found), The map is now [[1,1]]
'''

class MyHashMap:
  def __init__(self): # Constructor method
    self.map = {}

  def put(self, key: int, value: int) -> None:
    self.map[key] = value

  def get(self, key: int) -> int:
    if key in self.map:
      return self.map[key]
    return -1

  def remove(self, key: int) -> None:
    if key in self.map:
      del self.map[key]

obj = MyHashMap()

obj.put(1,1)
print(obj.map)

obj.put(2,2)
print(obj.map)

print(obj.get(1))

print(obj.get(3))

obj.put(2,1)
print(obj.map)

print(obj.get(2))

obj.remove(2)
print(obj.map)

print(obj.get(2))

'''
Pseudocode:
- Create MyHashMap class
- Initialize self.map property as an empty dictionary
- Define put method with parameters of self, key and value
  - This adds a new key value pair to self.map dict
  - This will also update the value of a key/value pair, if key exists
- Define get method with parameters of self and key
  - If the key passed in as an argument is found in self.map dict
    - Return the value of self.map at the provided key
  - Return -1 as default (key not found)
- Define remove method with parameters of self and key
  - If the key passed in as an argument is found in self.map dict
    - Delete the key (and associated value) in the self.map dict
'''