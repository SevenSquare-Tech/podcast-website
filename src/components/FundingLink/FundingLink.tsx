type Props = {
  link: string
  value?: string
}

export const FundingLink = ({ link, value }: Props) => {
  return (
    <div className='funding-link'>
      <a href={link} rel='noreferrer' target='_blank'>
        {value}
      </a>
    </div>
  )
}
