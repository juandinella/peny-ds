import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.styles'
import { options } from './constants'
import Skeleton from '../Skeleton'
import Utils from '../../../utils'

/**
 * Used to trigger an operation.
 */

const Button = ({
  id,
  variant,
  disabled,
  onClick,
  isInline,
  type,
  children,
  href,
  active,
  fullWidthMobile,
  maxWidth,
  smallMobile,
  shouldRender,
  hideMobile,
  hideTablet,
}) => {
  const tag = typeof href === 'string' ? 'a' : 'button'

  return (
    <Skeleton
      id={`${id}_skeleton`}
      show={!Utils.emptyValue(shouldRender) && !shouldRender()}
    >
      <button
        id={id}
        data-testid={id}
        css={styles}
        variant={variant}
        disabled={disabled}
        onClick={onClick || null}
        isInline={isInline}
        type={type}
        as={tag}
        href={href}
        style={{ maxWidth: maxWidth }}
        active={active}
      >
        {children}
      </button>
    </Skeleton>
  )
}

Button.displayName = 'Button'

Button.propTypes = {
  /** Button's id */
  id: PropTypes.string,
  /** Content to be included in the button */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** This Boolean attribute prevents the user from interacting with the button */
  disabled: PropTypes.bool,
  /** Click event */
  onClick: PropTypes.func,
  /** This Boolean attribute to display an inline button */
  isInline: PropTypes.bool,
  /** Types of the Button */
  type: PropTypes.oneOf(options.types),
  /** Variatons of the buttons */
  variant: PropTypes.oneOf(options.variants),
  /** Button will render as <a> if there's href */
  href: PropTypes.string,
  active: PropTypes.bool,
  /** Set maxWidth of the button */
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Function that decides if the component should be rendered.
   *
   * @return {boolean} false if component should not be rendered and show skeleton instead. Component renders otherwise.
   */
  shouldRender: PropTypes.func,
}

Button.defaultProps = {
  variant: 'primary',
  onClick: () => null,
  isInline: false,
  disabled: false,
}

export default Button
