import { graphql } from '../generated';

export const Ping_time = graphql(`
  subscription Ping_time {
    ping_time {
      iso
      data
    }
  }
`);
