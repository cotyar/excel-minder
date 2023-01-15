using System;
using System.Collections.Generic;
using ExcelDna.Integration;
using ExcelMinder.Shared;
using Microsoft.Office.Interop.Excel;
using static ExcelMinder.Shared.CellProperties.Types;
using static ExcelMinder.Shared.CellProperties.Types.Border.Types;
using Range = Microsoft.Office.Interop.Excel.Range;

namespace ExcelMinder.Excel.Net6;

static internal class ExcelHelpers
{
    public static List<CellProperties> GetRangePropertiesList(this Range range)
    {
        if (range == null) return new List<CellProperties>();

        LineStyle ToLineStyle(object style) => style switch
        {
            DBNull => LineStyle.None,
            XlLineStyle.xlContinuous => LineStyle.Solid,
            XlLineStyle.xlDash => LineStyle.Dashed,
            XlLineStyle.xlDashDot => LineStyle.DashDotted,
            XlLineStyle.xlDashDotDot => LineStyle.DashDotDotted,
            XlLineStyle.xlDot => LineStyle.Dotted,
            XlLineStyle.xlDouble => LineStyle.Double,
            XlLineStyle.xlLineStyleNone => LineStyle.None,
            XlLineStyle.xlSlantDashDot => LineStyle.SlantDashDotted,
            _ => LineStyle.None
        };

        double ToThickness(object width) => width switch
        {
            DBNull => 0,
            int w and >= 0 => w,
            double w and >= 0 => w,
            _ => 0
        };

        int rows = range.Rows.Count;
        int cols = range.Columns.Count;

        var result = new List<CellProperties>();

        for (int i = 1; i <= rows; i++)
        {
            for (int j = 1; j <= cols; j++)
            {
                var currentCell = range.Cells[i, j];

                var borders = currentCell.Borders;
                var borderTop = borders[XlBordersIndex.xlEdgeTop];
                var borderBottom = borders[XlBordersIndex.xlEdgeBottom];
                var borderLeft = borders[XlBordersIndex.xlEdgeLeft];
                var borderRight = borders[XlBordersIndex.xlEdgeRight];
                var cellProperties = new CellProperties
                {
                    BackgroundColor = currentCell.Interior.Color ?? 0,
                    TextColor = currentCell.Font.Color ?? 0,
                    CellWeight = currentCell.ColumnWidth ?? 0,
                    CellHeight = currentCell.RowHeight ?? 0,
                    Border = new CellProperties.Types.Border
                    {
                        All = new BorderProperties
                        {
                            Color = borders.Color ?? 0,
                            Thickness = ToThickness(borders.Weight),
                            LineStyle = ToLineStyle(borders.LineStyle)
                        },
                        Top = new BorderProperties
                        {
                            Color = borderTop.Color ?? 0,
                            Thickness = ToThickness(borderTop.Weight),
                            LineStyle = ToLineStyle(borderTop.LineStyle)
                        },
                        Bottom = new BorderProperties
                        {
                            Color = borderBottom.Color ?? 0,
                            Thickness = ToThickness(borderBottom.Weight),
                            LineStyle = ToLineStyle(borderBottom.LineStyle)
                        },
                        Left = new BorderProperties
                        {
                            Color = borderLeft.Color ?? 0,
                            Thickness = ToThickness(borderLeft.Weight),
                            LineStyle = ToLineStyle(borderLeft.LineStyle)
                        },
                        Right = new BorderProperties
                        {
                            Color = borderRight.Color ?? 0,
                            Thickness = ToThickness(borderRight.Weight),
                            LineStyle = ToLineStyle(borderRight.LineStyle)
                        }
                    }
                };
                
                if (currentCell.Font?.Name != null)
                {
                    cellProperties.Font = currentCell.Font.Name;
                    cellProperties.FontStyle = new FontStyle
                    {
                        Bold = currentCell.Font.Bold,
                        Italic = currentCell.Font.Italic,
                        Underline = currentCell.Font.Underline
                    };
                }
                
                if (currentCell.Value != null) cellProperties.CellValue = currentCell.Value.ToString();
                
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