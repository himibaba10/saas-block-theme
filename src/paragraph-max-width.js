import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

const SUPPORTED_BLOCKS = ['core/paragraph', 'core/heading'];
const FILTER_NAMESPACE = 'saas-block-theme/text-max-width';
const DEFAULT_MAX_WIDTH = 2000;

function isSupportedBlock(name) {
  return SUPPORTED_BLOCKS.includes(name);
}

function toMaxWidthCss(maxWidth) {
  const value =
    typeof maxWidth === 'number' ? maxWidth : parseInt(maxWidth, 10);

  if (!Number.isFinite(value)) {
    return `${DEFAULT_MAX_WIDTH}px`;
  }

  return `${value}px`;
}

addFilter(
  'blocks.registerBlockType',
  `${FILTER_NAMESPACE}/attribute`,
  (settings, name) => {
    if (!isSupportedBlock(name)) {
      return settings;
    }

    return {
      ...settings,
      attributes: {
        ...settings.attributes,
        maxWidth: {
          type: 'number',
          default: DEFAULT_MAX_WIDTH,
        },
      },
    };
  },
);

const withMaxWidthControl = createHigherOrderComponent((BlockEdit) => {
  return (props) => {
    if (!isSupportedBlock(props.name)) {
      return <BlockEdit {...props} />;
    }

    const { attributes, setAttributes } = props;
    const maxWidth = attributes.maxWidth ?? DEFAULT_MAX_WIDTH;

    return (
      <Fragment>
        <BlockEdit {...props} />
        <InspectorControls>
          <PanelBody title={__('Max Width', 'saas-block-theme')}>
            <RangeControl
              label={__('Max Width', 'saas-block-theme')}
              value={maxWidth}
              onChange={(value) =>
                setAttributes({ maxWidth: value ?? DEFAULT_MAX_WIDTH })
              }
              min={20}
              max={2000}
              step={1}
              help={__('Pixels (px).', 'saas-block-theme')}
              __next40pxDefaultSize
              __nextHasNoMarginBottom
            />
          </PanelBody>
        </InspectorControls>
      </Fragment>
    );
  };
}, 'withMaxWidthControl');

addFilter(
  'editor.BlockEdit',
  `${FILTER_NAMESPACE}/controls`,
  withMaxWidthControl,
);

const withMaxWidthEditorStyle = createHigherOrderComponent((BlockListBlock) => {
  return (props) => {
    if (!isSupportedBlock(props.name)) {
      return <BlockListBlock {...props} />;
    }

    const wrapperProps = {
      ...props.wrapperProps,
      style: {
        ...props.wrapperProps?.style,
        maxWidth: toMaxWidthCss(props.attributes?.maxWidth),
      },
    };

    return <BlockListBlock {...props} wrapperProps={wrapperProps} />;
  };
}, 'withMaxWidthEditorStyle');

addFilter(
  'editor.BlockListBlock',
  `${FILTER_NAMESPACE}/editor-style`,
  withMaxWidthEditorStyle,
);

addFilter(
  'blocks.getSaveContent.extraProps',
  `${FILTER_NAMESPACE}/save`,
  (extraProps, blockType, attributes) => {
    if (!isSupportedBlock(blockType.name)) {
      return extraProps;
    }

    const existingStyle =
      typeof extraProps.style === 'object' && extraProps.style
        ? extraProps.style
        : {};

    return {
      ...extraProps,
      style: {
        ...existingStyle,
        maxWidth: toMaxWidthCss(attributes.maxWidth),
      },
    };
  },
);
