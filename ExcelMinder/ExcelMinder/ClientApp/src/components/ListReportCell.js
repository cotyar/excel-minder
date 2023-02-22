import React from 'react';
import {CellProperties} from "./generated/stock_simulator_pb"
// import { CellProperties } from './path/to/your/proto/definition';

const ListReportCell = ({ properties }) => {
    const { backgroundColor, font, fontStyle, textColor, cellValue, cellWeight, cellHeight, border } = properties;

    const toColor = (num) => {
        let hex = num.toString(16);
        while (hex.length < 6) {
            hex = `${hex}0`;
        }
        hex = `#${hex.toUpperCase()}`;
        console.log(hex);
        return hex;
    }
    
    const getBorderStyle = (lineStyle) => {
        switch (lineStyle) {
            case CellProperties.LineStyle.SOLID:
                return 'solid';
            case CellProperties.LineStyle.DASHED:
                return 'dashed';
            case CellProperties.LineStyle.DOTTED:
                return 'dotted';
            case CellProperties.LineStyle.DOUBLE:
                return 'double';
            case CellProperties.LineStyle.DASH_DOTTED:
                return 'dashed dotted';
            case CellProperties.LineStyle.DASH_DOT_DOTTED:
                return 'dashed dotted dotted';
            case CellProperties.LineStyle.SLANT_DASH_DOTTED:
                return 'slant dashed dotted';
            default:
                return 'none';
        }
    };

    const style = {
        backgroundColor: '' + backgroundColor,
        fontFamily: font,
        fontSize: `${fontStyle.size}px`,
        fontWeight: fontStyle.bold ? 'bold' : 'normal',
        fontStyle: fontStyle.italic ? 'italic' : 'normal',
        textDecoration: (fontStyle.underline && fontStyle.underline !== -4142) ? 'underline' : 'none',
        color: textColor,
        width: `${cellWeight * 6}px`,
        height: `${cellHeight * 2}px`,
        
        borderTopStyle: `${getBorderStyle(border.top.lineStyle)}`,
        borderTopWidth: `${border.top.thickness}px`,
        borderTopColor: border.top.color,
        borderBottomStyle: `${getBorderStyle(border.bottom.lineStyle)}`,
        borderBottomWidth: `${border.bottom.thickness}px`,
        borderBottomColor: border.bottom.color,
        borderLeftStyle: `${getBorderStyle(border.left.lineStyle)}`,
        borderLeftWidth: `${border.left.thickness}px`,
        borderLeftColor: border.left.color,
        borderRightStyle: `${getBorderStyle(border.right.lineStyle)}`,
        borderRightWidth: `${border.right.thickness}px`,
        borderRightColor: border.right.color,
        // borderTop: `${border.top.thickness}px ${getBorderStyle(border.top.lineStyle)} ${border.top.color}`,
        // borderBottom: `${border.bottom.thickness}px ${getBorderStyle(border.bottom.lineStyle)} ${border.bottom.color}`,
        // borderLeft: `${border.left.thickness}px ${getBorderStyle(border.left.lineStyle)} ${border.left.color}`,
        // borderRight: `${border.right.thickness}px ${getBorderStyle(border.right.lineStyle)} ${border.right.color}`,
    };

    console.log("ListReportCell: ", properties)
    return (
      <>
          {/*<h1>AAA</h1>*/}
        {/*<div style={{*/}
        {/*    backgroundColor: toColor(backgroundColor),*/}
        {/*    width: `${cellWeight * 6}px`,*/}
        {/*    height: `${cellHeight * 2}px`*/}
        {/*}}>*/}
          <div style={style}>
        {/*<div>*/}
            {cellValue}
        </div>
      </>
    );
};

export default ListReportCell;
