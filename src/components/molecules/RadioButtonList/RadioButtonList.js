import React from 'react'
import PropTypes from 'prop-types'
import RadioButton from '../../atoms/RadioButton'
import styles from './RadioButtonList.styles'

/**
 * List of radio buttons.
 */

const RadioButtonList = ({
  id,
  radioList,
  radioName,
  className,
  horizontal,
  disabled,
  shouldRender,
}) => {
  return (
    <div
      css={styles}
      id={id}
      data-testid={id}
      className={className}
      horizontal={horizontal}
    >
      {radioList.map(({ checked, value, label, id, onChange }) => (
        <RadioButton
          key={id}
          id={id}
          radioName={radioName}
          checked={checked}
          label={label}
          value={value}
          onChange={disabled ? null : onChange}
          shouldRender={shouldRender}
          disabled={disabled}
        />
      ))}
    </div>
  )
}

RadioButtonList.displayName = 'RadioButtonList'

RadioButtonList.propTypes = {
  /** RadioButtonList's array */
  radioList: PropTypes.array,
  /** RadioButtonList's name */
  radioName: PropTypes.string.isRequired,
  /** RadioButtonList's id */
  id: PropTypes.string,
  /** To add style */
  className: PropTypes.string,
  /** Disabled RadioButton */
  disabled: PropTypes.bool,
  /** Horizontal layout (justify-content: space-between) */
  horizontal: PropTypes.bool,
  /**
   * Function that decides if the component should be rendered.
   *
   * @return {boolean} false if component should not be rendered and show skeleton instead. Component renders otherwise.
   */
  shouldRender: PropTypes.func,
}

RadioButtonList.defaultProps = {
  checked: false,
}

export default RadioButtonList
