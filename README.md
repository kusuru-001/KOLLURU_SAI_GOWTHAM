# TANDEMLOOP Solutions

This repository contains JavaScript solutions to programming challenges from Tandemloop. Each problem demonstrates different programming concepts and problem-solving techniques.

## 📋 Repository Overview

This repository contains 4 JavaScript programming solutions:
- **Problem-1.js**: Calculator with basic arithmetic operations
- **Problem-2.js**: Generates odd number series
- **Problem-3.js**: Generates odd number series with even input handling
- **Problem-4.js**: Counts divisors for an array of numbers

## 🛠️ Prerequisites

The solutions are implemented using JavaScript. To run these programs, you need:

- **Node.js** installed on your machine (recommended: v12 or higher)
- Alternatively, you can copy-paste the program functions into Chrome DevTools console or any browser console

### Installing Node.js

Download and install Node.js from [nodejs.org](https://nodejs.org/)

## 🚀 Running Programs

Open command prompt/terminal and run:

```bash
node [file_name].js

# Examples:
node Problem-1.js
node Problem-2.js
node Problem-3.js
node Problem-4.js
```

---

## 📚 Problem Descriptions & Solutions

### Problem 1: Calculator Function

**File**: `Problem-1.js`

**Description**: Implements a basic calculator that performs arithmetic operations (Addition, Multiplication, Division) on two numbers.

**Function Signature**:
```javascript
calculator(input1, input2, operation)
```

**Parameters**:
- `input1`: First number
- `input2`: Second number
- `operation`: String specifying the operation ('Addition', 'Multiplication', 'Division')

**Example Usage**:
```javascript
calculator(2, 3, 'Division')     // Output: 0.6666666666666666
calculator(5, 4, 'Addition')     // Output: 9
calculator(3, 7, 'Multiplication') // Output: 21
```

**Current Test Case**: `calculator(2, 3, 'Division')` → Returns `0.666...`

---

### Problem 2: Odd Number Series Generator

**File**: `Problem-2.js`

**Description**: Generates a series of the first N odd numbers starting from 1.

**Function Signature**:
```javascript
generateSeries(input)
```

**Parameters**:
- `input`: Number of odd numbers to generate

**Algorithm**:
1. Start with series = [1]
2. Increment by 2 each iteration (1, 3, 5, 7, ...)
3. Continue until series length equals input
4. Return comma-separated string

**Example Usage**:
```javascript
generateSeries(10)  // Output: "1,3,5,7,9,11,13,15,17,19"
generateSeries(5)   // Output: "1,3,5,7,9"
generateSeries(1)   // Output: "1"
```

**Current Test Case**: `generateSeries(10)` → Returns `"1,3,5,7,9,11,13,15,17,19"`

**Time Complexity**: O(n) where n is the input
**Space Complexity**: O(n) for storing the series

---

### Problem 3: Odd Number Series with Even Input Handling

**File**: `Problem-3.js`

**Description**: Similar to Problem 2, but if the input is even, it adjusts to the nearest odd number (input - 1) before generating the series.

**Function Signature**:
```javascript
generateSeries(input)
```

**Parameters**:
- `input`: Number of odd numbers to generate (adjusted if even)

**Special Feature**: 
- If input is even, automatically adjusts to `input - 1`
- Example: input=6 becomes 5, so generates 5 odd numbers

**Example Usage**:
```javascript
generateSeries(6)   // Output: "1,3,5,7,9" (6 is even, adjusted to 5)
generateSeries(5)   // Output: "1,3,5,7,9" (5 is odd, no adjustment)
generateSeries(10)  // Output: "1,3,5,7,9,11,13,15,17" (10→9)
```

**Current Test Case**: `generateSeries(6)` → Returns `"1,3,5,7,9"`

**Time Complexity**: O(n) where n is the input
**Space Complexity**: O(n) for storing the series

---

### Problem 4: Divisor Counter

**File**: `Problem-4.js`

**Description**: Counts how many numbers in an input array are divisible by each divisor from 1 to 9.

**Function Signature**:
```javascript
countDivisors(input)
```

**Parameters**:
- `input`: Array of numbers to check for divisibility

**Returns**: Object with divisors as keys and count as values

**Algorithm**:
1. Check each number in input array
2. Test divisibility by 1, 2, 3, 4, 5, 6, 7, 8, 9
3. Count occurrences for each divisor
4. Return as object with divisor-count pairs

**Example Usage**:
```javascript
countDivisors([1,2,8,9,12,46,76,82,15,20,30])
// Output: { '1': 11, '2': 8, '3': 4, '4': 4, '5': 3, '6': 2, '8': 1, '9': 1 }

// Explanation:
// - All 11 numbers are divisible by 1
// - 8 numbers are divisible by 2 (2,8,12,46,76,82,20,30)
// - 4 numbers are divisible by 3 (9,12,15,30)
// - 4 numbers are divisible by 4 (8,12,76,20) [Note: 76÷4=19]
// - 3 numbers are divisible by 5 (15,20,30)
// - 2 numbers are divisible by 6 (12,30)
// - 0 numbers divisible by 7 (not shown in output)
// - 1 number is divisible by 8 (8)
// - 1 number is divisible by 9 (9)
```

**Current Test Case**: `countDivisors([1,2,8,9,12,46,76,82,15,20,30])`

**Time Complexity**: O(n × m) where n is array length and m is number of divisors (9)
**Space Complexity**: O(m) for storing the result map

---

## 🧪 Testing

All solutions have been tested and produce correct outputs. You can verify by running each file:

```bash
# Test all solutions
node Problem-1.js  # Expected: 0.6666666666666666
node Problem-2.js  # Expected: 1,3,5,7,9,11,13,15,17,19
node Problem-3.js  # Expected: 1,3,5,7,9
node Problem-4.js  # Expected: { '1': 11, '2': 8, '3': 4, '4': 4, '5': 3, '6': 2, '8': 1, '9': 1 }
```

## 📖 Learning Objectives

These problems demonstrate:
- **Problem 1**: Conditional logic and function parameters
- **Problem 2**: Loop iteration and array manipulation
- **Problem 3**: Input validation and edge case handling
- **Problem 4**: Nested loops, Map data structure, and counting algorithms

## 👤 Author

**Kolluru Sai Gowtham** (kusuru-001)

## 📝 License

This project is part of Tandemloop programming challenges.
