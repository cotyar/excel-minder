using System.IO;
using System.Windows.Forms;
using ExcelDna.Integration;

namespace ExcelMinder.Excel.Net6;

public class AddIn : IExcelAddIn
{
    public void AutoOpen()
    {
        // var thisAddInName = Path.GetFileName((string)XlCall.Excel(XlCall.xlGetName));
        // var message = $"Excel-DNA Add-In '{thisAddInName}' loaded!";
        //
        // MessageBox.Show(message, thisAddInName, MessageBoxButtons.OK, MessageBoxIcon.Information);
    }

    public void AutoClose()
    {
    }
}
