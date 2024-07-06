import { type ReactNode, memo, type FC } from 'react'
import { Select } from 'antd'

import { classNames } from '@/shared/lib/styles/classNames/classNames'
import { type Order } from '@/shared/types/order'

import styles from './MarketCapOrderSelector.module.scss'

interface MarketCapOrderSelectorProps {
    className?: string
    value: Order
    onChange: (order: Order) => void
}

const options: Array<{ value: Order, label: ReactNode }> = [
    { value: 'desc', label: <span>Market cap descending</span> },
    { value: 'asc', label: <span>Market cap ascending</span> }
]

const MarketCapOrderSelector: FC<MarketCapOrderSelectorProps> = memo((props) => {
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

export default MarketCapOrderSelector
