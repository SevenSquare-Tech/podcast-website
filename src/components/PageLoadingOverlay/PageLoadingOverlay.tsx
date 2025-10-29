import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useOmniAural } from 'omniaural'
import { Icon } from '~/components'
import { OmniAuralState } from '~/state/omniauralState'

type Props = unknown

export const PageLoadingOverlay = (props: Props) => {
  const [isLoading] = useOmniAural('page.isLoading') as [OmniAuralState['page']['isLoading']]
  return (
    <>
      {isLoading && (
        <div className='page-loading-overlay'>
          <Icon faIcon={faSpinner} spin />
        </div>
      )}
    </>
  )
}
