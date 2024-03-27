### DJS01: Mars Climate Orbiter Challenge

The Mars Climate Orbiter incident in 1999 is a stark reminder of the importance of precision in space missions, highlighting how a simple unit mismatch led to the loss of the spacecraft. This challenge seeks to simulate similar challenges in a spacecraft navigation system, emphasizing the need for accuracy in calculations.

#### Challenge Overview

This challenge invites students to debug, refactor, and enhance JavaScript functions designed for determining the trajectory of a spacecraft. The initial functions are flawed and may result in incorrect calculations.

#### Problem Areas

1. **Unit Mismatch**: The original functions do not adequately convert units, causing inaccuracies.
2. **Parameter Misalignment**: The way parameters are passed does not highlight the risk of unit mismatch errors, leading to potential confusion.

### Given Parameters

- **Initial Velocity (`vel`)**: 10,000 km/h
- **Acceleration (`acc`)**: 3 m/s²
- **Time (`time`)**: 3,600 seconds (1 hour)
- **Initial Distance (`d`)**: 0 km
- **Initial Fuel (`fuel`)**: 5,000 kg
- **Burn Rate (`fbr`)**: 0.5 kg/s

### Expected Results

- **Corrected New Velocity**: Approximately 97,014.57 km/h
- **Corrected New Distance**: Approximately 96,974.568 km
- **Corrected Remaining Fuel**: 3,200 kg

#### Your Task

1. **Understand and Rectify Errors**: Analyze how unit mismatches and parameter misalignments contribute to incorrect calculations.
2. **Refactor and Correct**: Amend the functions to handle parameters as objects for clarity and perform internal unit conversions to ensure accuracy.

#### Solution Approach

Refactor the provided functions to use object destructuring for parameters, implement proper unit conversions, and ensure all calculations are performed accurately. This approach resolves unit mismatches and clarifies parameter usage, directly addressing the identified problem areas.