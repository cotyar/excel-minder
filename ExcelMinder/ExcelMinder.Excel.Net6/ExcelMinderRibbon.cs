using System;
using System.Collections.Generic;
using ExcelMinder.Shared;
using Grpc.Net.Client;

namespace ExcelMinder.Excel.Net6;

using ExcelDna.Integration;
using ExcelDna.Integration.CustomUI;
using Microsoft.Office.Interop.Excel;
using System.Runtime.InteropServices;
using System.Windows.Forms;
using Application = Microsoft.Office.Interop.Excel.Application;

[ComVisible(true)]
public class RibbonController : ExcelRibbon
{
    public override string GetCustomUI(string RibbonID) =>
    @"<customUI xmlns='http://schemas.microsoft.com/office/2009/07/customui'>
        <ribbon>
            <tabs>
                <tab id='StatusTab' label='Excel Minder'>
                    <group id='StatusGroup' label='Connection status'>
                        <button id='StatusBulb' label='Connected' imageMso='HappyFace' onAction='OnButtonPressed'/>
                    </group>
                    <group id='DataSourcesTab' label='Data Sources'/>
                    <group id='ReportsGroup' label='Reporting'>
                        <button id='CreateReportButton' label='Create Report' imageMso='FileNew' onAction='OnSendReport'/>
                    </group>
                </tab>
            </tabs>
        </ribbon>
    </customUI>";
    
    private static readonly GrpcChannel Channel = GrpcChannel.ForAddress("https://localhost:7038");
    private static readonly StockSimulator.StockSimulatorClient Client = new(Channel);

    public void OnButtonPressed(IRibbonControl control)
    {
        MessageBox.Show("Hello from control " + control.Id);
    }

    public void OnSendReport(IRibbonControl control)
    {
        Range selectedRange = ExcelHelpers.Application.Selection;
        var worksheet = ExcelHelpers.ActiveSheet;

        var startCell = selectedRange.Cells[1, 1];
        var endCell = selectedRange.Cells[selectedRange.Rows.Count, selectedRange.Columns.Count];
        Range range = worksheet.Range[startCell, endCell];

        var (rows, cols, rangePropertiesList) = selectedRange.GetRangePropertiesList();
        // var csv = rangePropertiesList.ToCsv().To2DArray();
        // worksheet.Range["A1"].Value = rows;
        // worksheet.Range["B1"].Value = cols;
        // worksheet.Range["A2"].Apply(csv);

        var reportId = $"Report-{DateTimeOffset.Now:O}";
        Client.AddExcelReport(new ExcelReport
        {
            ReportId = reportId, 
            RowCount = rows,
            ColumnCount = cols,
            CellProperties = { rangePropertiesList }
        });
        
        MessageBox.Show($"Report '{reportId}' has been created and sent to the server.");
   }
}
