import React from 'react'
import PropTypes from 'prop-types'
import styles from './RadioButton.styles'
import Skeleton from '../Skeleton'
import Utils from '../../../utils'

/**
 * Provides single user input from a selection of options.
 */

const RadioButton = ({
  checked,
  disabled,
  id,
  radioName,
  label,
  value,
  onChange,
  shouldRender,
}) => {
  return (
    <Skeleton
      id={`${id}_skeleton`}
      show={!Utils.emptyValue(shouldRender) && !shouldRender()}
    >
      <div css={styles} data-testid={id}>
        <input
          type="radio"
          name={radioName}
          id={id}
          onChange={disabled ? null : onChange}
          defaultChecked={checked}
          disabled={disabled}
          value={value}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    </Skeleton>
  )
}

RadioButton.displayName = 'RadioButton'

RadioButton.propTypes = {
  /** RadioButton's id */
  id: PropTypes.string,
  /** RadioButton's value */
  value: PropTypes.string,
  /** This Boolean attribute to display a checked radio button */
  checked: PropTypes.bool,
  /** RadioButton's name */
  radioName: PropTypes.string.isRequired,
  /** RadioButton's label */
  label: PropTypes.string.isRequired,
  /** Callback for RadioButton */
  onChange: PropTypes.func,
  /** Disabled RadioButton */
  disabled: PropTypes.bool,
  /**
   * Function that decides if the component should be rendered.
   *
   * @return {boolean} false if component should not be rendered and show skeleton instead. Component renders otherwise.
   */
  shouldRender: PropTypes.func,
}

RadioButton.defaultProps = {
  checked: false,
}

export default RadioButton
