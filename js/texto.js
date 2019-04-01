"purchase_units": [
    {
        "reference_id: "store_mobile_world_order_1234",
        "description": "Mobile World Store order-1234",
        "amount": {
            "currency": "USD",
            "details": {
                "subtotal": "1.09",
                "shipping": "0.02",
                "tax": "0.33"
            },
            "total": "1.44"
        },
        "payee": {
            "email": "seller@example.com"
        },
        "items": [
            {
                "name": "NeoPhone",
                "sku": "sku03",
                "price": "0.54",
                "currency": "USD",
                "quantity": "1"
            },
            {
                "name": "Fitness Watch",
                "sku": "sku04",
                "price": "0.55",
                "currency": "USD",
                "quantity": "1"
            }
        ],
        "shipping_address": {
            "line1": "2211 N First Street",
            "line2": "Building 17",
            "city": "San Jose",
            "country_code": "US",
            "postal_code": "95131",
            "state": "CA",
            "phone": "(123) 456-7890"
        },
        "shipping_method": "United Postal Service",
        "partner_fee_details": {
            "receiver": {
                "email": "partner@example.com"
            },
            "amount": {
                "value": "0.01",
                "currency": "USD"
            }
        },
        "payment_linked_group": 1,
        "custom": "custom_value_2388",
        "invoice_number": "invoice_number_2388",
        "payment_descriptor": "Payment Mobile World"
    }
],
    "redirect_urls": {
    "return_url": "https://example.com/return",
        "cancel_url": "https://example.com/cancel"
}
}'