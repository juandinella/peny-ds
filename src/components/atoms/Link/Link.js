import React from 'react'
import PropTypes from 'prop-types'
import styles from './Link.styles'
import Skeleton from '../Skeleton'
import Utils from '../../../utils'
import { options } from './constants'

/**
 * Hyperlinks between pages.
 */

const Link = ({
  id,
  href,
  target,
  mSize,
  size,
  children,
  onClick,
  shouldRender,
}) => {
  return (
    <Skeleton
      id={`${id}_skeleton`}
      show={!Utils.emptyValue(shouldRender) && !shouldRender()}
    >
      <a
        css={styles}
        id={id}
        data-testid={id}
        href={href}
        target={target}
        size={size}
        mSize={mSize}
        onClick={onClick || null}
      >
        {children}
      </a>
    </Skeleton>
  )
}

Link.displayName = 'Link'

Link.propTypes = {
  href: PropTypes.string,
  /**
   * Target attribute for a link (i.e. set to _blank to open in new tab)
   * - **_blank** yields a link that opens in a new tab
   * - **_self** yields a link that loads the URL into the same browsing context as the current one. This is the default behavior
   * - **_parent** yields a link that loads the URL into the parent browsing context of the current one. If there is no parent, this behaves the same way as _self
   * - **_top** yields a link that loads the URL into the top-level browsing context. If there is no parent, this behaves the same way as _self.
   */
  target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
  children: PropTypes.node.isRequired,
  /** Link's id */
  id: PropTypes.string,
  /** Link's font size */
  size: PropTypes.oneOf(options.sizes),
  /** Link's font size for Mobile*/
  mSize: PropTypes.oneOf(options.sizes),
  /** Click event */
  onClick: PropTypes.func,
  /**
   * Function that decides if the component should be rendered.
   *
   * @return {boolean} false if component should not be rendered and show skeleton instead. Component renders otherwise.
   */
  shouldRender: PropTypes.func,
}

Link.defaultProps = {
  size: 'sm',
}

export default Link
