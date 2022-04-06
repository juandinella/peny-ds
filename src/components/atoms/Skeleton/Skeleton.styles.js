import { css } from 'styled-components'

export default css`
  position: relative;
  min-height: 20px;
  display: block;

  &:before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    bottom: 0;
    z-index: 5;
    height: calc(100% + 2px);
    width: calc(100% + 2px);
    border-radius: var(--radius-sm);
    background-image: linear-gradient(
      270deg,
      var(--color-neutral-00),
      var(--color-neutral-200),
      var(--color-neutral-200),
      var(--color-neutral-00)
    );
    background-size: 400% 100%;
    animation: skeletonShine 8s ease-in-out infinite;
  }

  @keyframes skeletonShine {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  ${(props) =>
    props.squared &&
    css`
      border-radius: 0;
    `}

  ${(props) =>
    props.rounded &&
    css`
      border-radius: 100%;
    `}

  &.hasWidth {
    min-height: 24px;
    border-radius: var(--radius-sm);
    background-image: linear-gradient(
      270deg,
      var(--color-neutral-00),
      var(--color-neutral-200),
      var(--color-neutral-200),
      var(--color-neutral-00)
    );
    background-size: 400% 100%;
    animation: skeletonShine 8s ease-in-out infinite;

    &:before {
      content: none;
    }

    ${(props) =>
      props.squared &&
      css`
        border-radius: 0;
      `}

    ${(props) =>
      props.rounded &&
      css`
        border-radius: 100%;
      `}
  }
`
