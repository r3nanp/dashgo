import NextHead from 'next/head'

type HeadProps = {
  title: string
}

export const Head = ({ title }: HeadProps) => {
  return (
    <>
      <NextHead>
        <title>{title}</title>
      </NextHead>
    </>
  )
}
