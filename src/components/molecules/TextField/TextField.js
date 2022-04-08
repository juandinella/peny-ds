import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Skeleton from '../../atoms/Skeleton'
import styles from './TextField.styles'
import { options } from './constants'
import Utils from '../../../utils'

/**
 * Input fields let users enter and edit text.
 */

const ErrorSpan = ({ errors }) =>
  Array.isArray(errors) ? (
    errors.forEach((error) => <span>{error}</span>)
  ) : (
    <span className="input-feedback">{errors}</span>
  )

const Input = ({ textarea, ...props }) =>
  textarea ? <textarea {...props} /> : <input {...props} />

const TextField = ({
  type,
  value,
  name,
  isInline,
  onChange,
  onKeyDown,
  label,
  id,
  error,
  persistentError,
  icon,
  disabled,
  maxLength,
  pattern,
  children,
  shouldRender,
  placeholder,
  color,
  size,
  inputIcon,
  textarea,
}) => {
  const [touched, setTouched] = useState(false)
  const [focus, setFocus] = useState(false)

  const checkErrorFocus = () => (persistentError ? true : !focus)
  const checkErrorTouched = () => (persistentError ? true : touched)

  const inputChange = (e) => {
    if (pattern) {
      const regex = new RegExp(pattern)
      e.target.value = e.target.value.replace(regex, '')
    }
    if (onChange) onChange(e)
  }

  // Sets touched on first render if value is not empty
  useEffect(() => {
    if (!Utils.emptyValue(value)) setTouched(true)
  }, [])

  let className = ''

  if (checkErrorFocus()) {
    if (error && error.length > 0 && checkErrorTouched()) {
      className = 'error'
    } else {
      if (!Utils.emptyValue(value)) {
        className = 'success'
      }
    }
  }

  return (
    <Skeleton
      id={`${id}_skeleton`}
      show={!Utils.emptyValue(shouldRender) && !shouldRender()}
    >
      <div
        css={styles}
        className={className}
        isInline={isInline}
        size={size}
        color={color}
        inputIcon={inputIcon}
      >
        {label ? <label htmlFor={id}>{label}</label> : null}
        <Input
          textarea={textarea}
          type={type}
          value={value}
          name={name}
          maxLength={maxLength}
          id={id}
          data-testid={id}
          disabled={disabled}
          onChange={inputChange}
          placeholder={placeholder}
          onFocus={() => {
            setTouched(true)
            setFocus(true)
          }}
          onBlur={() => setFocus(false)}
          onKeyDown={onKeyDown}
        />
        {checkErrorFocus() &&
        checkErrorTouched() &&
        error &&
        error.length > 0 ? (
          <ErrorSpan errors={error} />
        ) : null}
        {checkErrorFocus() && !Utils.emptyValue(value) && icon ? (
          <span className="input-icon">
            {error && error.length > 0 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#dc2626"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x-circle"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#22c55e"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-check-circle"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            )}
          </span>
        ) : null}

        {children}
      </div>
    </Skeleton>
  )
}

TextField.displayName = 'TextField'

TextField.propTypes = {
  /** Function triggered on input change */
  onChange: PropTypes.func.isRequired,
  /** Function on key down */
  onKeyDown: PropTypes.func,
  /** Types of the input */
  type: PropTypes.oneOf(options.types),
  /** Input value */
  value: PropTypes.string,
  /** Input name */
  name: PropTypes.string,
  /** Specifies a Unique id to the element */
  id: PropTypes.string,
  /** Input label */
  label: PropTypes.string,
  /** This Boolean attribute to display an inline input */
  isInline: PropTypes.bool,
  /** Input Size */
  size: PropTypes.oneOf(options.sizes),
  /** Input Text Color */
  color: PropTypes.oneOf(options.colors),
  /** Input's placeholder.*/
  placeholder: PropTypes.string,
  /** This Boolean attribute prevents the user from interacting with the input */
  disabled: PropTypes.bool,
  /** String or array of strings to show if input value is wrong */
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  /** Boolean attribute to display a success or error icon */
  icon: PropTypes.bool,
  /** Icon to display over the input */
  inputIcon: PropTypes.node,
  /**
   * Function that decides if the component should be rendered.
   *
   * @return {boolean} false if component should not be rendered and show skeleton instead. Component renders otherwise.
   */
  shouldRender: PropTypes.func,
  /** Input maxlenght*/
  maxLength: PropTypes.number,
  /* Whether input error should be shown always */
  persistentError: PropTypes.bool,
  /* Regex for input */
  pattern: PropTypes.string,
  /* Textarea */
  textarea: PropTypes.bool,
}

TextField.defaultProps = {
  type: 'text',
  value: '',
  name: '',
  label: '',
  id: '',
  placeholder: ' ',
  size: 'sm',
  color: 'neutral-900',
  isInline: false,
  onChange: () => null,
}

export default TextField
