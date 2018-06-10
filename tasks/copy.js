module.exports = {
  resource: {
    cwd: 'resource', // set working folder / root to copy
    src: '**/*', // copy all files and subfolders
    dest: 'dist', // destination folder
    expand: true // required when using cwd
  },
  docs: {
    cwd: 'dist', // set working folder / root to copy
    src: '**/*', // copy all files and subfolders
    dest: 'docs/dist', // destination folder
    expand: true // required when using cwd
  },
  examples: {
    cwd: 'dist', // set working folder / root to copy
    src: '*.js', // copy all files and subfolders
    dest: 'docs/dist', // destination folder
    expand: true // required when using cwd
  }
}
