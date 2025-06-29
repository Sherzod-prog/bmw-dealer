import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// forEach month in the year function
function forEachMonthInYear(leasingYear: number) {
  const now = new Date();
  const monthsArray = [];
  for (let i = 0; i < leasingYear; i++) {
    const date = new Date(now.getFullYear(), now.getMonth() + i, 1);
    monthsArray.push(
      date.toLocaleDateString("en-US", { year: "numeric", month: "long" })
    );
  }
  return monthsArray;
}

function leasingFormat(leasing: number, leasingPrice: number) {
  let leasingm = leasingPrice / leasing; // Assuming a 5-year lease with 60 months
  return leasingm.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

function LeasingTable({
  leasing,
  leasingPrice,
}: {
  leasing: number;
  leasingPrice: number;
}) {
  return (
    <Table>
      <TableCaption>A list of your leasing table.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {forEachMonthInYear(leasing).map((month, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell>{month}</TableCell>
            <TableCell className="text-right">
              {leasingFormat(leasing, leasingPrice)}
            </TableCell>
          </TableRow>
        ))}
        <TableRow>
          <TableCell className="font-medium"></TableCell>
          <TableCell>Total</TableCell>
          <TableCell className="text-right">
            {leasingPrice.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default LeasingTable;
