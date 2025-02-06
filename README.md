# Infinite Loop in useEffect Hook within StrictMode (React 19)

This repository demonstrates a common error encountered when using the `useEffect` hook within React 19's StrictMode.  The issue arises from the infinite loop triggered by attempting to update state based on the previous state value without proper conditional checks.

## Bug Description
The provided `bug.js` file contains a `useEffect` hook that increments a state variable (`count`) on every render. Inside StrictMode, this leads to an infinite render loop because the state update triggers a re-render, which again triggers the `useEffect` hook and updates the state, creating a perpetual cycle. 

## Solution
The `bugSolution.js` file offers a corrected version that prevents the infinite loop.  By adding a condition to check for stale closures, we only update the state once.