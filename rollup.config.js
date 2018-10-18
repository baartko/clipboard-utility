import buble from 'rollup-plugin-buble'
import { uglify } from 'rollup-plugin-uglify'

const pkg = require('./package.json')

export default {
  input: 'src/index.js',
  plugins: [ buble(), uglify() ],
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: '$clipboard',
      sourcemap: true
    }
  ]
}