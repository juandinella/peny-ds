import React from 'react'
import PropTypes from 'prop-types'
import styles from './Paragraph.styles'
import { options } from './constants'
import Skeleton from '../Skeleton'
import Utils from '../../../utils'

/**
 * A paragraph always starts on a new line, and is usually a block of text.
 */

const Paragraph = ({
  id,
  weight,
  msize,
  size,
  color,
  children,
  lineClamp,
  alignment,
  breakWord,
  noWrap,
  breakLine,
  shouldRender,
}) => {
  return (
    <Skeleton
      id={`${id}_skeleton`}
      show={!Utils.emptyValue(shouldRender) && !shouldRender()}
    >
      <p
        css={styles}
        id={id}
        data-testid={id}
        weight={weight}
        size={size}
        msize={msize}
        color={color}
        lineClamp={lineClamp}
        alignment={alignment}
        breakWord={breakWord}
        noWrap={noWrap}
        breakLine={breakLine}
      >
        {children}
      </p>
    </Skeleton>
  )
}

Paragraph.displayName = 'Paragraph'

Paragraph.propTypes = {
  /** Paragraph's content */
  children: PropTypes.node.isRequired,
  /** Paragraph's font weight */
  weight: PropTypes.oneOf(options.weights),
  /** Paragraph's font size */
  size: PropTypes.oneOf(options.sizes),
  /** Paragraph's font size for Mobile*/
  msize: PropTypes.oneOf(options.sizes),
  /** Paragraph's color */
  color: PropTypes.oneOf(options.colors),
  /** Paragraph's id */
  id: PropTypes.string,
  /** Text Alignmnet */
  alignment: PropTypes.oneOf(options.alignments),
  /** Don't break the text */
  noWrap: PropTypes.bool,
  /** To break the word */
  breakWord: PropTypes.bool,
  /** If the text is too long it doesn't have any space, this is the way to break it*/
  breakLine: PropTypes.bool,
  /** Clamp text */
  lineClamp: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Function that decides if the component should be rendered.
   *
   * @return {boolean} false if component should not be rendered and show skeleton instead. Component renders otherwise.
   */
  shouldRender: PropTypes.func,
}

Paragraph.defaultProps = {
  weight: 'regular',
  size: 'sm',
  color: 'neutral-120',
}

export default Paragraph
