
import React from "react";
import { StyledCell } from "./StyledCell";
import { TETROMINOS } from "../../utils/tetrominos";

// memo Makes Sure We Only Re-Render The Changed Cells
const Cell = ({ type }) => (
    <StyledCell type={type} color={TETROMINOS[type].color}>
        {console.log("rerender cell")}
    </StyledCell>
);

export default React.memo(Cell);
