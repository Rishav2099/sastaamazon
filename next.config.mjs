/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname: 'fakestoreapi.com', 
            },
            {
                protocol:'https',
                hostname: 'thecosmiccircus.com'
            }
            ,
            {
                protocol:'https',
                hostname: '4.imimg.com'
            }
            ,
            {
                protocol:'https',
                hostname: 'encrypted-tbn0.gstatic.com'
            }
        ]
    }
};

export default nextConfig;
