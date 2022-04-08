import React from 'react'
import PropTypes from 'prop-types'
import styles from './ScreenReaderText.styles'

/**
 * Hidden text just reachable for screen readers
 */

const ScreenReaderText = ({ id, children }) => {
  return (
    <span css={styles} id={id} data-testid={id}>
      {children}
    </span>
  )
}

ScreenReaderText.displayName = 'ScreenReaderText'

ScreenReaderText.propTypes = {
  /** Component's id */
  id: PropTypes.string,
  /** Component's content */
  children: PropTypes.string.isRequired,
}

ScreenReaderText.defaultProps = {}

export default ScreenReaderText
