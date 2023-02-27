import React, { useState } from 'react';

import ListReportCell from './ListReportCell';
// import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { CellProperties, ExcelReport, ListExcelReportResponse } from "../generated/stock_simulator"

type ListReportsProps = {
  reports: ExcelReport[];
}

export function toChunks<T>(arr: T[], size: number): T[][] {
  // const chunks = Array.from({length: Math.ceil(arr.length / size)}, (_: any, i: number) =>
  //   arr.slice(i * size, i * size + size)
  // );
  // console.log("chunks: ", chunks)
  // return chunks;
  console.log("size: ", size)
  const chunks = [];
  let chunk = [];
  for (let i = 0; i < arr.length; i ++) {
    chunk.push(arr[i]);
    if (chunk.length === size) {
      chunks.push(chunk);
      chunk = [];
    }
  }
  return chunks;
}

const ListReports = ({ reports }: ListReportsProps) => {
    const [selectedReport, setSelectedReport] = useState<ExcelReport | undefined>(undefined);

  const toRow = (cellProperties: CellProperties[]) => cellProperties
    .map((properties, i) => 
    <ListReportCell key={properties.row * 10000 + i} properties={properties} />
  )
  
  return (
    <>
      <div>
        {reports.map((report, i) => (
          <div
            key={report.reportId}
            onClick={() => {
              console.log("report: ", report)
              setSelectedReport(report)
            }}
            // action
            // active={selectedReport === report}
          >
            {report.reportId}
          </div>
        ))}
      </div>
      {selectedReport !== undefined && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {
            // <div>
            //   { toRow(selectedReport.cellProperties) }
            // </div>
            toChunks(selectedReport.cellProperties, selectedReport.columnCount).map((row) => <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              { toRow(row) }
            </div>)
          }
        </div>
      )}
    </>
  );  
  
    // return (
    //     <>
    //         <ListGroup>
    //             {reports.reports.map((report, i) => (
    //                 <ListGroupItem
    //                     key={report.report_id}
    //                     onClick={() => setSelectedReport(report)}
    //                     action
    //                     active={selectedReport === report}
    //                 >
    //                     {report.report_id}
    //                 </ListGroupItem>
    //             ))}
    //         </ListGroup>
    //         {selectedReport !== undefined && (
    //             <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    //                 {selectedReport.cellProperties.map((properties, i) => (
    //                     <ListReportCell key={properties.row * 10000 + i} properties={properties} />
    //                   // <h2>BBB</h2>
    //                 ))}
    //             </div>
    //         )}
    //     </>
    // );
};

export default ListReports;
