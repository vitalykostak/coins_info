import { memo, useMemo, type FC } from 'react'
import { Table, Image } from 'antd'
import { type ColumnsType } from 'antd/es/table'

import { classNames } from '@/shared/lib/styles/classNames/classNames'
import { type Coin } from '@/entities/Coin'
import { type CURRENCY_ENUM } from '@/entities/Currency'
import { type Order } from '@/shared/types/order'

import { useCoinPriceOverview } from '../../hooks/useCoinPriceOverview'

import styles from './CoinPriceOverview.module.scss'

interface CoinPriceOverviewProps {
    className?: string
    currency: CURRENCY_ENUM
    order: Order
}

const CoinPriceOverview: FC<CoinPriceOverviewProps> = memo((props) => {
    const { className, currency, order } = props

    const { handleTableChange, items, loading, tablePagination } = useCoinPriceOverview({
        currency,
        order
    })

    const columns: ColumnsType<Coin> = useMemo(
        () => [
            {
                title: 'Name',
                dataIndex: 'name',
                render: (value, record) => (
                    <div>
                        <Image width={32} height={32} src={record.image} />
                        <span className={styles.span}>{value}</span>
                    </div>
                )
            },
            {
                title: 'Current Price',
                dataIndex: 'current_price',
                render: (value) => `${value} ${currency}`
            },
            {
                title: 'Circulating Supply',
                dataIndex: 'circulating_supply'
            }
        ],
        [currency]
    )

    const mods = {}

    const additionsClasses = [className]

    return (
        <Table
            className={classNames('', mods, additionsClasses)}
            columns={columns}
            rowKey={(record) => record.id}
            dataSource={items}
            pagination={tablePagination}
            loading={loading}
            onChange={handleTableChange}
        />
    )
})

export default CoinPriceOverview
