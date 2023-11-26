import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { TableContainer } from "./Style";


const DynamicTable = ({ columns, data }) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            {columns.map((column) => (
              <Th key={column.accessor}>{column.Header}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              {columns.map((column) => {
                const cellValue = row[column.accessor];
                const Cell = column.Cell;
                return (
                  <Td key={`${rowIndex}-${column.accessor}`}>
                    {Cell ? <Cell value={cellValue} row={row} /> : cellValue}
                  </Td>
                );
              })}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DynamicTable;
