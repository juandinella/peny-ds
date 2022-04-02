import React from 'react'
import PropTypes from 'prop-types'
import styles from './Skeleton.styles'

/**
 * Display a skeleton whilst another component is loading.
 */

const Skeleton = ({ id, width, height, rounded, squared, children, show }) => {
  return show ? (
    <div
      css={styles}
      id={id}
      data-testid={id}
      rounded={rounded}
      squared={squared}
      style={{ width: width, height: height }}
      className={width ? 'hasWidth' : null}
    >
      {children}
    </div>
  ) : (
    children
  )
}

Skeleton.displayName = 'Skeleton'

Skeleton.propTypes = {
  /** Skeleton's id */
  id: PropTypes.string,
  /**
   * Skeleton's Width.
   *
   * If there's no width, it will adjust automatically to the children
   */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Skeleton's Height
   *
   * Min Height 20px;
   */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Rounded Skeleton */
  rounded: PropTypes.bool,
  /** Squared Skeleton */
  squared: PropTypes.bool,
  /** Content to be included in the skeleton */
  children: PropTypes.node,
  /** If true skeleton should be shown, otherwise only children should be shown */
  show: PropTypes.bool,
}

Skeleton.defaultProps = {}

export default Skeleton
