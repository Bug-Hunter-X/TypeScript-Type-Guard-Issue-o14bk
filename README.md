# TypeScript Type Guard Issue

This repository demonstrates a subtle issue with TypeScript type guards when dealing with arrays containing multiple data types. The provided type guard does not correctly handle all types in the array and only checks the first element's type. This leads to unexpected runtime behavior or compiler errors.

## Bug Description

The `printAllWithTypeGuard` function intends to iterate through an array of mixed types and print only string and numbers. However, due to how the type guard is implemented, it only evaluates the type of the first element. If the first element is not a string or number, the type guard fails, and the subsequent elements won't be checked.

## Solution

The solution to the problem involves enhancing the type guard to handle multiple types within the array more effectively and accurately. The improved type guard can be implemented by using type narrowing techniques for effective and precise type checking of the elements.