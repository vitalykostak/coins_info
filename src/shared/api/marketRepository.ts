import { $api } from './api'

export type CryptoOrder = 'market_cap_desc' | 'market_cap_asc'

type CryptoCoinInfo = {
    id: string
    symbol: string
    name: string
    image: string
    current_price: number
    market_cap: number
    market_cap_rank: number
    fully_diluted_valuation: number
    total_volume: number
    high_24h: number
    low_24h: number
    price_change_24h: number
    price_change_percentage_24h: number
    market_cap_change_24h: number
    market_cap_change_percentage_24h: number
    circulating_supply: number
    total_supply: number
    max_supply: number
    ath: number
    ath_change_percentage: number
    ath_date: string
    atl: number
    atl_change_percentage: number
    atl_date: string
    roi: null | number
    last_updated: string
}

type FetchAllCryptoDataProps = {
    currency: 'usd' | 'eur'
    order: CryptoOrder
    perPage: number
    page: number
}

type FetchAllCryptoDataResponse = {
    items: CryptoCoinInfo[]
    total: number
}

export const fetchAllCryptoData = async (
    props: FetchAllCryptoDataProps
): Promise<FetchAllCryptoDataResponse> => {
    const { currency, order, page, perPage } = props
    const res = await $api<CryptoCoinInfo[]>(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${order}&per_page=${perPage}&page=${page}&sparkline=false`
    )

    return {
        items: res.data,
        total: 10000
    }
}
