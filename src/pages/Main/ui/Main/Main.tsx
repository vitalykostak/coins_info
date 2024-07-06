import { useState, type FC } from 'react'
import { Typography } from 'antd'

import { Page } from '@/widgets/Page'
import {
    CoinMarketOverview,
    MarketCapOrderSelector,
    coinPriceOverviewContext
} from '@/features/CoinPriceOverview'
import { fetchCoinInfoList } from '@/entities/Coin/api/fetchCoinInfoList'
import { CURRENCY_ENUM, CurrencySelector } from '@/entities/Currency'
import { type Order } from '@/shared/types/order'
import { ProjectInfo } from '@/features/ProjectInfo'

import SourceCodeDemonstration from '../SourceCodeDemonstration/SourceCodeDemonstration'

import styles from './Main.module.scss'

const { Title } = Typography

const Main: FC = () => {
    const [currency, setCurrency] = useState<CURRENCY_ENUM>(CURRENCY_ENUM.USD)
    const [order, setOrder] = useState<Order>('desc')

    return (
        <Page>
            <ProjectInfo />
            <Title level={1}>Coins & Markets</Title>
            <div className={styles.selectors}>
                <CurrencySelector value={currency} onChange={setCurrency} />
                <MarketCapOrderSelector value={order} onChange={setOrder} />
            </div>
            <coinPriceOverviewContext.Provider value={{ fetchCoinsInfo: fetchCoinInfoList }}>
                <CoinMarketOverview currency={currency} order={order} />
            </coinPriceOverviewContext.Provider>
            <SourceCodeDemonstration />
        </Page>
    )
}

export default Main
