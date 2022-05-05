import { css } from 'styled-components'

export default css`
  position: relative;
  height: 100%;

  .dropdown-menu {
    background: var(--color-neutral-00);
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--radius-sm);
    box-shadow: var(--shadow-md);
    padding: var(--spacing-xxs) 0;
    opacity: 0;
    visibility: hidden;
    transition: transform 0.2s, opacity 0.2s, visibility 0s linear 0.2s;
    will-change: transform;
    position: absolute;
    width: max-content;
    margin: var(--spacing-xxs) auto auto;
    z-index: 2;
    list-style: none;

    li {
      padding: var(--spacing-xs) var(--spacing-md);
      margin: 0;
      transition: all var(--transition-timing-easing);
      cursor: pointer;
      color: var(--color-neutral-120);

      &:hover {
        background-color: var(--color-neutral-20);
        color: var(--color-primary-main);

        a {
          color: var(--color-primary-main);
        }
      }

      &:active {
        color: var(--color-primary-dark);

        a {
          color: var(--color-primary-dark);
        }
      }

      a {
        text-decoration: none;
        color: var(--color-neutral-120);
        transition: all var(--transition-timing-easing);
      }
    }

    &.is-open {
      transform: translateY(-0.3rem);
      transition: transform 0.2s, opacity 0.2s, visibility linear;
      visibility: visible;
      opacity: 1;
    }
  }

  ${(props) =>
    props.maxHeight &&
    css`
      .dropdown-menu {
        height: ${(props) => `${props.maxHeight}px`};
        overflow: scroll;
      }
    `}

  .dropdown-toggle {
    min-width: max-content;

    svg {
      display: block;
      margin: 0 auto;
    }
  }

  [aria-expanded='true'] [aria-labelledby='IconKebab-label'] path {
    fill: var(--color-primary-dark);
  }

  [aria-expanded='true'] [aria-labelledby='IconChevronDown-label'] {
    transform: rotate(180deg);
  }

  [aria-labelledby='IconChevronDown-label'] {
    transition: transform 0.225s ease;
  }

  ${(props) =>
    props.alignment === 'left' &&
    css`
      .dropdown-menu {
        left: 0;
      }
    `}

  ${(props) =>
    props.alignment === 'center' &&
    css`
      .dropdown-menu {
        left: 0;
        right: 0;
      }
    `}

  ${(props) =>
    props.alignment === 'right' &&
    css`
      .dropdown-menu {
        right: 0;
      }
    `}

  ${(props) =>
    props.disabled &&
    css`
      button {
        cursor: not-allowed;
      }
    `}
`
