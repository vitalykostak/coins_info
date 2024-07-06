import { memo, type FC } from 'react'

import { classNames } from '@/shared/lib/styles/classNames/classNames'

interface ProjectInfoProps {
    className?: string
}

const ProjectInfo: FC<ProjectInfoProps> = memo((props) => {
    const { className } = props

    const mods = {}

    const additionsClasses = [className]

    return (
        <ul
            className={classNames('', mods, additionsClasses)}
            style={{ fontSize: 14, marginBottom: 24 }}
        >
            <li>
                Check{' '}
                <a target='_blank' href='https://feature-sliced.design' rel='noreferrer'>
                    Feature-Sliced Design
                </a>{' '}
                as this project follow this architecture
            </li>
            <li>
                <a
                    target='_blank'
                    href='https://github.com/vitalykostak/coins_info'
                    rel='noreferrer'
                >
                    repo link
                </a>
            </li>
            <li>
                <a
                    target='_blank'
                    href='https://github.com/vitalykostak/coins_info/blob/main/src/pages/Main/ui/Main/Main.tsx'
                    rel='noreferrer'
                >
                    see this page component on github
                </a>
            </li>
            <li>
                <a
                    target='_blank'
                    href='https://github.com/vitalykostak/coins_info/tree/main/src/features/CoinPriceOverview'
                    rel='noreferrer'
                >
                    see CoinMarketOverview feature on github
                </a>
            </li>
        </ul>
    )
})

export default ProjectInfo
