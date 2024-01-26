# Assignment: Control Flow Diagram

## Problems
### 1. Write code for the above scenario with output as if whether a student is eligible for the scholarship or not (1, 0, "Dean for consideration")
> Please check <a href="../lib/decision-for-scholarship.js">here</a>

### 2. Draw a control flow diagram
<img src="../out/documents/cfg-decision-for-scholarship/Control Flow Diagram for Decision For Scholarship.png">

### 3. Write test cases to cover "Branch coverage" and "Statement coverage"
> Please check <a href="../lib/decision-for-scholarship.test.js">here</a>

### 4. Include a table showing Branch & Statement Coverages (as discussed in class)
|No|Paths|Decisions|Process Links|
|--|----------|--------------------|------------------------------------------|
|  |          |[3][4][6][8][10][12]|[a][b][c][d][e][f][g][h][i][j][k][l][m][n]|
|1 |abd       |[F][ ][ ][ ][ ][ ]  |[\*][\*][-][\*][-][-][-][-][-][-][-][-][-][-]|
|2 |abce      |[T][T][ ][ ][ ][ ]  |[\*][\*][\*][-][\*][-][-][-][-][-][-][-][-][-]|
|3 |abcfg     |[T][F][T][ ][ ][ ]  |[\*][\*][\*][-][-][\*][\*][-][-][-][-][-][-][-]|
|4 |abcfhi    |[T][F][F][T][ ][ ]  |[\*][\*][\*][-][-][\*][-][\*][\*][-][-][-][-][-]|
|5 |abcfhjk   |[T][F][F][F][T][ ]  |[\*][\*][\*][-][-][\*][-][\*][-][\*][\*][-][-][-]|
|6 |abcfhjlm   |[T][F][F][F][F][T]  |[\*][\*][\*][-][-][\*][-][\*][-][\*][-][\*][\*][-]|
|7 |abcfhjln   |[T][F][F][F][F][F]  |[\*][\*][\*][-][-][\*][-][\*][-][\*][-][\*][-][\*]|
