/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'www.saunatravel.co.jp',
                    },
                ],
                destination: 'https://saunatravel.co.jp/:path*',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
