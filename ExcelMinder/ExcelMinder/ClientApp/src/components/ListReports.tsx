import React, { useState } from 'react';

import ListReportCell from './ListReportCell';
// import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { ExcelReport, ListExcelReportResponse } from "../generated/stock_simulator"

type ListReportsProps = {
  reports: ExcelReport[];
}
const ListReports = ({ reports }: ListReportsProps) => {
    const [selectedReport, setSelectedReport] = useState<ExcelReport | undefined>(undefined);

    console.log("reports: ", reports)
    console.log("selectedReport: ", selectedReport)

  return (
    <>
      <div>
        {reports.map((report, i) => (
          <div
            key={report.reportId}
            onClick={() => setSelectedReport(report)}
            // action
            // active={selectedReport === report}
          >
            {report.reportId}
          </div>
        ))}
      </div>
      {selectedReport !== undefined && (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {selectedReport.cellProperties.map((properties, i) => (
            <ListReportCell key={properties.row * 10000 + i} properties={properties} />
            // <h2>BBB</h2>
          ))}
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
