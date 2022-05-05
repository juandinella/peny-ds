import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { options } from './constants'
import styles from './Dropdown.styles'
import TextList from '../../atoms/TextList'
import Skeleton from '../../atoms/Skeleton'
import Utils from '../../../utils'

/**
 * Display a dropdown list of items.
 */

const Dropdown = ({
  className,
  id,
  disabled,
  buttonContent,
  textList,
  alignment,
  shouldRender,
  maxHeight,
}) => {
  const wrapperRef = useRef()
  const [active, setActive] = useState('')

  const toggleDropdown = () => {
    setActive(active === '' ? 'is-open' : '')
  }

  const handleClickOutside = (e) => {
    if (wrapperRef.current.contains(e.target)) {
      return
    }
    setActive('')
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <Skeleton
      id={`${id}_skeleton`}
      show={!Utils.emptyValue(shouldRender) && !shouldRender()}
    >
      <nav
        css={styles}
        className={className}
        id={id}
        data-testid={id}
        ref={wrapperRef}
        alignment={alignment}
        maxHeight={maxHeight}
        disabled={disabled}
      >
        <button
          className="dropdown-toggle"
          id={id ? `${id}_toggle` : ''}
          data-testid={id ? `${id}_toggle` : ''}
          onClick={toggleDropdown}
          aria-haspopup="true"
          aria-expanded={active ? 'true' : 'false'}
          aria-label="Dropdown Menu"
        >
          {buttonContent}
        </button>
        {textList && !disabled ? (
          <TextList
            className={`dropdown-menu ${active}`}
            id={id ? `${id}_list` : ''}
            data-testid={id ? `${id}_list` : ''}
            list={textList.map((item, index) => {
              return {
                ...item,
                id: `${id}_list_${index}`,
                onClick: () => {
                  item.onClick()
                  setActive(active === '' ? 'is-open' : '')
                },
              }
            })}
          />
        ) : null}
      </nav>
    </Skeleton>
  )
}

Dropdown.displayName = 'Dropdown'

Dropdown.propTypes = {
  /** Dropdown's id */
  id: PropTypes.string,
  /** To add style */
  className: PropTypes.string,
  /** Alignmnet dropdown menu */
  alignment: PropTypes.oneOf(options.alignments),
  /** Disabled */
  disabled: PropTypes.bool,
  /** Content */
  buttonContent: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Set maxHeight of the dropdown */
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Array of objects for text list */
  textList: PropTypes.arrayOf(
    PropTypes.shape({
      /** Content for the list item. */
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
        .isRequired,
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
}

Dropdown.defaultProps = {
  alignment: 'center',
}

export default Dropdown
