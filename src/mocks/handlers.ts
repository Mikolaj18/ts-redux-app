import { rest } from 'msw'

export const handlers = [
    rest.get('http://localhost:3001/transactions', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    "address": "Ullamco et eveniet",
                    "amount": 10,
                    "beneficiary": "John Doe",
                    "account": "39",
                    "date": "2023-11-29 15:12:05",
                    "description": "Sit molestiae volupt",
                    "id": 1
                },
                {
                    "address": "Excepturi quasi culp",
                    "amount": 20,
                    "beneficiary": "Carl Jackson",
                    "account": "36",
                    "date": "2023-11-30 14:36:57",
                    "description": "Id vero eaque ration",
                    "id": 2
                },
            ]),
        )
    }),
]