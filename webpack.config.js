module.exports = {
    entry: './src/frontend/index.js',
    output: {
        path: __dirname + '/src/frontend/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { 
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader'
                  }
                ]
              }
    
        ]
    }
};