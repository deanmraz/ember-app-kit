module.exports = {
  app: {
    src: [
      'app/**/*.js'
    ],
    options: { jshintrc: '.jshintrc' }
  },

  tooling: {
    src: [
      'Gruntfile.js',
      'tasks/**/*.js'
    ],
    options: { jshintrc: __dirname+'/../.jshintrc' }
  },

  tests: {
    src: [
      'tests/**/*.js',
    ],
    options: { jshintrc: __dirname+'/../../tests/.jshintrc' }
  },

  options: {
    force: true
  }
};
