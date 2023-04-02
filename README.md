# Cat and Mouse

You will be given a string (x) featuring a cat 'C', a dog 'D' and a mouse 'm'. The rest of the string will be made up of '.'.
You need to find out if the cat can catch the mouse from it's current position. The cat can jump (j) characters.
Also, the cat cannot jump over the dog.

So:
if j = 5:
..C.....m. returns 'Caught!' <-- not more than j characters between
.....C............m...... returns 'Escaped!' <-- as there are more than j characters between the two, the cat can't jump far enough

if j = 10:
...m.........C...D returns 'Caught!' <--Cat can jump far enough and jump is not over dog
...m....D....C....... returns 'Protected!' <-- Cat can jump far enough, but dog is in the way, protecting the mouse

Finally, if all three animals are not present, return 'boring without all three'

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Backlog

### US-1
As a cat
I want to check if I can catch a mouse when there's no mouse, dog or even cat
So that I will know that I can't catch a mouse

#### UAT-1.1
Given an empty string
When I check if cat can catch a mouse
Then the result is 'boring without all three'

#### UAT-1.2
Given a string without C,m,D
When I check if cat can catch a mouse
Then the result is 'boring without all three'

### US-2
As a cat
I want to check if I can catch a mouse when there's no dog, and mouse is next to me
So that I will know that I can catch a mouse

#### UAT-2.1
Given a string "Cm" and jump count 0
When I check if cat can catch a mouse
Then the result is 'Caught!'

#### UAT-2.2
Given a string "mC" and jump count 1
When I check if cat can catch a mouse
Then the result is 'Caught!'

### US-3
As a cat
I want to check if I can catch a mouse when there's no dog, and mouse is one jump ahead
So that I will know that I can catch a mouse or not

#### UAT-3.1
Given a string "C.m" and jump count 0
When I check if cat can catch a mouse
Then the result is 'Escaped!'

#### UAT-3.2
Given a string "C.m" and jump count 1
When I check if cat can catch a mouse
Then the result is 'Caught!'

#### UAT-3.3
Given a string "m.C" and jump count 1
When I check if cat can catch a mouse
Then the result is 'Caught!'

### US-4
As a cat
I want to check if I can catch a mouse when there's no dog, and mouse is two jumps ahead
So that I will know that I can catch a mouse or not

#### UAT-4.1
Given a string "C..m" and jump count 2
When I check if cat can catch a mouse
Then the result is 'Caught!'

#### UAT-4.2
Given a string "C..m" and jump count 3
When I check if cat can catch a mouse
Then the result is 'Caught!'

#### UAT-4.3
Given a string "C..m" and jump count 1
When I check if cat can catch a mouse
Then the result is 'Escaped!'

#### UAT-4.4
Given a string "m..C" and jump count 0
When I check if cat can catch a mouse
Then the result is 'Escaped!'