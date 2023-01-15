using System;
using System.Collections.Generic;
using ExcelDna.Integration;
using ExcelMinder.Shared;
using Microsoft.Office.Interop.Excel;
using Range = Microsoft.Office.Interop.Excel.Range;

namespace ExcelMinder.Excel.Net6;

static internal class ExcelHelpers
{
    public static List<CellProperties> GetRangePropertiesList(this Range range)
    {
        if (range == null) return new List<CellProperties>();

        int rows = range.Rows.Count;
        int cols = range.Columns.Count;

        var result = new List<CellProperties>();

        for (int i = 1; i <= rows; i++)
        {
            for (int j = 1; j <= cols; j++)
            {
                var currentCell = range.Cells[i, j];
                var cellProperties = new CellProperties
                {
                    BackgroundColor = currentCell.Interior.Color,
                    FontStyle = currentCell.Font.Bold,
                    TextColor = currentCell.Font.Color,
                    CellWeight = currentCell.ColumnWidth,
                    CellHeight = currentCell.RowHeight,
                    BorderColor = currentCell.Borders.Color,
                    BorderThickness = currentCell.Borders.Weight
                };
                if (currentCell.Font.Name != null) cellProperties.Font = currentCell.Font.Name;
                if (currentCell.Value != null) cellProperties.CellValue = currentCell.Value.ToString();
                if (currentCell.Borders?.LineStyle != null) cellProperties.BorderStyle = currentCell.Borders.LineStyle.ToString();
                
                result.Add(cellProperties);
            }
        }

        return result;
    }
    
    public static Range ToRange(this ExcelReference reference)
    {
        var xlApp = ExcelDnaUtil.Application as Application;
        var item = XlCall.Excel(XlCall.xlSheetNm, reference) as string;
        int index = item.LastIndexOf(']');
        item= item.Substring(index+1);
        var ws = xlApp.Sheets[item] as Worksheet;
        var target = xlApp.Range[
            ws.Cells[reference.RowFirst+1, reference.ColumnFirst+1],
            ws.Cells[reference.RowLast+1, reference.ColumnLast+1] ] as Range;
        
        return target;
    }

    public static Application Application { get; } = (Application)ExcelDnaUtil.Application;
    
    public static Workbook ActiveWorkbook => Application.ActiveWorkbook;
    
    public static Worksheet ActiveSheet => Application.ActiveSheet;
}