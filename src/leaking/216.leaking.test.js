// Just adding the line below introduces the leak
const Sentry = require('@sentry/node')

test('leaking', () => {
    const a = 'hello'
})
