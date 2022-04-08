import { css } from 'styled-components'

import layout from '../../../styles/theme/layout'

export default css`
  width: 100%;
  position: relative;
  min-width: 1px;

  ${(props) => {
    const gapColumnMobile = props.mgap && props.mgap.split(' ')[0]

    const gapRowMobile =
      (props.mgap && props.mgap.split(' ')[1]) ||
      (props.mgap && props.mgap.split(' ')[0])

    const gapColumn = props.gap && props.gap.split(' ')[0]

    const gapRow =
      (props.gap && props.gap.split(' ')[1]) ||
      (props.gap && props.gap.split(' ')[0])

    return (
      props.gap &&
      css`
        gap: var(--spacing-${gapColumnMobile ? gapColumnMobile : gapColumn})
          var(--spacing-${gapRowMobile ? gapRowMobile : gapRow});

        @media screen and (min-width: ${() => layout.breakpoints.sm}) {
          gap: var(--spacing-${gapColumn}) var(--spacing-${gapRow});
        }
      `
    )
  }}

  ${(props) =>
    props.hideMobile &&
    css`
      display: none;

      @media screen and (min-width: ${() => layout.breakpoints.sm}) {
        display: inherit;
      }
    `}

  ${(props) =>
    props.fullHeight &&
    css`
      height: 100%;
    `}

  ${(props) =>
    props.negativeMargin &&
    css`
      margin-top: ${(props) => `-${props.maxWidth / 2}px`};
    `}

  ${(props) =>
    props.hideTablet &&
    css`
      display: none;

      @media screen and (min-width: ${() => layout.breakpoints.md}) {
        display: inherit;
      }
    `}

  ${(props) =>
    props.showTablet &&
    css`
      display: inherit;

      @media screen and (min-width: ${() => layout.breakpoints.lg}) {
        display: none;
      }
    `}

  ${(props) =>
    props.showMobile &&
    css`
      display: inherit;

      @media screen and (min-width: ${() => layout.breakpoints.sm}) {
        display: none;
      }
    `}

  ${(props) =>
    props.isVisible &&
    css`
      border: medium dashed;
      border-color: var(--color-primary-main);
      height: 100px;
    `}

  ${(props) =>
    props.maxContent &&
    css`
      min-width: max-content;
    `}

  ${(props) =>
    props.minContent &&
    css`
      max-width: max-content;
    `}

  ${(props) =>
    (props.alignItems ||
      props.justifyContent ||
      props.alignContent ||
      props.direction ||
      props.wrap) &&
    css`
      display: flex;
      flex: 1;
    `}

  ${(props) =>
    props.flex &&
    css`
      display: flex;
      flex: 1;
    `}

  ${(props) =>
    props.space &&
    css`
      padding: var(
        --spacing-${(props) => (props.mspace ? props.mspace : props.space)}
      );

      @media screen and (min-width: ${() => layout.breakpoints.sm}) {
        padding: var(--spacing-${(props) => props.space});
      }
    `}

  ${(props) =>
    props.alignItems &&
    css`
      align-items: ${(props) =>
        props.mAlignItems ? props.mAlignItems : props.alignItems};
      @media screen and (min-width: ${layout.breakpoints.sm}) {
        align-items: ${(props) => props.alignItems};
      }
    `}

  ${(props) =>
    props.justifyContent &&
    css`
      justify-content: ${(props) =>
        props.mJustifyContent ? props.mJustifyContent : props.justifyContent};
      @media screen and (min-width: ${layout.breakpoints.sm}) {
        justify-content: ${(props) => props.justifyContent};
      }
    `}

  ${(props) =>
    props.alignContent &&
    css`
      align-content: ${(props) =>
        props.mAlignContent ? props.mAlignContent : props.alignContent};
      @media screen and (min-width: ${layout.breakpoints.sm}) {
        align-content: ${(props) => props.alignContent};
      }
    `}

  ${(props) =>
    props.direction &&
    css`
      flex-direction: ${(props) =>
        props.mDirection ? props.mDirection : 'column'};
      @media screen and (min-width: ${layout.breakpoints.sm}) {
        flex-direction: ${(props) => props.direction};
      }
    `}

  ${(props) =>
    props.wrap &&
    css`
      flex-wrap: ${(props) => props.wrap};
    `}

  ${(props) =>
    props.overflow &&
    css`
      overflow: ${(props) => props.overflow};
    `}

  ${(props) =>
    props.overflow === 'scroll' &&
    css`
      -ms-overflow-style: none;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }
    `}

  ${(props) =>
    props.borderRadius &&
    css`
      border: 1px solid;
      border-radius: var(--radius-${(props) => props.borderRadius});
    `}

  ${(props) =>
    props.borderColor &&
    css`
      border: 1px solid;
      border-color: var(--color-${(props) => props.borderColor});
    `}

  ${(props) =>
    props.borderVertical &&
    css`
      border-left: 0 none;
      border-right: 0 none;

      & + div {
        margin-top: -1px;
      }
    `}

    ${(props) =>
    props.borderHorizontal &&
    css`
      border-top: 0 none;
      border-bottom: 0 none;
    `}

  ${(props) =>
    props.centered &&
    css`
      margin: 0 auto;
    `}

  ${(props) =>
    props.leftAligned &&
    css`
      margin-right: auto;
    `}

  ${(props) =>
    props.rightAligned &&
    css`
      margin-left: auto;
    `}

  ${(props) =>
    props.minWidth &&
    css`
      min-width: ${`${props.minWidth}px`};
    `}

  ${(props) =>
    props.maxWidth &&
    css`
      max-width: ${(props) => `${props.maxWidth}px`};
    `}

  ${(props) =>
    props.fullWidthMobile &&
    props.maxWidth &&
    css`
      max-width: 100%;

      @media screen and (min-width: ${layout.breakpoints.sm}) {
        max-width: ${(props) => `${props.maxWidth}px`};
      }
    `}

  ${(props) =>
    props.absolute &&
    css`
      position: absolute;
      width: auto;
      z-index: 0;
      pointer-events: none;
    `}

  ${(props) =>
    props.blockTablet &&
    css`
      display: block;

      @media screen and (min-width: ${() => layout.breakpoints.lg}) {
        display: flex;
      }
    `}
`
