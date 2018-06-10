module.exports = {
  options: {
    banner: '<%= banner %>'
  },
  baisc: {
    src: '<%= concat.baisc.dest %>',
    dest: 'dist/<%= pkg.name %>.min.js'
  },
  lightning_table: {
    src: '<%= concat.lightning_table.dest %>',
    dest: 'dist/lightning-table.min.js'
  }
}
