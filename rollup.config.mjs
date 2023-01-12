import typescript from 'rollup-plugin-typescript2';

export default {
    input: 'reconnecting-websocket.ts',
    plugins: [
        typescript({
            tsconfigOverride: {
                exclude: ['**/__tests__', '**/*.test.ts'],
            },
        }),
    ],
    output: [
        {
            file: 'dist/reconnecting-websocket-iife.js',
            format: 'iife',
            name: 'ReconnectingWebSocket',
        },
        {
            file: 'dist/reconnecting-websocket-amd.js',
            format: 'amd',
            name: 'ReconnectingWebSocket',
        },
        {
            file: 'dist/reconnecting-websocket-cjs.js',
            format: 'cjs',
        },
        {
            file: 'dist/reconnecting-websocket.mjs',
            format: 'es',
        },
        {
            file: 'dist/reconnecting-websocket-mjs.js',
            format: 'es',
        },
    ],
};
