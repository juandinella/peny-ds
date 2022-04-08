import { css } from 'styled-components'

export default css`
  display: flex;
  align-items: center;
  cursor: pointer;

  input[type='radio'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: inline-block;
    width: var(--spacing-sm);
    height: var(--spacing-sm);
    min-width: var(--spacing-sm);
    min-height: var(--spacing-sm);
    padding: var(--spacing-xxxs);
    background-clip: content-box;
    border: 1px solid var(--color-neutral-400);
    border-radius: 50%;
    cursor: pointer;
    position: static;
    transition: background-color 0.15s ease, border-color 0.15s ease;
  }

  input[type='radio']:checked {
    background-color: var(--color-primary-main);
    border-color: var(--color-primary-main);
  }

  label {
    margin-left: var(--spacing-xxs);
    cursor: pointer;
    width: 100%;
    display: inline-flex;
    align-items: center;
  }
`
