import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import {
    CellProperties,
    CellProperties_Alignment_HorizontalAlignment, CellProperties_Alignment_VerticalAlignment,
    CellProperties_Color,
    CellProperties_LineStyle
} from "../generated/stock_simulator"
import { DataType } from "csstype"
// import { CellProperties } from './path/to/your/proto/definition';

type ListReportCellProps = {
    properties: CellProperties;
};
const ListReportCell = ({ properties }: ListReportCellProps) => {
    const { backgroundColor, font, fontSize, fontStyle, textColor, cellValue, columnWeight, rowHeight, border } = properties;
    
    const getBorderStyle = (lineStyle?: CellProperties_LineStyle) : DataType.LineStyle => {
        switch (lineStyle) {
            case CellProperties_LineStyle.SOLID:
                return 'solid'
            case CellProperties_LineStyle.DASHED:
                return 'dashed'
            case CellProperties_LineStyle.DOTTED:
                return 'dotted'
            case CellProperties_LineStyle.DOUBLE:
                return 'double'
            case CellProperties_LineStyle.DASH_DOTTED:
                return 'dashed'
            case CellProperties_LineStyle.DASH_DOT_DOTTED:
                return 'dotted'
            case CellProperties_LineStyle.SLANT_DASH_DOTTED:
                return 'ridge'
            default:
                return 'none'
        }
    };
    
    const toColor = (color: CellProperties_Color | undefined) => `rgb(${color?.red ?? 0}, ${color?.green ?? 0}, ${color?.blue ?? 0})`
    
    const toHAlign = (hAlign?: CellProperties_Alignment_HorizontalAlignment) => {
        switch (hAlign) {
            case CellProperties_Alignment_HorizontalAlignment.LEFT:
                return 'left'
            case CellProperties_Alignment_HorizontalAlignment.CENTER:
                return 'center'
            case CellProperties_Alignment_HorizontalAlignment.RIGHT:
                return 'right'
            default:
                return 'right'
        }
    }
    
    const toVAlign = (vAlign?: CellProperties_Alignment_VerticalAlignment) => {
        switch (vAlign) {
            case CellProperties_Alignment_VerticalAlignment.TOP:
                return 'start'
            case CellProperties_Alignment_VerticalAlignment.MIDDLE:
                return 'center'
            case CellProperties_Alignment_VerticalAlignment.BOTTOM:
                return 'end'
            default:
                return 'end'
        }
    }

    const style: React.CSSProperties = {
        display: "flex",
        textAlign: toHAlign(properties.alignment?.horizontal),
        justifyContent: toHAlign(properties.alignment?.horizontal),
        alignItems: toVAlign(properties.alignment?.vertical),
    
        backgroundColor: toColor(backgroundColor),
        fontFamily: font,
        fontSize: `${Math.round((fontSize ?? 10) * 1.5)}px`,
        fontWeight: fontStyle?.bold ? 'bold' : 'normal',
        fontStyle: fontStyle?.italic ? 'italic' : 'normal',
        textDecoration: (fontStyle?.underline && fontStyle.underline !== -4142) ? 'underline' : 'none',
        color: `rgb(${textColor?.red ?? 0}, ${textColor?.green ?? 0}, ${textColor?.blue ?? 0})`,
        width: `${columnWeight * 10}px`,
        height: `${rowHeight * 2}px`,

        borderStyle: `${getBorderStyle(border?.all?.lineStyle)}`,
        borderWidth: `${border?.all?.thickness}px`,
        borderColor: toColor(border?.all?.color),        
        borderTopStyle: `${getBorderStyle(border?.top?.lineStyle)}`,
        borderTopWidth: `${border?.top?.thickness}px`,
        borderTopColor: toColor(border?.top?.color),
        borderBottomStyle: `${getBorderStyle(border?.bottom?.lineStyle)}`,
        borderBottomWidth: `${border?.bottom?.thickness}px`,
        borderBottomColor: toColor(border?.bottom?.color),
        borderLeftStyle: `${getBorderStyle(border?.left?.lineStyle)}`,
        borderLeftWidth: `${border?.left?.thickness}px`,
        borderLeftColor: toColor(border?.left?.color),
        borderRightStyle: `${getBorderStyle(border?.right?.lineStyle)}`,
        borderRightWidth: `${border?.right?.thickness}px`,
        borderRightColor: toColor(border?.right?.color),

        // borderTop: `${border.top.thickness}px ${getBorderStyle(border.top.lineStyle)} ${border.top.color}`,
        // borderBottom: `${border.bottom.thickness}px ${getBorderStyle(border.bottom.lineStyle)} ${border.bottom.color}`,
        // borderLeft: `${border.left.thickness}px ${getBorderStyle(border.left.lineStyle)} ${border.left.color}`,
        // borderRight: `${border.right.thickness}px ${getBorderStyle(border.right.lineStyle)} ${border.right.color}`,
    };

    return (
      <>
        <div style={{ ...style}}>
            {cellValue}
        </div>
      </>
    );
};

export default ListReportCell;
