module.exports = {
  apps: [
    {
      name: 'vue_admin',
      script: './server.js',
      cwd: './', // 当前工作空间
      watch: [
        // 启动的时候监听文件夹内容的改变
        'build',
        'dist'
      ],
      ignore_watch: [
        // 忽略监听的文件夹
        'node_modules',
        'logs',
      ],
      instances: 1,  // start 2 instances
      node_args: '--harmony',
      env: {
        NODE_ENV: 'production',
        PORT: 3763,
        DOMAIN: 'https://admin.soscoon.com'
      },
      out_file: './logs/out.log', // normal log
      error_file: './logs/err.log', // error log
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm Z' // date format
    }
  ]
};
