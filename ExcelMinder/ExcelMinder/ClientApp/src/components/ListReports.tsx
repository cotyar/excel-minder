import React, { useState } from 'react';

import ListReportCell from './ListReportCell';
// import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { CellProperties, ExcelReport, ListExcelReportResponse } from "../generated/stock_simulator"
import Snapshotting from "./Snapshoting"

type ListReportsProps = {
  reports: ExcelReport[];
}

export function toChunks<T>(arr: T[], size: number): T[][] {
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
      <div className="mt-4">
        {reports.map((report, i) => (
          <div
            key={report.reportId}
            onClick={() => {
              setSelectedReport(report)
            }}
            className={`btn m-1 ${(selectedReport?.reportId === report.reportId ? " btn-outline-info" : "btn-outline-secondary")}`}
            // action
            data-active={selectedReport === report}
          >
            {report.reportId}
          </div>
        ))}
      </div>
      {selectedReport !== undefined && (
        <Snapshotting reportId={selectedReport.reportId}>
          <div
            className="m-1 my-3"
            style={{ display: 'flex', flexDirection: 'column' }}>
            {
              toChunks(selectedReport.cellProperties, selectedReport.columnCount).map((row) => 
                  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                { toRow(row) }
              </div>)
            }
          </div>
        </Snapshotting>
      )}
    </>
  );
};

export default ListReports;
