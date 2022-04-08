import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styles from './TextList.styles'
import Skeleton from '../Skeleton'
import Utils from '../../../utils'
import { options } from './constants'

/**
 * List of items
 */

const TextList = ({
  className,
  itemClass,
  list,
  id,
  inline,
  color,
  bulletColor,
  numbered,
  size,
  shouldRender,
}) => {
  const texts = list
    ? list.map((item, index) => (
        <Fragment key={index}>
          {item.content ? (
            <li
              className={`${itemClass || ''} ${item.className || ''}`}
              id={item.id}
              data-testid={item.id}
              onClick={item.onClick || null}
            >
              {item.content}
            </li>
          ) : null}
          {item.children}
        </Fragment>
      ))
    : []

  return (
    <Skeleton
      id={`${id}_skeleton`}
      show={!Utils.emptyValue(shouldRender) && !shouldRender()}
    >
      {numbered ? (
        <ol
          id={id}
          css={styles}
          data-testid={id}
          className={className}
          inline={inline}
          size={size}
          color={color}
          bulletColor={bulletColor}
        >
          {texts}
        </ol>
      ) : (
        <ul
          id={id}
          css={styles}
          data-testid={id}
          className={className}
          inline={inline}
          size={size}
          color={color}
          bulletColor={bulletColor}
        >
          {texts}
        </ul>
      )}
    </Skeleton>
  )
}

TextList.displayName = 'TextList'

TextList.propTypes = {
  /** To add style */
  className: PropTypes.string,
  /** TextList's id */
  id: PropTypes.string,
  /** Item list class */
  itemClass: PropTypes.string,
  /** Numbered list */
  numbered: PropTypes.bool,
  /** Array of objects for list */
  list: PropTypes.arrayOf(
    PropTypes.shape({
      /** Content for the list item. */
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
        .isRequired,
      /** Specifies a Unique id to the item list element. */
      id: PropTypes.string,
      /** Extends the styles applied to the list item.*/
      className: PropTypes.string,
      /** Callback fired when item list is clicked. */
      onClick: PropTypes.func,
      /** Nodes after list item. */
      children: PropTypes.node,
    })
  ),
  /**
   * Function that decides if the component should be rendered.
   *
   * @return {boolean} false if component should not be rendered and show skeleton instead. Component renders otherwise.
   */
  shouldRender: PropTypes.func,
  /** Inline list */
  inline: PropTypes.bool,
  /** Size of the text */
  size: PropTypes.oneOf(options.sizes),
  /** Color of the text */
  color: PropTypes.oneOf(options.colors),
  /** Color of the bullet */
  bulletColor: PropTypes.oneOf(options.colors),
}

TextList.defaultProps = {}

export default TextList
