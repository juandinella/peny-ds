import { css } from 'styled-components'

import layout from '../../../styles/theme/layout'

export default css`
  width: 100%;
  position: relative;

  ${(props) =>
    props.isInline &&
    css`
      max-width: max-content;
    `}

  label {
    color: var(--color-neutral-600);
    display: block;
    margin-bottom: var(--spacing-xxs);
  }

  textarea {
    height: 120px;
    max-height: 120px;
    resize: none;
  }

  input,
  textarea {
    width: 100%;
    border: 0 none;
    border: 1px solid var(--color-neutral-600);
    font-size: var(--font-sm);
    transition: border-color var(--transition-timing-easing);
    padding: var(--spacing-xxs);
    box-sizing: border-box;
    border-radius: var(--radius-sm);

    &:disabled {
      background-color: inherit;
      border-color: var(--color-neutral-200);
      cursor: not-allowed;
      color: var(--color-neutral-200);
    }

    &:disabled + label {
      color: var(--color-neutral-200);
    }

    &:focus {
      outline: none;
      border-color: var(--color-primary-main);

      + label {
        font-size: var(--font-xxs);
        color: var(--color-primary-main);
      }
    }
  }

  .input-icon {
    position: absolute;
    right: var(--spacing-xs);
    top: 33px;

    svg {
      display: block;
    }
  }

  .input-feedback {
    margin-right: auto;
    font-size: var(--font-xs);
    color: var(--color-alert-error);
    margin-top: var(--spacing-xxxs);
  }

  ${(props) =>
    props.className === 'success' &&
    css`
      input,
      textarea {
        border: 1px solid var(--color-alert-success);
      }
    `}

  ${(props) =>
    props.className === 'error' &&
    css`
      input,
      textarea {
        border: 1px solid var(--color-alert-error);
      }
      input:focus,
      textarea:focus {
        border: 1px solid var(--color-alert-error);
      }
    `}


  ${(props) =>
    props.size &&
    css`
      input {
        font-size: var(--font-${(props) => props.size});
      }
    `}


  ${(props) =>
    props.size === 'md' &&
    css`
      input {
        &:focus {
          + label {
            font-size: var(--font-sm);
          }
        }

        &:not(:placeholder-shown) {
          + label {
            font-size: var(--font-sm);
          }
        }
      }
    `}

  ${(props) =>
    (props.size === 'xl' || props.size === 'xxl') &&
    css`
      input {
        font-size: var(--font-lg);

        @media screen and (min-width: ${() => layout.breakpoints.sm}) {
          font-size: var(--font-${(props) => props.size});
        }
      }
    `}

  ${(props) =>
    props.color &&
    css`
      input {
        color: var(--color-${(props) => props.color});
      }
    `}
`
