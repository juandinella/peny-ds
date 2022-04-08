import React from 'react'
import PropTypes from 'prop-types'
import styles from './Container.styles'
import { options } from './constants'

/**
 * Container
 */

const Container = ({
  id,
  space,
  mspace,
  maxWidth,
  minWidth,
  gap,
  mgap,
  flex,
  borderColor,
  borderVertical,
  borderHorizontal,
  borderRadius,
  justifyContent,
  mJustifyContent,
  alignItems,
  mAlignItems,
  alignContent,
  mAlignContent,
  direction,
  mDirection,
  wrap,
  children,
  className,
  centered,
  leftAligned,
  rightAligned,
  isVisible,
  fullWidthMobile,
  maxContent,
  negativeMargin,
  minContent,
  hideMobile,
  hideTablet,
  showTablet,
  showMobile,
  blockTablet,
  overflow,
  absolute,
  top,
  right,
  bottom,
  left,
  fullHeight,
}) => {
  return (
    <div
      className={className}
      id={id}
      data-testid={id}
      css={styles}
      style={{ top: top, right: right, bottom: bottom, left: left }}
      maxWidth={maxWidth}
      minWidth={minWidth}
      gap={gap}
      mgap={mgap}
      space={space}
      mspace={mspace}
      borderColor={borderColor}
      borderVertical={borderVertical}
      borderHorizontal={borderHorizontal}
      borderRadius={borderRadius}
      flex={flex}
      alignItems={alignItems}
      mAlignItems={mAlignItems}
      justifyContent={justifyContent}
      mJustifyContent={mJustifyContent}
      alignContent={alignContent}
      mAlignContent={mAlignContent}
      direction={direction}
      mDirection={mDirection}
      wrap={wrap}
      centered={centered}
      leftAligned={leftAligned}
      rightAligned={rightAligned}
      isVisible={isVisible}
      fullWidthMobile={fullWidthMobile}
      maxContent={maxContent}
      minContent={minContent}
      hideMobile={hideMobile}
      negativeMargin={negativeMargin}
      showTablet={showTablet}
      showMobile={showMobile}
      hideTablet={hideTablet}
      blockTablet={blockTablet}
      overflow={overflow}
      absolute={absolute}
      fullHeight={fullHeight}
    >
      {children}
    </div>
  )
}

Container.displayName = 'Container'

Container.propTypes = {
  /** Container's id */
  id: PropTypes.string,
  /** Container's children */
  children: PropTypes.node.isRequired,
  /** Container's Padding */
  space: PropTypes.oneOf(options.spaces),
  /** Container's Padding for mobile*/
  mspace: PropTypes.oneOf(options.spaces),
  /** Container's Border Radius */
  borderRadius: PropTypes.oneOf(options.borderRadiuses),
  /** Container's Border Color */
  borderColor: PropTypes.oneOf(options.borderColors),
  /** Set maxWidth of the container */
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** The space Between containers */
  gap: PropTypes.string,
  /** The space Between containers for mobile*/
  mgap: PropTypes.string,
  /** Set minWidth of the container */
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. */
  alignItems: PropTypes.oneOf(options.alignItems),
  /** Align Items form mobile */
  mAlignItems: PropTypes.oneOf(options.alignItems),
  /** The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container. */
  justifyContent: PropTypes.oneOf(options.justifyContent),
  /** Justify Content form mobile */
  mJustifyContent: PropTypes.oneOf(options.justifyContent),
  /** The CSS align-content property sets the distribution of space between and around content items along a flexbox's cross-axis */
  alignContent: PropTypes.oneOf(options.alignContent),
  /** Align Content for mobile */
  mAlignContent: PropTypes.oneOf(options.alignContent),
  /** The flex-direction CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed). */
  direction: PropTypes.oneOf(options.direction),
  /** Flex direction for mobile */
  mDirection: PropTypes.oneOf(options.direction),
  /** The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked. */
  wrap: PropTypes.oneOf(options.wrap),
  /** Container's overflow */
  overflow: PropTypes.oneOf(options.overflow),
  /** To add style */
  className: PropTypes.string,
  /** Container Flexbox */
  flex: PropTypes.bool,
  /** Center Container */
  centered: PropTypes.bool,
  /** Left Aligned Container */
  leftAligned: PropTypes.bool,
  /** Right Aligned Container */
  rightAligned: PropTypes.bool,
  /** This Boolean attribute add border to see it on Storybook */
  isVisible: PropTypes.bool,
  /** 100% width when mobile*/
  fullWidthMobile: PropTypes.bool,
  /** Add border top and bottom */
  borderVertical: PropTypes.bool,
  /** Add border left and right */
  borderHorizontal: PropTypes.bool,
  /** Min Width Max Contentt */
  maxContent: PropTypes.bool,
  minContent: PropTypes.bool,
  /** Hide for mobile resolution */
  hideMobile: PropTypes.bool,
  /** Adds negative Margin*/
  negativeMargin: PropTypes.bool,
  /** Hide for tablet resolution */
  hideTablet: PropTypes.bool,
  /** Shpw for tablet resolution */
  showTablet: PropTypes.bool,
  /** Shpw for mobile resolution */
  showMobile: PropTypes.bool,
  /** Display block for Tablet Resolution */
  blockTablet: PropTypes.bool,
  /** Adds position absolute */
  absolute: PropTypes.bool,
  /** Top position in px */
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Right position in px */
  right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Bottom position in px */
  bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Left position in px */
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Makes container 100% height */
  fullHeight: PropTypes.bool,
}

Container.defaultProps = {}

export default Container
