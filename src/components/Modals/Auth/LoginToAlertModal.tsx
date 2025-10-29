import OmniAural, { useOmniAural } from 'omniaural'
import { useTranslation } from 'react-i18next'
import Modal from 'react-modal'
import { ButtonClose, ButtonRectangle } from '~/components'
import { OmniAuralState } from '~/state/omniauralState'

type Props = unknown

export const LoginToAlertModal = (props: Props) => {
  const [loginToAlert] = useOmniAural('modals.loginToAlert') as [OmniAuralState['modals']['loginToAlert']]
  const { t } = useTranslation()
  const { alertType } = loginToAlert

  /* Function Helpers */

  const _onRequestClose = () => {
    OmniAural.modalsHideAll()
  }

  /* Render Helpers */

  const getMessageText = () => {
    switch (alertType) {
      case 'add item to playlist':
        return t('LoginToAddItemsToPlaylists')
      case 'add item to queue':
        return t('LoginToAddItemToQueue')
      case 'make clip':
        return t('LoginToCreateAndShareClips')
      case 'subscribe to playlist':
        return t('LoginToSubscribeToPlaylists')
      case 'subscribe to podcast':
        return t('LoginToSubscribeToPodcasts')
      case 'subscribe to profile':
        return t('LoginToSubscribeToProfiles')
      case 'mark as played':
        return t('LoginToMarkAsPlayed')
      default:
        break
    }
  }

  return (
    <Modal
      className='login-to-alert-modal centered'
      contentLabel={t('Login to continue')}
      isOpen={!!alertType}
      onRequestClose={_onRequestClose}
    >
      <ButtonClose onClick={_onRequestClose} />
      <div className='message-wrapper'>
        <div className='message with-margin' tabIndex={0}>
          {getMessageText()}
        </div>
      </div>
      <div className='submit-buttons'>
        <ButtonRectangle label={t('Close')} onClick={_onRequestClose} type='secondary' />
        <ButtonRectangle label={t('Login')} onClick={OmniAural.modalsLoginShow} type='primary' />
      </div>
    </Modal>
  )
}
