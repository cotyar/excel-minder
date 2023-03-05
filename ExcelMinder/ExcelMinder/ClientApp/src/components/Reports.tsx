import React from 'react'
import {createChannel, createClient} from "nice-grpc-web"
import ListReports from "./ListReports"
import { ExcelReport, ListExcelReportResponse, StockSimulatorClient, StockSimulatorDefinition } from "../generated/stock_simulator"
import { Empty } from "../generated/google/protobuf/empty"

type ReportsProps = {}
type ReportsState = {
  loading: boolean
  reports: ExcelReport[]
  reportsJson: string
}

export default (props: ReportsProps) => {
  const [state, setState] = React.useState<ReportsState>({ loading: true, reports: [], reportsJson: "" })
  
  React.useEffect(() => {
    const f = async () => {
      const response = await fetch('/v1/reports/list-excel-reports')
      const json = await response.json()
      const response2 = ListExcelReportResponse.fromJSON(json) 
      const reportsJson = JSON.stringify(response2, null, )
      if (state.reportsJson != reportsJson) {
        setState({reports: response2.reports ?? [], loading: false, reportsJson})
      }
    }
    
    setInterval(f, 1000)
    
    // const f = async () => {
    //   const channel = createChannel('/');
    //
    //   const client: StockSimulatorClient = createClient(
    //     StockSimulatorDefinition,
    //     channel,
    //   );
    //
    //   const response = await client.listExcelReports(Empty)
    //
    //   console.log(response)
    //   setState({reports: response.reports ?? [], loading: false})
    // }

    // f().catch(console.error)
  }, [ state.reports ])
  
  return (    
    <div>
      <h1>Reports</h1>
      <ListReports reports={state.reports} />
    </div>
  )
}