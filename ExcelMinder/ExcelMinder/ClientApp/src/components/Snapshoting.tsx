import React, { useCallback, useRef, useState } from 'react'
import { toPng } from 'html-to-image';
import ReactDOMServer from 'react-dom/server';
// import jsPDF from 'jspdf';
// import ReactPDF, { PDFViewer } from "@react-pdf/renderer"
import Pdf from "react-to-pdf";

type SnapshottingProps = {
  reportId: string;
  children: React.ReactNode;
}
export const Snapshotting = (props: SnapshottingProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [reportId, setReportId] = useState(props.reportId)
  const [image, setImage] = useState<string | null>(null)
  const [htmlDataUrl, setHtmlDataUrl] = useState('');
  const [pdfDataUrl, setPdfDataUrl] = useState('');

  const onReportChange = () => {
    if (props.reportId !== reportId && image !== null) {
      setImage(null)
    }
  }

  const downloadFile = (fileText: string, ext: string) => {
    const link = document.createElement('a')
    link.download = `${reportId}.${ext}`
    link.href = fileText
    link.click()
  }
  
  const download = (fileText: string, ext: string, charset: string) => {
    const link = document.createElement('a')
    link.download = `${reportId}.${ext}`
    link.href = `data:text/plain;${charset}, ${fileText}`
    link.click()
  }
  
  const onImage = useCallback(() => {
    if (ref.current === null) {
      return
    }

    toPng(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        setImage(dataUrl)
        setReportId(props.reportId)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [ref])
  
  const onSaveImage = useCallback(() => {
    if (ref.current === null) {
      return
    }

    if (image !== null) {
      downloadFile(image, "png")
    }
    else {
      toPng(ref.current, {cacheBust: true,})
        .then(dataUrl => {
          setImage(dataUrl)
          setReportId(props.reportId)
          downloadFile(dataUrl, "png")
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }, [ref])

  const onSaveHtml = useCallback(() => {
    if (ref.current === null) {
      return
    }

    const html = ReactDOMServer.renderToStaticMarkup(<html><head></head><body>{props.children}</body></html>);
    console.log(html)
    if (html !== null) {
      download(encodeURIComponent(html), `html`, "charset=utf-8")
    }
  }, [ref])

  // const onSavePdf = useCallback(() => {
  //   if (ref.current === null) {
  //     return 
  //   }
  //
  //   const html = ReactDOMServer.renderToStaticMarkup(<div>{props.children}</div>);
  //   if (html !== null) {
  //     const doc = new jsPDF()
  //     doc.html(html).catch((err) => console.error(err))
  //     const dataUrl = doc.output('datauristring')
  //     console.log(dataUrl)
  //     // download(dataUrl, "pdf", "charset=utf-8")
  //     setPdfDataUrl(dataUrl);
  //   }
  // }, [ref])
  
  onReportChange()
  
  // @ts-ignore
  return (
    <div className="flex-column">
      <div ref={ref}>
        {props.children}
      </div>
      {image !== null &&
        <div className="position-relative">
          <button type="button" className="btn-close position-absolute" aria-label="Close" onClick={() => setImage(null)}/>
          <img className="w-100 h-auto" src={image} alt="snapshot" />
        </div>
      }
      {htmlDataUrl && 
        <div className="position-relative">
          <button type="button" className="btn-close position-absolute" aria-label="Close" onClick={() => setHtmlDataUrl('')}/>
          <iframe src={htmlDataUrl} width="100%" height="500" />
        </div>
      }
      {pdfDataUrl &&
        <div className="position-relative">
          <button type="button" className="btn-close position-absolute" aria-label="Close" onClick={() => setPdfDataUrl('')}/>
          <iframe src={pdfDataUrl} width="100%" height="500" />
        </div>
      }

      <div className="flex-row mt-2">
        <button className="btn btn-primary ms-1" onClick={onImage}>To PNG</button>
        <button className="btn btn-primary-outline ms-2" onClick={onSaveImage}>Save as PNG</button>
        <button className="btn btn-primary-outline ms-2" onClick={onSaveHtml}>Save as HTML</button>
        {/*<button className="btn btn-primary-outline ms-2" onClick={onSavePdf}>Save as PDF</button>*/}
        <Pdf targetRef={ref} filename={`${props.reportId}.pdf`}>
          {({ toPdf } : { toPdf: any}) => <button className="btn btn-primary-outline ms-2" onClick={toPdf}>Save as PDF</button>}
        </Pdf>
      </div>
    </div>
  )
}

export default Snapshotting