const nextConfig = {
    webpack: (config: { module: { rules: { test: RegExp; use: string | { loader: string; options: { minimize: boolean; }; }[]; }[]; }; }) => {
        config.module.rules.push({
            test: /\.node$/,
            use: 'node-loader',
        });

        // Add rule for .html files
        config.module.rules.push({
            test: /\.html$/,
            use: [
                {
                    loader: 'html-loader',
                    options: {minimize: true},
                },
            ],
        });

        return config;
    },

    async headers() {
        return [
            {
                source: '/api/:path*',
                headers: [
                    {key: 'Access-Control-Allow-Origin', value: '*'}, // Replace '*' with your allowed origin
                    {key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT'},
                    {key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'},
                ],
            },
        ];
    },

    images: {
        domains: ['firebasestorage.googleapis.com', 'beta.kovaad.ai', 'chat.kovaad.ai', 'alpha.kovaad.ai'], // Allow images from Firebase Storage
    },
    swcMinify: true, // Enable SWC minification
};

module.exports = nextConfig;
