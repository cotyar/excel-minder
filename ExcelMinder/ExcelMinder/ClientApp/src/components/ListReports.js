import React, { useState } from 'react';

import ListReportCell from './ListReportCell';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import {ListExcelReportResponse} from "./generated/stock_simulator_pb";

const ListReports = ({ reports }) => {
    const [selectedReport, setSelectedReport] = useState(undefined);

    console.log("selectedReport: ", selectedReport)
    
    return (
        <>
            <ListGroup>
                {reports.reports.map((report, i) => (
                    <ListGroupItem
                        key={report.report_id + i}
                        onClick={() => setSelectedReport(report)}
                        action
                        active={selectedReport === report}
                    >
                        {report.report_id}
                    </ListGroupItem>
                ))}
            </ListGroup>
            {selectedReport && (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {selectedReport.cellProperties.map((properties, i) => (
                        <ListReportCell key={properties.cell_value + i} properties={properties} />
                      // <h2>BBB</h2>
                    ))}
                </div>
            )}
        </>
    );
};

export default ListReports;
