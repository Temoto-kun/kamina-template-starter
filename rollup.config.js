import scss from 'rollup-plugin-scss'

export default {
    input: 'src/index.js',
    output: {
        name: 'Kamina',
        file: 'docs/bundle.js',
        format: 'iife'
    },
    plugins: [
        scss({
            output: 'docs/bundle.css',
        }),
    ],
}
