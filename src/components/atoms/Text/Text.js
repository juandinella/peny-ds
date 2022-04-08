import React from 'react'
import PropTypes from 'prop-types'
import styles from './Text.styles'
import { options } from './constants'
import Skeleton from '../Skeleton'
import Utils from '../../../utils'

/**
 * Display text using well-defined typographic styles.
 */

const Text = ({
  id,
  weight,
  type,
  mSize,
  size,
  color,
  children,
  lineClamp,
  alignment,
  breakWord,
  noWrap,
  breakLine,
  transform,
  shouldRender,
}) => {
  return (
    <Skeleton
      id={`${id}_skeleton`}
      show={!Utils.emptyValue(shouldRender) && !shouldRender()}
    >
      <Text
        css={styles}
        id={id}
        data-testid={id}
        weight={weight}
        size={size}
        mSize={mSize}
        color={color}
        lineClamp={lineClamp}
        alignment={alignment}
        breakWord={breakWord}
        noWrap={noWrap}
        breakLine={breakLine}
        as={type}
        transform={transform}
      >
        {children}
      </Text>
    </Skeleton>
  )
}

Text.displayName = 'Text'

Text.propTypes = {
  /** Text's content */
  children: PropTypes.node.isRequired,
  /** Text's font weight */
  weight: PropTypes.oneOf(options.weights),
  /** Text's font size */
  size: PropTypes.oneOf(options.sizes),
  /** Text's font size for Mobile */
  mSize: PropTypes.oneOf(options.sizes),
  /** Text's color */
  color: PropTypes.oneOf(options.colors),
  /** Text's id */
  id: PropTypes.string,
  /** Text Alignmnet */
  alignment: PropTypes.oneOf(options.alignments),
  /** Don't break the text */
  noWrap: PropTypes.bool,
  /** To break the word */
  breakWord: PropTypes.bool,
  /** If the text is too long it doesn't have any space, this is the way to break it */
  breakLine: PropTypes.bool,
  /** Type of the text */
  type: PropTypes.oneOf(options.types).isRequired,
  /** Text transform short hand. */
  transform: PropTypes.oneOf(options.transforms),
  /** Clamp text */
  lineClamp: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Function that decides if the component should be rendered.
   *
   * @return {boolean} false if component should not be rendered and show skeleton instead. Component renders otherwise.
   */
  shouldRender: PropTypes.func,
}

Text.defaultProps = {
  weight: 'regular',
  size: 'sm',
  color: 'neutral-900',
  type: 'p',
}

export default Text
