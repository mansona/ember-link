'use strict';

const getChannelURL = require('ember-source-channel-url');
const { embroiderSafe, embroiderOptimized } = require('@embroider/test-setup');

module.exports = async function () {
  return {
    usePnpm: true,
    scenarios: [
      {
        name: 'ember-3.28',
        npm: {
          devDependencies: {
            '@ember/test-helpers': '^2.9.3',
            'ember-cli': '^4.12.1',
            'ember-source': '~3.28.0',
            'ember-qunit': '^6.2.0'
          }
        }
      },
      {
        name: 'ember-4.12',
        npm: {
          devDependencies: {
            'ember-source': '~4.12.0'
          }
        }
      },
      {
        name: 'ember-5.4',
        npm: {
          devDependencies: {
            'ember-source': '~5.4.0'
          }
        }
      },
      {
        name: 'ember-5.8',
        npm: {
          devDependencies: {
            'ember-source': '~5.8.0'
          }
        }
      },
      {
        name: 'ember-5.12',
        npm: {
          devDependencies: {
            'ember-source': '~5.12.0'
          }
        }
      },
      {
        name: 'ember-release',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('release')
          }
        }
      },
      {
        name: 'ember-beta',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('beta')
          }
        }
      },
      {
        name: 'ember-canary',
        npm: {
          allowedToFail: true,
          devDependencies: {
            'ember-source': await getChannelURL('canary')
          }
        }
      },
      embroiderSafe(),
      embroiderOptimized()
    ]
  };
};
