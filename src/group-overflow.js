import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

const BLOCK_NAME = 'core/group';
const FILTER_NAMESPACE = 'saas-block-theme/group-overflow';

const OVERFLOW_OPTIONS = [
  {
    label: __('Default', 'saas-block-theme'),
    value: 'default',
  },
  {
    label: __('Hidden', 'saas-block-theme'),
    value: 'hidden',
  },
];

/**
 * Add overflow attribute to the Group block.
 */
addFilter(
  'blocks.registerBlockType',
  `${FILTER_NAMESPACE}/attribute`,
  (settings, name) => {
    if (name !== BLOCK_NAME) {
      return settings;
    }

    return {
      ...settings,
      attributes: {
        ...settings.attributes,
        overflow: {
          type: 'string',
          default: 'default',
        },
      },
    };
  },
);

/**
 * Inspector control for Group overflow.
 */
const withOverflowControl = createHigherOrderComponent((BlockEdit) => {
  return (props) => {
    if (props.name !== BLOCK_NAME) {
      return <BlockEdit {...props} />;
    }

    const { attributes, setAttributes } = props;
    const overflow = attributes.overflow || 'default';

    return (
      <Fragment>
        <BlockEdit {...props} />
        <InspectorControls>
          <PanelBody title={__('Overflow', 'saas-block-theme')}>
            <SelectControl
              label={__('Overflow', 'saas-block-theme')}
              value={overflow}
              options={OVERFLOW_OPTIONS}
              onChange={(value) => setAttributes({ overflow: value })}
              __next40pxDefaultSize
              __nextHasNoMarginBottom
            />
          </PanelBody>
        </InspectorControls>
      </Fragment>
    );
  };
}, 'withOverflowControl');

addFilter(
  'editor.BlockEdit',
  `${FILTER_NAMESPACE}/controls`,
  withOverflowControl,
);

/**
 * Apply overflow:hidden in the editor canvas.
 */
const withOverflowEditorStyle = createHigherOrderComponent((BlockListBlock) => {
  return (props) => {
    if (props.name !== BLOCK_NAME || props.attributes?.overflow !== 'hidden') {
      return <BlockListBlock {...props} />;
    }

    const wrapperProps = {
      ...props.wrapperProps,
      style: {
        ...props.wrapperProps?.style,
        overflow: 'hidden',
      },
    };

    return <BlockListBlock {...props} wrapperProps={wrapperProps} />;
  };
}, 'withOverflowEditorStyle');

addFilter(
  'editor.BlockListBlock',
  `${FILTER_NAMESPACE}/editor-style`,
  withOverflowEditorStyle,
);

/**
 * Persist overflow:hidden on the saved Group markup.
 */
addFilter(
  'blocks.getSaveContent.extraProps',
  `${FILTER_NAMESPACE}/save`,
  (extraProps, blockType, attributes) => {
    if (blockType.name !== BLOCK_NAME || attributes.overflow !== 'hidden') {
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
        overflow: 'hidden',
      },
    };
  },
);
