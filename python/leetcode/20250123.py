'''
https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/description/

Maximum Number of Words Found in Sentences

A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

You are given an array of strings sentences, where each sentences[i] represents a single sentence.

Return the maximum number of words that appear in a single sentence.


Example 1:

Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
Output: 6
Explanation: 
- The first sentence, "alice and bob love leetcode", has 5 words in total.
- The second sentence, "i think so too", has 4 words in total.
- The third sentence, "this is great thanks very much", has 6 words in total.
Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.


Example 2:

Input: sentences = ["please wait", "continue to fight", "continue to win"]
Output: 3
Explanation: It is possible that multiple sentences contain the same number of words. 
In this example, the second and third sentences (underlined) have the same number of words.
 

Constraints:

1 <= sentences.length <= 100
1 <= sentences[i].length <= 100
sentences[i] consists only of lowercase English letters and ' ' only.
sentences[i] does not have leading or trailing spaces.
All the words in sentences[i] are separated by a single space.
'''

from typing import List

class Solution:
  def mostWordsFound(self, sentences: List[str]) -> int:
    start = 0
    end = len(sentences)
    max_word_count = 0

    while start < end:
      current_word_count = len(sentences[start].split())
      max_word_count = max(max_word_count, current_word_count)
      start +=1
    return max_word_count

solution = Solution()

print(solution.mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"])) # -> 6
print(solution.mostWordsFound(["please wait", "continue to fight", "continue to win"])) # -> 3

'''
Pseudocode:
- Initialize start at zero
- Declate end as the length of the sentences list
- Initialize max_word_count at zero
- While start is less than end:
  - Declare current_word_count as the length of sentences at index start, split into a list of words
  - Reassign max_word_count as the max between max_word_count and current_word_count
  - Increment start by one
- Return max_word_count
'''