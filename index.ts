country_code: schema.string().refine(
    (value, context) => {
        if (context.parent.customer_type === 'foreigner') {
            return value.length > 0;
        }
        return true;
    },
    {
        message: 'Country code is required for foreigners.',
    }
);
