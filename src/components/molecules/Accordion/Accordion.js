import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styles from './Accordion.styles'
import Skeleton from '../../atoms/Skeleton'
import Utils from '../../../utils'
import Text from '../../atoms/Text'
import Spacer from '../../layout/Spacer'
import Container from '../../layout/Container'

/**
 * Accordion
 */

const Accordion = ({ id, content, title, shouldRender }) => {
  const [active, setActive] = useState('')
  const [height, setHeight] = useState('0px')

  const contentRef = useRef(null)

  const toggleAccordion = () => {
    setActive(active === '' ? 'is-open' : '')
    setHeight(
      active === 'is-open' ? '0px' : `${contentRef.current.scrollHeight}px`
    )
  }

  return (
    <Skeleton
      id={`${id}_skeleton`}
      show={!Utils.emptyValue(shouldRender) && !shouldRender()}
    >
      <div css={styles} id={id} data-testid={id}>
        <button
          className={`accordion-toggle ${active}`}
          onClick={toggleAccordion}
          aria-expanded={active ? 'true' : 'false'}
          id={`${id}_button`}
          data-testid={`${id}_button`}
        >
          <Container flex alignItems="center" justifyContent="flex-start">
            <Container flex direction="column" alignItems="flex-start">
              <Text size="md" id={`${id}_title`}>
                {title}
              </Text>
            </Container>
          </Container>
          <div className="accordion-chevron">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              role="img"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-labelledby="IconChevronDown-label"
              aria-hidden="true"
              focusable="false"
            >
              <title id="IconChevronDown-label">ChevronDown</title>
              <path d="M13.65 4.643a.5.5 0 01.7.714L8 11.594 1.65 5.357a.5.5 0 01.7-.714L8 10.193l5.65-5.55z"></path>
            </svg>
          </div>
        </button>
        <section
          ref={contentRef}
          style={{ maxHeight: `${height}` }}
          className="accordion-content"
          aria-hidden={active ? 'false' : 'true'}
        >
          <div id={`${id}_content`} data-testid={`${id}_content`}>
            {content}
          </div>
        </section>
      </div>
    </Skeleton>
  )
}
Accordion.displayName = 'Accordion'

Accordion.propTypes = {
  /** Accordion's id */
  id: PropTypes.string,
  /** Accordion's title */
  title: PropTypes.string,
  /** Accordion's content */
  content: PropTypes.node,
  /**
   * Function that decides if the component should be rendered.
   *
   * @return {boolean} false if component should not be rendered and show skeleton instead. Component renders otherwise.
   */
  shouldRender: PropTypes.func,
}

Accordion.defaultProps = {}

export default Accordion
