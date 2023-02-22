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
    public static (int, int, List<CellProperties>) GetRangePropertiesList(this Range range)
    {
        if (range == null) return (0, 0, new List<CellProperties>());

        LineStyle ToLineStyle(object style) => style switch
        {
            DBNull => LineStyle.None,
            (int) XlLineStyle.xlContinuous => LineStyle.Solid,
            (int) XlLineStyle.xlDash => LineStyle.Dashed,
            (int) XlLineStyle.xlDashDot => LineStyle.DashDotted,
            (int) XlLineStyle.xlDashDotDot => LineStyle.DashDotDotted,
            (int) XlLineStyle.xlDot => LineStyle.Dotted,
            (int) XlLineStyle.xlDouble => LineStyle.Double,
            (int) XlLineStyle.xlLineStyleNone => LineStyle.None,
            (int) XlLineStyle.xlSlantDashDot => LineStyle.SlantDashDotted,
            _ => LineStyle.None
        };

        double ToThickness(object width, object style) => (width, ToLineStyle(style)) switch
        {
            (_, LineStyle.None) => 0,
            (DBNull, _) => 0,
            (int w and >= 0, _) => w,
            (double w and >= 0, _) => w,
            var (_, l) when l != LineStyle.None => 1,
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
                    Row = i,
                    Column = j,
                    BackgroundColor = currentCell.Interior.Color ?? 0,
                    TextColor = currentCell.Font.Color ?? 0,
                    ColumnWeight = currentCell.ColumnWidth ?? 0,
                    RowHeight = currentCell.RowHeight ?? 0,
                    Border = new CellProperties.Types.Border
                    {
                        All = new BorderProperties
                        {
                            Color = borders.Color ?? 0,
                            Thickness = ToThickness(borders.Weight, borders.LineStyle),
                            LineStyle = ToLineStyle(borders.LineStyle)
                        },
                        Top = new BorderProperties
                        {
                            Color = borderTop.Color ?? 0,
                            Thickness = ToThickness(borderTop.Weight, borderTop.LineStyle),
                            LineStyle = ToLineStyle(borderTop.LineStyle)
                        },
                        Bottom = new BorderProperties
                        {
                            Color = borderBottom.Color ?? 0,
                            Thickness = ToThickness(borderBottom.Weight, borderBottom.LineStyle),
                            LineStyle = ToLineStyle(borderBottom.LineStyle)
                        },
                        Left = new BorderProperties
                        {
                            Color = borderLeft.Color ?? 0,
                            Thickness = ToThickness(borderLeft.Weight, borderLeft.LineStyle),
                            LineStyle = ToLineStyle(borderLeft.LineStyle)
                        },
                        Right = new BorderProperties
                        {
                            Color = borderRight.Color ?? 0,
                            Thickness = ToThickness(borderRight.Weight, borderRight.LineStyle),
                            LineStyle = ToLineStyle(borderRight.LineStyle)
                        }
                    }
                };
                
                if (currentCell.Font?.Name != null)
                {
                    cellProperties.Font = currentCell.Font.Name;
                    cellProperties.FontSize = currentCell.Font.Size;
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

        return (rows, cols, result);
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