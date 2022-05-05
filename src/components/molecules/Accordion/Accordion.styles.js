import { css } from 'styled-components'

import layout from '../../../styles/theme/layout'

export default css`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--color-neutral-00);
  position: relative;
  box-shadow: var(--shadow-sm);
}

  &:first-of-type {
    border-radius: var(--radius-sm) var(--radius-sm) 0 0;
  }

  &:last-of-type {
    border-radius: 0 0 var(--radius-sm) var(--radius-sm);
  }

  &:after {
    content: '';
    width: calc(100% - 64px);
    margin: 0 auto;
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--color-neutral-400);
  }

  &:last-of-type {
    &:after {
      content: none;
    }
  }

  .accordion-toggle {
    padding: var(--spacing-md) var(--spacing-sm);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;

    @media screen and (min-width: ${() => layout.breakpoints.sm}) {
      padding: var(--spacing-md) var(--spacing-lg);
    }

    .accordion-chevron {
      transition: transform var(--transition-timing-easing);

      svg path {
        fill: var(--color-primary-main);
      }
    }

    &.is-open {
      .accordion-chevron {
        transform: rotate(180deg);
      }
    }
  }

  .accordion-content {
    overflow: auto;
    transition: max-height var(--transition-timing-easing);

    > div {
      padding: 0 var(--spacing-lg) var(--spacing-md) var(--spacing-lg);
    }
  }
`
