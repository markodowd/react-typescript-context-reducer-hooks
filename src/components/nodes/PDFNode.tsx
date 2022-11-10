import { memo, FC, useState } from 'react'
import { NodeProps } from 'reactflow'
import CustomNodeWrapper from 'components/nodes/CustomNodeWrapper'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5'

const PDFNode: FC<NodeProps> = ({ id }) => {
  const [numPages, setNumPages] = useState(0)
  const [pageNumber, setPageNumber] = useState(1)
  const [documentLoaded, setDocumentLoaded] = useState(false)

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }): void => {
    setNumPages(numPages)
    setDocumentLoaded(true)
  }

  const exceedsMaxPages = (offset: number): boolean =>
    pageNumber + offset > numPages

  const exceedsMinPages = (offset: number): boolean => pageNumber + offset < 1

  const handlePageChange = (offset: number): void => {
    if (exceedsMaxPages(offset)) return
    if (exceedsMinPages(offset)) return

    setPageNumber((prevPageNumber) => prevPageNumber + offset)
  }

  return (
    <CustomNodeWrapper id={id}>
      <div className='relative'>
        <Document
          // TODO: this value should be a proper pdf file from case db
          file='./case-canvas-sample.pdf'
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            pageNumber={pageNumber}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </Document>
        {documentLoaded && (
          <div className='flex justify-center'>
            <div className='absolute flex w-1/3 rounded bottom-3 bg-green-50 justify-evenly'>
              <button onClick={() => handlePageChange(-1)}>{'<'}</button>
              Page {pageNumber} of {numPages}
              <button onClick={() => handlePageChange(1)}>{'>'}</button>
            </div>
          </div>
        )}
      </div>
    </CustomNodeWrapper>
  )
}

export default memo(PDFNode)
