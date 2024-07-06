import { type Coin } from '@/entities/Coin'
import { type CURRENCY_ENUM } from '@/entities/Currency'
import { createStrictContext, useStrictContext } from '@/shared/lib/react'
import { type Order } from '@/shared/types/order'

type FetchCoinsInfoProps = {
    perPage: number
    page: number
    order: Order
    currency: CURRENCY_ENUM
}

type CoinPriceOverviewContext = {
    fetchCoinsInfo: (props: FetchCoinsInfoProps) => Promise<{ items: Coin[], total: number }>
}

export const coinPriceOverviewContext = createStrictContext<CoinPriceOverviewContext>()

export const useCoinPriceOverviewDeps = () => useStrictContext(coinPriceOverviewContext)
