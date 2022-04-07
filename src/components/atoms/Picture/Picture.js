import React from 'react'
import PropTypes from 'prop-types'
import styles from './Picture.styles'
import Skeleton from '../Skeleton'
import Utils from '../../../utils'

/**
 * Display image content.
 */

const Picture = ({
  id,
  src,
  minWidth,
  width,
  mWidth,
  height,
  altText,
  rounded,
  cover,
  fixedWidth,
  borderRadius,
  inline,
  className,
  shouldRender,
}) => {
  return (
    <Skeleton
      id={`${id}_skeleton`}
      show={!Utils.emptyValue(shouldRender) && !shouldRender()}
    >
      <picture
        id={id}
        data-testid={id}
        css={styles}
        inline={inline}
        className={className}
        rounded={rounded}
        borderRadius={borderRadius}
        cover={cover}
        mWidth={mWidth}
        width={width}
        minWidth={minWidth}
        height={height}
        fixedWidth={fixedWidth}
      >
        <img src={src} alt={altText} style={{ height }} />
      </picture>
    </Skeleton>
  )
}

Picture.displayName = 'Picture'

Picture.propTypes = {
  /** Picture's id */
  id: PropTypes.string,
  /** Source of the image */
  src: PropTypes.string.isRequired,
  /** Width of the image for mobile*/
  mWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Width of the image */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Min Width of the image */
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Height of the image */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Mandatory text of the image */
  altText: PropTypes.string.isRequired,
  /** Adds border radius 100% */
  rounded: PropTypes.bool,
  /** Adds border radius 6px */
  borderRadius: PropTypes.bool,
  /** Inline-flex */
  inline: PropTypes.bool,
  /** Vertical align Middle */
  middle: PropTypes.bool,
  /** To add style */
  className: PropTypes.string,
  /** Adds border object-fit cover. This will center the image like background-size cover */
  cover: PropTypes.bool,
  /**
   * Function that decides if the component should be rendered.
   *
   * @return {boolean} false if component should not be rendered and show skeleton instead. Component renders otherwise.
   */
  shouldRender: PropTypes.func,
}

Picture.defaultProps = {
  height: 'auto',
}

export default Picture
