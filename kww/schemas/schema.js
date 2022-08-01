// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

import item from './item';
import durag from './durag';
import wavecap from './wavecap';
import shampoo from './shampoo';
import brush from './brush';
import creamOil from './creamOil';
import blogContent from './blog';
import order from './order';
import test from './test'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    item, durag, wavecap, shampoo, brush, creamOil, blogContent,order,test
  ]),
})
