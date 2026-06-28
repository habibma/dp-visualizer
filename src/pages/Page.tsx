import '../App.css'

const Page1 = () => {
	return (
		<section>
			<h2>Page 1</h2>
			<p>This is the content of Page 1.</p>
		</section>
	)
}

const Page2 = () => {
	return (
		<section>
			<h2>Page 2</h2>
			<p>This is the content of Page 2.</p>
		</section>
	)
}

const renderPage = (page: number) => {
	switch (page) {
		case 0:
			return <Page1 />
		case 1:
			return <Page2 />
		default:
			return <h2>Unknown Page</h2>
	}
}

function Page({ page }: { page: number }) {
	return renderPage(page)
}

export default Page