import { memo, type FC } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'

import { classNames } from '@/shared/lib/styles/classNames/classNames'

import { code } from './code'

interface SourceCodeDemonstrationProps {
    className?: string
}

const SourceCodeDemonstration: FC<SourceCodeDemonstrationProps> = memo((props) => {
    const { className } = props

    const mods = {}

    const additionsClasses = [className]

    return (
        <CodeMirror
            style={{ fontSize: 14 }}
            className={classNames('', mods, additionsClasses)}
            value={code}
            height={'500px'}
            extensions={[javascript({ jsx: true, typescript: true })]}
        />
    )
})

export default SourceCodeDemonstration
