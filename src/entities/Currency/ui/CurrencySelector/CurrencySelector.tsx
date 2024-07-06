import { memo, type FC } from 'react'
import { Select } from 'antd'

import { classNames } from '@/shared/lib/styles/classNames/classNames'

import { CURRENCY_ENUM } from '../../constants'

import styles from './CurrencySelector.module.scss'

interface CurrencySelectorProps {
    className?: string
    value: CURRENCY_ENUM
    onChange: (currency: CURRENCY_ENUM) => void
}

const options = Object.keys(CURRENCY_ENUM).map((c) => ({
    value: CURRENCY_ENUM[c as unknown as keyof typeof CURRENCY_ENUM],
    label: <span>{c}</span>
}))

const CurrencySelector: FC<CurrencySelectorProps> = memo((props) => {
    const { className, onChange, value } = props

    const mods = {}

    const additionsClasses = [className]

    return (
        <Select
            className={classNames(styles.container, mods, additionsClasses)}
            options={options}
            onChange={onChange}
            value={value}
        />
    )
})

export default CurrencySelector
