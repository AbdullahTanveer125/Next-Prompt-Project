// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;




// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     experimental: {
//         appDir: true,
//         serverComponentsExternalPackages: ["mongoose"],
//     },
//     images: {
//         domains: ['lh3.googleusercontent.com'],
//     },
//     webpack(config) {
//         config.experiments = {
//             ...config.experiments,
//             topLevelAwait: true,
//         }
//         return config
//     }
// }

// export default nextConfig








// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     serverExternalPackages: ["mongoose"], // ✅ Corrected
//     images: {
//         domains: ['lh3.googleusercontent.com'],
//     },
//     webpack(config) {
//         config.experiments = {
//             ...config.experiments,
//             topLevelAwait: true,
//         }
//         return config
//     }
// }

// export default nextConfig;

















/** @type {import('next').NextConfig} */
const nextConfig = {
    serverExternalPackages: ["mongoose"],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    webpack(config) {
        config.experiments = {
            ...config.experiments,
            topLevelAwait: true,
        };
        return config;
    }
};

export default nextConfig;
