import { registerBlockStyle, registerBlockVariation } from '@wordpress/blocks';

const primaryButtonAttributes = {
  className: 'btn-primary',
  backgroundColor: 'primary',
  textColor: 'surface',
  fontSize: 'small',
  style: {
    border: {
      radius: 'var:preset|border-radius|full',
    },
    spacing: {
      padding: {
        top: 'var:preset|spacing|25',
        bottom: 'var:preset|spacing|25',
        left: 'var:preset|spacing|50',
        right: 'var:preset|spacing|50',
      },
    },
  },
  metadata: {
    name: 'Primary Button',
  },
};

registerBlockVariation('core/group', {
  name: 'group-section',
  title: 'Group - Section',
  description: 'A group container wrapped in an HTML <section> tag.',
  icon: 'layout',
  attributes: {
    tagName: 'section',
    className: 'group-section',
    style: {
      spacing: {
        padding: {
          left: 'var:preset|spacing|section',
          right: 'var:preset|spacing|section',
        },
      },
    },
    layout: { type: 'constrained' },
  },
  isActive: ['tagName', 'className'],
  scope: ['inserter', 'transform'],
});

registerBlockVariation('core/paragraph', {
  name: 'before-heading',
  title: 'Before Heading',
  description: 'Small uppercase label that sits above a heading.',
  icon: 'editor-textcolor',
  attributes: {
    className: 'before-heading',
    textColor: 'primary',
    fontSize: 'x-small',
    style: {
      typography: {
        textTransform: 'uppercase',
        fontWeight: '600',
        letterSpacing: 'var(--wp--custom--letter-spacing--before-heading)',
      },
      elements: {
        link: {
          color: {
            text: 'var:preset|color|primary',
          },
        },
      },
    },
    metadata: {
      name: 'Before Heading',
    },
  },
  isActive: (blockAttributes) =>
    blockAttributes.className?.split(/\s+/).includes('before-heading'),
  scope: ['inserter', 'transform', 'block'],
});

registerBlockStyle('core/paragraph', {
  name: 'compact',
  label: 'Compact',
});

registerBlockVariation('core/button', {
  name: 'button-primary',
  title: 'Button - Primary',
  description: 'A primary call-to-action button.',
  icon: 'button',
  attributes: primaryButtonAttributes,
  isDefault: true,
  isActive: (blockAttributes) =>
    blockAttributes.className?.split(/\s+/).includes('btn-primary'),
  scope: ['inserter', 'transform', 'block'],
});

/*
 * core/buttons ignores isDefault on core/button (directInsert).
 * Make Buttons itself default to a primary button child.
 */
registerBlockVariation('core/buttons', {
  name: 'buttons-primary',
  title: 'Buttons',
  isDefault: true,
  innerBlocks: [['core/button', primaryButtonAttributes]],
  scope: ['inserter', 'block'],
});
