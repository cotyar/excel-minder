using System;
using System.Collections.Generic;
using ExcelDna.Integration;
using ExcelMinder.Shared;
using Microsoft.Office.Interop.Excel;
using static ExcelMinder.Shared.CellProperties.Types;
using static ExcelMinder.Shared.CellProperties.Types.Alignment.Types;
using static ExcelMinder.Shared.CellProperties.Types.Border.Types;
using Border = Microsoft.Office.Interop.Excel.Border;
using Range = Microsoft.Office.Interop.Excel.Range;

namespace ExcelMinder.Excel.Net6;

internal static class ExcelHelpers
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
        
        HorizontalAlignment ToHorizontalAlignment(object alignment, object value) => alignment switch
        {
            DBNull => HorizontalAlignment.Left,
            (int) XlHAlign.xlHAlignCenter => HorizontalAlignment.Center,
            (int) XlHAlign.xlHAlignCenterAcrossSelection => HorizontalAlignment.Center,
            (int) XlHAlign.xlHAlignDistributed => HorizontalAlignment.Center,
            (int) XlHAlign.xlHAlignFill => HorizontalAlignment.Center,
            (int) XlHAlign.xlHAlignGeneral => value is string ? HorizontalAlignment.Left : HorizontalAlignment.Right,
            (int) XlHAlign.xlHAlignJustify => HorizontalAlignment.Justify,
            (int) XlHAlign.xlHAlignLeft => HorizontalAlignment.Left,
            (int) XlHAlign.xlHAlignRight => HorizontalAlignment.Right,
            _ => HorizontalAlignment.Left
        };
        
        VerticalAlignment ToVerticalAlignment(object alignment) => alignment switch
        {
            DBNull => VerticalAlignment.Top,
            (int) XlVAlign.xlVAlignBottom => VerticalAlignment.Bottom,
            (int) XlVAlign.xlVAlignCenter => VerticalAlignment.Middle,
            (int) XlVAlign.xlVAlignDistributed => VerticalAlignment.Middle,
            (int) XlVAlign.xlVAlignJustify => VerticalAlignment.Middle,
            (int) XlVAlign.xlVAlignTop => VerticalAlignment.Top,
            _ => VerticalAlignment.Top
        };

        double ToThickness(object width, object style) => (width, ToLineStyle(style)) switch
            {
                (_, LineStyle.None) => 0,
                (DBNull, _) => 0,
                (int w, _) => w switch
                {
                    (int) XlBorderWeight.xlHairline => 3,
                    (int) XlBorderWeight.xlMedium => 2,
                    (int) XlBorderWeight.xlThin => 1,
                    (int) XlBorderWeight.xlThick => 4,
                    _ => 0
                },
                (double w, _) => (int) w switch
                {
                    (int) XlBorderWeight.xlHairline => 3,
                    (int) XlBorderWeight.xlMedium => 2,
                    (int) XlBorderWeight.xlThin => 1,
                    (int) XlBorderWeight.xlThick => 4,
                    _ => 0
                },
                var (_, l) when l != LineStyle.None => 0,
                _ => 0
            };

        Color ToColor(object color)
        {
            var c = color switch
            {
                DBNull => 0,
                int cc => cc,
                double cc => (int)cc,
                _ => 0
            };
            var s = $"{c:X}";
            while (s.Length < 6) s = $"{s}0";

            return new Color { Red = Convert.ToByte(s[..2], 16), Green = Convert.ToByte(s[2..4], 16), Blue = Convert.ToByte(s[4..6], 16) };
        }

        int rows = range.Rows.Count;
        int cols = range.Columns.Count;

        var result = new List<CellProperties>();

        for (int i = 1; i <= rows; i++)
        {
            for (int j = 1; j <= cols; j++)
            {
                var currentCell = range.Cells[i, j];

                Borders borders = currentCell.Borders;
                Border borderTop = borders[XlBordersIndex.xlEdgeTop];
                Border borderBottom = borders[XlBordersIndex.xlEdgeBottom]; 
                Border borderLeft = borders[XlBordersIndex.xlEdgeLeft]; 
                Border borderRight = borders[XlBordersIndex.xlEdgeRight];
                
                var value = currentCell.Value;

                var cellProperties = new CellProperties
                {
                    Row = i - 1,
                    Column = j - 1,
                    BackgroundColor = ToColor(currentCell.Interior.Color),
                    TextColor = ToColor(currentCell.Font.Color),
                    ColumnWeight = currentCell.ColumnWidth ?? 0,
                    RowHeight = currentCell.RowHeight ?? 0,
                    Border = new CellProperties.Types.Border
                    {
                        All = new BorderProperties
                        {
                            Color = ToColor(borders.Color),
                            Thickness = ToThickness(borders.Weight, borders.LineStyle),
                            LineStyle = ToLineStyle(borders.LineStyle)
                        },
                        Top = new BorderProperties
                        {
                            Color = ToColor(borderTop.Color),
                            Thickness = ToThickness(borderTop.Weight, borderTop.LineStyle),
                            LineStyle = ToLineStyle(borderTop.LineStyle)
                        },
                        Bottom = new BorderProperties
                        {
                            Color = ToColor(borderBottom.Color),
                            Thickness = ToThickness(borderBottom.Weight, borderBottom.LineStyle),
                            LineStyle = ToLineStyle(borderBottom.LineStyle)
                        },
                        Left = new BorderProperties
                        {
                            Color = ToColor(borderLeft.Color),
                            Thickness = ToThickness(borderLeft.Weight, borderLeft.LineStyle),
                            LineStyle = ToLineStyle(borderLeft.LineStyle)
                        },
                        Right = new BorderProperties
                        {
                            Color = ToColor(borderRight.Color),
                            Thickness = ToThickness(borderRight.Weight, borderRight.LineStyle),
                            LineStyle = ToLineStyle(borderRight.LineStyle)
                        }
                    },
                    Alignment = new Alignment
                    {
                        Horizontal = ToHorizontalAlignment(currentCell.HorizontalAlignment, value), 
                        Vertical = ToVerticalAlignment(currentCell.VerticalAlignment)
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

                if (value != null)
                    cellProperties.CellValue = value switch
                    {
                        string s => s,
                        double d => Math.Round(d, 4).ToString(),
                        _ => value.ToString()
                    };
                
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
            ws.Cells[reference.RowLast+1, reference.ColumnLast+1] ];
        
        return target;
    }

    public static Application Application { get; } = (Application)ExcelDnaUtil.Application;
    
    public static Workbook ActiveWorkbook => Application.ActiveWorkbook;
    
    public static Worksheet ActiveSheet => Application.ActiveSheet;
}