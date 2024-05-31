import { gql } from '@apollo/client';

export const SEARCH_PRODUCTS = gql`
  query SearchProducts($search: String!) {
    products(search: $search) {
      items {
        id
        name
        image {
          url
        }
        price {
          regularPrice {
            amount {
              value
            }
          }
        }
        rating
      }
    }
  }
`;
