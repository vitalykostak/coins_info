import { type CryptoOrder, fetchAllCryptoData } from '@/shared/api/marketRepository'
import { type Order } from '@/shared/types/order'

import { type Coin } from '../model/type'

type FetchCoinInfoListProps = {
    currency: 'usd' | 'eur'
    order: Order
    perPage: number
    page: number
}

type FetchCoinInfoListResponse = {
    items: Coin[]
    total: number
}

export const fetchCoinInfoList = async (
    props: FetchCoinInfoListProps
): Promise<FetchCoinInfoListResponse> => {
    try {
        const orderMap = new Map<string, CryptoOrder>([
            ['asc', 'market_cap_asc'],
            ['desc', 'market_cap_desc']
        ])

        const res = await fetchAllCryptoData({
            ...props,
            order: orderMap.get(props.order) || 'market_cap_desc'
        })

        if (!res) {
            throw Error('Something went wrong')
        }

        return res
    } catch (error) {
        throw Error('Something went wrong')
    }
}
