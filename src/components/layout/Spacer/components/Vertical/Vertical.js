import React from 'react'
import PropTypes from 'prop-types'
import spacerStyles from '../../Spacer.styles'
import styles from './Vertical.styles'
import { options } from '../../constants'

const Vertical = ({ id, mSize, size, height, isVisible, maxHeight }) => (
  <div
    css={[spacerStyles, styles]}
    isVisible={isVisible}
    id={id}
    data-testid={id}
    size={size}
    mSize={mSize}
    style={{
      height,
      maxHeight,
    }}
  />
)

Vertical.displayName = 'SpacerVertical'

Vertical.propTypes = {
  /** Differents sizes of the spacer */
  size: PropTypes.oneOf(options.sizes),
  /* Size for mobile */
  mSize: PropTypes.oneOf(options.sizes),
  /** This Boolean attribute add border to see it on Storybook */
  isVisible: PropTypes.bool,
  /** Different heights of the spacer */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Different max-heights of the spacer */
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Spacer's id */
  id: PropTypes.string,
}

Vertical.defaultProps = {
  size: '4',
  height: '100%',
  maxHeight: 'auto',
  isVisible: false,
}
export default Vertical
