import '@testing-library/jest-dom';
import { getCards } from './actions/cards';
import { fetchCards } from './api';

test('gets card data', async () => {
    const data = await fetchCards();
    expect(data).toBe(url)
});