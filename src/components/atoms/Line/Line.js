import React from 'react'
import PropTypes from 'prop-types'
import styles from './Line.styles'
import { options } from './constants'
import Skeleton from '../Skeleton'
import Utils from '../../../utils'

/**
 * Just a line
 */

const Line = ({ id, type, color, shouldRender }) => {
  return (
    <Skeleton
      id={`${id}_skeleton`}
      show={!Utils.emptyValue(shouldRender) && !shouldRender()}
    >
      <hr css={styles} id={id} data-testid={id} type={type} color={color}></hr>
    </Skeleton>
  )
}

Line.displayName = 'Line'

Line.propTypes = {
  /** Lne's id */
  id: PropTypes.string,
  /** Type of the line */
  type: PropTypes.oneOf(options.types),
  /** Color of the line */
  color: PropTypes.oneOf(options.colors),
  /**
   * Function that decides if the component should be rendered.
   *
   * @return {boolean} false if component should not be rendered and show skeleton instead. Component renders otherwise.
   */
  shouldRender: PropTypes.func,
}

Line.defaultProps = {
  color: 'neutral-900',
  type: 'solid',
}

export default Line
