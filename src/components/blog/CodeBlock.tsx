import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

const LANG_LABELS: Record<string, string> = {
  bash: 'bash',
  shell: 'bash',
  sh: 'bash',
  zsh: 'bash',
  ruby: 'ruby',
  python: 'python',
  java: 'java',
  yaml: 'yaml',
  yml: 'yaml',
  xml: 'markup',
  text: 'text',
  plaintext: 'text',
  javascript: 'javascript',
  js: 'javascript',
  typescript: 'typescript',
  ts: 'typescript',
  json: 'json',
  sql: 'sql',
}

type CodeBlockProps = {
  language: string
  code: string
}

export default function CodeBlock({ language, code }: CodeBlockProps) {
  const lang = LANG_LABELS[language.toLowerCase()] ?? language.toLowerCase()
  const prismLang = lang === 'text' ? undefined : lang
  const lineCount = code.split('\n').length

  return (
    <div className="not-prose my-6 overflow-hidden rounded-xl border border-slate-700/80 bg-[#282a36] shadow-lg shadow-slate-900/25">
      <TerminalTitleBar lang={lang} />
      <SyntaxHighlighter
        language={prismLang}
        style={dracula}
        customStyle={{
          margin: 0,
          padding: '1rem 1.25rem 1.125rem',
          background: 'transparent',
          fontSize: '0.875rem',
          lineHeight: 1.65,
        }}
        codeTagProps={{
          style: {
            fontFamily:
              'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          },
        }}
        showLineNumbers={lineCount > 4}
        lineNumberStyle={{
          minWidth: '2.25em',
          paddingRight: '1em',
          color: '#6272a4',
          userSelect: 'none',
        }}
        wrapLongLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

function TerminalTitleBar({ lang }: { lang: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-white/10 bg-[#21222c] px-4 py-2.5">
      <span className="flex gap-1.5" aria-hidden="true">
        <span className="h-3 w-3 rounded-full bg-[#ff5555]" />
        <span className="h-3 w-3 rounded-full bg-[#f1fa8c]" />
        <span className="h-3 w-3 rounded-full bg-[#50fa7b]" />
      </span>
      <span className="font-mono text-xs font-medium tracking-wide text-[#bd93f9]">
        {lang}
      </span>
    </div>
  )
}
