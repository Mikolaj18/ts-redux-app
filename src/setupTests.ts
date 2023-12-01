
import {server} from "./mocks/server";
import '@testing-library/jest-dom';

process.env.DEBUG_PRINT_LIMIT = '15000'

// enable API mocking in test runs using the same request handlers
// as for the client-side mocking.
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())