import React, { memo } from 'react'
import Styles from './spinner-style.scss'

type Props = { className: string }

const Spinner: React.FC<Props> = (props: Props) => {
  return (
    <div className={[Styles.spinner, props.className].join(' ')}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

export default memo(Spinner)
