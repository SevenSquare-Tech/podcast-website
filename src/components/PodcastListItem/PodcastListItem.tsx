import { getLightningKeysendValueItem, Podcast } from 'podverse-shared'
import { useTranslation } from 'react-i18next'
import { PVImage, PVLink } from '~/components'
import { readableDate } from '~/lib/utility/date'
import { getPodcastShrunkImageUrl } from '~/lib/utility/image'
import { webAddLightningBoltToString } from '~/lib/utility/valueTag'
import { PV } from '~/resources'
import { ariaLiveItemStatusLabel } from '~/services/liveItem'
import { LiveStatusBadge } from '../LiveStatusBadge/LiveStatusBadge'

type Props = {
  podcast: Podcast
  serverCookies?: any
}

export const PodcastListItem = ({ podcast, serverCookies }: Props) => {
  const { t } = useTranslation()
  const { id, lastEpisodePubDate, latestLiveItemStatus, title } = podcast
  const podcastImageUrl = getPodcastShrunkImageUrl(podcast)
  const date = readableDate(lastEpisodePubDate)
  const pubDateText = date === 'Invalid date' ? '' : `${t('Latest episode')}: ${date}`
  const podcastPageUrl = `${PV.RoutePaths.web.podcast}/${id}`
  const liveItemStatusAriaLabel = ariaLiveItemStatusLabel(latestLiveItemStatus, t)
  const ariaLabel = `${title}, ${pubDateText} ${liveItemStatusAriaLabel ? `, ${liveItemStatusAriaLabel}` : ''}`

  const isLightningEnabled = getLightningKeysendValueItem(podcast?.value) || podcast?.hasPodcastIndexValueTag
  const finalTitle = isLightningEnabled ? webAddLightningBoltToString(serverCookies, title) : title

  return (
    <>
      <li className='podcast-list-item'>
        <PVLink ariaLabel={ariaLabel} href={podcastPageUrl}>
          <PVImage
            alt={t('Podcast artwork')}
            height={PV.Images.sizes.medium}
            src={podcastImageUrl}
            width={PV.Images.sizes.medium}
          />
          <div className='text-wrapper'>
            {latestLiveItemStatus === 'live' && (
              <LiveStatusBadge hideAboveMobileWidth liveItemStatus={latestLiveItemStatus} />
            )}
            {pubDateText && <div className='last-episode-pub-date'>{pubDateText}</div>}
            <div className='title'>{finalTitle}</div>
          </div>
          <div className='live-status-wrapper'>
            {latestLiveItemStatus === 'live' && (
              <LiveStatusBadge hideBelowMobileWidth liveItemStatus={latestLiveItemStatus} />
            )}
          </div>
        </PVLink>
      </li>
    </>
  )
}
