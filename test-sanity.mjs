// test-sanity.mjs
const PROJECT_ID = 'nn95ygkm'
const TOKEN =
	'skz40tdfWmA2dglE209DLQVTxfKGSTreM8DqX9d6tlaVvIKTDaeAyfVbG8FSk98V7vvZkjmjwgLxztQZyfAPVRtWwFpAFZUE7kr3BqhTeqJ1R6MFwH3pC8FVTXYuqc5yUspuKdv3G9nvHobzUczN6QjbQMhEvXjoRCNloG8qrNndItEhRTES'
const QUERY = encodeURIComponent('*[_type == "newsletter"]{_id, title}')

async function test() {
	const url = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/production?query=${QUERY}`

	const response = await fetch(url, {
		headers: { Authorization: `Bearer ${TOKEN}` }
	})

	const data = await response.json()
	console.log(JSON.stringify(data, null, 2))
}

test()
