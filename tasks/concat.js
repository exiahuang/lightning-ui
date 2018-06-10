module.exports = {
  options: {
    banner: '<%= banner %>',
    stripBanners: true
  },
  baisc: {
    src: [
      'src/transition.js',
      'src/alert.js',
      'src/button.js',
      'src/carousel.js',
      'src/collapse.js',
      'src/dropdown.js',
      'src/modal.js',
      'src/tooltip.js',
      'src/popover.js',
      'src/scrollspy.js',
      'src/tab.js',
      'src/affix.js'
    ],
    dest: 'dist/<%= pkg.name %>.js'
  },
  lightning_table: {
    src: [
      'src/extends/lightning-table.js'
    ],
    dest: 'dist/lightning-table.js'
  }
}
