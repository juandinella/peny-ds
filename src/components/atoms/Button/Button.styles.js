import { css } from 'styled-components'

import layout from '../../../styles/theme/layout'

export default css`
  display: inline-flex;
  width: 100%;
  min-width: max-content;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--color-neutral-00);
  padding: var(--spacing-xxs) var(--spacing-md);
  border-radius: var(--radius-lg);
  border: 1px solid transparent;
  position: relative;
  font-weight: var(--f-medium);
  text-decoration: none;

  @media screen and (min-width: ${() => layout.breakpoints.xs}) {
    padding: var(--spacing-xs) var(--spacing-md);
  }

  &:active {
    outline: 0 none;
    box-shadow: none;
  }

  &:focus {
    outline: 0 none;
    box-shadow: 0px 0px 3px 1px rgba(118, 6, 255, 0.4);
  }

  &:disabled {
    cursor: not-allowed;
    background: var(--color-neutral-100);
    color: var(--color-neutral-00);

    &:hover {
      background-color: var(--color-neutral-100);
      color: var(--color-neutral-00);
    }
  }

  ${(props) =>
    props.variant === 'primary' &&
    css`
      background-color: var(--color-primary-main);

      &:hover {
        background-color: var(--color-primary-dark);
      }

      &:active {
        transform: scale(0.98);
      }
    `}

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background-color: var(--color-primary-light);
      color: var(--color-primary-main);

      &:hover {
        background-color: var(--color-light-40);
      }

      &:active {
        transform: scale(0.98);
      }

      &:disabled {
        background: var(--color-neutral-80);

        &:hover {
          background-color: var(--color-neutral-80);
        }
      }
    `}

  ${(props) =>
    props.variant === 'black' &&
    css`
      background-color: var(--color-neutral-120);
      color: var(--color-neutral-00);

      &:hover {
        background-color: var(--color-neutral-100);
      }

      &:active {
        transform: scale(0.98);
      }

      &:focus {
        box-shadow: 0px 0px 3px 1px rgba(36, 36, 36, 0.4);
      }

      &:disabled {
        background: var(--color-neutral-80);

        &:hover {
          background-color: var(--color-neutral-80);
        }
      }
    `}

  ${(props) =>
    props.variant === 'white' &&
    css`
      background-color: var(--color-neutral-00);
      color: var(--color-primary-dark);

      &:hover {
        background-color: var(--color-primary-light);
      }

      &:active {
        transform: scale(0.98);
      }

      &:focus {
        box-shadow: 0px 0px 3px 1px rgba(36, 36, 36, 0.4);
      }

      &:disabled {
        background: var(--color-neutral-80);

        &:hover {
          background-color: var(--color-neutral-80);
        }
      }
    `}

  ${(props) =>
    props.variant === 'tertiary' &&
    css`
      border-radius: 0;
      padding: 0;
      color: var(--color-primary-main);
      background-color: transparent;
      max-width: max-content;

      &:hover {
        background-color: transparent !important;
        color: var(--color-primary-dark);
      }

      &:active {
        color: var(--color-primary-dark);
      }

      &:disabled {
        background: transparent;
        color: var(--color-neutral-80);

        &:hover {
          color: var(--color-neutral-80);
        }
      }

      &:focus {
        box-shadow: none;
      }
    `}

  ${(props) =>
    props.variant === 'ghost' &&
    css`
      border: 2px solid var(--color-primary-main);
      color: var(--color-primary-main);
      background-color: transparent;

      &:hover {
        border-color: var(--color-primary-dark);
        color: var(--color-primary-dark);
      }

      &:active {
        transform: scale(0.98);
      }
    `}

  ${(props) =>
    props.variant === 'ghost-white' &&
    css`
      border: 2px solid var(--color-neutral-00);
      color: var(--color-neutral-00);
      background-color: transparent;

      &:hover {
        border-color: var(--color-primary-light);
        color: var(--color-primary-light);
      }
      &:active {
        transform: scale(0.98);
      }
    `}

  ${(props) =>
    props.variant === 'dashed' &&
    css`
      justify-content: center;
      color: var(--color-primary-main);
      padding: var(--spacing-sm);
      background-color: var(--color-neutral-00);
      border-radius: var(--radius-sm);
      border: 1px dashed var(--color-neutral-80);

      @media screen and (min-width: ${() => layout.breakpoints.xs}) {
        justify-content: flex-start;
      }

      svg {
        margin-right: var(--spacing-sm);

        path {
          transition: fill var(--transition-timing-easing);
        }
      }

      &:hover {
        color: var(--color-primary-dark);
        background-color: var(--color-neutral-00);
        border-color: var(--color-neutral-100);

        svg path {
          fill: var(--color-primary-dark);
        }
      }

      &:active,
      &:focus {
        outline: 0 none;
        box-shadow: none;
        transform: none;
      }
    `}


  ${(props) =>
    props.variant === 'filter' &&
    css`
      background-color: var(--color-neutral-00);
      color: var(--color-neutral-120);
      padding: var(--spacing-xs);
      box-shadow: var(--shadow-sm);
      border-radius: var(--radius-xs);

      &:hover {
        background-color: var(--color-primary-light);
        color: var(--color-primary-main);

        svg path {
          fill: var(--color-primary-main);
        }
      }

      &:active {
        transform: none;
        background-color: var(--color-primary-light);
        color: var(--color-primary-main);

        svg path {
          fill: var(--color-primary-main);
        }
      }

      &:focus {
        box-shadow: var(--shadow-sm);
      }

      &:disabled {
        background: var(--color-neutral-80);

        &:hover {
          background-color: var(--color-neutral-80);
        }
      }
    `}

  ${(props) =>
    props.variant === 'filter' &&
    props.active &&
    css`
      background-color: var(--color-primary-light);
      color: var(--color-primary-main);

      svg path {
        fill: var(--color-primary-main);
      }
    `}

  ${(props) =>
    props.variant === 'plain' &&
    css`
      justify-content: center;
      padding: 0;

      @media screen and (min-width: ${() => layout.breakpoints.xs}) {
        padding: 0;
      }

      &:active,
      &:focus {
        outline: 0 none;
        box-shadow: none;
        transform: none;
      }
    `}

  ${(props) =>
    props.isInline &&
    css`
      min-width: 168px;
      max-width: max-content;
    `}

  ${(props) =>
    props.fullWidthMobile &&
    props.isInline &&
    css`
      min-width: 100%;
      max-width: 100%;
      @media screen and (min-width: ${() => layout.breakpoints.xs}) {
        min-width: 168px;
        max-width: max-content;
      }
    `}

  ${(props) =>
    props.smallMobile &&
    css`
      font-size: 12px;
      min-width: auto;
      padding: var(--spacing-xxs) var(--spacing-xs);

      @media screen and (min-width: ${() => layout.breakpoints.xs}) {
        font-size: inherit;
        padding: var(--spacing-xs) var(--spacing-md);
        min-width: 168px;
        max-width: max-content;
      }
    `}

  ${(props) =>
    props.hideMobile &&
    css`
      display: none;

      @media screen and (min-width: ${() => layout.breakpoints.sm}) {
        display: inherit;
      }
    `}

    ${(props) =>
    props.hideTablet &&
    css`
      display: none;

      @media screen and (min-width: ${() => layout.breakpoints.md}) {
        display: inherit;
      }
    `}
`
