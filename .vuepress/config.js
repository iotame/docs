module.exports = {
    title: 'iotame',
    description: 'End user and technical documentation of the iotame smart home management solution',
    themeConfig: {
        repo: 'iotame/iotame',
        nav: [
        ],
        sidebar: [
            ['/', 'Home'],
            '/installation',
            ['/terminology', 'Terminology'],
            {
                title: 'Extension API',
                collapsable: false,
                children: [
                    '/api/getting-started',
                    '/api/frontend',
                    '/api/hooks'
                ]
            },
            '/contributing',
        ]
    }
};
