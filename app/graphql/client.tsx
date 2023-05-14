import { request, GraphQLClient } from 'graphql-request'

export const endpointURL = "https://graphql.contentful.com/content/v1/spaces/92z5df1y1oot/environments/master"
const MY_TOKEN = "trJvgbR18ntRIlTerN53OaY2MbiQ0NdHgmGWw23hXZI"
const access_token = "B4EK_ba6zl8k3V6fuPcFpkzX9Qzjl8deSbIOHkcbUGE"
export function gqlClient( headers: any = {
    Authorization: `Bearer ${MY_TOKEN}`,
    access_token
}) {   
    const client = new GraphQLClient(endpointURL, { headers })
    return client;
}