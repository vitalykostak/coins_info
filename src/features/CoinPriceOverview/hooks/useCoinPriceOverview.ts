import { useEffect, useState } from 'react'
import { type GetProp, type TableProps } from 'antd'

import { type CURRENCY_ENUM } from '@/entities/Currency'
import { type Coin } from '@/entities/Coin'
import { type Order } from '@/shared/types/order'

import { useCoinPriceOverviewDeps } from '../deps'

type TablePaginationConfig = Exclude<GetProp<TableProps, 'pagination'>, boolean>

const defaultPaginationState = {
    current: 1,
    pageSize: 10
}

type UseCoinPriceOverviewProps = {
    currency: CURRENCY_ENUM
    order: Order
}

export const useCoinPriceOverview = (props: UseCoinPriceOverviewProps) => {
    const { currency, order } = props

    const deps = useCoinPriceOverviewDeps()

    const [items, setItems] = useState<Coin[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [err, setError] = useState<string>('')
    const [tablePagination, setTablePagination] =
        useState<TablePaginationConfig>(defaultPaginationState)

    useEffect(() => {
        const effect = async () => {
            try {
                setLoading(true)
                const res = await deps.fetchCoinsInfo({
                    page: 1,
                    perPage: tablePagination.pageSize || defaultPaginationState.pageSize,
                    currency,
                    order
                })
                setItems(res.items)
                setTablePagination((prev) => ({
                    current: 1,
                    pageSize: prev.pageSize || defaultPaginationState.pageSize,
                    total: res.total
                }))
            } catch {
                setError('Something went wrong')
            } finally {
                setLoading(false)
            }
        }

        void effect()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deps, currency, order])

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    const handleTableChange: TableProps['onChange'] = async (pagination) => {
        setTablePagination((prev) => ({
            ...prev,
            pageSize: pagination.pageSize || prev.pageSize,
            current: pagination.current || prev.current
        }))

        try {
            setLoading(true)
            const res = await deps.fetchCoinsInfo({
                page: pagination.current || defaultPaginationState.current,
                perPage: pagination.pageSize || defaultPaginationState.pageSize,
                currency,
                order
            })
            setItems(res.items)
        } catch {
            setError('Something went wrong')
        } finally {
            setLoading(false)
        }
        return undefined
    }

    return { handleTableChange, items, loading, err, tablePagination }
}
