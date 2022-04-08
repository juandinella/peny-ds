import React from 'react'
import PropTypes from 'prop-types'
import styles from './Card.styles'
import { options } from './constants'

/**
 * Card
 */

const Card = ({
  className,
  id,
  mSize,
  size,
  maxWidth,
  children,
  onClick,
  center,
  shadow,
  borderRadius,
}) => {
  return (
    <div
      css={styles}
      className={className}
      style={{ maxWidth: maxWidth }}
      id={id}
      data-testid={id}
      size={size}
      mSize={mSize}
      center={center}
      onClick={onClick || null}
      shadow={shadow}
      borderRadius={borderRadius}
    >
      {children}
    </div>
  )
}
Card.displayName = 'Card'

Card.propTypes = {
  /** Card's id */
  id: PropTypes.string,
  /** To add style */
  className: PropTypes.string,
  /** Content to be included in the card */
  children: PropTypes.node.isRequired,
  /** Card's size */
  size: PropTypes.oneOf(options.sizes),
  /** Card's size form mobile */
  mSize: PropTypes.oneOf(options.sizes),
  /** Set maxWidth of the container */
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Click event */
  onClick: PropTypes.func,
  /** Center Children */
  center: PropTypes.bool,
  /** Card's shadow */
  shadow: PropTypes.bool,
  /** Border Rounded */
  borderRadius: PropTypes.oneOf(options.borderRadiuses),
}

Card.defaultProps = {
  shadow: true,
  roundedBorders: true,
}

export default Card
