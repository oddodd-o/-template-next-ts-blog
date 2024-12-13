// src/app/write/page.tsx
'use client'

import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Container from '@/components/layout/Container'

export default function WritePage() {
  const [content, setContent] = useState('')

  return (
    <Container>
      <div className="max-w-5xl mx-auto py-8 flex">
        <div className="mb-6 flex-1">
          <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="마크다운으로 작성해보세요..."
                  className="w-full h-full p-4 border rounded resize-none outline-none focus:border-teal-500"
                />
        </div>

        <div className="flex-1 w-full h-full p-4">
          <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({node, ...props}) => <h1 className="text-3xl font-bold mb-4" {...props} />,
                    h2: ({node, ...props}) => <h2 className="text-2xl font-bold mb-3" {...props} />,
                    h3: ({node, ...props}) => <h3 className="text-xl font-bold mb-2" {...props} />,
                    p: ({node, ...props}) => <p className="mb-4" {...props} />,
                    ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-4" {...props} />,
                    ol: ({node, ...props}) => <ol className="list-decimal pl-5 mb-4" {...props} />,
                    blockquote: ({node, ...props}) => (
                      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />
                    ),
                    code: ({node, ...props}) => (
                      <code className="bg-gray-100 rounded px-1" {...props} />
                    ),
                    pre: ({node, ...props}) => (
                      <pre className="bg-gray-100 p-4 rounded overflow-x-auto my-4" {...props} />
                    ),
                  }}
                >
                  {content}
                </ReactMarkdown>
        </div>

        <div className="fixed bottom-0 left-0 w-1/2">
          <button className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">
            임시저장
          </button>
          <button className="px-4 py-2 rounded bg-teal-500 text-white hover:bg-teal-600">
            발행하기
          </button>
        </div>
      </div>
    </Container>
  )
}