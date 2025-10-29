import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import { Page } from '~/lib/utility/page'
import { PV } from '~/resources'
import { ColumnsWrapper, Footer, Meta, PageHeader, PageScrollableContent } from '~/components'
import { getDefaultServerSideProps } from '~/services/serverSideHelpers'

type ServerProps = Page

export default function Terms(props: ServerProps) {
  /* Initialize */

  const { t } = useTranslation()

  /* Meta Tags */

  const meta = {
    currentUrl: `${PV.Config.WEB_BASE_URL}${PV.RoutePaths.web.terms}`,
    description: t('pages-terms_Description'),
    title: t('pages-terms_Title')
  }

  return (
    <>
      <Meta
        description={meta.description}
        ogDescription={meta.description}
        ogTitle={meta.title}
        ogType='website'
        ogUrl={meta.currentUrl}
        robotsNoIndex={false}
        title={meta.title}
        twitterDescription={meta.description}
        twitterTitle={meta.title}
      />
      <PageHeader text={'Terms of Service'} />
      <PageScrollableContent>
        <ColumnsWrapper
          mainColumnChildren={
            <div className='text-page'>
              <p>{`Podverse will never sell or share private user data.`}</p>
              <p>
                {`We will never put advertisements next to or within a podcast's content without that podcast's permission.`}
              </p>
              <p>
                {`All audio or video files found on podverse.fm load from the podcaster's own public server. We do not host podcast audio or video files ourselves.`}
              </p>
              <p>
                {`We host podcast links and content from third-party podcast feeds and sites. These have their own independent privacy policies, and we have no responsibility for their content or activities.`}
              </p>
              <p>
                {`All clips hosted on podverse.fm are crowd-sourced and unofficial, unless otherwise noted by the podcaster themselves.`}
              </p>
              <p>
                {`Clips load within the full episode's media file, so the user always has access to the full recording.`}
              </p>
              <p>
                {`We also host reduced size podcast images from podcasters' feeds, to save user network data and speed up page loading times.`}
              </p>
              <hr />
              <h3>Popularity Analytics</h3>
              <p>
                {`Podverse enables anonymized, cookie-less tracking by default on this website. (To disable this tracking, please use a tracker blocking web browser.)`}
              </p>
              <p>
                {`We use this tracking information to help determine which content on the site (including podcasts, episodes, and clips) are most popular.`}
              </p>
              <p>
                {`The tracking software we use is called Matomo, and it is a free and open source analytics platform. We host an instance of Matomo, so all tracking data is hosted on our servers, and individual user tracking data will never be sold to or shared with 3rd parties.`}
              </p>
              <p>
                {`All of our tracking data is anonymized by obscuring the IP address by 2 bytes, which means IP addresses are obscured and then saved on our server with the format 192.168.xxx.xxx.`}
              </p>
              <p>
                {`To further protect user anonymity, we do not use session IDs to track users across multiple visits. Likewise, to further protect anonymity, we do not use cookie-based tracking on our website.`}
              </p>
              <p>
                {`While we use Matomo tracking data to help us determine what content is most popular on Podverse, users should keep in mind that these popularity metrics are easy to manipulate, and may not accurately reflect the popularity of content.`}
              </p>
            </div>
          }
        />
        <Footer />
      </PageScrollableContent>
    </>
  )
}

/* Server-Side Logic */

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { locale } = ctx

  const defaultServerProps = await getDefaultServerSideProps(ctx, locale)

  const serverProps: ServerProps = {
    ...defaultServerProps
  }

  return { props: serverProps }
}
