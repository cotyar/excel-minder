namespace ExcelMinder.Excel.Net6;

using ExcelDna.Integration;

using System.Runtime.InteropServices;
using System.Windows.Forms;
using ExcelDna.Integration.CustomUI;

[ComVisible(true)]
public class RibbonController : ExcelRibbon
{
    public override string GetCustomUI(string RibbonID) =>
    @"<customUI xmlns=""http://schemas.microsoft.com/office/2009/07/customui"">
        <ribbon>
            <tabs>
                <tab id=""StatusTab"" label=""Excel Minder"">
                    <group id=""StatusGroup"" label=""Connection status"">
                        <button id=""StatusBulb"" label=""Connected"" imageMso=""HappyFace""/>
                    </group>
                    <group id=""DataSourcesTab"" label=""Data Sources""/>
                    <group id=""ReportsGroup"" label=""Reporting"">
                        <button id=""CreateReportButton"" label=""Create Report"" imageMso=""FileNew""/>
                    </group>
                </tab>
            </tabs>
        </ribbon>
    </customUI>";

    public void OnButtonPressed(IRibbonControl control)
    {
        MessageBox.Show("Hello from control " + control.Id);
    }
}
