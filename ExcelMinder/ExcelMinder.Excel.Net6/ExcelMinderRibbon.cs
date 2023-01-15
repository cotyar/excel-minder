using System;
using System.Collections.Generic;
using ExcelMinder.Shared;

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

    public void OnButtonPressed(IRibbonControl control)
    {
        MessageBox.Show("Hello from control " + control.Id);
    }
    
    // public void OnSendReport(IRibbonControl control)
    // {
    //     var application = (Microsoft.Office.Interop.Excel.Application)ExcelDnaUtil.Application;
    //     var workbook = application.ActiveWorkbook;
    //     var worksheet = workbook.ActiveSheet;
    //     
    //     var selectedRange = worksheet.Application.Selection;
    //
    //     var startCell = selectedRange.Cells[1, 1];
    //     var endCell = selectedRange.Cells[selectedRange.Rows.Count, selectedRange.Columns.Count];
    //     var range = worksheet.Range[startCell, endCell];
    //
    //     var data = range.Value;
    //     MessageBox.Show("Data copied to dynamic array starting from A1");
    // }    
    
    public void OnSendReport(IRibbonControl control)
   {
        // // Get a reference to the range
        // Range cellRange;
        // try
        // {
        //     cellRange = worksheet.Range[range];
        // }
        // catch (Exception e)
        // {
        //     return new List<CellProperties>();
        // }
        //
        var selectedRange = ExcelHelpers.Application.Selection;
        var worksheet = ExcelHelpers.ActiveSheet;

        var startCell = selectedRange.Cells[1, 1];
        var endCell = selectedRange.Cells[selectedRange.Rows.Count, selectedRange.Columns.Count];
        Range range = worksheet.Range[startCell, endCell];

        // var data = range.Value;
        // worksheet.Range["A1"].Value = range.Value;
        // MessageBox.Show("Data copied to dynamic array starting from A1");
        
        // worksheet.Range["A1"].Resize[selectedRange.Rows.Count, selectedRange.Columns.Count].Value = range.Value;
        var csv = range.GetRangePropertiesList().ToCsv().To2DArray();
        if ((csv?.GetLength(0) ?? 0) == 0 || (csv?.GetLength(1) ?? 0) == 0)
        {
            worksheet.Range["A1"].Value = null;
        }
        else
        {
            worksheet.Range["A1"].Resize[csv.GetLength(0), csv.GetLength(1)].Value = csv;
        }
    }
}
