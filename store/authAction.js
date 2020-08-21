export const COUNTRY = 'COUNTRY';
export const PHONE = 'PHONE'

export const country = (country) => ({
    type: COUNTRY,
    country
})

export const phone = (phone) => ({
    type: PHONE,
    phone
})
