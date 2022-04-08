import React from 'react'
import PropTypes from 'prop-types'
import spacerStyles from '../../Spacer.styles'
import styles from './Horizontal.styles'
import { options } from '../../constants'

const Horizontal = ({ id, mSize, size, isVisible }) => (
  <div
    css={[spacerStyles, styles]}
    isVisible={isVisible}
    id={id}
    data-testid={id}
    size={size}
    mSize={mSize}
  />
)

Horizontal.displayName = 'SpacerHorizontal'

Horizontal.propTypes = {
  /** Differents sizes of the spacer */
  size: PropTypes.oneOf(options.sizes),
  /* Size for mobile */
  mSize: PropTypes.oneOf(options.sizes),
  /** This Boolean attribute add border to see it on Storybook */
  isVisible: PropTypes.bool,
  /** Spacer's id */
  id: PropTypes.string,
}

Horizontal.defaultProps = {
  size: '4',
  isVisible: false,
}

export default Horizontal
